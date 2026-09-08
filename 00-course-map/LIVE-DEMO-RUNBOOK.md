# Run ClientDesk with prepared checkpoints

The independent rehearsal used Claude Desktop, Code tab, Fable 5.1, Low effort, in a new project with no finished app source. It is evidence about one run, not a promise of future model timing.

## Before class

1. Clone the published course repository and record `git log -1 --oneline`. Follow BEFORE-YOU-JOIN.md and START-HERE.md. Install dependencies and authenticate before the session.
2. Keep the finished reference running or use the hosted reference. Verify Northstar, Review → Save → Reload, brief export, and one real chat answer on the teaching account.
3. Prepare a separate rebuild with `prepare-rebuild.mjs`. Select that folder in Claude Desktop and verify its own Git root. Choose the intended model and effort.
4. Have the approved plan, first working loop and complete CRM checkpoints available. Checkpoint archives contain source, not dependencies or saved browser records; extract each into its own folder and follow its README before class. Do not switch archives over an active working directory.
5. Only one app can use localhost:4310. Stop the local reference before starting a rebuild, or use the hosted reference beside it. If two copies run on different ports, use different hostnames or browser profiles: ports do not isolate cookies. CLI/MCP use a separate practice identity from the browser; matching client names do not mean shared browser tasks.

## What to run live

Use the planning question and explicit saved-task brief. Read the output and show how an ambiguous answer is clarified. Show the generated specification and its acceptance checks before approving code generation.

Start a build when useful, then discuss its checks and source files. If it is still generating when the teaching point is complete, move to the prepared checkpoint and identify it as prepared. Keep the full additive prompts for learners to run independently.

Demonstrate the saved-task loop, duplicate meeting import, an unavailable transcript, a missing meeting, and a narrow browser check. Ask one sourced tool or chat question. If the account is slow or unavailable, use the saved result with its source and label it as recorded.

Demonstrate cloud setup against the reviewed reference resources. A successful local rebuild does not establish a new Supabase/Vercel/Railway deployment. Keep account authorization and infrastructure creation outside the live critical path.

## Observed build interruptions

- The original brief produced an email-oriented outcome and excluded later scope. The revised prompt explicitly requests an owned, dated task saved once and present after reload. A separate fresh Fable Low session produced the correct brief.
- An empty rebuild has no package.json or lockfile. Reference setup uses `npm ci`; first generation creates the package and lockfile with installation before repeatable setup is possible.
- A folder nested in another Git repository can attach Claude Desktop to its parent. The rebuild helper creates its own Git root before opening the session.
- Concurrent production build, test server and live server shared Next output and caused a real 404. Claude split their output directories, restarted the demo, and preserved existing tasks. Recheck the same browser workspace after verification commands.
- The CRM milestone needed additional source-validation and mobile-action fixes. Browser tools also interrupted; recorded checks distinguish Claude’s observations from the independent verification.
- The first-loop generation and checks took roughly ten minutes. The remaining CRM/import milestone took 12 minutes 30 seconds including repair; CLI/MCP took about four minutes. The narrated course’s 237-minute estimate is not a completed delivery rehearsal and does not include every learner’s generation or setup time.

## Resume a delayed build

Use a bounded follow-up: “Compare the current app with this milestone. Identify the first failing acceptance check, fix its cause, repeat the affected check, and stop at the working checkpoint. Preserve the saved records. Report anything still untested.”

After every milestone, keep the commit, command results, an observed browser journey and known limitations together. Use the prompt coverage report to distinguish grouped/adapted requests from exact individual prompt runs.

## Rehearsal results

Read [the independent rehearsal report](REHEARSAL-2026-09-08.md) and [per-prompt coverage](PROMPT-COVERAGE.csv). The finished hosted reference and independent local build have separate evidence.
