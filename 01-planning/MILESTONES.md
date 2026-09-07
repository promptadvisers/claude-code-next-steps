# Milestones

1. Plan: freeze the job, exclusions, contract and design direction. Save a planning commit.
2. First local journey: directory → evidence → reviewed task → persistent read-back. Show the internal-browser preview.
3. Complete the working surface: clients, meetings, task status, imports, brief export, loading/empty/error states.
4. Verify: domain failures, retry semantics, two-session access and mobile/keyboard checks. Capture evidence.
5. Host: dedicated database, migrations and isolation checks; Vercel preview, then repeat the same journey at its actual URL.
6. Package: exact prompts, implementation log, design files, CLI/MCP/skill and course reference map.

Each milestone records what actually happened in BUILD-LOG.md. A planned step is not a completed step.

## Completed release checkpoints

All six milestones are complete for the scoped practice release. The initial plan is commit a4eb4e2; the final implementation and deployment are recorded in Git and 05-deployment/DEPLOYMENT.json. Vercel’s first project deployment received the production alias automatically; this was recorded and the real hosted journey was verified.

Live provider reads and interactive skill autocomplete remain instructor rehearsal steps. A direct skill invocation has a recorded verification result. Named login, recovery and team sharing remain explicitly excluded from this release.

## Local chat extension after the first hosted release
Add the selected-client Ask Claude panel and local print-mode bridge, verify source citations and client separation, test cancellation and failure states, and confirm the Vercel route stays disabled. The plain-English recreation sequence is REBUILD-GUIDE.md. Technical details and verification are in 05-deployment/LOCAL-CLAUDE-CHAT.md and 04-verification/claude-chat.json.
