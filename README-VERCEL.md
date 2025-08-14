# Dental One — Next.js + Tailwind + SEO (Vercel Ready)

## Quickstart (Local)
```bash
npm install
npm run dev
# open http://localhost:3000
```

Set your canonical base URL for correct OG/canonical/sitemap:
```bash
cp .env.example .env.local
# edit .env.local and set your production domain
```

---

## Deploy to Vercel (Recommended)
1. Create a GitHub repo and push:
```bash
git init
git add .
git commit -m "Initial commit: Dental One website"
# create a new repo on GitHub (via UI) and then:
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

2. In Vercel:
- Import the repo (New Project → Import)
- Framework preset: **Next.js**
- Add env var: `NEXT_PUBLIC_SITE_URL=https://www.your-domain.com`
- Click Deploy

3. After deploy, verify:
- `/robots.txt`
- `/sitemap.xml`
- Main pages: `/`, `/about-us`, `/services`, `/what-we-offer`, `/faq`, `/contact-us`, `/privacy-policy`, `/terms-and-conditions`

---

## Deploy via Vercel CLI (alternative)
```bash
npm i -g vercel
vercel login
vercel
# accept prompts; on first run Vercel creates the project
# set env var for Production and Preview
vercel env add NEXT_PUBLIC_SITE_URL
# or:
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add NEXT_PUBLIC_SITE_URL preview
# then redeploy
vercel --prod
```

---

## Notes
- Update routes inside `pages/sitemap.xml.js` when you add new pages.
- `components/SEO.js` controls per-page title/description/OG/Twitter and optional JSON-LD.
