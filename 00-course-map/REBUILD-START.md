# Start a separate ClientDesk rebuild

The finished reference and your rebuild have different jobs. The reference contains a runnable app. The rebuild contains the target, design and fictional source records, and Claude writes the application code.

## Prepare before class

Run the reference using START-HERE.md. Keep its tested version available as a fallback. Record the current repository commit. Complete dependency installation, account sign-ins and any hosting setup before the live demonstration.

To prepare a rebuild, use Node 24 and run this from the course-kit root, replacing the destination with a new folder on your computer:

```sh
node 00-course-map/prepare-rebuild.mjs /path/to/ClientDesk-Rebuild
```

The helper refuses to overwrite an existing folder. It copies planning references, design assets, sample records, deployment guides and the small headless/hook teaching exercises. It creates a separate Git root. It copies no completed app, worker, dependency folder, login or environment values. Planning documents use REFERENCE- prefixes so the planning conversation can create BRIEF.md, SPEC.md and MILESTONES.md independently.

Open the new folder in Claude Desktop's Code tab. Select the model and effort you intend to teach. Confirm the selected folder and ask Claude to verify the working directory and Git root before edits. A folder inside an existing repository can otherwise attach the session to that enclosing repository.

## Follow the additive route

1. Use the planning prompts. Name the result explicitly: review a sourced task, choose owner/date, save once and reload. The supplied reference scope defines the later CRM features.
2. Read and approve the generated brief and spec. Resolve ambiguities before authorizing the build. Keep unknown meeting facts separate from user-chosen task fields.
3. Save the plan/design checkpoint. Confirm Git's root is the rebuild itself.
4. Build the foundation and first loop. Ask Claude to create the package scripts, install dependencies and record the resolved versions. A fresh rebuild has no lockfile until installation creates one.
5. Run the checks and inspect the actual app. Continue with the remaining CRM features, imports, CLI/MCP, browser review, storage, chat and skill stages from END-TO-END.md. Every stage needs its prerequisite files and a passing checkpoint.

Use the slide prompts as requests, then inspect the response before continuing. Follow-up prompts are part of the work. A claimed pass needs a test result or an observed user action. The supplied reference's verification does not prove your generated app.

## Keep live waiting manageable

Have the reference and prepared checkpoints ready. Run short planning, evidence and review interactions live. Start dependency installation and app generation ahead of the relevant demonstration, or show a prepared checkpoint and say so. Continue a stalled generation after class.

Only one app can listen on port 4310 at a time. Stop the reference before starting the rebuild there, or use the hosted reference alongside the local rebuild. The local chat bridge specifically expects localhost:4310. The reference chat demo appears before its implementation prompt in the deck; return to that question after building and enabling the rebuild's bridge.

Hosting, account authorization and model allowance are separate from successful local code generation. Keep their untested states explicit. Do not promise that the entire application will generate within a fixed classroom slot.
