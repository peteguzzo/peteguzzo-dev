# DEPLOY_RUNBOOK

Step-by-step deployment procedure for peteguzzo.com.

Last verified: 2026-06-21 (per CHANGELOG-overnight.md)
Last verified by: claude-sonnet-4-6

---

## Pre-deploy checklist

- [ ] All changes committed and pushed to `dev`
- [ ] `git status --short` is clean
- [ ] Local build passes: `npm run build`
- [ ] Environment variables confirmed in Cloudflare Pages dashboard (TINA_PUBLIC_CLIENT_ID, TINA_TOKEN, GITHUB_BRANCH)
- [ ] Pete has approved the deployment

## Deployment method

Automatic — pushing to the `dev` branch triggers a Cloudflare Pages build and deploy. No manual CLI step required.

## Deployment steps

1. Stage and commit all changes: `git add <files> && git commit -m "..."`
2. Push to remote: `git push origin dev`
3. Open Cloudflare Pages dashboard: https://dash.cloudflare.com → Pages → peteguzzo
4. Monitor the build log — build command: `tinacms build && astro build`
5. Confirm deploy completes with no errors
6. Verify at https://peteguzzo.pages.dev (or real domain once connected)

## Post-deploy verification

- [ ] https://peteguzzo.pages.dev loads (or https://www.peteguzzo.com once domain is connected)
- [ ] /work loads all 52 items
- [ ] /studios loads both studio entries
- [ ] /shear-enterprises loads without 404
- [ ] Tina admin at /admin loads (if Tina Cloud env vars are set)
- [ ] Resume PDF at /files/Pete-Guzzo-Resume.pdf downloads

## Expected deploy time

2–4 minutes (Astro static build on Cloudflare Pages)

## Rollback

See ROLLBACK_RUNBOOK.md.

## Known non-fatal warnings during deploy

- Tina build may emit warnings about TypeScript in config files — these are expected and do not block the build.

## Known blockers

- If `TINA_PUBLIC_CLIENT_ID` or `TINA_TOKEN` env vars are missing from the Cloudflare dashboard, `tinacms build` will fail. Check the Cloudflare Pages env var settings first.
- If `GITHUB_BRANCH` is not set, Tina defaults to `undefined` — set it explicitly to `dev`.
