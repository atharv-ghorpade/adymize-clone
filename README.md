# Adymize Clone (Vite + React + Tailwind)

Single-page React app built with Vite, Tailwind CSS, and React Router. It includes a hero section, services cards, and a simple header. Tailwind is configured via PostCSS. Icons on the services page are provided by `lucide-react`.

## Tech stack

- React 19
- Vite 7
- Tailwind CSS 3 (with PostCSS + Autoprefixer)
- React Router DOM 7
- lucide-react (icons)

## Project structure

```
adymize-clone/
├─ index.html                 # App entry with #root
├─ vite.config.js             # Dev server config (port 5176)
├─ postcss.config.js          # Tailwind + Autoprefixer
├─ tailwind.config.js         # Tailwind content globs
├─ package.json               # Scripts and dependencies
├─ src/
│  ├─ main.jsx               # React mount + ErrorBoundary wrapper
│  ├─ index.css              # Tailwind directives
│  ├─ App.jsx                # Header + routes (Hero, Services, Cards)
│  ├─ ErrorBoundary.jsx      # Shows runtime errors instead of blank screen
│  ├─ components/
│  │  └─ Header.jsx
│  └─ pages/
│     ├─ AdymizeHero.jsx
│     ├─ AdymizeServiceCards.jsx
│     └─ ServicePage.jsx
└─ ...
```

## Getting started

1) Install dependencies

```powershell
cd D:\Projects\Work\adymize-clone
npm install
```

2) Start the dev server

By default, the dev server is pinned to port 5176. If that port is busy, Vite may choose another port unless `strictPort` is true.

```powershell
npm run dev
```

Open the Local URL printed by Vite (for example, http://localhost:5176/). If you see a white screen, press Ctrl+F5 to hard-refresh and check the browser console for errors.

3) Build for production

```powershell
npm run build
```

4) Preview the production build

```powershell
npm run preview -- --port 5210
```

## Routes

- `/` Home: Hero + Service Cards (rendered in `App.jsx`)
- `/services`: Services grid (`ServicePage.jsx`, uses `lucide-react`)

## Tailwind CSS

Tailwind is configured with standard v3 setup. Utility classes are used throughout pages/components. If styles don’t appear, confirm:

- `src/index.css` contains Tailwind directives: `@tailwind base; @tailwind components; @tailwind utilities;`
- `tailwind.config.js` includes content globs for `index.html` and `src/**/*.{js,jsx,ts,tsx}`

## Troubleshooting

- White screen:
	- Ensure you are opening the correct port (Vite prints it in the terminal)
	- Check DevTools console; ErrorBoundary will display runtime errors in the page
	- Make sure you run commands from the project folder (D:\Projects\Work\adymize-clone)

- Port already in use:
	- Either free the port or let Vite auto-pick another port
	- You can change the dev port in `vite.config.js`

- Icons not showing:
	- Install `lucide-react`: `npm install lucide-react`

## Updating this README

This README reflects the current folder content and setup. If we add/remove pages, routes, or change the dev server port, I’ll update this file accordingly.