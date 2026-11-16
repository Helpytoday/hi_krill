# Deep Dive — Krillion Edition

This is the editable source-code project for the Deep Dive game.

## Open it in Visual Studio Code

1. Download and extract `deep-dive-vscode-project.zip`.
2. Open Visual Studio Code.
3. Choose **File → Open Folder…** and select the extracted `deep-dive-vscode` folder.
4. Edit the files listed below.

## Run the game

The project does not require Node.js, a build step, or an internet connection.

- Easiest: open `index.html` in a browser.
- Recommended in VS Code: install the **Live Server** extension (VS Code may offer it as a recommendation), open `index.html`, then click **Go Live** in the status bar.

## Project files

- `index.html` — page structure and links to the CSS and JavaScript.
- `styles.css` — colors, layout, Krillion, underwater scenery, and animation styling.
- `script.js` — questions, accepted answers, rarity rules, scoring, dive animation, and saved daily results.
- `.vscode/extensions.json` — recommends Live Server for convenient local testing.

## Customize the game

### Add or change accepted answers

Open `script.js` and find `const BANK`. Each prompt uses this structure:

```js
{ q: "Name a fruit", a: [["apple", 28], ["dragon fruit|dragonfruit", 0]] }
```

The first item is the canonical answer and aliases are separated by `|`. The number is the built-in popularity estimate. Only listed answers and aliases are accepted; there is no fuzzy matching.

### Change rarity distances

In `script.js`, find `const RARITY`. Each tier has a `min` popularity percentage, a level, a label, a distance in meters, and a description.

### Change the animation

In `script.js`, find `playDescentAnimation`. It controls the animation duration and how far the scenery, Krillion, and depth pointer move. The visual appearance is in `styles.css`.

## Notes

- The game has Daily, Unlimited, and Archive modes.
- Daily completions are saved in the browser's local storage.
- The popularity percentages are estimates built into the game, not live survey results.
- A `0%` listed answer is valid and represents no votes in this game's reference pool; it does not mean nobody in the world has ever said it.
