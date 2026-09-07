# ClientDesk build brief

## The person and the job
Alex, a solo consultant, needs to prepare and track the next client follow-up without losing the supporting meeting evidence. Open Northstar, read Maya’s request, propose the next action, confirm its owner and date, save it once, and find it after a refresh.

## This release
A polished working CRM: client directory and creation, meeting evidence, upcoming calls, follow-up review and completion, a source-backed brief export, and an integration import path. Seed fictional Northstar, Cedar and Atlas cases for teaching. Preserve missing evidence rather than inventing a summary.

## Boundaries
No billing, campaigns, automatic email or unattended task creation. The first browser review uses localhost. Vercel is the requested host. Cloud storage must be isolated from existing business projects and must enforce visitor/workspace boundaries.

## Definition of useful
A person can complete the client journey with a keyboard at desktop and phone widths. Saved work survives a reload. Another session cannot read or mutate the first session’s records. The folder preserves the actual plan, design, implementation decisions and evidence so the course can replay them.

## Local conversation extension
Ask Claude about the selected client’s meetings, calendar records and tasks. Supply current workspace evidence to the locally installed Claude Code program in print mode. Keep the answer sourced and read-only. This optional local feature is part of the recreation guide; it is disabled on Vercel. See SPEC.md and REBUILD-GUIDE.md.

## Hosted chat extension

Use the Claude Code print mode on Railway so the Vercel app can offer the same selected-client questions from a phone or desktop. Keep this optional extension distinct from the local execution option; both run Claude print mode. Restrict demonstration access and usage. Account sign-in and a real hosted answer are required before the feature is called live. See 05-deployment/HOSTED-CLAUDE-CHAT.md.
