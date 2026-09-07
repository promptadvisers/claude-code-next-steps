import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
const client = new Client({ name: "course-verifier", version: "0.1.0" });
const transport = new StdioClientTransport({
  command: process.execPath,
  args: ["scripts/mcp.mjs"],
  env: {
    ...process.env,
    CLIENTDESK_URL: process.env.CLIENTDESK_URL || "http://127.0.0.1:4310",
  },
});
try {
  await client.connect(transport);
  const { tools } = await client.listTools();
  assert.equal(tools.length, 3);
  const result = await client.callTool({
    name: "client_brief",
    arguments: {
      client_id: "northstar",
      date: new Date().toISOString().slice(0, 10),
    },
  });
  assert.equal(result.isError, undefined);
  assert.match(result.content[0].text, /demo-transcript-001/);
  const evidence = {
    passed: true,
    tools: tools.map((t) => t.name),
    readOnly: true,
    checks: [
      "stdio initialization",
      "tool discovery",
      "Northstar brief with source ID",
    ],
  };
  console.log(JSON.stringify(evidence));
  await fs.writeFile(
    "../../04-verification/mcp.json",
    JSON.stringify(evidence, null, 2),
  );
} finally {
  await client.close();
}
