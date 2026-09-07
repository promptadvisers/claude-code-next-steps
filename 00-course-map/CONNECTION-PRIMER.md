# Interfaces and the GitHub connection

## API, CLI, and MCP

An API defines requests software can make for data or actions. A CLI is a program operated with text commands. MCP is a standard an AI application uses to discover tools and call them. A skill adds instructions for a recurring job.

Typical routes are Claude → CLI → service API and Claude → MCP server → service API. An MCP server can also wrap a CLI. Tools may operate on local files or databases without an external API. These are related interfaces, not a required installation ladder.

In this build, Claude calls client_evidence with client_id northstar. scripts/mcp.mjs uses scripts/http-session.mjs to request /api/workspace, then selects the client's records. The original source ID remains available for the answer. The CLI uses the same API helper. Browser and CLI/MCP practice identities are separate.

Teaching request:

> Find Northstar’s latest meeting. Cite the source ID and tell me what is still undecided.

Expected interpretation of the prepared fictional record: Maya requested an onboarding checklist; owner and delivery timing remain undecided. Source: demo-transcript-001. This is a sample-import demonstration, not a live Fireflies read.

## Git, GitHub, and gh

Git records local commits. GitHub hosts repositories for sharing and review. A repository contains the project files and version history. The GitHub CLI, gh, lets Claude work with GitHub from the terminal. Vercel runs our deployed app.

Use this prompt in Claude Code at the project root:

> Help me connect this project to GitHub. Check what’s already installed, set up anything missing, guide me through signing in, and verify the connection. Explain any steps I need to complete myself.

Complete any required browser sign-in yourself. Check that Claude identifies the intended account and verifies GitHub access. The next course prompt creates or connects the reviewed repository. You do not need to memorize platform-specific installation commands.

Instructor distinction: /install-github-app configures Claude GitHub Actions for a repository. It is separate from this initial local GitHub connection. /install github is not the documented built-in command. Keep this distinction in instructor notes rather than presenting it as the setup path.

Prepare the teaching machine before class. During the two-minute setup segment, demonstrate the prompt and successful account check. If installation or sign-in takes longer, continue on the prepared teaching machine and complete the attendee setup separately.

## Sources

- https://modelcontextprotocol.io/docs/learn/architecture
- https://docs.github.com/en/get-started/start-your-journey/about-github-and-git
- https://cli.github.com/
- https://cli.github.com/manual/gh_auth_login
- https://code.claude.com/docs/en/commands
- 03-build/clientdesk/scripts/mcp.mjs
- 03-build/clientdesk/scripts/http-session.mjs

The code paths above are relative to Walkthrough Assets. The diagrams and expected answer are teaching explanations, not new live execution receipts.
