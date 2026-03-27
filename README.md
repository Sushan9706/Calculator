# Calculator
Simple Studio: extensible JavaScript calculator demo

## Files
- `index.html`: UI markup
- `style.css`: UI styles
- `script.js`: core logic (plug-in friendly)
- `ops/README.md`: operator module extension guide

## Run
1. Open `index.html` in a browser.
2. Use number and operator buttons.
3. Click `=` for result, `C` to clear, `DEL` to backspace.

## Extending for team
- Add operator files under `ops/` with `symbol` and `compute(a, b)`.
- Wire them in `script.js` by adding an event path for custom operators (in future tasks).
- Keep core UI and state handling in `script.js` so team members can add separate `ops/*` modules.

## Design
- Minimal HTML/CSS for maintainability.
- Core math logic in `calculate()` switch statement.
- Easy to add additional operators, advanced features, or separate processor modules.

## Notes
- Division by zero shows `Error`.
- Decimal support included.

