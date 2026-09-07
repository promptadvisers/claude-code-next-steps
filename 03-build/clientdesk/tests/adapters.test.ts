import { test } from "node:test";
import assert from "node:assert/strict";
import {
  normalizeFireflies,
  normalizeCalendly,
  fetchFireflies,
  fetchCalendly,
} from "../lib/adapters";
test("Fireflies mapping preserves ID, milliseconds and missing summary", () => {
  const m = normalizeFireflies(
    {
      id: "source-1",
      title: "Meeting",
      date: Date.parse("2026-11-12T14:00:00Z"),
      summary: null,
    },
    "northstar",
  );
  assert.equal(m.held_at, "2026-11-12T14:00:00.000Z");
  assert.equal(m.source_id, "source-1");
  assert.equal(m.summary, null);
  assert.equal(m.status, "unavailable");
  assert.throws(() =>
    normalizeFireflies({ id: "", title: "Broken", date: 0 }, "northstar"),
  );
});
test("provider errors do not become imported meetings", async () => {
  await assert.rejects(() =>
    fetchFireflies(
      "a",
      "northstar",
      "test",
      async () =>
        Response.json({ errors: [{ message: "Not found" }] }) as never,
    ),
  );
  await assert.rejects(() =>
    fetchFireflies(
      "a",
      "northstar",
      "test",
      async () => new Response("", { status: 503 }) as never,
    ),
  );
});
test("Calendly preserves cancellation/timezone and rejects unknown mappings", () => {
  const e = normalizeCalendly(
    {
      uri: "https://api.calendly.com/scheduled_events/event-1",
      name: "Working session",
      start_time: "2026-11-18T14:00:00Z",
      status: "canceled",
    },
    "northstar",
    "America/Toronto",
  );
  assert.equal(e.status, "canceled");
  assert.equal(e.timezone, "America/Toronto");
  assert.throws(() => normalizeCalendly({ ...e }, "northstar", "Not/A_Zone"));
});
test("Calendly fetch rejects non-provider URLs before sending credentials", async () => {
  let called = false;
  await assert.rejects(() =>
    fetchCalendly(
      "https://unrelated.invalid/steal",
      "northstar",
      "UTC",
      "private",
      async () => {
        called = true;
        return Response.json({});
      },
    ),
  );
  assert.equal(called, false);
});
