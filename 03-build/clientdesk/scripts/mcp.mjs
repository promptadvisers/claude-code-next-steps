import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { requestWorkspace } from "./http-session.mjs";
const server = new McpServer({ name: "clientdesk", version: "0.1.0" });
const readOnly = {
  readOnlyHint: true,
  destructiveHint: false,
  idempotentHint: true,
  openWorldHint: false,
};
server.registerTool(
  "list_clients",
  {
    description:
      "List clients in the authorized ClientDesk workspace. Does not create tasks or messages.",
    annotations: readOnly,
  },
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify((await requestWorkspace()).data.clients),
      },
    ],
  }),
);
server.registerTool(
  "client_evidence",
  {
    description:
      "Read a client’s sourced meetings and existing follow-ups. Do not infer missing evidence.",
    inputSchema: { client_id: z.string().min(1) },
    annotations: readOnly,
  },
  async ({ client_id }) => {
    const { data } = await requestWorkspace();
    const c = data.clients.find((c) => c.id === client_id);
    if (!c)
      return {
        content: [
          { type: "text", text: "Client not found in this workspace." },
        ],
        isError: true,
      };
    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({
            client: c,
            meetings: data.meetings.filter((m) => m.client_id === client_id),
            tasks: data.tasks.filter((t) => t.client_id === client_id),
            write_performed: false,
          }),
        },
      ],
    };
  },
);
server.registerTool(
  "client_brief",
  {
    description:
      "Create a read-only brief for a client as of an explicit calendar date. It saves no tasks and sends no messages.",
    inputSchema: {
      client_id: z.string().min(1),
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    },
    annotations: readOnly,
  },
  async ({ client_id, date }) => ({
    content: [
      {
        type: "text",
        text: await requestWorkspace(
          undefined,
          undefined,
          "?export=brief&client=" +
            encodeURIComponent(client_id) +
            "&date=" +
            date,
        ),
      },
    ],
  }),
);
await server.connect(new StdioServerTransport());
