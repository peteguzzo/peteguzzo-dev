# WORKSPACE_MAP

Last updated: 2026-08-04
Updated by: claude-sonnet-4-6

---

## Project identity

| Field | Value |
|-------|-------|
| Project name | peteguzzo.com |
| Purpose | Personal portfolio + services site for Pete Guzzo — Executive Producer, Operations Strategist, Content Director |
| Source repository | GitHub: peteguzzo/peteguzzo-dev |
| Primary branch | dev |

---

## Hosting platform

| Field | Value |
|-------|-------|
| Platform | Cloudflare Pages |
| Deploy trigger | Push to `dev` branch (auto-build) |
| Build command | `tinacms build && astro build` |
| Output directory | `dist/` |
| Region / edge network | Cloudflare global edge |

---

## CMS / admin interfaces

| Interface | URL pattern | Purpose | Auth type |
|-----------|------------|---------|-----------|
| Tina local admin | http://localhost:4321/admin | Edit content locally during dev | None (local) |
| Tina Cloud dashboard | https://app.tina.io | Manage Tina project, tokens, branches | Email + password |

Notes: Tina admin at /admin writes content directly to GitHub via the Tina Cloud bridge. Schema is defined in `tina/config.ts`. Currently only the `homePage` collection is registered in Tina (home.json). Work items and studio entries are edited directly in markdown.

---

## Deployment dashboards

| Dashboard | URL pattern | Purpose | Auth type |
|-----------|------------|---------|-----------|
| Cloudflare Pages | https://dash.cloudflare.com | View build logs, check deploy status, manage env vars, trigger manual deploys | Email + password |

---

## Monitoring tools

| Tool | URL pattern | What it monitors | Auth type |
|------|------------|-----------------|-----------|
| Cloudflare Analytics | https://dash.cloudflare.com | Page views, performance, edge cache | Email + password |

---

## Testing tools / environments

| Tool | URL or command | Purpose | Notes |
|------|---------------|---------|-------|
| Local dev server | `npm run dev` | Runs tinacms dev + astro dev together | Default port: 4321 — http://localhost:4321 |
| Astro-only dev | `npm run dev:astro` | Run Astro without Tina (faster, no CMS) | Same port 4321 |
| Preview build | `npm run preview` | Serve built dist/ locally | Run after `npm run build` |
| Build | `npm run build` | `tinacms build && astro build` | Outputs to dist/ |

---

## Browser workspace

### Required open tabs (active session)

| # | Tab purpose | URL | Notes |
|---|------------|-----|-------|
| 1 | Local dev preview | http://localhost:4321 | Start with `npm run dev` |
| 2 | Tina local admin | http://localhost:4321/admin | Only available when dev server is running |
| 3 | Cloudflare Pages dashboard | https://dash.cloudflare.com | Monitor build status after push |

### Reference tabs (open as needed)

| Tab purpose | URL |
|------------|-----|
| GitHub repo | https://github.com/peteguzzo/peteguzzo-dev |
| Cloudflare Pages preview | https://peteguzzo.pages.dev |
| Tina Cloud dashboard | https://app.tina.io |
| Astro docs | https://docs.astro.build |

---

## Required verification points

| # | Check | How to verify | Expected result |
|---|-------|--------------|----------------|
| 1 | Home page loads | Navigate to / | Hero, services, current projects all render |
| 2 | Work index loads | Navigate to /work | All 52 work items display |
| 3 | Work detail renders | Navigate to any /work/[slug] | Title, category badge, related items section |
| 4 | Studios page loads | Navigate to /studios | Both Shear Media Studios and 211 Studio render |
| 5 | Shear Enterprises page | Navigate to /shear-enterprises | Loads without 404 |
| 6 | Resume PDF accessible | Navigate to /files/Pete-Guzzo-Resume.pdf | PDF downloads |
| 7 | No broken images | Scan key pages | No missing thumbnails or broken img tags |
| 8 | Admin panel accessible | Navigate to /admin | Tina admin loads (requires running dev server or deployed build) |

---

## Authentication requirements

| System | Auth type | Notes |
|--------|-----------|-------|
| Cloudflare Pages | Email + password | pg2@peteguzzo.com account |
| Tina Cloud | Email + password | Verify account email |
| GitHub | PAT or SSH | WARNING: PAT was embedded in git remote URL — rotate and switch to SSH or credential manager |

Credential storage:
- Local credentials: None (no .env files on disk)
- Production secrets: Cloudflare Pages dashboard (TINA_PUBLIC_CLIENT_ID, TINA_TOKEN, GITHUB_BRANCH)
- Never in: Cortex files, git history, screenshots

---

## Last verified workspace state

| Field | Value |
|-------|-------|
| Verified date | 2026-06-21 (per CHANGELOG-overnight.md) |
| Verified by | claude-sonnet-4-6 (overnight session) |
| All tabs accessible | NOT TESTED this session |
| All auth working | NOT TESTED this session |
| Local dev server | NOT TESTED this session |
| Staging | N/A |
| Production preview | WORKING — https://peteguzzo.pages.dev |
| Real domain | NOT CONNECTED — peteguzzo.com still on Squarespace |
| Notes | 8 modified + 5 untracked files pending commit as of 2026-08-04 |
