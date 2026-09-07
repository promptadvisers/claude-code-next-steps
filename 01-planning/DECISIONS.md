# Decisions made during the build

## 1. A real host-compatible application
The earlier course kit explicitly described itself as a Node fixture checkpoint. We preserved it and created a separate Next.js App Router application, with server routes and a Vercel-compatible build. The user explicitly requested the actual application and Vercel deployment.

## 2. One course workspace per identity
Supabase anonymous authentication assigns a real authenticated identity to each practice session. Row-level policies isolate each owner. The browser receives HttpOnly auth cookies; it never receives a service-role credential. These are fictional practice workspaces, not persistent named team accounts. Clearing cookies or using a different browser/origin starts another workspace. Named sign-in and cross-device account recovery are a separate release.

## 3. Transactional document storage for this release
The entities in the specification are represented as typed clients, meetings, events and tasks inside a single workspace document. Supabase stores that document in a JSONB row with an owner, a version and a size/shape constraint. Version-based compare-and-swap prevents lost updates. This deliberately differs from the earlier proposed four-table schema: it keeps the course’s first release focused on the workflow while still providing durable storage and actual database isolation. It is not a design for a large multi-tenant CRM. Normalize entity tables when query volume, team collaboration or indexing requires it.

The domain module validates references, dates and exact retry content. The database isolates owners and serializes versioned writes. The API validates request origin and request size. The local SQLite fallback uses an immediate transaction and is explicitly forbidden on Vercel.

## 4. Sample data and live providers stay distinguishable
The three fictional clients and their source records are deliberate course cases. Fireflies/Calendly adapters are implemented and fixture-tested, but no personal account records were fetched. The CLI can use an explicitly supplied provider credential and an explicit client/source mapping. A configured credential is not labeled a verified connection.

## 5. Preserve the learner’s work
Task review is a separate step. Retry keys survive a failed save. Database updates preserve both concurrent writes. Missing transcripts remain unavailable. The local-to-cloud transition preserves an existing local practice document when that browser first gets its cloud identity.

## 6. Polished, useful additions after the first preview
At the user’s request to make it better, added the pre-call brief preview, retained source citations and unknowns, improved text sizes/spacing, and added keyboard navigation for client tabs. No ornamental stock imagery or invented business analytics were added.
