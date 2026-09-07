import { NextResponse } from "next/server";
import { connection, readWorkspace, changeWorkspace } from "@/lib/repository";
import { DomainError, makeBrief } from "@/lib/domain";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
function fail(e: unknown) {
  console.error(
    "ClientDesk request:",
    e instanceof Error ? e.message : "Unknown error",
  );
  return NextResponse.json(
    {
      error:
        e instanceof DomainError
          ? e.message
          : "We could not complete that request. Your draft has been kept. Try again.",
    },
    {
      status: e instanceof DomainError ? e.status : 503,
      headers: { "Cache-Control": "no-store" },
    },
  );
}
export async function GET(req: Request) {
  try {
    const conn = await connection();
    const { data, version } = await readWorkspace(conn);
    const url = new URL(req.url);
    if (url.searchParams.get("export") === "brief") {
      const id = url.searchParams.get("client") || "";
      const date =
        url.searchParams.get("date") || new Date().toISOString().slice(0, 10);
      return new Response(makeBrief(data, id, date), {
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Content-Disposition": 'attachment; filename="client-brief.md"',
          "Cache-Control": "no-store",
        },
      });
    }
    return NextResponse.json(
      {
        data,
        version,
        storage: conn.kind,
        providers: {
          fireflies: Boolean(process.env.FIREFLIES_API_KEY),
          calendly: Boolean(process.env.CALENDLY_API_KEY),
        },
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (e) {
    return fail(e);
  }
}
export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    if (
      origin &&
      new URL(origin).host !==
        (req.headers.get("host") || new URL(req.url).host)
    )
      return NextResponse.json(
        { error: "This request did not come from ClientDesk." },
        { status: 403 },
      );
    if (Number(req.headers.get("content-length") || 0) > 100000)
      return NextResponse.json(
        { error: "That record is too large." },
        { status: 413 },
      );
    const body = await req.text();
    if (body.length > 100000)
      return NextResponse.json(
        { error: "That record is too large." },
        { status: 413 },
      );
    let input;
    try {
      input = JSON.parse(body);
    } catch {
      return NextResponse.json(
        { error: "Provide a valid JSON record." },
        { status: 400 },
      );
    }
    if (!input || typeof input !== "object" || typeof input.action !== "string")
      return NextResponse.json(
        { error: "Provide an action and its fields." },
        { status: 400 },
      );
    const { action, payload } = input;
    const conn = await connection();
    const result = await changeWorkspace(conn, action, payload);
    return NextResponse.json(result, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (e) {
    return fail(e);
  }
}
