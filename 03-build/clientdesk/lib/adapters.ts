import { z } from "zod";
const rawTranscript = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  date: z.number().finite(),
  summary: z
    .object({ overview: z.string().nullable().optional() })
    .nullable()
    .optional(),
  sentences: z
    .array(
      z.object({
        speaker_name: z.string().nullable().optional(),
        text: z.string(),
      }),
    )
    .nullable()
    .optional(),
});
export function normalizeFireflies(raw: unknown, clientId: string) {
  const t = rawTranscript.parse(raw);
  const summary = t.summary?.overview?.trim() || null;
  return {
    client_id: clientId,
    source: "fireflies" as const,
    source_id: t.id,
    title: t.title,
    held_at: new Date(t.date).toISOString(),
    summary,
    transcript:
      t.sentences
        ?.map((s) => `${s.speaker_name || "Speaker"}: ${s.text}`)
        .join("\n\n") || null,
    status: summary ? ("available" as const) : ("unavailable" as const),
  };
}
const rawEvent = z.object({
  uri: z
    .url()
    .refine(
      (v) =>
        new URL(v).origin === "https://api.calendly.com" &&
        new URL(v).pathname.startsWith("/scheduled_events/"),
    ),
  name: z.string().min(1),
  start_time: z.iso.datetime(),
  status: z.enum(["active", "canceled"]),
});
export function normalizeCalendly(
  raw: unknown,
  clientId: string,
  timezone: string,
) {
  new Intl.DateTimeFormat("en", { timeZone: timezone });
  const e = rawEvent.parse(raw);
  return {
    client_id: clientId,
    source_id: e.uri,
    title: e.name,
    starts_at: e.start_time,
    timezone,
    status: e.status,
  };
}
export async function fetchFireflies(
  id: string,
  clientId: string,
  key: string,
  request: typeof fetch = fetch,
) {
  const r = await request("https://api.fireflies.ai/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query:
        "query Transcript($id: String!) { transcript(id: $id) { id title date summary { overview } sentences { speaker_name text } } }",
      variables: { id },
    }),
    signal: AbortSignal.timeout(12000),
  });
  if (!r.ok)
    throw Error(`Fireflies returned HTTP ${r.status}. Existing data was kept.`);
  const result = await r.json();
  if (result.errors?.length || !result.data?.transcript)
    throw Error(
      "Fireflies did not return an accessible transcript. Existing data was kept.",
    );
  return normalizeFireflies(result.data.transcript, clientId);
}
export async function fetchCalendly(
  uri: string,
  clientId: string,
  timezone: string,
  key: string,
  request: typeof fetch = fetch,
) {
  const url = new URL(uri);
  if (
    url.origin !== "https://api.calendly.com" ||
    !/^\/scheduled_events\/[\w-]+$/.test(url.pathname)
  )
    throw Error("Use a scheduled-event URI from api.calendly.com.");
  const r = await request(url, {
    headers: { Authorization: `Bearer ${key}` },
    signal: AbortSignal.timeout(12000),
  });
  if (!r.ok)
    throw Error(`Calendly returned HTTP ${r.status}. Existing data was kept.`);
  const result = await r.json();
  return normalizeCalendly(result.resource, clientId, timezone);
}
