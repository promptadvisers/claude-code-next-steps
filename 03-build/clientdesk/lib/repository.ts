import "server-only";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import type { Workspace } from "./domain";
import { DomainError, mutate } from "./domain";
import { seedWorkspace } from "./seed";
import fs from "node:fs";
import path from "node:path";
type Connection =
  | {
      kind: "supabase";
      client: ReturnType<typeof createServerClient>;
      id: string;
    }
  | { kind: "local"; id: string };
export async function connection(): Promise<Connection> {
  const jar = await cookies();
  const url = process.env.SUPABASE_URL,
    key = process.env.SUPABASE_ANON_KEY;
  if (url && key) {
    const client = createServerClient(url, key, {
      cookieOptions: {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      },
      cookies: {
        getAll: () => jar.getAll(),
        setAll: (values) =>
          values.forEach(({ name, value, options }) =>
            jar.set(name, value, options),
          ),
      },
    });
    let {
      data: { user },
    } = await client.auth.getUser();
    if (!user) {
      const res = await client.auth.signInAnonymously();
      if (res.error || !res.data.user)
        throw new Error(
          "The practice workspace could not be opened. Please try again.",
        );
      user = res.data.user;
    }
    return { kind: "supabase", client, id: user.id };
  }
  if (process.env.VERCEL)
    throw new Error(
      "Hosted storage is not configured. Set up the database before using this deployment.",
    );
  let id = jar.get("clientdesk-local")?.value;
  if (!id || !/^[a-f0-9-]{36}$/.test(id)) {
    id = crypto.randomUUID();
    jar.set("clientdesk-local", id, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 86400 * 30,
    });
  }
  return { kind: "local", id };
}
async function db() {
  const { DatabaseSync } = await import("node:sqlite");
  const dir = path.join(process.cwd(), ".data");
  fs.mkdirSync(dir, { recursive: true });
  const db = new DatabaseSync(path.join(dir, "clientdesk.sqlite"));
  db.exec(
    "PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; CREATE TABLE IF NOT EXISTS workspaces(id TEXT PRIMARY KEY, data TEXT NOT NULL, version INTEGER NOT NULL DEFAULT 1)",
  );
  return db;
}
export async function readWorkspace(
  conn: Connection,
): Promise<{ data: Workspace; version: number }> {
  if (conn.kind === "supabase") {
    let { data, error } = await conn.client
      .from("workspaces")
      .select("data,version")
      .eq("owner_id", conn.id)
      .maybeSingle();
    if (error) throw new Error("Could not load the workspace.");
    if (!data) {
      let seed = seedWorkspace();
      if (!process.env.VERCEL) {
        const legacy = (await cookies()).get("clientdesk-local")?.value;
        if (legacy) {
          const local = await db();
          try {
            const row = local
              .prepare("SELECT data FROM workspaces WHERE id=?")
              .get(legacy) as { data: string } | undefined;
            if (row) seed = JSON.parse(row.data);
          } finally {
            local.close();
          }
        }
      }
      const insert = await conn.client
        .from("workspaces")
        .insert({ owner_id: conn.id, data: seed, version: 1 })
        .select("data,version")
        .single();
      if (insert.error) {
        const retry = await conn.client
          .from("workspaces")
          .select("data,version")
          .eq("owner_id", conn.id)
          .single();
        if (retry.error)
          throw new Error("Could not create the practice workspace.");
        data = retry.data;
      } else data = insert.data;
    }
    return { data: data!.data as Workspace, version: data!.version };
  }
  const d = await db();
  try {
    d.prepare("INSERT OR IGNORE INTO workspaces(id,data) VALUES(?,?)").run(
      conn.id,
      JSON.stringify(seedWorkspace()),
    );
    const row = d
      .prepare("SELECT data,version FROM workspaces WHERE id=?")
      .get(conn.id) as { data: string; version: number };
    return { data: JSON.parse(row.data), version: row.version };
  } finally {
    d.close();
  }
}
export async function changeWorkspace(
  conn: Connection,
  action: string,
  payload: unknown,
) {
  if (conn.kind === "local") {
    await readWorkspace(conn);
    const d = await db();
    try {
      d.exec("BEGIN IMMEDIATE");
      const row = d
        .prepare("SELECT data,version FROM workspaces WHERE id=?")
        .get(conn.id) as { data: string; version: number };
      const next = mutate(JSON.parse(row.data), action, payload);
      d.prepare(
        "UPDATE workspaces SET data=?,version=version+1 WHERE id=?",
      ).run(JSON.stringify(next.data), conn.id);
      d.exec("COMMIT");
      return next;
    } catch (e) {
      try {
        d.exec("ROLLBACK");
      } catch {}
      throw e;
    } finally {
      d.close();
    }
  }
  for (let attempt = 0; attempt < 4; attempt++) {
    const current = await readWorkspace(conn);
    const next = mutate(current.data, action, payload);
    const r = await conn.client
      .from("workspaces")
      .update({ data: next.data, version: current.version + 1 })
      .eq("owner_id", conn.id)
      .eq("version", current.version)
      .select("version");
    if (r.error)
      throw new Error(
        "Could not save your changes. Your draft is still available.",
      );
    if (r.data?.length) return next;
  }
  throw new DomainError(
    "This workspace changed in another tab. Please try saving again.",
    409,
  );
}
