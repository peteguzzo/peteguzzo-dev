# ARCHITECTURE

Last updated: 2026-08-04
Updated by: claude-sonnet-4-6

---

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 6.4.7 |
| CMS | TinaCMS (Tina Cloud) | 3.10.0 |
| Styling | Tailwind CSS (Vite plugin) | 4.x |
| Typography | @tailwindcss/typography | 0.5.20 |
| Fonts | Fraunces (display serif) + Inter (sans) | @fontsource |
| Sitemap | @astrojs/sitemap | 3.7.3 |
| Node | >=22.12.0 | — |
| Hosting | Cloudflare Pages | — |
| CI/CD | Cloudflare Pages (auto-build on git push) | — |
| Database | None | — |
| Auth | None (public static site) | — |

## Repository structure

```
peteguzzo/
├── src/
│   ├── content/            — content collections (markdown + JSON)
│   │   ├── pages/          — home.json (CMS-driven homepage)
│   │   ├── work/           — 52 work item .md files
│   │   ├── studios/        — 2 studio entries (Shear Media Studios, 211 Studio)
│   │   └── insights/       — blog/article content (not in v1)
│   ├── pages/              — Astro page routes
│   └── content.config.ts   — content collection schema definitions
├── tina/
│   ├── config.ts           — Tina CMS schema + Tina Cloud config
│   └── __generated__/      — auto-generated Tina client (do not hand-edit)
├── public/
│   ├── images/             — work thumbnails, EVP images, studio photos
│   ├── files/              — downloadable assets (resume PDF)
│   └── admin/              — auto-generated Tina admin panel
├── dist/                   — build output (never edit directly)
├── scripts/                — utility scripts
├── astro.config.mjs        — Astro config (site URL, Vite/Tailwind plugin)
├── package.json            — scripts and dependencies
├── CLAUDE.md               — Cortex drop-in + project rules
└── docs/ai/                — Cortex memory files
```

## Key files and their roles

| File | Role |
|------|------|
| `tina/config.ts` | Defines Tina CMS schema for all editable content; reads Tina Cloud credentials from env vars |
| `src/content.config.ts` | Astro content collection schema (zod) — defines types for work, studios, pages, insights |
| `src/content/pages/home.json` | Homepage content — edited via Tina admin or directly in JSON |
| `astro.config.mjs` | Site URL (peteguzzo.com), Tailwind Vite plugin, sitemap integration |
| `public/files/Pete-Guzzo-Resume.pdf` | Downloadable resume linked from About page |
| `.node-version` | Pins Node 22 for Cloudflare Pages build |

## Data flow

Content lives in `src/content/` as markdown frontmatter + body (work, studios) or JSON (home page). Astro reads content collections at build time via `src/content.config.ts`. Pages in `src/pages/` query collections and render to static HTML. Tina CMS provides an in-browser visual editor (`/admin`) that writes directly to these source files via the GitHub API. Cloudflare Pages auto-builds on push to the active branch.

## Deployment pipeline

1. Push to `dev` branch on GitHub → Cloudflare Pages detects push
2. Cloudflare runs: `tinacms build && astro build`
3. Output from `dist/` is deployed to edge
4. Preview URL: https://peteguzzo.pages.dev
5. Production URL: https://www.peteguzzo.com (domain NOT yet connected — still on Squarespace)

## Known fragile areas

- **Tina `__generated__/` files** — regenerated on every `tinacms build`; committing stale generated files causes schema mismatches. Always build before committing if Tina schema changed.
- **`tina-lock.json`** — must be kept in sync; see Heights Lounge lessons in global REFLEX_RULES for the 3-key sync pattern (different project but same Tina behavior).
- **peteguzzo.com domain** — still on Squarespace. Do not touch DNS until explicitly directed by Pete.
- **`public/admin/index.html`** — generated file; was previously in `.gitignore` (that gitignore entry is now deleted per git status). Verify commit strategy for admin files before pushing.

## Environment variables (names only — never values)

| Variable | Purpose | Where it lives |
|----------|---------|----------------|
| `TINA_PUBLIC_CLIENT_ID` | Tina Cloud project client ID | Cloudflare Pages dashboard |
| `TINA_TOKEN` | Tina Cloud read/write token | Cloudflare Pages dashboard |
| `GITHUB_BRANCH` | Active branch for Tina content writes | Cloudflare Pages dashboard |

No `.env` files exist on disk — all secrets live in the Cloudflare Pages dashboard only.

## External services

| Service | Purpose | Account |
|---------|---------|---------|
| Cloudflare Pages | Hosting + CDN + build | pg2@peteguzzo.com |
| Tina Cloud | CMS backend (GitHub API bridge) | pg2@peteguzzo.com (verify) |
| GitHub | Source repo | peteguzzo org, repo: peteguzzo-dev |
| Squarespace | OLD site — still live on peteguzzo.com, not yet decommissioned | — |

## CMS configuration

| Item | Value |
|------|-------|
| CMS platform | TinaCMS (Tina Cloud) |
| Config file | `tina/config.ts` |
| Client ID env var name | `TINA_PUBLIC_CLIENT_ID` |
| Token env var name | `TINA_TOKEN` |
| Branch env var name | `GITHUB_BRANCH` |
| Media root | `public/images` |
| Admin panel path | `/admin` |
| Collections | homePage (home.json) |
