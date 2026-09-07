# Hosting and live setup

Vercel project: clientdesk-course in YOUR_VERCEL_TEAM. Dedicated Supabase project: YOUR_SUPABASE_PROJECT_REF, Canada Central. Existing business databases were not reused.

Environment names: SUPABASE_URL and SUPABASE_ANON_KEY. No service-role key is used by the app. FIREFLIES_API_KEY and CALENDLY_API_KEY are optional operator-side adapter credentials; no live credentials were installed in this build. Never upload .env.local or private session files.

Database migrations are under 03-build/clientdesk/supabase/migrations. They were applied to the dedicated project using the authenticated Supabase CLI Management API. Row-level security is enabled and verified with two authenticated identities and an unauthenticated client. Anonymous practice sign-in is enabled; existing secure email/MFA defaults were retained after reviewing the CLI configuration diff.

Deploy from 03-build/clientdesk. The .vercelignore excludes .data, environment files, dependencies and local build output. Run the production build and test the hosted URL. Record URL, source commit and the actual hosted checks in DEPLOYMENT.json.

This is a course practice deployment with fictional data and isolated visitor workspaces. Named accounts, account recovery, shared workspaces and verified live provider imports are not part of the shipped scope. Real client records need that next identity/rehearsal step.

Rollback: use the Vercel deployment history to promote a known previous deployment. Database migrations are versioned separately; do not drop a database or remove user work as an app rollback.
