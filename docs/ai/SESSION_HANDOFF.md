# SESSION_HANDOFF

Records where each session ended. The next session reads this file first via `/cortex-start`.

Most recent entry is at the top.

---

## Handoff — 2026-08-13 (Field Agent — SESSION STATUS: OVERNIGHT COMPLETE)

**Session accomplished:**
- P0 commit completed: `f56a4cc` — 23 files, build ✓ 74 pages, 0 errors
  - 404.astro (P0-1), about.astro EVP fix (P0-2), WorkCard loading prop (P0-3)
  - index.astro title-only fix ("Home" → "Pete Guzzo — Executive Producer + Operations Strategist | Tampa, FL")
  - All 18 Cortex docs/ai/ files initialized, .claude/rules/troubleshooting-reflexes.md, .gitignore updated
  - Partial staging via git apply --cached for 3 files (about.astro, work/index.astro, index.astro)
- Pete made two additional working-tree changes (uncommitted, awaiting Pete's commit go-ahead):
  1. `src/pages/index.astro` — Studios section moved above Featured Work
  2. `src/pages/about.astro` — PG2 independent practice range corrected to "2018, Present"
- Produced `docs/ai/PG2_LINK_AND_REDIRECT_MAP.md` — full link audit (Assignment B, overnight)

**Working tree state at handoff:**
- Branch: main
- Not pushed to origin — Pete has not given push go-ahead
- Uncommitted: index.astro (Studios/Featured Work swap), about.astro (2018 date fix)
- No staged files in index

**Open items for next session:**
1. Pete to approve commit of the two working-tree changes (Studios/work swap + 2018 date)
2. Pete to approve push to main (deploys to peteguzzo.com via Cloudflare)
3. /shear-enterprises still orphaned — P0 priority (primary current credential)
4. /ai-engineering orphaned — P1 (add nav or page link)
5. href="#" on 3 currentProjects items (Bachelorette, Greg Muzzillo, Power of Attorney) — fix when hrefs exist
6. No _redirects file — Pete to supply old Squarespace URLs
7. Homepage title tag fix committed — but the homepage restructure (238 lines) and home.json changes remain held

**Key file:** `docs/ai/PG2_LINK_AND_REDIRECT_MAP.md` — new, complete link/redirect audit

---

## Handoff — 2026-08-11 (Authority Field Agent — Session 2)

**Session accomplished:**
- Read and absorbed full prior recon (PG2_AUTHORITY_RECON.md) and all Cortex state files
- Independently verified all critical prior findings by direct file read (about.astro, index.astro, BaseLayout.astro, Nav.astro, Footer.astro, [slug].astro, shear-enterprises.astro, llms.txt, robots.txt, _redirects, 404.astro)
- Wrote supplemental findings to PG2_AUTHORITY_RECON.md (Section 14) — confirmed all prior findings, added 9 new observations
- Updated CURRENT_STATE.md — reconciled stale 2026-08-04 state with observed reality
- Created PG2_AUTHORITY_IMPLEMENTATION_PLAN.md — full P0/P1/P2/P3 plan with Ruflo-ready task bundles
- Updated HEARTBEAT.md with session 2 entry

**Key facts verified (direct reads, 2026-08-11):**
- 404.astro: NOT FOUND — soft 404 problem confirmed
- _redirects: NOT FOUND — no redirect rules
- About page SVP title: CONFIRMED stale — line 17 `'SVP Marketing & Strategy / Studio Operations'`
- Homepage title: CONFIRMED "Home | Pete Guzzo" — stale, needs SEO fix
- /shear-enterprises: CONFIRMED orphan — not in nav, not in footer
- Article template: CONFIRMED no byline, no Article schema
- llms.txt: CONFIRMED thin — 24 lines, missing all specificity

**Controlling documents (in priority order):**
1. docs/ai/PG2_AUTHORITY_IMPLEMENTATION_PLAN.md — Phase 2 roadmap, Ruflo task bundles
2. docs/ai/PG2_AUTHORITY_RECON.md — full site audit with supplemental findings
3. docs/ai/CURRENT_STATE.md — updated state

**Next session must:**
1. Run `/cortex-start`
2. Pete confirm: is GitHub PAT rotated? (required before any git push)
3. Pete confirm: approve Phase 2 / Task A (Technical Fixes Bundle)?
4. Once approved: route Task A to implementation agent
5. Task A must commit all changes to dev branch before marking complete
6. After Task A committed + pushed: Pete to verify live site changes at peteguzzo.com

**Task A scope (approved items only — Pete must confirm):**
- Create: src/pages/404.astro, public/_redirects
- Edit: src/pages/index.astro (title tag), src/pages/about.astro (SVP→EVP + shear link), public/llms.txt, src/layouts/BaseLayout.astro (schema), src/pages/industry-insights/[slug].astro (byline + schema + noindex), src/components/Footer.astro (shear link), src/pages/contact.astro (meta description), 4 article .md files (noindex frontmatter)

**Pending Pete decisions (required before Task E and content tasks):**
- GitHub PAT rotation (required before any push)
- Press page: what can be published, is Barstool announcement public?
- Social proof: which client names/outcomes can appear publicly on the homepage?
- Vimeo profile URL: confirm it exists at vimeo.com/peteguzzo before adding to schema
- Baby Actors article: noindex/archive, or retitle and expand into a real production story?

**DO NOT touch without reading context:**
- `tina/__generated__/` — auto-generated; read ARCHITECTURE.md fragile areas section first
- `public/admin/index.html` — auto-generated Tina admin; check .gitignore before committing
- DNS / peteguzzo.com — already switched; do not touch DNS without explicit Pete instruction
- GitHub PAT in git remote — do not expose; Pete must rotate

**Last known good commit:** 3099ffa — Wire Tina Cloud env vars into config
**Active branch:** dev
**Deploy state:** peteguzzo.com IS live (Astro rebuild confirmed). peteguzzo.pages.dev is the preview URL.
**Model used this session:** claude-sonnet-4-6

---

## Handoff — 2026-08-11 (Authority Recon Agent)

**Session accomplished:**
- Completed full PG2 Authority Recon per CLM directive
- Delivered: docs/ai/PG2_AUTHORITY_RECON.md (73 URLs audited, 10 articles classified, 10 priority actions ranked)
- KEY DISCOVERY: peteguzzo.com IS NOW LIVE on the Astro rebuild — CURRENT_STATE.md is stale on this point. DNS was switched at some point after 2026-08-04.
- KEY ISSUE FOUND: Critical soft 404 problem — no custom 404.html, all unmatched URLs return HTTP 200 with homepage content. Legacy Squarespace URLs (/about-me, /pg2-director/peteguzzo, /industry-insights/slow-iphone-video, etc.) are all soft 404s.
- KEY ISSUE FOUND: SVP/EVP title contradiction — About page says "SVP Marketing & Strategy / Studio Operations" but Shear Enterprises page and MEMORY.md say EVP. About page needs one-line fix.
- No production changes made — recon only.

**In progress / incomplete:**
- PG2_AUTHORITY_RECON.md written. Pending CLM review and Pete approval before any technical fixes are implemented.
- 10 priority actions documented and ready for task delegation (see Section 10 of PG2_AUTHORITY_RECON.md)
- Uncommitted changes from 2026-08-04 session are still pending (8 modified + 5 untracked files on dev branch)
- GitHub PAT security issue (embedded in git remote URL) still unresolved — Pete must rotate before any git push

**Next session must:**
1. Run `/cortex-start`
2. Read PG2_AUTHORITY_RECON.md — this is the new controlling document
3. Pete confirm: DNS switch happened — update CURRENT_STATE.md to reflect Astro is live on peteguzzo.com
4. Priority 1: Create 404.astro custom page (fix soft 404 before anything else)
5. Priority 2: Fix SVP→EVP on About page (one-line edit, commit to dev)
6. After PAT rotation: commit pending files from 2026-08-04 and push

**DO NOT touch without reading context:**
- `tina/__generated__/` — auto-generated; read ARCHITECTURE.md fragile areas section first
- `public/admin/index.html` — auto-generated Tina admin; gitignore entry still deleted (check before committing)
- DNS / peteguzzo.com — already switched; do not touch DNS without explicit Pete instruction

**Last known good commit:** 3099ffa — Wire Tina Cloud env vars into config
**Active branch:** dev
**Deploy state:** peteguzzo.com IS live (Astro rebuild confirmed). peteguzzo.pages.dev is the preview URL.
**Model used this session:** claude-sonnet-4-6

---

## Handoff — 2026-08-04

**Session accomplished:**
- Installed CLAUDE.md (Cortex drop-in template) into project root
- Ran /cortex-init — full docs/ai/ structure created and populated
- Flagged embedded GitHub PAT in git remote URL (security issue — rotate immediately)

**In progress / incomplete:**
- 8 modified files + 5 untracked files are uncommitted (Shear Enterprises page, EVP images, Greg Muzzillo entry, Tina-generated files, home.json updates, studio content updates)
- peteguzzo.com domain not yet connected — still pointing to Squarespace

**Next session must:**
1. Run `/cortex-start`
2. Rotate the GitHub PAT embedded in the git remote URL — see WORKSPACE_MAP.md auth notes
3. Review uncommitted changes with `git status --short` and `git diff`
4. Commit pending changes to `dev` branch
5. Decide: connect peteguzzo.com domain to Cloudflare Pages, or continue content work first

**DO NOT touch without reading context:**
- `tina/__generated__/` — auto-generated; read ARCHITECTURE.md fragile areas section first
- `public/admin/index.html` — auto-generated Tina admin; the `.gitignore` entry for it was deleted (check before committing)
- DNS / peteguzzo.com domain — do not touch without explicit Pete instruction

**Last known good commit:** 3099ffa — Wire Tina Cloud env vars into config
**Active branch:** dev
**Deploy state:** Deployed to https://peteguzzo.pages.dev — real domain https://www.peteguzzo.com NOT connected (Squarespace still live)
**Model used this session:** claude-sonnet-4-6

---
