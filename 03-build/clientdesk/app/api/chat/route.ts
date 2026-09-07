import { NextResponse } from "next/server";
import { connection, readWorkspace } from "@/lib/repository";
import {
  chatSchema,
  chatPrompt,
  localChatAllowed,
  chatOriginAllowed,
} from "@/lib/chat";
import { askLocalClaude } from "@/lib/claude-local";
import { askHostedClaude, hostedChatConfigured, hostedOriginAllowed } from "@/lib/chat-hosted";
import { DomainError } from "@/lib/domain";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;
const state = globalThis as typeof globalThis & {
  clientdeskChatBusy?: boolean;
};
const json = (body: unknown, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function GET(req: Request) {
  const local = localChatAllowed(req.headers.get("host") || "", process.env);
  const hosted = hostedChatConfigured(process.env);
  return json({ available: local || hosted, mode: local ? "local-subscription" : "hosted-claude", accessRequired: !local && hosted });
}
export async function POST(req: Request) {
  const host = req.headers.get("host") || "";
  const local = localChatAllowed(host, process.env);
  const hosted = !local && hostedChatConfigured(process.env);
  if (!local && !hosted) return json({ error: "Chat is not connected yet." }, 503);
  const origin = req.headers.get("origin");
  if (!(local ? chatOriginAllowed(origin, host) : hostedOriginAllowed(origin, process.env.CLIENTDESK_APP_ORIGIN)))
    return json({ error: "Open chat from the ClientDesk app." }, 403);
  if (hosted && !req.headers.get("x-clientdesk-access"))
    return json({ error: "Enter the course chat access code.", code: "access_required" }, 403);
  if (!req.headers.get("content-type")?.startsWith("application/json"))
    return json({ error: "Send a JSON question." }, 415);
  if (Number(req.headers.get("content-length") || 0) > 40000)
    return json(
      { error: "That conversation is too long. Start a new chat." },
      413,
    );
  if (local && state.clientdeskChatBusy)
    return json(
      {
        error:
          "Claude is already answering. Wait for that reply or stop it first.",
      },
      429,
    );
  let claimed = false;
  try {
    const raw = await req.text();
    if (raw.length > 40000)
      return json(
        { error: "That conversation is too long. Start a new chat." },
        413,
      );
    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return json({ error: "Send a valid question." }, 400);
    }
    const parsed = chatSchema.safeParse(body);
    if (!parsed.success)
      return json(
        {
          error:
            "Choose a client and keep your question under 2,000 characters.",
        },
        400,
      );
    if (local && state.clientdeskChatBusy)
      return json({ error: "Claude is already answering." }, 429);
    if (local) { state.clientdeskChatBusy = true; claimed = true; }
    const conn = await connection();
    const { data } = await readWorkspace(conn);
    const prompt = chatPrompt(data, parsed.data);
    const answer = local
      ? await askLocalClaude(prompt, req.signal)
      : await askHostedClaude(prompt, conn.id, req.headers.get("x-clientdesk-access") || "", req.headers.get("x-vercel-forwarded-for") || "local-preview", req.signal);
    return json({ answer, mode: local ? "local-subscription" : "hosted-claude" });
  } catch (e) {
    return json(
      {
        code: e instanceof DomainError && e.status === 403 && hosted ? "access_required" : undefined,
        error:
          e instanceof DomainError
            ? e.message
            : "Unable to open chat. Your question has been kept.",
      },
      e instanceof DomainError ? e.status : 503,
    );
  } finally {
    if (claimed) state.clientdeskChatBusy = false;
  }
}
