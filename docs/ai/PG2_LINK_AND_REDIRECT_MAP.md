# PG2 Link and Redirect Map

**Generated:** 2026-08-13  
**Method:** Static source analysis of `src/pages/` and `src/components/`. Inbound link counts use grep on HTML attributes (`href="/slug"`). Links set via JS data arrays (Nav, currentProjects, studios) are noted separately — they do not show up in HTML grep counts.

---

## 1. Page Inventory

| Slug | Title | Nav | Footer | Status |
|------|-------|-----|--------|--------|
| `/` | Pete Guzzo — Executive Producer + Operations Strategist | ✓ (logo + link) | — | Live |
| `/about` | About | ✓ | — | Live |
| `/services` | Services | ✓ | — | Live |
| `/work` | Work | ✓ | — | Live |
| `/studios` | Studios | ✓ | — | Live |
| `/contact` | Contact | ✓ (Let's Talk button) | — | Live |
| `/current-work` | Current Work | — | ✓ | Live |
| `/industry-insights` | Industry Insights | — | ✓ | Live |
| `/recipes` | Recipes | — | — | Live, intentionally unlisted |
| `/shear-enterprises` | EVP, Shear Enterprises | — | — | Live, intentionally unlisted — entry point TBD |
| `/ai-engineering` | AI Engineering + Operational Intelligence | — | — | Live, **ORPHAN** — zero inbound |
| `/unrested` | Unrested: Echoes from the Grave | — | — | Live, reachable via homepage + current-work |
| `/404` | 404 | — | — | Special — served by Cloudflare Pages on unmatched routes |
| `/work/[slug]` | Dynamic work entries | — | — | Linked from `/work` index |
| `/industry-insights/[slug]` | Dynamic insights articles | — | — | Linked from `/industry-insights` index |

**Nav is global** — all nav pages are reachable from every page. Nav links are defined as a JS array in `src/components/Nav.astro` and do not appear as literal HTML href attributes in source; they are excluded from grep counts below.

---

## 2. Inbound Link Counts (page-to-page, HTML attributes only)

| Slug | Inbound (grep) | Notes |
|------|---------------|-------|
| `/contact` | 11 | Most-linked page on the site — CTAs on every major page |
| `/work` | 3 | index.astro, 404.astro, work/[slug].astro back-link |
| `/studios` | 3 | index.astro (×2 — studio cards + "See the Studios"), ai-engineering.astro |
| `/industry-insights` | 2 | Footer (component) + ai-engineering.astro |
| `/current-work` | 2 | Footer (component) + index.astro CTA |
| `/recipes` | 2 | index.astro + about.astro |
| `/` | 2 | 404.astro + nav logo (component) |
| `/shear-enterprises` | 1 | ai-engineering.astro only — but ai-engineering itself is orphaned |
| `/about` | 1 | 404.astro |
| `/unrested` | 1 (JS) | current-work.astro via JS data href — also on homepage via home.json currentProjects; JS data not detected by HTML grep |
| `/services` | 0 (HTML grep) | Reachable via nav only — no page links directly to it |
| `/ai-engineering` | 0 | **TRUE ORPHAN** — not in nav, footer, or any page link |
| `/404` | 0 | Served by Cloudflare Pages — not linked to directly |

---

## 3. href="#" and Fallback Hash Links

### index.astro — line 77

```astro
<a href={item.href ?? '#'} class="shrink-0 w-36 md:w-48 ... motion-thumb">
```

**Source:** `src/pages/index.astro:77` — thumbnail image wrapper in the "What's in motion" current-projects loop.

**When it fires:** Any `currentProjects` item in `home.json` that does not have an `href` property will render this as `href="#"`. The text link (`linkLabel`) is separately guarded by `{item.href && ...}` and only renders when href exists.

**Currently affected items** (from `home.json` — items without `href`):
- Bachelorette in the Bergs
- Greg Muzzillo — Dream Big  
- Power of Attorney — Atlanta

**Impact:** Clicking the thumbnail image for these three items scrolls to the top of the page. Low severity — the text link is hidden, so only the thumbnail is a no-op click. Not a broken link in the traditional sense, but a dead UX interaction.

**Fix when ready:** Add `href` values to those items in `home.json`, or change the fallback from `'#'` to a disabled state.

No other `href="#"` instances found in source.

---

## 4. Orphaned Pages (Zero or Effectively-Zero Inbound)

### /ai-engineering — TRUE ORPHAN
- **Title:** AI Engineering + Operational Intelligence
- **Inbound:** 0 from any page, nav, or footer
- **Status:** Fully built page — completely invisible to site visitors unless they know the URL
- **Fix:** Add to nav, footer, or link from about.astro / services.astro
- **Note:** This page links OUT to `/shear-enterprises`, `/studios`, `/industry-insights/how-ai-actually-helps-a-production-team-move-faster`, and `/contact` — all valid

### /shear-enterprises — EFFECTIVELY ORPHANED
- **Title:** EVP, Shear Enterprises
- **Inbound:** 1 — from `/ai-engineering` only, which is itself orphaned
- **Status:** Intentionally unlisted per prior recon — Pete deciding on entry point
- **Effective reachability:** Zero for normal visitors
- **Fix options:** Link from about.astro timeline, add to footer, or add to nav

### /unrested — REACHABLE but NOT IN NAV/FOOTER
- **Title:** Unrested: Echoes from the Grave
- **Inbound:** Reachable via homepage `currentProjects` (home.json `href: '/unrested'`) and current-work.astro — JS data, not detected by HTML grep
- **Status:** Acceptable for now — it's a project detail page, not a nav-level destination

---

## 5. Potential Link Issues

| Issue | File | Line | Severity | Notes |
|-------|------|------|----------|-------|
| `href={item.href ?? '#'}` fires for 3 items | index.astro | 77 | Low | Dead thumbnail click — no broken route |
| `/studios#shear-studios` hash link | home.json (currentProjects) | — | Low | Studios page renders `id={s.id}` — ID `shear-studios` comes from `shear-studios.md` slug ✓ |
| `/ai-engineering` fully orphaned | — | — | Medium | Page is live but unreachable by normal navigation |
| `/shear-enterprises` effectively orphaned | — | — | High | Pete's primary current credential — zero real inbound |
| `/services` has no page-level inbound | — | — | Low | Nav-only — acceptable; internal links would reinforce it |

**Verified OK:**
- `/industry-insights/how-ai-actually-helps-a-production-team-move-faster` — linked from ai-engineering.astro line 640; article file exists at `src/content/insights/how-ai-actually-helps-a-production-team-move-faster.md` ✓
- `/studios#shear-studios` — studios page uses `id={s.id}` where ID = content slug; `shear-studios.md` slug = `shear-studios` ✓
- All other internal href values reference existing routes ✓

---

## 6. Recommended _redirects Entries

No `public/_redirects` file exists. Cloudflare Pages supports it natively — one rule per line, format: `[old] [new] [status]`.

**Known legacy URL patterns** (placeholder — Pete to supply old Squarespace URLs):

```
# Squarespace legacy redirects — fill in as needed
# /old-path  /new-path  301
```

**Suggested permanent redirects (when Pete confirms old URLs):**
- Old blog/insights URLs → `/industry-insights/[slug]`
- Old portfolio URLs → `/work/[slug]`
- Old contact URL → `/contact`

**Priority note:** The 404.astro page is now live, so all unmatched legacy URLs return a true 404 instead of the old soft-404 behavior. Adding _redirects for high-traffic legacy URLs would recover any Google-indexed legacy traffic.

---

## 7. Summary of Recommended Actions

| Priority | Action |
|----------|--------|
| P0 | Link `/shear-enterprises` from at least one high-authority page (about.astro timeline, footer, or nav) |
| P1 | Add entry point for `/ai-engineering` (nav or about.astro) |
| P1 | Resolve `href="#"` for current-projects items without a destination |
| P2 | Create `public/_redirects` once Pete supplies old Squarespace URL list |
| P2 | Consider adding `/services` as a cross-link from about.astro or index.astro |
