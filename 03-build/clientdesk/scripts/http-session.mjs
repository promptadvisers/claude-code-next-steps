import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
const origin = process.env.CLIENTDESK_URL || "http://127.0.0.1:4310";
const sessionPath =
  process.env.CLIENTDESK_SESSION_FILE ||
  path.join(
    os.homedir(),
    ".config/clientdesk-course",
    new URL(origin).host.replace(/[^a-zA-Z0-9.-]/g, "_") + "-session.json",
  );
export async function requestWorkspace(action, payload, query = "") {
  let jar = {};
  try {
    jar = JSON.parse(await fs.readFile(sessionPath, "utf8"));
  } catch {}
  const headers = { Origin: origin };
  if (Object.keys(jar).length)
    headers.Cookie = Object.entries(jar)
      .map(([k, v]) => `${k}=${v}`)
      .join("; ");
  if (action) headers["Content-Type"] = "application/json";
  const r = await fetch(origin + "/api/workspace" + query, {
    method: action ? "POST" : "GET",
    headers,
    body: action ? JSON.stringify({ action, payload }) : undefined,
  });
  for (const raw of r.headers.getSetCookie()) {
    const pair = raw.split(";")[0],
      i = pair.indexOf("=");
    jar[pair.slice(0, i)] = pair.slice(i + 1);
  }
  await fs.mkdir(path.dirname(sessionPath), { recursive: true, mode: 0o700 });
  await fs.writeFile(sessionPath, JSON.stringify(jar), { mode: 0o600 });
  const body = r.headers.get("content-type")?.includes("application/json")
    ? await r.json()
    : await r.text();
  if (!r.ok) throw Error(body.error || "Request failed.");
  return body;
}
