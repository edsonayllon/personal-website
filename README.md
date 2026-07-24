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
- `public/resume/edson-ayllon-resume.pdf` — downloadable resume

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Build static site to `dist/` |
| `npm run serve` | Serve `dist/` via Firebase hosting emulator (honors cleanUrls/404) |
| `npm run deploy` | Build and deploy to Firebase Hosting |

URL behavior: Astro `build.format: 'file'` + `trailingSlash: 'never'` pair with
Firebase `cleanUrls: true` / `trailingSlash: false`, so `/work/chamber` is the
canonical form and `.html`/trailing-slash variants 301 to it.
