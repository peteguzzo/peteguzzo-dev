# ROLLBACK_RUNBOOK

How to revert peteguzzo.com to a previous known-good state.

Last verified: 2026-08-04

---

## When to use this

Use rollback when:
- A deploy breaks the live site (pages 404, build errors, blank pages)
- A content change corrupts the site structure
- A Tina schema change causes a build failure

Prefer a forward fix (new commit) over rollback when the issue is isolated and small.

## Last known good commit

See CURRENT_STATE.md → "Last known good commit"

## Option A: Revert via Cloudflare Pages dashboard (fastest)

1. Open https://dash.cloudflare.com → Pages → peteguzzo → Deployments
2. Find the last known good deployment in the list
3. Click the three-dot menu → "Rollback to this deployment"
4. Confirm — Cloudflare re-activates that deployment instantly (no rebuild)
5. Verify the live URL loads correctly

## Option B: Revert via git (when code change is the cause)

1. Identify the last known good commit: `git log --oneline` or read CURRENT_STATE.md
2. Create a revert commit (do NOT use `git reset --hard` without Pete's explicit approval):
   ```
   git revert HEAD
   git push origin dev
   ```
3. Cloudflare Pages will auto-build from the revert commit
4. Monitor build log and verify after deploy completes

## Rollback verification

- [ ] Live URL (peteguzzo.pages.dev or peteguzzo.com) loads correctly
- [ ] /work loads all items
- [ ] No 404s on key pages (/studios, /shear-enterprises, /contact)
- [ ] Console has no critical errors

## What rollback does NOT fix

- Content edited via Tina CMS and committed to GitHub — those commits remain in git history; revert them explicitly if needed
- Cloudflare Pages env var changes — managed separately in the dashboard, not in git
- DNS changes — not applicable until domain is connected

## After rollback

Update CURRENT_STATE.md with the rollback event and new last known good state. Run `/cortex-capture` to record the incident.
