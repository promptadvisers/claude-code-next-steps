# ClientDesk specification

Current behavior contract. For the complete plain-English recreation sequence, including local Claude chat, read REBUILD-GUIDE.md. Exact implementation details remain in 03-build/clientdesk and 05-deployment/LOCAL-CLAUDE-CHAT.md.

## Journey and screens
Workspace: three client records, upcoming call, open follow-ups and recent meeting activity. Clients: searchable directory, add client, open client. Client detail: contact, evidence, upcoming meeting and follow-up history. Meetings: available and unavailable evidence; explicit source and time. Follow-ups: open/completed views with status changes. Connections: accurate source status and a validated sample/live JSON import.

## Writes
Task creation has two steps: edit proposal then review exact title, client, meeting, owner and due date. The server validates confirmation, real date, ownership and meeting/client match. A unique operation ID makes an identical retry return the original task; a changed payload using that ID fails. Completion and client creation are server-validated. Preserve drafts on errors.

## Data and identity
Use a dedicated Supabase Postgres project for hosting with per-session anonymous authenticated teaching users and row-level ownership policies. Each teaching user gets their own fictional seed. Local first checkpoint may use an isolated SQLite repository with a signed/unguessable HttpOnly session; this is explicitly a local fallback and never writable on Vercel. Same domain validators apply to both. No use of localStorage for authoritative records. No shared production tables.

Clients: id, workspace/user owner, name, contact, email, sector. Meetings: id, client_id, source, source_id, held_at, title, summary nullable, transcript, status, sync time. Events: source_id, client_id, starts_at, timezone, status. Tasks: id, client_id, meeting_id, title, assignee, due_date, status, operation_id. Store these typed records inside one versioned workspace document per owner, as described in DECISIONS.md. Domain checks validate meeting/client references and source uniqueness; database policies isolate owners and versioned updates prevent lost changes. Unique meeting identity: owner+source+source_id. Separate entity tables were an earlier proposal, not the current implementation.

## Scope of integrations
Keep provider keys server-side. Fireflies transcript and Calendly event adapters validate source fields and explicit client mapping. Demonstrate duplicate handling with fixture imports. Do not claim a live source is connected when no credential is configured. No personal meetings are imported during this build.

## Acceptance
1. Northstar shows the checklist request and source demo-transcript-001.
2. Cedar says transcript unavailable; Atlas has a useful empty state.
3. Review/save/read-back works and repeated save creates one task.
4. Unconfirmed, invalid-date and mismatched meeting requests fail.
5. Another browser session cannot access private task/client IDs.
6. Client creation, search, follow-up completion and brief export work.
7. Duplicate meeting imports update one record; invalid imports leave data intact.
8. At 390px and desktop, content fits and primary controls remain reachable with visible keyboard focus.
9. Hosted writes require durable database storage; no silent file fallback.
10. Every tested claim links to a command result, API response or browser screenshot.

## Local Claude chat

Provide an Ask Claude panel only when the app runs on localhost port 4310 with CLIENTDESK_LOCAL_CHAT enabled. Use the installed Claude Code program in print mode (`claude -p`) and the local subscription login. The Vercel app must never launch this local Claude bridge. The optional hosted Claude route below is a separate backend. This is an execution-location restriction, not a desktop-screen-size restriction.

For each question, the server reads the current authenticated workspace. Supply only the chosen client’s profile, four most recent meetings, up to ten calendar records and twenty tasks, plus the last six messages in that client’s conversation. Keep source IDs. Limit each meeting summary and transcript to 3,000 characters and disclose that records can be excerpted. Do not claim to search the whole database or arbitrary files and attachments.

The assistant cites meeting facts, keeps unknowns and suggestions distinct, and drafts without saving tasks or sending messages. Disable its tools, MCP servers and skills. Use an empty temporary working directory, provide the system instructions explicitly and send input without shell interpolation. Do not inherit API credentials or fall back to API billing. Keep separate per-client conversations in page memory; reload clears them.

Require the matching local request origin, bound request and response sizes, and permit one running reply per app process. Stop or closing the panel cancels the request and subprocess. A stuck process ends after 90 seconds. Errors keep the question available for retry. Preserve the implementation’s model/settings and JSON-result validation in lib/claude-local.ts. Explain that the signed-in plan’s allowance and account billing settings still apply.

### Chat acceptance

1. Local opt-in reveals the panel; Vercel refuses to launch the local Claude bridge. When the hosted extension is configured, Vercel instead routes chat to Railway.
2. A Northstar answer cites demo-transcript-001 and leaves the checklist owner and delivery timing undecided.
3. A question for another client receives only that selected client’s records and conversation.
4. Newly saved records in the same workspace are included on the next question, within the context limits.
5. Unavailable transcripts remain unavailable and excerpt limits are acknowledged.
6. A reply cannot directly write tasks, send messages, use model tools or search project files.
7. Cancel, busy, sign-in failure and process timeout states retain a usable interface and retry path.
8. Refresh clears chat history while saved CRM records remain persisted.

The exact startup and technical invocation are in 05-deployment/LOCAL-CLAUDE-CHAT.md. The copyable implementation prompts are in REBUILD-GUIDE.md and 00-course-map/COURSE-PROMPTS.md.

## Optional hosted Claude chat

Use the Claude Code print mode on a dedicated Railway service while keeping the CRM on Vercel. Reuse the selected-client context limits above. Show Ask Claude with a course access-code field on both phone and desktop. Authenticate Vercel to Railway with a separate server-only credential. Hash owner and visitor identifiers. Keep the model tool list empty and its environment isolated from personal settings, integrations and database secrets. No writes or messages.

Allow one concurrent reply, twenty requests per workspace per hour, thirty per visitor per hour, and one hundred service requests per UTC day. Persist counts on the volume; apply sixty access attempts per minute globally. Cancel after eighty-five seconds on Railway and propagate browser cancellation. Keep questions on errors and never log prompt text. Preserve local Claude as an independent course example.

The full build prompts, account setup, test criteria and actual deployment checkpoint are in `05-deployment/HOSTED-CLAUDE-CHAT.md`. Hosted account authentication and a real end-to-end Vercel answer must pass before claiming the hosted chat works.
