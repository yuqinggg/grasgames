# grasgames
Gras Games for Ben

Plain static site — no build step. Open `index.html` in a browser, or serve the folder (`python3 -m http.server`).

```
index.html            Homepage (styles in assets/css/home.css, script in assets/js/home.js)
games/index.html      Games catalog
games/_template.html  Copy to games/<game-slug>.html for each game, then link it from the catalog
about/index.html      About overview (styles in assets/css/about.css)
about/impact.html     About subpage: purposeful and sustainable play
contact/index.html
assets/css/main.css   Shared styles and brand tokens
assets/images/        Logo and images
design/brand-guide.html  Brand guide — not linked from the site
design/reference/     Design references (Figma Make homepage, screenshots)
```
