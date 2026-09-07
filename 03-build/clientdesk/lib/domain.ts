import { z } from "zod";
export type Client = {
  id: string;
  name: string;
  contact: string;
  email: string;
  sector: string;
  initials: string;
  created_at: string;
};
export type Meeting = {
  id: string;
  client_id: string;
  source: "fireflies" | "manual";
  source_id: string;
  held_at: string;
  title: string;
  summary: string | null;
  transcript: string | null;
  status: "available" | "unavailable";
  synced_at: string;
};
export type Event = {
  id: string;
  client_id: string;
  source_id: string;
  starts_at: string;
  timezone: string;
  status: "active" | "canceled";
  title: string;
};
export type Task = {
  id: string;
  operation_id: string;
  client_id: string;
  meeting_id: string;
  title: string;
  assignee: string;
  due_date: string;
  status: "open" | "done";
  created_at: string;
};
export type Workspace = {
  clients: Client[];
  meetings: Meeting[];
  events: Event[];
  tasks: Task[];
  created_at: string;
};
export class DomainError extends Error {
  constructor(
    message: string,
    public status = 400,
  ) {
    super(message);
  }
}
export function realDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  let d = new Date(value + "T12:00:00Z");
  return Number.isFinite(+d) && d.toISOString().slice(0, 10) === value;
}
const text = z.string().trim().min(1).max(180);
const taskSchema = z.object({
  operation_id: z.string().uuid(),
  client_id: text,
  meeting_id: text,
  title: text,
  assignee: text,
  due_date: z.string().refine(realDate, "Choose a real calendar date."),
  confirmed: z.literal(true),
});
const clientSchema = z.object({
  name: text,
  contact: text,
  email: z.email().max(254),
  sector: text,
});
const meetingSchema = z.object({
  client_id: text,
  source: z.enum(["fireflies", "manual"]),
  source_id: text,
  held_at: z.iso.datetime(),
  title: text,
  summary: z.string().trim().min(1).max(12000).nullable(),
  transcript: z.string().max(40000).nullable().default(null),
  status: z.enum(["available", "unavailable"]),
});
function parse<T>(schema: z.ZodType<T>, payload: unknown): T {
  const r = schema.safeParse(payload);
  if (!r.success)
    throw new DomainError(
      r.error.issues.map((i) => i.path.join(".") + ": " + i.message).join(" "),
    );
  return r.data;
}
export function mutate(
  input: Workspace,
  action: string,
  payload: unknown,
): { data: Workspace; result: unknown } {
  const d = structuredClone(input);
  const now = new Date().toISOString();
  if (action === "client.create") {
    const p = parse(clientSchema, payload);
    if (d.clients.some((c) => c.email.toLowerCase() === p.email.toLowerCase()))
      throw new DomainError("A client with that email already exists.", 409);
    const c: Client = {
      ...p,
      id: crypto.randomUUID(),
      initials: p.name
        .split(/\s+/)
        .slice(0, 2)
        .map((s) => s[0])
        .join("")
        .toUpperCase(),
      created_at: now,
    };
    d.clients.push(c);
    return { data: d, result: c };
  }
  if (action === "task.save") {
    const p = parse(taskSchema, payload);
    if (!d.clients.some((c) => c.id === p.client_id))
      throw new DomainError("Client not found.", 404);
    const m = d.meetings.find(
      (m) => m.id === p.meeting_id && m.client_id === p.client_id,
    );
    if (!m || m.status !== "available" || !m.summary)
      throw new DomainError(
        "Choose an available meeting belonging to this client.",
      );
    const existing = d.tasks.find((t) => t.operation_id === p.operation_id);
    if (existing) {
      if (
        (
          ["client_id", "meeting_id", "title", "assignee", "due_date"] as const
        ).some((k) => existing[k] !== p[k])
      )
        throw new DomainError(
          "This save request was already used for a different task.",
          409,
        );
      return { data: d, result: existing };
    }
    const { confirmed, ...fields } = p;
    const t: Task = {
      ...fields,
      id: crypto.randomUUID(),
      status: "open",
      created_at: now,
    };
    d.tasks.push(t);
    return { data: d, result: t };
  }
  if (action === "task.status") {
    const p = parse(
      z.object({ id: text, status: z.enum(["open", "done"]) }),
      payload,
    );
    const t = d.tasks.find((t) => t.id === p.id);
    if (!t) throw new DomainError("Follow-up not found.", 404);
    t.status = p.status;
    return { data: d, result: t };
  }
  if (action === "meeting.import") {
    const p = parse(meetingSchema, payload);
    if (!d.clients.some((c) => c.id === p.client_id))
      throw new DomainError("Client not found.", 404);
    if (p.status === "available" && !p.summary)
      throw new DomainError("An available meeting needs a summary.");
    if (p.status === "unavailable" && p.summary)
      throw new DomainError(
        "An unavailable meeting cannot include an invented summary.",
      );
    const prev = d.meetings.find(
      (m) => m.source === p.source && m.source_id === p.source_id,
    );
    if (prev && prev.client_id !== p.client_id)
      throw new DomainError(
        "That source is already mapped to another client.",
        409,
      );
    const m: Meeting = {
      ...p,
      id: prev?.id || crypto.randomUUID(),
      synced_at: now,
    };
    if (prev) d.meetings[d.meetings.indexOf(prev)] = m;
    else d.meetings.push(m);
    return { data: d, result: m };
  }
  if (action === "event.import") {
    const p = parse(
      z.object({
        client_id: text,
        source_id: text,
        title: text,
        starts_at: z.iso.datetime(),
        timezone: text.refine((v) => {
          try {
            new Intl.DateTimeFormat("en", { timeZone: v });
            return true;
          } catch {
            return false;
          }
        }, "Choose a valid timezone."),
        status: z.enum(["active", "canceled"]),
      }),
      payload,
    );
    if (!d.clients.some((c) => c.id === p.client_id))
      throw new DomainError("Client not found.", 404);
    const prev = d.events.find((e) => e.source_id === p.source_id);
    if (prev && prev.client_id !== p.client_id)
      throw new DomainError("This event belongs to another client.", 409);
    const event: Event = { ...p, id: prev?.id || crypto.randomUUID() };
    if (prev) d.events[d.events.indexOf(prev)] = event;
    else d.events.push(event);
    return { data: d, result: event };
  }
  throw new DomainError("Unknown action.");
}
export function makeBrief(data: Workspace, id: string, date: string) {
  if (!realDate(date)) throw new DomainError("Use a real date.");
  const c = data.clients.find((c) => c.id === id);
  if (!c) throw new DomainError("Client not found.", 404);
  const meetings = data.meetings
    .filter((m) => m.client_id === id && m.held_at.slice(0, 10) <= date)
    .sort((a, b) => b.held_at.localeCompare(a.held_at));
  const events = data.events.filter(
    (e) =>
      e.client_id === id &&
      e.status === "active" &&
      e.starts_at.slice(0, 10) >= date,
  );
  return `# ${c.name}\n\nPrepared ${date} · ${c.contact}\n\n## Meeting evidence\n${meetings.map((m) => `### ${m.title}\n${m.summary || "Transcript unavailable. No summary inferred."}\n\nSource: ${m.source} / ${m.source_id}\nMeeting: ${m.held_at}\n`).join("\n") || "No meetings recorded.\n"}\n## Upcoming conversations\n${events.map((e) => `- ${e.title}: ${e.starts_at} (${e.timezone})`).join("\n") || "No upcoming conversation recorded."}\n\n## Reviewed follow-ups\n${
    data.tasks
      .filter((t) => t.client_id === id)
      .map(
        (t) =>
          `- [${t.status === "done" ? "x" : " "}] ${t.title} — ${t.assignee}, ${t.due_date}. Evidence: ${t.meeting_id}`,
      )
      .join("\n") || "No reviewed follow-ups saved."
  }\n\n## Unknowns\nA missing owner or delivery date must be confirmed with the client. Suggestions are not commitments.\n\nThis export did not save a task or send a message.\n`;
}
