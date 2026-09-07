import assert from "node:assert/strict";
import fs from "node:fs/promises";
const origin = process.env.CLIENTDESK_URL || "http://127.0.0.1:4310";
const checks = [];
class Session {
  jar = new Map();
  async request(action, payload) {
    const headers = { Origin: origin };
    if (this.jar.size)
      headers.Cookie = [...this.jar].map(([k, v]) => `${k}=${v}`).join("; ");
    if (action) headers["Content-Type"] = "application/json";
    const r = await fetch(origin + "/api/workspace", {
      method: action ? "POST" : "GET",
      headers,
      body: action ? JSON.stringify({ action, payload }) : undefined,
    });
    for (const c of r.headers.getSetCookie()) {
      const [pair] = c.split(";");
      const pos = pair.indexOf("=");
      this.jar.set(pair.slice(0, pos), pair.slice(pos + 1));
    }
    return { status: r.status, body: await r.json() };
  }
}
const a = new Session(),
  b = new Session();
let first = await a.request();
assert.equal(first.status, 200, JSON.stringify(first.body));
checks.push(`load: ${first.body.storage}`);
await b.request();
const p = {
  operation_id: crypto.randomUUID(),
  client_id: "northstar",
  meeting_id: "meeting-001",
  title: "Prepare the onboarding checklist",
  assignee: "Alex Morgan",
  due_date: "2026-11-17",
  confirmed: true,
};
assert.equal(
  (await a.request("task.save", { ...p, confirmed: false })).status,
  400,
);
checks.push("unconfirmed save rejected");
const save = await a.request("task.save", p);
assert.equal(save.status, 200, JSON.stringify(save.body));
const id = save.body.result.id;
assert.equal((await a.request("task.save", p)).body.result.id, id);
assert.equal(
  (await a.request("task.save", { ...p, title: "Changed" })).status,
  409,
);
checks.push("retry returns original; changed operation rejected");
let persisted = await a.request();
assert.equal(
  persisted.body.data.tasks.filter((t) => t.operation_id === p.operation_id)
    .length,
  1,
);
checks.push("read-back persists one task");
assert.equal(
  (await b.request()).body.data.tasks.some((t) => t.id === id),
  false,
);
assert.equal(
  (await b.request("task.status", { id, status: "done" })).status,
  404,
);
checks.push("second session cannot read or mutate first-session task");
const concurrent = await Promise.all(
  ["One", "Two"].map((x) =>
    a.request("task.save", {
      ...p,
      operation_id: crypto.randomUUID(),
      title: "Concurrent check " + x,
    }),
  ),
);
assert.ok(concurrent.every((r) => r.status === 200));
const after = await a.request();
assert.equal(
  after.body.data.tasks.filter((t) => t.title.startsWith("Concurrent check"))
    .length,
  2,
);
checks.push("concurrent writes preserve both changes");
const ca = await a.request("client.create", {
  name: "Verification Studio",
  contact: "Taylor Reed",
  email: "taylor@verification.example",
  sector: "Course verification",
});
assert.equal(ca.status, 200);
assert.equal(
  (await b.request()).body.data.clients.some((c) => c.id === ca.body.result.id),
  false,
);
checks.push("new client isolated between sessions");
const m = after.body.data.meetings[0];
const im = await a.request("meeting.import", {
  ...m,
  summary: "An updated, explicitly supplied summary.",
});
assert.equal(im.status, 200);
assert.equal(
  im.body.data.meetings.filter((x) => x.source_id === m.source_id).length,
  1,
);
assert.equal(im.body.result.id, m.id);
checks.push("meeting reimport retains one source and stable local ID");
const bad = await fetch(origin + "/api/workspace", {
  method: "POST",
  headers: {
    Origin: "https://unrelated.invalid",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    action: "task.status",
    payload: { id, status: "done" },
  }),
});
assert.equal(bad.status, 403);
checks.push("cross-origin write rejected");
const result = { origin, at: new Date().toISOString(), checks, passed: true };
console.log(JSON.stringify(result, null, 2));
await fs.writeFile(
  "../../04-verification/http-" +
    (origin.startsWith("http://127") ? "localhost" : "vercel") +
    ".json",
  JSON.stringify(result, null, 2),
);
