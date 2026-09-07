import fs from "node:fs/promises";
import { requestWorkspace } from "./http-session.mjs";
import { fetchFireflies, fetchCalendly } from "../lib/adapters";
const [command, ...args] = process.argv.slice(2);
const option = (key: string) => {
  const i = args.indexOf("--" + key);
  return i < 0 ? undefined : args[i + 1];
};
try {
  if (command === "clients") {
    const r = await requestWorkspace();
    console.log(JSON.stringify(r.data.clients, null, 2));
  } else if (command === "brief") {
    const client = option("client"),
      date = option("date") || new Date().toISOString().slice(0, 10);
    if (!client) throw Error("Choose a client with --client northstar.");
    console.log(
      await requestWorkspace(
        undefined,
        undefined,
        "?export=brief&client=" + encodeURIComponent(client) + "&date=" + date,
      ),
    );
  } else if (command === "import") {
    const file = option("file"),
      client = option("client"),
      kind = option("kind") || "meeting";
    if (!file || !client || !["meeting", "event"].includes(kind))
      throw Error(
        "Use import --file record.json --client northstar --kind meeting|event.",
      );
    await requestWorkspace();
    const result = await requestWorkspace(kind + ".import", {
      ...JSON.parse(await fs.readFile(file, "utf8")),
      client_id: client,
    });
    console.log(JSON.stringify(result.result, null, 2));
  } else if (command === "sync-fireflies") {
    const client = option("client"),
      id = option("transcript");
    if (!client || !id || !process.env.FIREFLIES_API_KEY)
      throw Error(
        "Provide --client, --transcript and a server-side FIREFLIES_API_KEY.",
      );
    const record = await fetchFireflies(
      id,
      client,
      process.env.FIREFLIES_API_KEY,
    );
    await requestWorkspace();
    console.log(
      JSON.stringify(
        (await requestWorkspace("meeting.import", record)).result,
        null,
        2,
      ),
    );
  } else if (command === "sync-calendly") {
    const client = option("client"),
      uri = option("event"),
      zone = option("timezone");
    if (!client || !uri || !zone || !process.env.CALENDLY_API_KEY)
      throw Error(
        "Provide --client, --event, --timezone and a server-side CALENDLY_API_KEY.",
      );
    const record = await fetchCalendly(
      uri,
      client,
      zone,
      process.env.CALENDLY_API_KEY,
    );
    await requestWorkspace();
    console.log(
      JSON.stringify(
        (await requestWorkspace("event.import", record)).result,
        null,
        2,
      ),
    );
  } else
    console.log(
      "ClientDesk\n  clients\n  brief --client northstar --date YYYY-MM-DD\n  import --file record.json --client northstar --kind meeting\n  sync-fireflies --client northstar --transcript ID\n  sync-calendly --client northstar --event URI --timezone America/Toronto\n\nCLIENTDESK_URL selects the app. CLIENTDESK_SESSION_FILE selects an authorized session cookie file. Default CLI sessions are isolated from browser practice sessions.",
    );
} catch (e) {
  console.error(e instanceof Error ? e.message : "Request failed");
  process.exitCode = 1;
}
