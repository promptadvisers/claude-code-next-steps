import { test } from "node:test";
import assert from "node:assert/strict";
import { mutate, makeBrief, realDate } from "../lib/domain";
import { seedWorkspace } from "../lib/seed";
const seed = () => seedWorkspace(new Date("2026-11-15T12:00:00Z"));
const proposal = () => ({
  client_id: "northstar",
  meeting_id: "meeting-001",
  operation_id: crypto.randomUUID(),
  title: "Prepare onboarding checklist",
  assignee: "Alex Morgan",
  due_date: "2026-11-17",
  confirmed: true,
});
test("real dates reject impossible days, including leap-year boundaries", () => {
  assert.equal(realDate("2026-02-30"), false);
  assert.equal(realDate("2027-02-29"), false);
  assert.equal(realDate("2028-02-29"), true);
});
test("save requires explicit exact review", () => {
  assert.throws(() =>
    mutate(seed(), "task.save", { ...proposal(), confirmed: false }),
  );
  assert.throws(() =>
    mutate(seed(), "task.save", { ...proposal(), due_date: "2026-02-30" }),
  );
});
test("save rejects a meeting from another client and unavailable evidence", () => {
  assert.throws(() =>
    mutate(seed(), "task.save", { ...proposal(), client_id: "cedar" }),
  );
  assert.throws(() =>
    mutate(seed(), "task.save", {
      ...proposal(),
      client_id: "cedar",
      meeting_id: "meeting-002",
    }),
  );
});
test("identical retries save one task; changed payload under the same key fails", () => {
  const p = proposal();
  const a = mutate(seed(), "task.save", p);
  const b = mutate(a.data, "task.save", p);
  assert.equal(b.data.tasks.length, 2);
  assert.deepEqual(a.result, b.result);
  assert.throws(() =>
    mutate(a.data, "task.save", { ...p, title: "Changed action" }),
  );
  assert.equal(seed().tasks.length, 1);
});
test("duplicate imports update one source while preserving local relationships", () => {
  const d = seed();
  const original = d.meetings[0];
  const r = mutate(d, "meeting.import", {
    ...original,
    summary: "An updated sourced summary.",
  });
  assert.equal(r.data.meetings.length, 3);
  assert.equal(r.data.meetings[0].id, "meeting-001");
  assert.throws(() =>
    mutate(d, "meeting.import", { ...original, client_id: "cedar" }),
  );
  assert.throws(() =>
    mutate(d, "meeting.import", { ...original, source_id: "" }),
  );
});
test("unavailable evidence cannot fabricate a summary", () => {
  const m = seed().meetings[1];
  assert.throws(() =>
    mutate(seed(), "meeting.import", { ...m, summary: "Invented" }),
  );
  assert.equal(m.summary, null);
});
test("client creation validates contact details and does not overwrite another client", () => {
  const d = seed();
  const p = {
    name: "Fieldwork Studio",
    contact: "Jo Rivera",
    email: "jo@fieldwork.example",
    sector: "Architecture",
  };
  const r = mutate(d, "client.create", p);
  assert.equal(r.data.clients.length, 4);
  assert.throws(() => mutate(r.data, "client.create", p));
  assert.throws(() => mutate(d, "client.create", { ...p, email: "bad" }));
});
test("status mutation cannot target absent records", () => {
  const r = mutate(seed(), "task.status", {
    id: "task-seed-001",
    status: "done",
  });
  assert.equal(r.data.tasks[0].status, "done");
  assert.throws(() =>
    mutate(seed(), "task.status", {
      id: "another-workspace-task",
      status: "done",
    }),
  );
});
test("brief includes evidence, rejects unknown clients and does not include future meetings", () => {
  const d = seed(),
    before = JSON.stringify(d);
  const text = makeBrief(d, "northstar", "2026-11-15");
  assert.match(text, /demo-transcript-001/);
  assert.equal(JSON.stringify(d), before);
  assert.doesNotMatch(
    makeBrief(d, "northstar", "2026-10-01"),
    /Maya requested/,
  );
  assert.throws(() => makeBrief(d, "not-here", "2026-11-15"));
});
test("demo dates move together across November, new year and leap day", () => {
  for (const date of ["2026-11-15", "2027-01-01", "2028-02-29"]) {
    const d = seedWorkspace(new Date(date + "T12:00:00Z"));
    assert.equal(
      (Date.parse(d.events[0].starts_at) - Date.parse(d.meetings[0].held_at)) /
        86400000,
      6,
    );
    assert.equal(d.created_at.slice(0, 10), date);
  }
});
test("calendar cancellation updates one event and disappears from the brief", () => {
  const d = seed();
  const p = { ...d.events[0], status: "canceled" };
  const r = mutate(d, "event.import", p);
  assert.equal(r.data.events.length, 1);
  assert.doesNotMatch(
    makeBrief(r.data, "northstar", "2026-11-15"),
    /Onboarding working session/,
  );
  assert.throws(() => mutate(d, "event.import", { ...p, client_id: "cedar" }));
});
