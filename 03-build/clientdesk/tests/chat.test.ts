import test from "node:test";
import assert from "node:assert/strict";
import {
  localChatAllowed,
  chatOriginAllowed,
  claudeEnvironment,
  chatPrompt,
  chatSchema,
  claudeAnswer,
} from "../lib/chat";
import { seedWorkspace } from "../lib/seed";

test("local chat requires explicit opt-in and never runs on Vercel", () => {
  const env = { NODE_ENV: "test" as const, CLIENTDESK_LOCAL_CHAT: "1" };
  assert.equal(localChatAllowed("127.0.0.1:4310", env), true);
  assert.equal(
    localChatAllowed("127.0.0.1:4310", { ...env, VERCEL: "1" }),
    false,
  );
  for (const host of [
    "example.com",
    "127.0.0.1.evil.test:4310",
    "localhost:443",
    "[::]:4310",
  ])
    assert.equal(localChatAllowed(host, env), false);
  assert.equal(localChatAllowed("127.0.0.1:4310", { NODE_ENV: "test" }), false);
});
test("a foreign or missing origin cannot invoke local Claude", () => {
  assert.equal(
    chatOriginAllowed("http://127.0.0.1:4310", "127.0.0.1:4310"),
    true,
  );
  for (const origin of [
    null,
    "https://clientdesk-course.vercel.app",
    "http://evil.test",
    "null",
  ])
    assert.equal(chatOriginAllowed(origin, "127.0.0.1:4310"), false);
});
test("API keys, provider credentials and custom config are not inherited", () => {
  const env = claudeEnvironment({
    NODE_ENV: "test",
    HOME: "/example",
    PATH: "/bin",
    ANTHROPIC_API_KEY: "not-a-key",
    ANTHROPIC_AUTH_TOKEN: "not-a-token",
    CLAUDE_CODE_OAUTH_TOKEN: "not-a-token",
    CLAUDE_CONFIG_DIR: "/other",
    CLAUDE_CODE_USE_BEDROCK: "1",
    AWS_SECRET_ACCESS_KEY: "not-a-key",
    SUPABASE_ANON_KEY: "not-a-key",
  });
  assert.deepEqual(env, {
    NODE_ENV: "production",
    HOME: "/example",
    PATH: "/bin",
  });
});
test("chat context includes only the selected owner-scoped client and bounded evidence", () => {
  const workspace = seedWorkspace();
  const prompt = chatPrompt(
    workspace,
    chatSchema.parse({ clientId: "northstar", message: "What was agreed?" }),
  );
  assert.ok(prompt.includes("demo-transcript-001"));
  assert.ok(!prompt.includes("Cedar Consulting"));
  assert.ok(!prompt.includes("Leila Patel"));
  assert.throws(() =>
    chatPrompt(workspace, { clientId: "absent", message: "Hi", history: [] }),
  );
  assert.equal(
    chatSchema.safeParse({ clientId: "northstar", message: "x".repeat(2001) })
      .success,
    false,
  );
  assert.equal(
    chatSchema.safeParse({
      clientId: "northstar",
      message: "Hi",
      history: Array(7).fill({ role: "user", content: "Hi" }),
    }).success,
    false,
  );
});
test("Claude errors and limits are never presented as successful answers", () => {
  assert.equal(
    claudeAnswer(
      JSON.stringify({ subtype: "success", result: "A sourced answer." }),
    ),
    "A sourced answer.",
  );
  for (const result of [
    "not JSON",
    JSON.stringify({
      subtype: "success",
      is_error: true,
      result: "limit reached",
    }),
    JSON.stringify({ subtype: "error_max_turns", result: "incomplete" }),
  ])
    assert.throws(() => claudeAnswer(result));
});

test("Claude JSON event arrays return the final result, not initialization metadata", () => {
  assert.equal(
    claudeAnswer(
      JSON.stringify([
        { type: "system", subtype: "init" },
        { type: "result", subtype: "success", result: "A sourced answer." },
      ]),
    ),
    "A sourced answer.",
  );
  assert.throws(() =>
    claudeAnswer(JSON.stringify([{ type: "system", subtype: "init" }])),
  );
});
