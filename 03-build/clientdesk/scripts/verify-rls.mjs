import { createClient } from "@supabase/supabase-js";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
process.loadEnvFile(".env.local");
const url = process.env.SUPABASE_URL,
  key = process.env.SUPABASE_ANON_KEY;
const make = () =>
  createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
const a = make(),
  b = make(),
  anonymous = make();
const sa = await a.auth.signInAnonymously(),
  sb = await b.auth.signInAnonymously();
assert.ok(sa.data.user);
assert.ok(sb.data.user);
const data = {
  clients: [],
  meetings: [],
  events: [],
  tasks: [],
  created_at: new Date().toISOString(),
};
const insert = await a
  .from("workspaces")
  .insert({ owner_id: sa.data.user.id, data, version: 1 });
assert.equal(insert.error, null);
assert.equal(
  (
    await a
      .from("workspaces")
      .select("owner_id")
      .eq("owner_id", sa.data.user.id)
  ).data.length,
  1,
);
assert.equal(
  (
    await b
      .from("workspaces")
      .select("owner_id")
      .eq("owner_id", sa.data.user.id)
  ).data.length,
  0,
);
const denied = await b
  .from("workspaces")
  .update({ version: 9 })
  .eq("owner_id", sa.data.user.id)
  .select("owner_id");
assert.equal(denied.data.length, 0);
const forged = await b
  .from("workspaces")
  .insert({ owner_id: sa.data.user.id, data, version: 1 });
assert.ok(forged.error);
const unauth = await anonymous.from("workspaces").select("owner_id");
assert.ok(unauth.error || unauth.data.length === 0);
assert.equal(
  (await a.from("workspaces").select("version").single()).data.version,
  1,
);
const evidence = {
  passed: true,
  at: new Date().toISOString(),
  checks: [
    "owner can read own row",
    "second user sees zero rows",
    "second user cannot update owner row",
    "forged owner insert rejected",
    "unauthenticated access denied",
    "owner version unchanged after attack",
  ],
};
console.log(JSON.stringify(evidence, null, 2));
await fs.writeFile(
  "../../04-verification/database-rls.json",
  JSON.stringify(evidence, null, 2),
);
await a.auth.signOut();
await b.auth.signOut();
