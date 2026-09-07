import { createServer, type IncomingMessage } from "node:http";
import { mkdirSync } from "node:fs";
import { z } from "zod";
import { askClaude } from "./claude.ts";
import { Quotas, LimitError, secretMatches } from "./guard.ts";

const requestSchema = z.object({
  prompt: z.string().min(1).max(120000),
  workspace: z.string().regex(/^[a-f0-9]{64}$/),
  visitor: z.string().regex(/^[a-f0-9]{64}$/),
}).strict();
const dataDir = process.env.DATA_DIR || "/data";
mkdirSync(dataDir, { recursive: true, mode: 0o700 });
const quota = new Quotas(`${dataDir}/limits.sqlite`);
let busy = false;
function header(req: IncomingMessage, name: string) {
  const value = req.headers[name]; return typeof value === "string" ? value : "";
}
const server = createServer(async (req, res) => {
  const reply = (body: unknown, status = 200) => {
    if (res.destroyed) return;
    res.writeHead(status, { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" });
    res.end(JSON.stringify(body));
  };
  if (req.url === "/health" && req.method === "GET") return reply({ ok: true, service: "clientdesk-chat" });
  if (req.url !== "/chat" || req.method !== "POST") return reply({ error: "Not found." }, 404);
  const token = header(req, "authorization");
  if (!secretMatches(token, `Bearer ${process.env.CHAT_SERVICE_TOKEN || ""}`) || !process.env.CHAT_SERVICE_TOKEN)
    return reply({ error: "Unauthorized." }, 401);
  let claimed = false;
  const controller = new AbortController();
  const cancel = () => controller.abort();
  res.on("close", cancel);
  try {
    // A global attempt ceiling also prevents rotating anonymous browser identities
    // from turning the access-code form into an unlimited guessing endpoint.
    quota.take("access-attempts", 60, 60);
    if (!secretMatches(header(req, "x-clientdesk-access"), process.env.CHAT_ACCESS_CODE || ""))
      return reply({ error: "Enter the course chat access code.", code: "access_required" }, 403);
    if (!header(req, "content-type").startsWith("application/json")) return reply({ error: "Send JSON." }, 415);
    let raw = "";
    for await (const chunk of req) {
      raw += chunk.toString();
      if (Buffer.byteLength(raw) > 180000) return reply({ error: "Conversation is too long." }, 413);
    }
    let body;
    try { body = requestSchema.parse(JSON.parse(raw)); }
    catch { return reply({ error: "Invalid chat request." }, 400); }
    if (busy) return reply({ error: "Chat is answering another question. Try again shortly." }, 429);
    quota.take(`workspace:${body.workspace}`, 20, 3600);
    quota.take(`visitor:${body.visitor}`, 30, 3600);
    quota.take("all-requests", 100, 86400);
    busy = true; claimed = true;
    const signal = AbortSignal.any([controller.signal, AbortSignal.timeout(85000)]);
    const answer = await askClaude(body.prompt, signal);
    reply({ answer, mode: "hosted-claude" });
  } catch (error) {
    if (error instanceof LimitError) return reply({ error: error.message }, 429);
    // Never put prompts, transcripts, subprocess stderr or credentials in logs.
    console.error(JSON.stringify({ event: "chat_failed", category: controller.signal.aborted ? "cancelled" : "provider_unavailable" }));
    reply({ error: "Claude is unavailable right now. Your question has been kept. The host may need to reconnect its account." }, 503);
  } finally {
    if (claimed) busy = false;
    res.off("close", cancel);
  }
});
server.requestTimeout = 15000;
server.headersTimeout = 10000;
server.listen(Number(process.env.PORT || 8080), "0.0.0.0", () => console.log("ClientDesk chat service listening."));
process.on("SIGTERM", () => server.close(() => { quota.close(); process.exit(0); }));
