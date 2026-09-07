import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Quotas, secretMatches } from "../src/guard.ts";
import { claudeEnvironment } from "../src/claude.ts";
test("empty or incorrect credentials fail closed", () => {
  assert.equal(secretMatches("", ""), false);
  assert.equal(secretMatches("wrong", "correct"), false);
  assert.equal(secretMatches("correct", "correct"), true);
});
test("quota survives process restart and expires without storing prompts", () => {
  const dir = mkdtempSync(join(tmpdir(), "clientdesk-limits-"));
  let q = new Quotas(join(dir, "limits.sqlite"));
  try {
    q.take("workspace:abc", 1, 3600, 1000); q.close();
    q = new Quotas(join(dir, "limits.sqlite"));
    assert.throws(() => q.take("workspace:abc", 1, 3600, 2000));
    assert.doesNotThrow(() => q.take("workspace:abc", 1, 3600, 3600001));
  } finally { q.close(); rmSync(dir, { recursive: true }); }
});
test("Claude child receives no database, service-token or unrelated account credentials", () => {
  const env = claudeEnvironment("/tmp/example", { PATH: "/bin", HOME: "/personal", CODEX_HOME: "/personal/.codex", OPENAI_API_KEY: "private", CHAT_SERVICE_TOKEN: "private", SUPABASE_ANON_KEY: "private" });
  assert.deepEqual(env, { HOME: "/tmp/example", CLAUDE_CONFIG_DIR: "/tmp/example/.claude", PATH: "/bin", LANG: "C.UTF-8", NODE_ENV: "production", DISABLE_TELEMETRY: "1", DISABLE_ERROR_REPORTING: "1", CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1" });
});
