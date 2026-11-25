# Gras Games site

Plain static site, no build step. Serve with `python3 -m http.server 8137` (port 8000 is used by another project). Layout is in README.md.

## Brand: read before creating or restyling any page

`design/brand-guide.html` is the source of truth for look and voice. Read it before building a new page or changing visual style.

- **Colours:** use the CSS custom properties in `assets/css/main.css`, never hard-coded hex: `--pine` (Grass Pine), `--deep-pine` (Deep Table), `--paper` (Rulebook), `--sage` (Game Sage), `--stamp` (Stamp Red, accents only), `--ink`, `--white`.
- **Type:** `--font-display` (Fraunces) for headlines, `--font-body` (DM Sans) for interface and body text.
- **Visual language:** organic circles, connected "game-piece" dots, ticket edges, stamped accents, generous paper space. Photography is candid and at table level.
- **Logo:** clear space equal to its eye. Pine on light backgrounds, white on Pine.
- **Voice:** short, warm, specific. Curious, human, playful. Guide like a friend, avoid hype, jargon and gatekeeping.
- **Game pages:** lead with big imagery and the useful facts: player count, play time and complexity.

## Building pages

- Copy the structure of an existing page (`about/index.html`): the same `<head>` font links, `site-header` / `site-nav` / `site-footer`, and `main.css`.
- New game: copy `games/_template.html` to `games/<game-slug>.html` and link it from `games/index.html`.
- Use relative paths only (`../assets/...`) so pages work from any folder and when opened as files.
- Add new shared styles to `main.css` as tokens or classes. Page-specific CSS goes in its own file (like `home.css`).
- Update the nav on every page when adding a top-level section.
