# Recreate ClientDesk from beginning to end

This is the current route for the complete course app: a navy CRM, saved client records, reviewed follow-ups, a reusable Claude skill, and Claude print-mode chat on desktop and phone. The web app runs on Vercel, saved workspaces live in Supabase, and a separate Railway worker runs Claude Code. Use fictional data throughout this walkthrough.

All paths below begin inside **Walkthrough Assets**. A project root is simply the main folder you open in Claude Code. A path tells you which folders to open to reach a file. `.md` means a Markdown document: ordinary text with simple formatting. JSON and YAML are structured text formats; ask Claude to write and validate their punctuation.

## Choose how you want to learn

**Run the exact reference:** unzip the course kit and follow step 1. The complete source and lockfiles are included. This reproduces the supplied implementation; account setup and deployment are still yours to complete.

**Build it yourself:** create a separate empty folder named `ClientDesk Rebuild`. Bring in `01-planning`, `02-design`, the sample preparation scripts from `00-course-map`, and the sample data. Preserve the numbered folder structure. Start Claude Code in that new root. Read the reference alongside it, but have Claude create the app and worker through the prompts below. Generated code may differ; compare behavior and design against the spec. Do not claim the reference’s recorded test passes for your new build.

> Help me prepare a separate ClientDesk rebuild folder. Copy the planning documents, design assets and fictional sample data from the course kit. Keep the completed reference available for comparison. Explain which files describe the target and which files are the finished implementation. Do not build the app yet.

## 1. Prepare the machine and inspect the finished experience

Use Node 24 and a signed-in Claude Code installation. Node runs the app’s JavaScript. npm installs the libraries listed in `package.json` and runs its named scripts. `npm ci` installs the versions recorded in the supplied lockfile.

> Read START-HERE.md. Check the software this project needs, help me install anything missing for my operating system, and verify Claude Code is signed into the intended account. Explain any steps I need to complete myself.

In a normal terminal, starting at the reference root:

```sh
node 00-course-map/prepare-demo.mjs
cd 03-build/clientdesk
npm ci
npm test
npm run typecheck
npm run dev
```

Leave the last command running. Open `http://127.0.0.1:4310`. `127.0.0.1` or localhost means this computer; `4310` is the port used by this app. Use a second terminal for other commands. Type English requests in the Claude Code conversation; type shell commands at a normal terminal prompt.

**Check:** open Northstar, inspect a meeting, review a proposed follow-up, save it and reload. In a fresh local copy with no `.env.local`, SQLite saves isolated practice workspaces under the app’s `.data` folder. Do not copy that folder into a release.

## 2. Write the brief, specification and milestones

Read `01-planning/BRIEF.md`, `SPEC.md`, `MILESTONES.md`, `DECISIONS.md` and `REBUILD-GUIDE.md`. A brief describes the useful job. A specification states the behavior and boundaries. A milestone is a small piece you can demonstrate and check.

> We are building a CRM for a solo consultant: clients, meetings, upcoming calls and reviewed follow-ups. Read the brief and sample data. Identify missing decisions and ask about blockers. Write a specification with scope, data, acceptance checks, milestones and failure behavior. Do not build yet.

Enter Plan mode using your Claude Code interface’s mode control; in the terminal, Shift+Tab cycles permission modes. Verify the displayed mode. Answer the scope questions, then ask Claude to save the approved decisions to `01-planning/SPEC.md` and `MILESTONES.md`. Keep project guidance in `CLAUDE.md`; the full feature specification belongs in the planning folder.

**Check:** someone else can explain the client journey, what is excluded, how a task is reviewed, and how each milestone will be tested.

## 3. Save a concrete design direction

Use `02-design/DESIGN.md` and the included assets. The app uses deep navy, Manrope headings, DM Sans body text and clear, quiet surfaces. The deck uses its separate O’Reilly red palette.

> Read the design guide and reference assets. Show a desktop and phone layout that makes the latest meeting, its source and the next action easy to find. Preserve the navy palette and named fonts. Include loading, empty, error and successful-save states. Save the decisions in the design folder before building.

Create or review `.claude/rules/interface.md` so later edits follow the same design checks. A rule guides Claude; the app’s code enforces access and save behavior.

**Check:** the design describes hierarchy and behavior, not only a mood or color.

## 4. Set up Git and GitHub

Git records local versions called commits. GitHub hosts a repository containing those files and history. The GitHub CLI, `gh`, is a program Claude can use to manage that connection.

> Help me connect this project to GitHub. Check what is installed, set up anything missing, guide me through signing in, and verify the connected account. Create a private repository for this rebuild after showing me the account, name and visibility.

Before the first commit, exclude real environment files, credentials, `.data`, dependencies, build output and private hosting configuration. Review the proposed file list. The plain-English setup request is sufficient; `/install github` is not a built-in command. `/install-github-app` concerns Claude GitHub Actions and is a separate workflow.

**Check:** the correct private repository contains the plan and design, with no private values or generated dependency folders.

## 5. Build the first complete client loop

> Create `03-build/clientdesk` using Next.js, TypeScript and Node 24. Establish the package scripts, page, server routes and sample storage described in SPEC.md. Start it on port 4310. Then implement one loop: open Northstar, read its meeting and source, review a proposed task, confirm it, save it, and read it back after reload. Show the checks before starting the next milestone.

The exact reference versions are in `package.json` and `package-lock.json`. For a fresh reconstruction, record and test its own resolved versions. Inspect `app`, `components`, `lib`, `scripts` and `tests` in the reference to understand responsibilities.

**Check:** the loop works as a user action, including reload; an attractive static screen is insufficient.

## 6. Complete the remaining CRM and import behavior

> Add every remaining required screen and action from SPEC.md: client list and details, client creation, meetings, upcoming calls, follow-ups, Connections and Markdown brief export. Support reviewed task creation and completion. Keep meeting facts separate from proposed owners and dates. Show loading, missing-data and retry behavior.

Import the supplied fictional meeting and event. Retain their source and source ID. Import the same meeting again; update the matching record rather than adding a duplicate. Test missing evidence and a client with no meetings. Real Fireflies or Calendly credentials are optional; a successful sample import does not verify a live account. If you add live reads, choose a specific teaching record, configure the appropriate server credential privately, verify the connected account and compare the imported source with the provider.

**Check:** all required features in SPEC.md have a demonstrated result. Record missing features rather than silently dropping them.

## 7. Give Claude CLI and MCP access

> Build a CLI and MCP server that reuse the app’s workspace API. Support client evidence and a preparation brief. Preserve source IDs and missing-information responses. Reuse the documented practice identity handling and test normal and invalid inputs.

Reference files: `03-build/clientdesk/scripts/clientdesk.ts`, `mcp.mjs`, and `http-session.mjs`. Keep the app running. From the app folder, inspect `npm run cli -- --help` for available commands. The project-root `.mcp.json` starts `node` with `03-build/clientdesk/scripts/mcp.mjs` and sets `CLIENTDESK_URL` to `http://127.0.0.1:4310`. Start or restart Claude Code from the project root, review and approve the trusted server, then inspect `/mcp`.

> Use ClientDesk tools to find Northstar’s latest meeting. Cite the source ID, explain what follow-up is supported, and identify what remains undecided. Do not save a task.

**Check:** `client_evidence` is discoverable and returns the expected source. CLI and MCP share their practice session; the browser normally has a different identity. Do not expect an import in one workspace to appear in the other.

## 8. Inspect the actual interface and run checks

> Open the actual Northstar client page in Chrome. Review desktop and a phone-sized browser area, 390 pixels wide. Check whether I can find the latest meeting, see its source, reach Review and use the keyboard. Record a pass or a specific observed defect. Fix defects and repeat the same check.

If native computer use is available, open the exported brief in a document viewer and inspect the actual file there. If the device or account does not support it, perform that inspection manually and record the same evidence. Browser review and native computer use operate different surfaces.

From the app folder run `npm test`, `npm run typecheck` and `npm run build`. With the local server running, use a second terminal to run `npm run test:http`. The verification folder describes the checks. Repeat checks appropriate to each subsequent change.

**Check:** app behavior, narrow layout, saved records and failure cases work. Existing reference receipts describe the reference, not your reconstruction.

## 9. Create the hosted database

Create your own dedicated Supabase project. A migration is a recorded database setup/change. In the SQL Editor, run the full files in this order:

1. `03-build/clientdesk/supabase/migrations/202609060001_workspace.sql`
2. `03-build/clientdesk/supabase/migrations/202609060002_workspace_shape.sql`

Enable anonymous sign-ins in Authentication settings. Get the project URL and legacy anonymous key from project/API settings. This implementation expects the names `SUPABASE_URL` and `SUPABASE_ANON_KEY`. It does not need a service-role key.

> Apply the supplied database migrations to my dedicated project. Confirm anonymous sign-in is enabled. Verify that two different identities cannot read or change each other’s workspace, and that unauthenticated access is rejected. Record the result without recording private keys.

**Check:** both migrations succeed and access checks pass. This is an isolated anonymous practice workspace, not a named-user team product with invitations and account recovery. See `05-deployment/SETUP.md`.

## 10. Deploy the CRM to Vercel

Import your reviewed repository with **Add New Project**. Choose root directory `03-build/clientdesk`, Next.js and Node 24. Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` in environment settings for the environment you will deploy. Environment variables are named settings supplied outside the source code. The `.env.example` file lists names; real local values go in ignored `.env.local`.

> Review the target Vercel account, project, root directory and environment settings. Run the app checks and build. Deploy the reviewed version, record its URL and source version, then verify a saved task survives reload at that URL.

**Check:** the actual hosted app uses Supabase, with a fresh browser identity. A preview and a production deployment can have different settings. Later variable changes require a new deployment. Rolling back app code does not undo a database migration; review database changes separately.

## 11. Understand headless and prove local chat

**Headless means Claude runs without someone operating its interactive conversation screen.** Your app supplies a request and receives the result. ClientDesk still has its own chat panel. Claude Code still contacts the online Claude service.

In an ordinary terminal, `claude -p "Explain a CRM in one sentence."` is the small print-mode example. `-p` is short for `--print`. The prepared scripts in `00-course-map/headless-example` show one request and a request with a source file. Input means the text given to the program; output means the text it returns. JSON output gives the app a structured result it can check.

> Add a local Ask Claude panel that sends only the selected client’s records and recent conversation to the signed-in Claude Code CLI. Run it without tools or writes. Cite meeting source IDs, acknowledge missing information and distinguish facts from suggestions. Include Stop, useful errors and a timeout.

Follow `05-deployment/LOCAL-CLAUDE-CHAT.md`: sign into the intended local Claude subscription, opt in with `CLIENTDESK_LOCAL_CHAT=1` in the app’s ignored `.env.local`, then restart the local app. The local route only operates on localhost port 4310. It does not make your laptop callable by Vercel.

**Check:** Northstar returns a sourced answer and Atlas acknowledges no meeting notes. Print mode does not itself remove tools or enforce read-only behavior; the reference worker implements those restrictions separately. Usage counts against the connected account and its billing settings.

## 12. Build and deploy the Railway chat worker

Use `05-deployment/HOSTED-CLAUDE-CHAT.md` as the full worker specification. Source: `03-build/clientdesk-chat`. Its Dockerfile defines the deployment environment. The dependency lock pins Claude Code 2.1.263; the reference selects Sonnet and low effort.

> Build the dedicated Claude worker with authenticated requests, selected-client evidence, isolated settings, no tools or MCP, no API-key fallback, validated final output, cancellation, timeouts and the documented request limits. Run its tests and type checks. Inspect the actual tool configuration before connecting an account.

From the worker folder run `npm ci`, `npm test`, `npm run typecheck`, and `node --import tsx scripts/inspect-tools.mjs`. The inspection uses a fake local provider; it verifies protocol and tool restrictions, not subscription access.

In your Railway account create a project/service from the repository, set its root to `03-build/clientdesk-chat`, use the Dockerfile, and attach a persistent volume mounted at `/data`. Generate a service domain. Railway supplies the network port through `PORT` (the image defaults to 8080). Configure:

| Railway variable | Purpose |
| --- | --- |
| `CHAT_SERVICE_TOKEN` | A generated private credential used only by Vercel to call Railway |
| `CHAT_ACCESS_CODE` | A different private code for approved course visitors |
| `DATA_DIR` | `/data`, already the image default |
| `CLAUDE_AUTH_FILE` | `/data/claude/.credentials.json`, already the image default |

Keep values in hosting settings and private local configuration, never in the kit. Deploy the worker. A volume preserves login and usage counters across redeployments.

**Check:** the service runs, the volume is mounted and configuration is present. A healthy service still needs a real Claude answer.

## 13. Sign Claude in on Railway

> Help me connect the intended Claude subscription to this Railway worker using the supplied login helper. Keep credentials on the volume. Verify a real answer, redeploy, and verify another answer so we know sign-in survived.

First tell Claude:

> Help me install the Railway CLI for my operating system. Guide me through signing in. Link this worker folder to the intended project, environment and service. Show railway status so I can verify the destination before opening a remote session.

Terminal reference, with Node already installed:

```sh
npm install -g @railway/cli
railway login
railway link
railway status
```

Choose your worker project and service in the prompts. These commands run on your laptop; the following `ssh` command opens the helper on Railway. See the [official Railway CLI guide](https://docs.railway.com/cli).

From the linked worker directory, run:

```sh
railway ssh node scripts/login.mjs
```

Complete the browser authorization and return its confirmation code to the waiting terminal. The helper stores the dedicated credentials on the volume. Do not print the file, copy personal Claude settings into the image, or put credentials in Git. If login expires, repeat the helper. The full hosting guide also documents the subscription setup-token alternative.

**Check:** an actual answer works after a fresh Railway deployment. The connected account’s allowance and any enabled paid extra usage apply; Railway also has hosting charges. Use a restricted course deployment. A shared course code does not provide named-user production authorization.

## 14. Wire the two deployments together

In Vercel server environment settings, set:

| Variable | Your value |
| --- | --- |
| `CLIENTDESK_CHAT_URL` | Your Railway service URL |
| `CLIENTDESK_CHAT_TOKEN` | Exactly the Railway `CHAT_SERVICE_TOKEN` value |
| `CLIENTDESK_APP_ORIGIN` | Exact app origin, such as `https://your-app.vercel.app`, without a trailing slash or page path |

Redeploy Vercel. Configure the actual environment being tested; a different preview hostname must match its own origin setting. Visitors enter the course code in the Ask Claude panel. It stays in that tab’s memory, not a URL. Railway has no database credentials: Vercel loads the authenticated workspace and forwards the selected evidence.

The packet contains the client profile, up to four latest meetings, ten calendar entries, twenty tasks and the last six chat messages. Each meeting summary and transcript is limited to 3,000 characters. It does not search arbitrary course files or fetch new provider meetings. Page-memory chat history is separate by client and resets on reload; saved CRM records stay in Supabase.

**Check:** at your Vercel URL, ask what Maya requested and require a source. Switch to Atlas and check the missing-data response. Try a wrong code, Stop, retry, desktop and phone width. Save a task separately and reload it. Record results in `04-verification`.

## 15. Package the repeatable skill and release

> Turn the tested client-brief method into `.claude/skills/client-brief/SKILL.md`. Give it a clear name, description and client/date argument hint. Include the brief template, a sourced example and normal, invalid and missing-data cases. Keep task saves and messages outside this skill.

Run `/client-brief` with `northstar` and the date in `00-course-map/DEMO_CONTEXT.md`. A hint shows what to enter; instructions still validate the values. Review the interface rule and the opt-in hook example in `.claude/settings.example.json`. Read `00-course-map/check-fixture.mjs` before enabling it; merge its reviewed hook configuration into `.claude/settings.json` without replacing unrelated settings. Test with `00-course-map/test-hook.mjs` and an exercise copy.

> In a fresh Claude conversation, follow only the release README and run the documented example. Record every missing step. Fix the documentation, rerun the cases, then prepare a reviewed version containing source, plan, design, setup and verification.

**Check:** another person can run the app and skill using only the package. A release tag identifies a reviewed code version. Share its setup and known limitations alongside it.

## Locate a failure before changing the prompt

| Symptom | Inspect |
| --- | --- |
| Local page does not open | Node 24, dependencies, correct folder, running server and port 4310 |
| MCP cannot connect | Project root, `.mcp.json`, installed dependencies and running app |
| Import seems absent | Browser identity versus the separate CLI/MCP practice identity |
| Hosted save fails | Supabase variables, both migrations, anonymous sign-in and access rules |
| Chat is unavailable | Vercel chat variables, exact origin and a new deployment |
| Course code is rejected | Code and Railway settings; do not paste the code into a URL |
| Worker runs but Claude fails | Subscription login, allowance and sanitized service errors |
| Login vanishes on redeploy | `/data` volume mount and credential path |
| Answer invents a deadline | Selected evidence, task-versus-meeting distinction and answer review |

For instructor narration and exact slide prompts, use `INSTRUCTOR-SCRIPT.md` and `COURSE-PROMPTS.md`. The expanded deck has additional setup explanations; rehearse pacing again before delivery. The source and guides support reconstruction; the documented live reference checks do not replace tests on a learner’s own deployment.
