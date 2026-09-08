# Independent Claude Desktop rehearsal, 8 September 2026

A separate folder was opened in Claude Desktop's Code tab with Fable 5.1 and Low effort. It began with planning, design and fictional input records, without the finished application source. Claude built a functional local ClientDesk through additive milestone requests, observations, repairs and verification.

This was a grouped and adapted rehearsal of the slide sequence. It was not 63 identical prompts run individually, a complete narrated 237-minute class, or a newly deployed independent cloud app. See PROMPT-COVERAGE.csv for every original prompt and its actual coverage.

## Working result

- Client list and creation/search, sourced meeting evidence, upcoming calls, reviewed tasks saved once and retained after reload, completion, and Markdown briefs.
- Fictional meeting and booking imports, source identifiers, duplicate updates without duplicate records, and invalid-import handling.
- Isolated local practice workspaces and real read-only CLI/MCP tools. A fresh Claude session connected the project server and ran client_evidence and prepare_brief.
- Real local Claude chat with selected-client context, no tools or task writes, source-aware answers, cancellation, retry, and mobile checks. Northstar cites its meeting; Atlas reports no meeting. A new client's panel starts without the prior client's chat; reload clears conversation.
- A real /client-brief invocation in a fresh session, plus unknown-client and impossible-date rejection. Skill example/template and a scratch-tested fixture-validation hook are included.

The instructor retains the independent app in demo-clientdesk-rehearsal under the O’Reilly workspace and source checkpoints in Live Demo Checkpoints beside the course materials. These are distinct from the finished reference supplied in the public repository and kit.

## Verification and evidence

The operator independently reran 22 unit checks, TypeScript checking, production build, 41 HTTP checks and 24 CLI/MCP checks; all passed. Claude's 31 fake-provider chat checks also passed. Separate real chat interactions, actual fresh-session tools/skill calls and desktop/390px browser journeys were observed. A generated Markdown brief was inspected in TextEdit. These checks do not establish behavior in every environment.

The existing hosted reference was separately checked on 8 September: Supabase-backed workspace, real Northstar and Atlas answers, wrong-code rejection, and unchanged task count. The two observed hosted answers took 4.33 and 2.55 seconds. The independent rebuild remains local; its cloud storage and hosted worker have not been implemented or deployed. Hosting prompts now explicitly request the missing database adapter, identity, migrations, tests, worker, login helper, app adapter and access-code UI before configuration.

## What changed in the course

Fifteen slides or their notes were revised, with twelve visible slide changes. The saved-task outcome and full-course scope are explicit. Reference installation is separated from first-generation setup. A helper creates an input-only rebuild with its own Git root. CLI/MCP names and actual paths must agree. Checks must preserve the running demo. Hosting prompts must first create missing implementation files. The teammate prompt points to the published course repository.

The 160-slide deck, speaker script, prompt list, instructor materials and kit use the same revised source. The final deck underwent package, geometry, font, native-table and import validation, plus native PowerPoint visual review. Original assets are retained in Older Versions.

## Teaching recommendation

Use LIVE-DEMO-RUNBOOK.md. The first working loop took roughly ten minutes; the remaining CRM/import milestone took 12 minutes 30 seconds, including repair; CLI/MCP took about four minutes. Show a prepared checkpoint when generation outlasts its teaching point. Keep the complete additive prompts for students' independent work. Generation time is additional to the estimated narrated course timing.

Use separate hostnames or browser profiles for different running copies: cookies are scoped to host, not port. The prepared local pair uses 127.0.0.1:4310 for the complete app and localhost:4313 for the first-loop fallback. CLI/MCP use a separate practice identity. No saved browser workspace, credentials, dependencies or account login are included in source archives.
