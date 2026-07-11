# Overnight changelog — 2026-06-21

Working autonomously per user instructions. Scope: polish/QA/SEO/mobile on the Cloudflare Pages preview only. No domain/DNS/Playwright/destructive actions.

[Sun Jun 21 10:16:21 EDT 2026] Verified: zero Squarespace CDN references remain; all 49 thumbnail image paths exist on disk; all internal static links (/, /about, /contact, /services, /studios, /work, resume PDF) return 200; all 51 work detail page slugs return 200.

## Current Work page (new)
- Added /current-work page per user spec: UnRested, The Land Remembered, Bachelor in the Berg, Roku channels, reality development, studios/sets, marketing/company oversight, student mentorship — using exact safe wording provided by user for all status/distribution claims.
- Used existing project thumbnail (Unrested+Director+Pete+Guzzo.png) for the UnRested card since it's an owned project image, not stock. All other cards use clean placeholder boxes ("Need [X] photo here.") since no personal Pete photos exist in the project yet.
- Added homepage teaser section ("What I'm working on now") linking to /current-work, using user-provided copy verbatim.
- Did NOT add "Current Work" to the main nav (judgment call — nav already has 5 items + CTA button; adding a 6th risked crowding). Added a footer link instead, per the brief's fallback instruction. Flagging this for review — easy to move into nav if preferred.
- Build verified: /current-work returns 200, all safe-wording phrases (Lionsgate, 211 Studios, Bachelor in the Berg, Up All Night Network) render correctly.

## Major correction + homepage restructure
- **Bug found and fixed:** the work items "The UnRested: Truth Will Rise" / "Story Time" were incorrectly described as the Echoes from the Grave documentary (with Paul Guzzo). Confirmed with user: those two Vimeo videos (752540931, 752544614, writers Neal Lerner & Jordan Jacobson) are actually Pete's separate narrative spec anthology piece. Rewrote both work items to correctly describe them as the spec piece, removed false Paul Guzzo/cemetery claims. Kept them in the portfolio per user ("proud of them, explain them too").
- Replaced homepage "proof strip" (5 random old client thumbnails) with a 2-up "Right Now" block per user request: Unrested: Echoes from the Grave (real YouTube teaser embed, youtube.com/watch?v=y6PfcgWQUPg, confirmed by user) and Shear Media Studios (existing studio photo). Each links to its full explainer (/current-work#echoes-from-the-grave, /studios#shear-studios).
- Added the same YouTube embed + external link (echoesfromthegrave.com) to the Current Work page's Echoes from the Grave card, replacing the placeholder.
- Added anchor IDs to studio sections on /studios so homepage can deep-link directly to Shear Studios.
- User confirmed this solves their separate request to make Shear Studios more prominent (one mention upfront in the new top block, one full explainer further down) — no further homepage studios changes needed per user.

## Deployed to Cloudflare Pages preview
- Live preview: https://peteguzzo.pages.dev (also direct deploy URL https://d4bc4384.peteguzzo.pages.dev)
- Verified live: Ewing video fix (privacy hash), Shear Media Studios naming, Echoes from the Grave YouTube embed, new homepage Right Now block, /current-work and /studios both 200.

## Naming fix + work detail page polish
- Renamed "Shear Studios" to "Shear Media Studios" in content collection (title field) for consistency with how the project was referred to when discussing the homepage feature.
- Flagged but did NOT change: /current-work says "The Land Remembered," but existing 211 Studio content (from original site crawl) says "A Land Remembered" (a known real Florida novel/film title actually shot at 211 Studio per the old site). Did not silently override the user's explicit wording — flagging for confirmation rather than guessing which is correct.
- Work detail pages (/work/[slug]) now show a category badge near the title and a "More [category] work" related-items section at the bottom (3 cards, same category, excluding current item) — turns dead-end pages into a path back into the portfolio.

## Final deploy this session
- Deployed work-detail polish + Shear Media Studios naming fix to https://peteguzzo.pages.dev
- Verified live: category badges and "More [category] work" related items render correctly on work detail pages.

## Session closed
Final build confirmed identical to last deployed state — no redeploy needed. All planned QA/polish tasks complete. See morning report in conversation for full summary.
