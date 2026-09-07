# One project, one course path

Open **Walkthrough Assets** as your Claude Code project root. All paths in the slides are relative to it. The portable ClientDesk Course Kit contains the same folder and code. Older Versions is historical material, not an alternate setup route.

Read **END-TO-END.md** for both routes: run the complete reference or construct a separate rebuild. It includes the app, database, CLI/MCP, Vercel, Railway and skill release.

## Before the session
Use Node 24 and a current signed-in Claude Code installation. Keep a separate exercise copy so the completed reference remains available. From Walkthrough Assets:

```sh
node 00-course-map/prepare-demo.mjs
cd 03-build/clientdesk
npm ci
npm test
npm run typecheck
npm run dev
```

Open http://127.0.0.1:4310. Dependencies and account setup happen before the labs. With no .env.local, the app uses isolated SQLite practice storage. The exported kit includes no credentials or private workspace data. Local chat is optional: follow 05-deployment/LOCAL-CLAUDE-CHAT.md. Hosted setup is in 05-deployment/SETUP.md.

## Follow the same sequence as the deck
1. Read 01-planning/BRIEF.md and 01-planning/SPEC.md; review 01-planning/MILESTONES.md.
2. Inspect 02-design/DESIGN.md, fonts, tokens and the interface rule.
3. Open Northstar, read its source, prepare a proposal, review and save, then reload.
4. In Connections, import the supplied fictional meeting twice. Keep its source ID; confirm the second import does not add another record.
5. Inspect the real client page at 390 pixels. Record a pass or an observed defect; no hidden broken-layout mode is required.
6. Export a brief, open the Markdown file and inspect it in its viewer.
7. Use Ask Claude locally and explain -p with the prepared scripts. Continue through the Railway setup to reproduce hosted chat; verify an actual answer at your own Vercel URL.
8. Start Claude Code at the project root. Use /client-brief with the date in 00-course-map/DEMO_CONTEXT.md. Follow 00-course-map/labs/ for the six exercises.

## Identities and honest results
The browser has its own practice identity. CLI and MCP share a separate practice session by default. Do not expect an import in one to appear in the other. Inspect results within the same workspace.

Fireflies and Calendly live reads are optional extensions, not part of the required classroom route. Their adapters exist; a live account read needs its own selected teaching record and verification. This release has anonymous visitor isolation, not named login, account recovery or shared team workspaces.

The reference contains completed implementation and recorded receipts. A prompt in a new exercise copy does not inherit those passes. If a live build stalls, show the reference explicitly and record the unfinished step.

## Interface and GitHub primer

Read CONNECTION-PRIMER.md for the API/CLI/MCP relationship, the actual ClientDesk request path, and the plain-English prompt for GitHub setup. The current deck introduces these before the build; use COURSE-PROMPTS.md for current slide numbers.

## Recreate the complete app
Read 01-planning/REBUILD-GUIDE.md for the consolidated plain-English instructions, including the navy design, database behavior, local Claude print-mode chat, GitHub setup and Vercel deployment. SPEC.md in the same planning folder is the current behavior contract.

The complete hosted path continues through `05-deployment/HOSTED-CLAUDE-CHAT.md`: a verified Claude print-mode worker on Railway serves the Vercel chat. Local print mode is the first teaching milestone. Follow `END-TO-END.md` for the full ordered sequence, including your own account setup.
