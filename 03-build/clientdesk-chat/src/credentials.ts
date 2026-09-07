import { readFile, writeFile, rename, rm } from "node:fs/promises";
import { randomUUID } from "node:crypto";

export class ClaudeLoginRequired extends Error {
  constructor() { super("Reconnect the course Claude account."); }
}

// An expired access token with a refresh token is still usable by the CLI.
// Empty/logout state must never replace the persistent subscription login.
export function subscriptionSnapshot(raw: string): string {
  try {
    const oauth = JSON.parse(raw)?.claudeAiOauth;
    if (typeof oauth?.accessToken !== "string" || !oauth.accessToken ||
        typeof oauth.refreshToken !== "string" || !oauth.refreshToken ||
        typeof oauth.expiresAt !== "number" || !Number.isFinite(oauth.expiresAt) || oauth.expiresAt <= 0)
      throw new ClaudeLoginRequired();
    return JSON.stringify({ claudeAiOauth: oauth });
  } catch { throw new ClaudeLoginRequired(); }
}

export async function persistRefreshedSubscription(path: string, initial: string, updated: string) {
  let next: string;
  try { next = subscriptionSnapshot(updated); } catch { return false; }
  if (next === initial || JSON.parse(next).claudeAiOauth.expiresAt <= Date.now()) return false;
  // Preserve an account reconnect completed while this request was running.
  if (subscriptionSnapshot(await readFile(path, "utf8")) !== initial) return false;
  const temporary = `${path}.${randomUUID()}.next`;
  try {
    await writeFile(temporary, next, { mode: 0o600 });
    await rename(temporary, path);
    return true;
  } finally { await rm(temporary, { force: true }); }
}
