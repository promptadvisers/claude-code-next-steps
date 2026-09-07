import fs from "node:fs/promises";

// Regenerate fictional teaching records relative to the rehearsal day.
// No provider account is contacted.
const directory = new URL("../../../01-planning/sample-data/", import.meta.url);
const relative = (days, hour) => {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + days);
  date.setUTCHours(hour, 0, 0, 0);
  return date.toISOString();
};
await fs.mkdir(directory, { recursive: true });
const records = {
  "meeting.json": {
    client_id: "northstar",
    source: "manual",
    source_id: "course-practice-meeting-001",
    held_at: relative(-1, 14),
    title: "Checklist working notes",
    summary:
      "Maya requested an onboarding checklist. No owner or delivery date was agreed.",
    transcript:
      "Maya: Could we prepare an onboarding checklist? Alex: Let us confirm the owner and timing before committing.",
    status: "available",
  },
  "event.json": {
    client_id: "northstar",
    source_id: "course-practice-event-001",
    starts_at: relative(4, 14),
    timezone: "America/Toronto",
    status: "active",
    title: "Checklist review — fictional course example",
  },
};
for (const [name, record] of Object.entries(records)) {
  await fs.writeFile(
    new URL(name, directory),
    JSON.stringify(record, null, 2) + "\n",
  );
}
console.log(
  "Created two fictional import files in 01-planning/sample-data. No service was contacted.",
);
