import "server-only";
import { execFile } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { claudeEnvironment, claudeAnswer, chatSystem } from "./chat";
import { DomainError } from "./domain";

function execute(args: string[], cwd: string, signal: AbortSignal, input = "") {
  return new Promise<string>((resolve, reject) => {
    const child = execFile(
      "claude",
      args,
      {
        cwd,
        env: claudeEnvironment(process.env),
        signal,
        timeout: 90000,
        maxBuffer: 256000,
        killSignal: "SIGKILL",
        encoding: "utf8",
      },
      (error, stdout) => {
        if (error)
          reject(
            new DomainError(
              signal.aborted
                ? "Reply stopped."
                : "Claude Code could not finish. Check that it is installed, signed in and within your plan limits. No API fallback was used.",
              503,
            ),
          );
        else resolve(stdout);
      },
    );
    child.stdin?.on("error", () => {});
    child.stdin?.end(input);
  });
}
export async function askLocalClaude(prompt: string, signal: AbortSignal) {
  const directory = await mkdtemp(path.join(tmpdir(), "clientdesk-chat-"));
  try {
    const status = JSON.parse(
      await execute(["--safe-mode", "auth", "status"], directory, signal),
    );
    if (
      !status.loggedIn ||
      status.authMethod !== "claude.ai" ||
      !status.subscriptionType
    )
      throw new DomainError(
        "Sign in to Claude Code with your Claude subscription first. This chat does not use an API key.",
        503,
      );
    const stdout = await execute(
      [
        "--safe-mode",
        "-p",
        "--output-format",
        "json",
        "--model",
        "sonnet",
        "--effort",
        "low",
        "--tools",
        "",
        "--strict-mcp-config",
        "--mcp-config",
        '{"mcpServers":{}}',
        "--disable-slash-commands",
        "--no-session-persistence",
        "--system-prompt",
        chatSystem,
      ],
      directory,
      signal,
      prompt,
    );
    return claudeAnswer(stdout);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}
