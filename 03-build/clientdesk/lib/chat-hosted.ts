import { createHmac } from "node:crypto";
import { DomainError } from "./domain";
export function hostedChatConfigured(env: NodeJS.ProcessEnv) {
  try {
    const url = new URL(env.CLIENTDESK_CHAT_URL || "");
    return url.protocol === "https:" && !url.username && !url.password && Boolean(env.CLIENTDESK_CHAT_TOKEN);
  } catch { return false; }
}
export function hostedOriginAllowed(origin: string | null, configured: string | undefined) {
  return Boolean(configured) && origin === configured;
}
export async function askHostedClaude(
  prompt: string, workspaceId: string, accessCode: string, visitor: string,
  signal: AbortSignal, env: NodeJS.ProcessEnv = process.env,
) {
  if (!hostedChatConfigured(env)) throw new DomainError("Hosted chat is not connected yet.", 503);
  if (!accessCode || accessCode.length > 128) throw new DomainError("Enter the course chat access code.", 403);
  const hash = (value: string) => createHmac("sha256", env.CLIENTDESK_CHAT_TOKEN!).update(value).digest("hex");
  let response;
  try {
    response = await fetch(new URL("/chat", env.CLIENTDESK_CHAT_URL), {
      method: "POST", cache: "no-store", redirect: "error",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.CLIENTDESK_CHAT_TOKEN}`,
        "X-ClientDesk-Access": accessCode,
      },
      body: JSON.stringify({ prompt, workspace: hash(workspaceId), visitor: hash(visitor) }),
      signal: AbortSignal.any([signal, AbortSignal.timeout(90000)]),
    });
  } catch { throw new DomainError("Claude could not be reached. Your question has been kept.", 503); }
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 503 && body.code === "account_reconnect_required")
      throw new DomainError("The host needs to reconnect the course’s Claude account. Your question has been kept.", 503);
    const allowed: Record<number, string> = {
      403: "Enter the course chat access code.",
      429: "Chat is busy or its demo allowance is used for now. Please try again later.",
      413: "That conversation is too long. Start a new chat.",
    };
    throw new DomainError(allowed[response.status] || "Claude is unavailable right now. Your question has been kept.", allowed[response.status] ? response.status : 503);
  }
  if (typeof body.answer !== "string" || !body.answer.trim() || body.answer.length > 4800)
    throw new DomainError("Claude did not return an answer. Please try again.", 502);
  return body.answer;
}
