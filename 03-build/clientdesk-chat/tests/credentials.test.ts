import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, writeFile, rm, stat } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { subscriptionSnapshot, persistRefreshedSubscription, ClaudeLoginRequired } from "../src/credentials.ts";

const credential = (token: string, expiresAt: number) => JSON.stringify({ claudeAiOauth: {
  accessToken: token, refreshToken: `fixture-refresh-${token}`, expiresAt,
} });

test("expired access with refresh credentials remains eligible for CLI renewal", () => {
  assert.equal(subscriptionSnapshot(credential("fixture-old", 1)), credential("fixture-old", 1));
  for (const raw of ["bad", "{}", JSON.stringify({claudeAiOauth:{expiresAt:0}})])
    assert.throws(() => subscriptionSnapshot(raw), ClaudeLoginRequired);
});

test("failed CLI logout state cannot erase the persistent login; valid renewal persists privately", async () => {
  const dir = await mkdtemp(join(tmpdir(), "clientdesk-auth-test-"));
  const path = join(dir, "credentials.json");
  const initial = credential("fixture-original", 1);
  try {
    await writeFile(path, initial, {mode:0o600});
    assert.equal(await persistRefreshedSubscription(path, initial, JSON.stringify({claudeAiOauth:{accessToken:"",refreshToken:"",expiresAt:0}})), false);
    assert.equal(await readFile(path, "utf8"), initial);
    assert.equal(await persistRefreshedSubscription(path, initial, credential("fixture-expired", 2)), false);
    const updated = credential("fixture-renewed", Date.now()+3600000);
    assert.equal(await persistRefreshedSubscription(path, initial, updated), true);
    assert.equal(await readFile(path, "utf8"), updated);
    assert.equal((await stat(path)).mode & 0o777, 0o600);
  } finally { await rm(dir,{recursive:true,force:true}); }
});

test("a request cannot overwrite a newer account reconnect", async () => {
  const dir = await mkdtemp(join(tmpdir(), "clientdesk-auth-test-"));
  const path = join(dir,"credentials.json");
  try {
    const original = credential("fixture-original",1);
    const reconnected = credential("fixture-reconnected",Date.now()+7200000);
    await writeFile(path,reconnected);
    assert.equal(await persistRefreshedSubscription(path,original,credential("fixture-refreshed",Date.now()+3600000)),false);
    assert.equal(await readFile(path,"utf8"),reconnected);
  } finally { await rm(dir,{recursive:true,force:true}); }
});
