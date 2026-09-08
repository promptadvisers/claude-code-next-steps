# Before you join

Welcome to **Claude Code for Everyone: Next Steps** with Mark Kashef, Prompt Advisers.

You will build ClientDesk, a small CRM that brings clients, meetings, upcoming calls and reviewed follow-ups together. The course shows how to plan the build, give Claude a useful specification, inspect the result, connect tools, deploy it and share a reusable skill.

## What to prepare

- **A computer and browser.** You need to create a folder, open a terminal and run a local web app. The course explains those surfaces as they appear.
- **Node.js 24 and npm.** Check `node --version` and `npm --version`. Node runs the app; npm installs its libraries. Use Node 24 for the supplied reference.
- **Claude Code, signed into your own intended account.** Familiarity with starting a conversation, opening a project and asking Claude to edit a file is the assumed Level 1 foundation. Authentication is yours to complete privately.
- **A copy of this repository.** Use **Code → Download ZIP** on GitHub and extract it, or use the clone command in [README.md](README.md). Keep the completed reference and a separate exercise copy.

Official starting points: [Node.js downloads](https://nodejs.org/en/download) and [Claude Code setup](https://code.claude.com/docs/en/setup).

You do **not** need Fireflies, Calendly, Vercel, Supabase or Railway credentials to try the local CRM. Fictional sample data is included. If you want to reproduce the hosted extension during the course, prepare your own GitHub, Supabase, Vercel and Railway accounts and read the [deployment stages](00-course-map/END-TO-END.md). Hosting and Claude usage may have costs. Print mode uses account allowance; it does not make inference free.

## Check the reference before class

Open a normal terminal in this repository root:

```sh
node 00-course-map/prepare-demo.mjs
cd 03-build/clientdesk
npm ci
npm test
npm run typecheck
npm run dev
```

Leave the final command running and open [http://127.0.0.1:4310](http://127.0.0.1:4310). Open Northstar, inspect the meeting source, review a follow-up, save it and reload. This confirms that the working reference is available if a live exercise needs a comparison.

**Keep real client data out of your exercise copy.** Do not upload passwords, access codes, environment files or account sessions to GitHub. The supplied `.env.example` files document configuration names with empty values.

## Prepare an independent rebuild

Follow [REBUILD-START.md](00-course-map/REBUILD-START.md) to create a separate folder with the supplied planning, design and fictional data. The helper gives it its own Git root and copies no finished application code. Keep the working reference available. Setup prompts for the reference do not apply to an empty rebuild.

Dependency installation, generation and debugging take variable time. Use prepared checkpoints during class and continue the full additive build afterward. Stop the reference before running the rebuild on the same local port 4310.

## What to read, and what can wait

| Before class | During the build |
| --- | --- |
| [Brief](01-planning/BRIEF.md): who we are building for | [Specification](01-planning/SPEC.md): complete behavior and checks |
| [Design direction](02-design/DESIGN.md): what we are aiming for | [Milestones](01-planning/MILESTONES.md) and [decisions](01-planning/DECISIONS.md) |
| [Start here](00-course-map/START-HERE.md): project orientation | [End-to-end guide](00-course-map/END-TO-END.md): the full ordered route |
| [Slides](slides/ClientDesk_Course_End_to_End.pptx): optional preview | [Exact prompts](00-course-map/COURSE-PROMPTS.md): requests to use with Claude |

If hosting vocabulary is new to you, the optional [plain-English hosting guide](05-deployment/HOSTING-IN-PLAIN-ENGLISH.md) explains the worker, saved folder and access codes before the setup instructions.

You do not need to memorize the source or complete the hosted deployment before joining. The files are here so you can follow the explanation, repeat a step and continue afterward.

## About the shared demo

[The live reference](https://clientdesk-course.vercel.app) uses fictional practice workspaces. Ask Claude works on desktop and phone when the hosted service is available and requires a course access code supplied separately by the instructor. That code is not in this repository. You can use the local CRM without it and optionally enable local Claude chat with your own account.

[Return to the project overview](README.md)
