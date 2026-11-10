# fun by tuko

A small App Store–style showcase of my projects, live at **https://bytuko.fun**.

Plain HTML, CSS and JavaScript, no build step. GitHub Pages serves this repo's
`main` branch (see `CNAME`).

- `apps.js`: the featured apps (text, links, media). Edit this to add, remove or reorder.
- `main.js`: renders the cards and the detail sheet (`#app-id` links open one directly).
- `style.css`: look taken from the "fun by tuko" business card.

After changing CSS or JS, bump the `?v=` stamp on its link in `index.html` so
Safari doesn't keep running the old copy.
- `media/`: screenshots, clips and icons.
- `.claude/static-server.ps1`: local preview server.
