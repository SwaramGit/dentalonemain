# Dental One Next.js — Expanded Pages

This archive adds these pages to your project:
- `/about-us`
- `/services`
- `/what-we-offer`

It also introduces a minimal shared layout (`components/Layout.js`) and global styles (`styles/globals.css`) via `pages/_app.js`. The styles are intentionally lightweight so things look clean even without Tailwind.

## How to run

```bash
# If you already have package.json and dependencies set up, just run:
npm run dev

# If this repo did not include package.json, initialize a Next.js project (v13+ with `pages/` router):
npm init -y
npm install next react react-dom
# Then add scripts to package.json:
# "scripts": { "dev": "next dev", "build": "next build", "start": "next start" }
npm run dev
```

Open http://localhost:3000 to view the site. The header shows navigation to the new pages.

## Notes
- Existing pages (`/`, `/contact-us`, `/privacy-policy`, `/terms-and-conditions`) are untouched except for adding a small "Quick Links" section on the home page.
- If you use TailwindCSS, feel free to remove `styles/globals.css` and apply your own classes inside the new pages/components.
