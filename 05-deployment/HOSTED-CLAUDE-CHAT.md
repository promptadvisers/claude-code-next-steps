# Hosted Claude chat on Railway

The CRM stays on Vercel. A dedicated Railway service runs **Claude Code in print mode, `claude -p`**. The chat is labeled **Ask Claude** on both phone and desktop. This uses the same model, plain-English context and workflow taught in the Claude course.

Verified release: the dedicated Claude subscription is connected on Railway and the hosted chat is live at https://clientdesk-course.vercel.app. A real browser answer used Northstar’s saved meeting and task records, cited demo-transcript-001, and separated the task deadline from what was agreed in the meeting. Switching to Atlas correctly reported that no meeting records exist. The panel was checked at desktop and 390 × 844 phone width. Authentication survived a fresh Railway deployment. See 04-verification/hosted-claude-live.json for the sanitized receipt.

## Recreate it in plain English

> Add a hosted Ask Claude panel to ClientDesk. Keep the CRM on Vercel and the database on Supabase. Create a separate Railway service that installs Claude Code and runs it in print mode. Before every question, load the visitor’s authenticated workspace and choose only the client they selected. Give Claude those records and the recent conversation, then show its answer in the chat panel. Keep the original local Claude option available for the course.

> Make chat useful for understanding the latest meeting, preparing for a call and drafting a follow-up. Include the client profile, the four latest meetings, up to ten calendar entries and twenty tasks, and the last six conversation messages. Keep each meeting summary and transcript to three thousand characters. Cite meeting source IDs. Say when information is missing or shortened. Separate facts from suggestions. Never imply that a proposed owner or date was agreed.

> Protect hosted chat with a course access code. Keep that code only in the current browser tab, not in a URL or browser storage. Give Vercel a separate private credential for calling Railway. Hash workspace and visitor identifiers before forwarding them. Railway does not need database credentials. Never let a meeting transcript change the assistant’s instructions.

> Run Claude without tools, skills, hooks or MCP connections. Send the question through standard input instead of inserting it into a shell command. Require a successful final JSON answer. A chat reply can suggest or draft; it cannot edit files, save a CRM task or send a message. Keep the existing human review and save flow.

> Allow one answer at a time. Limit a workspace to twenty requests per hour, a visitor to thirty per hour and the service to one hundred requests per UTC day. Keep usage counts on the persistent Railway volume. Limit access-code attempts to sixty per minute globally. Do not log prompts or replies. Cancel work if the visitor stops the answer or the request times out. Keep the question available for retry.

## What headless and print mode mean

Headless means Claude runs without someone operating its interactive conversation screen. ClientDesk still has its own chat panel. The app supplies the request and receives the result; Claude Code still contacts the online Claude service. Headless describes how the program is operated, not its price, permissions or ability to work offline.

Normally `claude` opens a conversation in the terminal. Adding `-p` makes it process the supplied instruction, produce a result and exit. The web app calls that program behind the scenes. Railway supplies the computer that keeps it available when the instructor’s laptop is closed. This still uses the connected account’s allowance and billing settings; it is not unlimited or token-free inference.

The worker uses pinned Claude Code `2.1.263`, Sonnet and low effort. Its actual launch is equivalent to:

```sh
claude --safe-mode -p --output-format json --model sonnet --effort low   --tools '' --strict-mcp-config --mcp-config '{"mcpServers":{}}'   --disable-slash-commands --no-session-persistence   --system-prompt '<the ClientDesk instructions>'
```

The app supplies the selected-client evidence through the program’s input. No question text is interpolated into a shell command. Local Claude has the same tool restrictions. The direct laptop bridge only accepts localhost port 4310; Vercel reaches the separate Railway worker instead.

## Source files

| File | Responsibility |
| --- | --- |
| `03-build/clientdesk/lib/chat.ts` | Selects current client evidence from the authenticated workspace |
| `03-build/clientdesk/lib/chat-hosted.ts` | Calls Railway with private server authentication |
| `03-build/clientdesk/app/api/chat/route.ts` | Chooses local or hosted Claude and checks the request origin |
| `03-build/clientdesk/components/claude-chat.tsx` | Responsive panel, client selector, course code and conversation |
| `03-build/clientdesk-chat/src/claude.ts` | Starts Claude print mode, isolates its environment and validates the answer |
| `03-build/clientdesk-chat/src/server.ts` | Authentication, request limits, cancellation and errors |
| `03-build/clientdesk-chat/src/guard.ts` | Secret comparisons and persistent usage counters |
| `03-build/clientdesk-chat/scripts/login.mjs` | Dedicated Claude subscription sign-in on Railway |
| `03-build/clientdesk-chat/scripts/inspect-tools.mjs` | Checks the actual CLI request against a local fake provider |
| `03-build/clientdesk-chat/Dockerfile` | Node 24, HTTPS certificates and pinned Claude installation |

## Connect the service

> Use the existing Railway account to create a dedicated ClientDesk chat project and a persistent volume at `/data`. Deploy the worker folder. Generate a private service credential and a separate course access code. Store real values in the hosting settings and private local configuration, never in the source or course kit. Help me sign in to Claude Code with the intended subscription, then verify an actual answer before enabling the Vercel release. Do not use an API-key fallback.

Railway project: `clientdesk-chat` (`YOUR_RAILWAY_PROJECT_ID`). Service: `YOUR_RAILWAY_SERVICE_ID`. Environment: `YOUR_RAILWAY_ENVIRONMENT_ID`. Backend: `https://clientdesk-chat-production.up.railway.app`. The backend is not the user-facing app.

Railway requires `CHAT_SERVICE_TOKEN` and `CHAT_ACCESS_CODE`. The dedicated subscription login is stored privately at `/data/claude/.credentials.json`. From the linked worker directory, start sign-in:

```sh
railway ssh node scripts/login.mjs
```

Complete Claude’s browser authorization and supply the returned confirmation code to the waiting terminal. The CLI writes credentials directly to the volume; do not print them, commit them, or copy a personal configuration directory into the image. Each request uses a temporary isolated home and only the dedicated subscription credential. Refreshed credentials return atomically to the volume. Temporary session files are removed after the request. A hard crash can leave temporary files until the container is replaced; this is not a provider-side zero-retention promise.

An alternative documented by Anthropic is `claude setup-token`, whose result can be stored privately as Railway’s `CLAUDE_CODE_OAUTH_TOKEN`. That token authenticates subscription inference for headless scripts. The worker deliberately excludes Anthropic API keys, gateway credentials and cloud-provider credentials from its child environment. There is no API fallback.

Vercel requires `CLIENTDESK_CHAT_URL`, `CLIENTDESK_CHAT_TOKEN` and the exact `CLIENTDESK_APP_ORIGIN`. None is a public-prefixed secret. Once Claude answers correctly on Railway, configure these and deploy the reviewed app. Local opt-in takes precedence on localhost port 4310. Vercel cannot launch the laptop’s CLI.

Account usage limits and any enabled paid extra usage still apply. Railway hosting has its own charges. The shared course code is for a restricted demonstration; named-user production access would require a separate authentication design.

## Prove that it works

> Run tests in both projects and build the app. Verify incorrect origins, missing service credentials and wrong course codes are rejected. Confirm only the selected client enters the context and the actual Claude request has no tools. Sign in to the intended account and ask what Maya requested. Check the cited meeting source. Switch to Atlas and confirm Claude acknowledges that no meeting notes exist. Check Stop, errors and phone-width layout. Deploy Vercel only after this succeeds, then repeat a real question at the live app URL and record the result.

Run `npm test` and `npm run typecheck` in both source folders, plus `npm run build` in `clientdesk`. In the worker, `node --import tsx scripts/inspect-tools.mjs` checks the actual pinned CLI against a fake local provider without paid inference. This checks the tool list and JSON protocol; it does not establish subscription access.

Chat history remains in page memory, separately by client. Saved CRM data stays in Supabase. The supplied context is bounded; chat does not search arbitrary uploaded files or retrieve new meetings from Fireflies on demand.

Official references: [Claude print mode](https://code.claude.com/docs/en/headless), [Claude authentication](https://code.claude.com/docs/en/authentication), [CLI flags](https://code.claude.com/docs/en/cli-reference), [Railway deployment](https://docs.railway.com/cli/deploying), [Railway volumes](https://docs.railway.com/volumes).

## Recover a missing or expired worker login

A reachable `/health` endpoint proves the worker process is running; it does not prove Claude can answer. If the app says the host must reconnect, run the documented Railway login helper with the intended course account, then verify a real question through Vercel.

The worker lets Claude refresh an expired access token when refresh credentials are present. It persists only a changed, valid renewal, never an empty/logout state from a failed process. A request must not overwrite a newer account reconnect. Tests cover these cases in `03-build/clientdesk-chat/tests/credentials.test.ts`. Credentials remain private on the volume; test reports must contain only outcomes, not token values.
