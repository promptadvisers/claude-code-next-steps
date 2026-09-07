import test from "node:test";
import assert from "node:assert/strict";
import { askHostedClaude, hostedChatConfigured, hostedOriginAllowed } from "../lib/chat-hosted";
const env = { NODE_ENV: "test" as const, CLIENTDESK_CHAT_URL: "https://service.example", CLIENTDESK_CHAT_TOKEN: "test-token" };
test("hosted chat requires HTTPS and a server credential; origin must match the configured app exactly", () => {
  assert.equal(hostedChatConfigured(env), true);
  assert.equal(hostedChatConfigured({ ...env, CLIENTDESK_CHAT_URL: "http://service.example" }), false);
  assert.equal(hostedChatConfigured({ ...env, CLIENTDESK_CHAT_TOKEN: "" }), false);
  assert.equal(hostedOriginAllowed("https://clientdesk-course.vercel.app", "https://clientdesk-course.vercel.app"), true);
  assert.equal(hostedOriginAllowed("https://evil.example", "https://clientdesk-course.vercel.app"), false);
  assert.equal(hostedOriginAllowed(null, undefined), false);
});
test("hosted proxy hashes identity and keeps the access code outside model context", async () => {
  const original = global.fetch;
  let called = false;
  global.fetch = async (url, options) => {
    called = true;
    assert.equal(String(url), "https://service.example/chat");
    const body = JSON.parse(options!.body as string);
    assert.equal(body.prompt, "Only selected client evidence");
    assert.match(body.workspace, /^[a-f0-9]{64}$/);
    assert.notEqual(body.workspace, body.visitor);
    assert.ok(!JSON.stringify(body).includes("secret-access"));
    assert.equal(new Headers(options!.headers).get("X-ClientDesk-Access"), "secret-access");
    assert.equal(options!.redirect, "error");
    return Response.json({ answer: "A sourced answer." });
  };
  try {
    assert.equal(await askHostedClaude("Only selected client evidence", "owner", "secret-access", "visitor", new AbortController().signal, env), "A sourced answer.");
    assert.ok(called);
  } finally { global.fetch = original; }
});
test("missing access never reaches Railway and provider errors do not leak details", async () => {
  const original = global.fetch;
  global.fetch = async () => { throw Error("Must not call"); };
  try {
    await assert.rejects(() => askHostedClaude("prompt", "owner", "", "ip", new AbortController().signal, env), { status: 403 });
    global.fetch = async () => Response.json({ error: "sensitive provider diagnostic" }, { status: 500 });
    await assert.rejects(() => askHostedClaude("prompt", "owner", "code", "ip", new AbortController().signal, env), (e: unknown) => e instanceof Error && !e.message.includes("sensitive"));
  } finally { global.fetch = original; }
});
