import type { Workspace } from "./domain";
export function seedWorkspace(now = new Date()): Workspace {
  const at = (days: number, hour = 14) => {
    let d = new Date(now);
    d.setUTCDate(d.getUTCDate() + days);
    d.setUTCHours(hour, 0, 0, 0);
    return d.toISOString();
  };
  const created = at(0, 12);
  return {
    created_at: created,
    clients: [
      {
        id: "northstar",
        name: "Northstar Studio",
        contact: "Maya Chen",
        email: "maya@northstar.example",
        sector: "Brand & design",
        initials: "NS",
        created_at: at(-40),
      },
      {
        id: "cedar",
        name: "Cedar Consulting",
        contact: "Elias Brooks",
        email: "elias@cedar.example",
        sector: "Operations",
        initials: "CC",
        created_at: at(-25),
      },
      {
        id: "atlas",
        name: "Atlas Works",
        contact: "Leila Patel",
        email: "leila@atlas.example",
        sector: "Product strategy",
        initials: "AW",
        created_at: at(-2),
      },
    ],
    meetings: [
      {
        id: "meeting-001",
        client_id: "northstar",
        source: "fireflies",
        source_id: "demo-transcript-001",
        held_at: at(-3),
        title: "Making onboarding feel effortless",
        summary:
          "Maya requested an onboarding checklist before the next working session. No delivery date was agreed.",
        transcript:
          "Maya Chen: The first week still feels a little scattered. Could we put together one onboarding checklist for the team?\n\nAlex Morgan: Yes. I’ll outline what it should cover so we can review it in our next working session.\n\nMaya Chen: Great. It should include who owns each step, too.\n\nAlex Morgan: Let’s confirm the owner and timing when we review the draft.",
        status: "available",
        synced_at: created,
      },
      {
        id: "meeting-002",
        client_id: "cedar",
        source: "fireflies",
        source_id: "demo-transcript-002",
        held_at: at(-4, 15),
        title: "A closer look at the handoff",
        summary: null,
        transcript: null,
        status: "unavailable",
        synced_at: created,
      },
      {
        id: "meeting-003",
        client_id: "northstar",
        source: "fireflies",
        source_id: "demo-transcript-003",
        held_at: at(-10),
        title: "A direction for the new quarter",
        summary:
          "The team agreed to review the brand workshop notes before starting the onboarding work.",
        transcript:
          "Maya Chen: Can you share the workshop notes so everyone is working from the same starting point?\n\nAlex Morgan: I’ll prepare the notes for our next review.",
        status: "available",
        synced_at: created,
      },
    ],
    events: [
      {
        id: "event-001",
        client_id: "northstar",
        source_id: "demo-event-001",
        starts_at: at(3),
        timezone: "America/Toronto",
        status: "active",
        title: "Onboarding working session",
      },
    ],
    tasks: [
      {
        id: "task-seed-001",
        operation_id: "90f62ef8-ea22-4dc9-aeb2-1ebc62bdb242",
        client_id: "northstar",
        meeting_id: "meeting-003",
        title: "Share the brand workshop notes",
        assignee: "Alex Morgan",
        due_date: at(1).slice(0, 10),
        status: "open",
        created_at: at(-2),
      },
    ],
  };
}
