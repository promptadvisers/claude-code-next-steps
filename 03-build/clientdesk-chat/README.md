# ClientDesk hosted chat

A restricted Railway service using Claude Code print mode. Vercel supplies one selected client’s evidence; this service returns a read-only answer. It has no database credentials and the model has no tools.

Read [the plain-English setup and recreation guide](../../05-deployment/HOSTED-CLAUDE-CHAT.md) before connecting an account. Deployment alone does not establish a working model login.

Use Node 24. Run `npm ci`, `npm test` and `npm run typecheck`. For Railway, deploy this directory, attach `/data`, set the private service credential and access code, then connect the intended Claude account. `.env.example` lists the variable names without real values. `npm start` runs the service.

The service allows one concurrent reply and bounded usage. Tests use a local mock provider, including a check of the actual Claude CLI request’s empty tool list. No paid inference is needed for those tests.
