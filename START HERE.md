# Sidequest Studio

For the character who missed a session, but still deserves a story.

## Open on a Mac

1. Save Sidequest-Studio.zip from the message to your computer.
2. Double-click the ZIP in Finder to extract it.
3. Move the extracted Sidequest Studio folder somewhere you want to keep it, such as Documents.
4. Control-click Sidequest Studio.html, choose Open With, then Safari, Google Chrome or Microsoft Edge.
5. Keep opening that same file in the same browser for your local saves.

No installer, Terminal commands, Node.js, App Store purchase or administrator access is needed. The Windows .cmd shortcut is optional and is not used on a Mac. This is a browser app, not a native macOS .app.

## Open on Windows

Save the ZIP, right-click it and choose Extract All. Open Sidequest Studio.html with Chrome or Edge. Open Sidequest.cmd is an optional shortcut. Extract first rather than editing from inside the ZIP.

## What to save and send

| Purpose | What to use |
| --- | --- |
| Give another DM the editor | Send Sidequest-Studio.zip. |
| Keep editable work safe | Click Save project file and keep the downloaded .sidequest.json file. |
| Restore or move editable work | In DM mode, use Open project to select that JSON file. |
| Give a player an adventure | Use Export player adventure and send the resulting .html file, zipped if your message service requires it. |
| Resume an adventure | Reopen the same adventure file in the same browser. |
| Send results to the DM | Use Download recap and send the .txt file. |

Library and progress saves are local browser data, not files automatically written into your Documents folder. They do not sync across computers or browsers. Keep project backups before clearing browser data, changing browser, moving files, or replacing the studio. A project JSON is opened inside the editor, not by double-clicking it. The localhost address on the creator's computer will not open the app on someone else's computer; send the ZIP instead.

## Compatibility check

The distributed ZIP was extracted into a separate test folder. Its HTML editor and player exports passed automated WebKit checks on Windows for autosave, reload, library, undo, dice branches, recap downloads and replay history. WebKit is Safari's browser engine. Windows Chromium checks passed too. Actual Safari on macOS, Finder downloads, and recipient email-service attachment rules have not been tested here. Chrome or Edge on a Mac is another option if Safari has trouble. No native installer is included or needed.

Apple instructions: https://support.apple.com/en-euro/guide/mac-help/mh35597/mac

## For the dungeon master

1. Extract the ZIP into a folder you want to keep.
2. Open **Sidequest Studio.html** in Chrome or Edge on your computer. No installation, account, or internet connection is required. On Windows, **Open Sidequest.cmd** opens it in your default browser.
3. Explore the sample, or choose **New**. Set your title, player name and opening instructions in **Adventure details**.
4. Write scenes, add images and give each choice a destination. D20 checks need success and failure destinations. Mark the final scenes as endings.
5. Use **Check adventure** and the player preview. Then choose **Export player adventure**.
6. Send the resulting HTML file to the player. If your message service blocks HTML attachments, ZIP the file first.

The **Library** keeps multiple adventures in this browser. **Save project file** downloads an editable JSON backup that can be reopened with **Open project**. Import creates a separate library copy. Export backups before clearing browser data or moving the studio to a different browser or computer. Private/incognito mode may discard local saves.

## For the player

Open the adventure HTML in a desktop browser. Read, choose, roll in the app or enter a physical d20 result, and add notes for your DM. A check succeeds when d20 + modifier meets the stated DC; this is a simple ability-check rule, not a complete D&D rules engine.

Progress saves in the same browser. Reopen the same file to resume. At an ending, download your recap and send it back. **Replay** starts over and archives the preceding recap in **Previous runs** (up to 20). You can download those recaps too. The HTML adventure remains reusable.

The recap includes your choices, dice results, final scene, proposed rewards, story flags and notes. Your DM reviews campaign consequences and rewards.

Mobile layouts are included, but some phones show downloaded HTML in a file preview rather than running it as a website. Windows Chrome/Edge and WebKit are tested; a real Mac has not been tested here. A hosted link would be the next step for seamless phone distribution. Browser saves do not sync between devices.

## Helpful tools

- **Paste an outline:** one title per line becomes linked scenes; the last is an ending.
- **Images:** choose, drop or paste PNG/JPEG/WebP artwork. Images are resized to a maximum of 1,400 pixels and embedded in the export. Source limit: 12 MB per image. Add a useful image description.
- **Undo and duplicate:** undo up to 20 edits, duplicate scenes, reorder choices, and create a destination directly from a choice card.
- **Story map:** review every scene and its outgoing paths.
- **Story flags:** optional text labels remember choices, e.g. `found-key`. A choice can require or grant a flag. Leave an unconditional route so the player cannot get stuck.
- **Private DM notes:** excluded from the player export. The exported story branches themselves can be inspected by a technically curious player; the file is not a secure spoiler vault.
- **Keyboard:** Ctrl+S / Cmd+S downloads an editable project backup.

No AI service, telemetry, cloud storage or automatic messages are included. The DM writes the story. Files and browser storage keep it local.

## Included

- **Sidequest Studio.html** :  complete DM application, self-contained.
- **A Place for Remembrance.html** :  a playable sample adventure.
- **Open Sidequest.cmd** :  optional Windows shortcut.
- **START HERE.md** :  this guide.

The sample is fictional and is not part of your existing campaign unless your DM adopts it.

The Amaranth sample uses the supplied Red Rose, White Oak campaign introduction as setting reference. Its NPCs, permit dispute, locations within the neighbourhood, and outcomes are proposed additions, not established campaign canon. It emphasizes conversation, civic rebuilding and remembrance; no combat is required.

## Random events
Add a choice and set its type to **Random event table**. Choose d4, d6, d8, d10, d12, d20 or d100. Each row needs a low roll, a high roll, an event description and a destination scene. For example, on d6: 1 to 3 might lead to a conversation, and 4 to 6 to a discovery. Larger ranges have higher probability. Every die result must belong to exactly one row. Check adventure blocks export if there are gaps, overlaps or broken links.

Use Preview this scene to test rolls as the DM. Players can roll in the app or enter a physical die result. The event and roll are included in their recap. Event tables currently select scene outcomes; they do not perform combat, generate NPCs or modify character sheets.

## DM and Player modes
Use the mode buttons in the header. DM mode contains the scene editor, library, preview and export tools. Player mode opens the current adventure in a full player view with saved progress, rolls, notes and recaps. Unfinished adventures show a not-ready message. Mode switching is an interface choice, not password protection. Send the exported player HTML when the recipient should not receive the editor or private DM notes.

New projects start with one empty scene. The Amaranth story is optional placeholder content, clearly marked Example adventure. Load example adventure opens it separately. Use as template creates an editable copy; Start blank creates a new empty adventure. Saved work is preserved.

## Flowchart
In DM mode, click Flowchart below the scene list. Click a scene card to edit it. The chart shows choices, success/failure branches and random-event ranges. Missing destinations appear as dashed red cards; unreachable scenes are labeled. Hover a connector for its full description, or use Text view. Zoom and scroll larger stories. Download SVG saves a copy of the chart.

The studio opens the 18-scene example as its default placeholder on first use. Later visits reopen your saved project. New and Start blank still create an empty adventure. The temporary Open 18-scene example button has been removed.

## Items and the ending card
In DM mode, open Items & loot. Enter an item name, category and description. Quick examples can fill the form for common trinkets and loot. Click Add item to keep it in the adventure's reusable list.

Open a scene and expand Loot found in this scene. Select the items and enter quantities. They are awarded when the player reaches that scene, including the starting scene. A scene awards its items only once in a run. Different scenes can award more of the same item. Undo removes rewards from scenes no longer visited; replay starts a new inventory.

Players can inspect Inventory during play. At the ending, Add to your character sheet lists the items they found, with quantities and descriptions. Download item list saves a copy to use when updating their character sheet. The adventure recap includes the same items.
