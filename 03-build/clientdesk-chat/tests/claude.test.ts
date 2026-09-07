import test from "node:test";
import assert from "node:assert/strict";
import { claudeAnswer, claudeEnvironment } from "../src/claude.ts";
test("only subscription auth enters the Claude process, with no API fallback", () => {
  const env = claudeEnvironment("/tmp/test", { CLAUDE_CODE_OAUTH_TOKEN: "subscription-test", ANTHROPIC_API_KEY: "api-test", ANTHROPIC_AUTH_TOKEN: "gateway-test", CLAUDE_CODE_USE_BEDROCK: "1", AWS_SECRET_ACCESS_KEY: "private" });
  assert.equal(env.CLAUDE_CODE_OAUTH_TOKEN, "subscription-test");
  assert.equal(env.ANTHROPIC_API_KEY, undefined);
  assert.equal(env.ANTHROPIC_AUTH_TOKEN, undefined);
  assert.equal(env.CLAUDE_CODE_USE_BEDROCK, undefined);
});
test("print-mode JSON and event arrays return only successful final answers", () => {
  const result = { type: "result", subtype: "success", result: "A sourced answer." };
  assert.equal(claudeAnswer(JSON.stringify(result)), "A sourced answer.");
  assert.equal(claudeAnswer(JSON.stringify([{ type: "system" }, result])), "A sourced answer.");
  for (const value of ["broken", JSON.stringify({ ...result, is_error: true }), JSON.stringify({ ...result, subtype: "error_max_turns" })]) assert.throws(() => claudeAnswer(value));
});
