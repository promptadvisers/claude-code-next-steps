# ClientDesk

A working course CRM: clients, meeting evidence, upcoming calls, reviewed follow-ups, source imports and brief export. The original three teaching clients are fictional.

## Start locally

Use Node 24. From this directory:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4310. Without cloud settings, isolated practice sessions persist in .data/clientdesk.sqlite. With SUPABASE_URL and SUPABASE_ANON_KEY in .env.local, the app uses the dedicated Supabase database. The hosted build refuses the local fallback.

## Build and verify

```sh
npm test
npm run typecheck
npm run build
npm run test:http
node scripts/verify-mcp.mjs
```

Database policy checks use `node scripts/verify-rls.mjs` with the configured teaching project. Tests create separate fictional practice identities. Provider adapter tests do not fetch live personal records.

## Identity and storage

Every browser/origin gets its own anonymous authenticated practice workspace. Cookies are HttpOnly; clearing cookies or changing browsers creates a new workspace. Named login, team sharing and account recovery are not part of this release. A versioned workspace document provides atomic writes and owner isolation. See ../../01-planning/DECISIONS.md for the tradeoff from the earlier normalized-table proposal.

## CLI and MCP

`npm run cli -- clients` opens an isolated CLI practice session; `npm run cli -- brief --client northstar --date YYYY-MM-DD` exports its sourced brief. The session cookie file is kept in ~/.config/clientdesk-course, outside the repo. The CLI and MCP share that file by default. Browser sessions remain separate unless you deliberately provide an authorized session file through CLIENTDESK_SESSION_FILE. Never paste its contents into slides or commit it.

Use `npm run cli -- import --file record.json --client northstar --kind meeting` to import one normalized record. Fireflies and Calendly commands are listed by `npm run cli`; they require explicitly supplied server-side keys and client mapping. These imports modify only the selected CRM workspace and do not create a provider event or send a message.

The MCP server is `node scripts/mcp.mjs`. It exposes list_clients, client_evidence and client_brief. Its methods are read-only; the initial authorized session may initialize its own fictional workspace. A stdio handshake and actual Northstar brief are tested in scripts/verify-mcp.mjs. The project skill was discovered and a direct /client-brief invocation returned a sourced brief during the course revision; see 04-verification/course-skill-direct-invocation.json. Check interactive autocomplete in the delivery environment.

## Design

Self-hosted Manrope and DM Sans. Official Fireflies/Calendly source marks; no stock portraits. Design files and screenshots are preserved under ../../02-design and ../../04-verification. Main copyable prompts and instructor steps are under ../../00-course-map.
