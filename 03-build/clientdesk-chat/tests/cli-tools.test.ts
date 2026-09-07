import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
test("the actual Claude print-mode process exposes no tools and returns valid JSON", async () => {
  const { stdout } = await promisify(execFile)(process.execPath, ["--import", "tsx", fileURLToPath(new URL("../scripts/inspect-tools.mjs", import.meta.url))], { timeout: 30000, maxBuffer: 100000 });
  assert.ok(stdout.includes("Claude print-mode JSON and empty tool list verified."));
});
