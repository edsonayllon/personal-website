# edsonayllon.com

Personal portfolio of Edson Ayllon — product leader for consumer financial products.

Built with [Astro 5](https://astro.build) and Tailwind CSS 4. Fully static output:
every page ships as real HTML with unique meta/OG tags, JSON-LD structured data,
and a generated sitemap. Hosted on Firebase Hosting (`personal-website-8a190`).

## Structure

- `src/pages/index.astro` — home (hero, metrics, case studies, products, experience)
- `src/pages/work/*.astro` — case-study pages
- `src/content/site.ts` — single source of truth for metrics, links, and timeline
  (keep figures character-identical to the resume PDF)
- `src/layouts/BaseLayout.astro` — SEO head (title/description/canonical/OG/JSON-LD)
- `src/styles/global.css` — every design token (colors, fonts, type scale) lives in its `@theme` block; markup uses semantic utilities only
- `public/resume/edson-ayllon-resume.pdf` — downloadable resume

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Build static site to `dist/` |
| `npm run serve` | Serve `dist/` via Firebase hosting emulator (honors cleanUrls/404) |
| `npm run deploy` | Build and deploy to Firebase Hosting |

## Deploying

Pushes to the `release` branch deploy automatically: `.github/workflows/deploy.yml`
builds the site and publishes it to the live Firebase Hosting channel, authenticating
with the `FIREBASE_SERVICE_ACCOUNT_PERSONAL_WEBSITE_8A190` repository secret. Land
work on `main`, then open a PR from `main` into `release`; merging it ships.
`npm run deploy` remains available as a manual fallback.

URL behavior: Astro `build.format: 'file'` + `trailingSlash: 'never'` pair with
Firebase `cleanUrls: true` / `trailingSlash: false`, so `/work/chamber` is the
canonical form and `.html`/trailing-slash variants 301 to it.
