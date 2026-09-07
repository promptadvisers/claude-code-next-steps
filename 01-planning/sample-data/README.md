# Fictional source imports

These records are for a predictable course rehearsal. They are not exports from a live client account.

Before a new delivery, ask Claude: “Refresh the fictional meeting and calendar import examples relative to today. Preserve their source IDs so importing the same file twice updates the existing record.”

The implemented command, from `03-build/clientdesk`, is:

```sh
node scripts/make-sample-imports.mjs
```

Then open Connections in the app, choose the meeting or calendar import, select Northstar and paste the matching JSON file. Import twice: the source should appear once. Changing an existing source to a different client must fail. To rehearse cancellation, change event.json status to `canceled` and reimport it; it should no longer appear as an upcoming conversation.

The CLI alternative uses its own practice session:

```sh
npm run cli -- import --file ../../01-planning/sample-data/meeting.json --client northstar --kind meeting
npm run cli -- import --file ../../01-planning/sample-data/event.json --client northstar --kind event
```

Dates in committed JSON are the last generation snapshot. The generator refreshes them for any future course month. The app’s initial teaching data also uses relative dates.
