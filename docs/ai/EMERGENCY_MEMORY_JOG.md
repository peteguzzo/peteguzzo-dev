# EMERGENCY_MEMORY_JOG

Read this if context is lost, session has crashed, or you don't know where you are.

---

## What this project is

peteguzzo.com — personal portfolio and services site for Pete Guzzo (Executive Producer, Operations Strategist, Content Director, EVP at Shear Enterprises LLC). Built from scratch to replace the old Squarespace site.

## Stack in one line

Astro 6.4.7 + TinaCMS 3.10.0 + Tailwind CSS 4.x → static export → Cloudflare Pages

## Where everything lives

| What | Where |
|------|-------|
| Project root | `~/peteguzzo` |
| Content | `src/content/` (work .md files, studios .md, home.json) |
| Pages | `src/pages/` |
| Tina CMS config | `tina/config.ts` |
| Tina generated files | `tina/__generated__/` (do not hand-edit) |
| Public assets | `public/images/`, `public/files/` |
| Build output | `dist/` (never edit directly) |
| Cortex memory | `docs/ai/` |

## Current deploy state

- Preview live: https://peteguzzo.pages.dev
- Real domain: https://www.peteguzzo.com — NOT YET CONNECTED (still on Squarespace)
- Branch: `dev`

## How to start the dev server

```
cd ~/peteguzzo
npm run dev
```
→ http://localhost:4321

## How to deploy

Push to `dev` → Cloudflare Pages auto-builds (2–4 min). No manual step.

## Key facts

- 52 work items in `src/content/work/`
- 2 studio entries: Shear Media Studios (Pete's current operation), 211 Studio
- Design: Fraunces (display) + Inter (sans), ink/paper/rust palette
- Contact email: pg2@peteguzzo.com
- Resume PDF: `public/files/Pete-Guzzo-Resume.pdf`
- SECURITY: GitHub PAT was embedded in git remote URL — rotate and fix before next push

## If two attempts have failed

Stop. Run `/cortex-recover`. Read CURRENT_STATE.md → REFLEX_RULES.md → SESSION_HANDOFF.md in that order.
