# Sidequest Studio

A browser app for creating solo tabletop adventures. Includes DM and player modes, a visual story flowchart, dice events, images, saved progress, and an ending card listing items to add to a character sheet.

## Open the app

Download `Sidequest-Studio.zip` from this repository and extract it. Open `Sidequest Studio.html` in your browser on Windows or macOS. No server or account is required. Read `START HERE.html` for instructions on creating, saving, and sharing adventures.

Browser saves stay on that device. Use Save project to keep an editable backup, and export a playable HTML file to send an adventure to a player.

## Source and development

Read [START HERE.md](START%20HERE.md) for usage. The application builds into one self-contained HTML file; it has no runtime npm dependencies.

`npm run build` generates the DM studio. `npm start` serves it at http://localhost:4320 for convenience. Direct file opening is supported and covered by browser checks.

`npm test` tests the project model and structural validation. `node tests/browser.mjs` uses the existing workspace Playwright installation to verify file-based autosave, library switching, undo, safe export, DM note exclusion, dice branches, resume, recap, replay history, and responsive layouts. Browser checks write only test fixtures to `test-output`.

Project data is stored in IndexedDB (`sidequest-studio`); the active project hint is in localStorage. Player progress and prior recaps are in localStorage keyed by adventure and export edition. The player export contains no DM notes or editor. Player checks are not tamper-proof; this is a trust-based tabletop tool.
