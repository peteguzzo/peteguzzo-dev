# Project Instructions

This project uses PG2 Code Cortex for session memory and continuity.

---

## Cortex

All project memory lives in `docs/ai/`.

**If `docs/ai/` does not exist:** run `/cortex-init` before doing anything else.

### Session commands

| Command | When |
|---------|------|
| `/cortex-init` | First session only — creates the full memory structure |
| `/cortex-start` | Beginning of every substantial session — reads all memory, delivers a start brief |
| `/cortex-recover` | Immediately after two failed attempts — stops all changes, reconstructs context |
| `/cortex-capture` | After solving a meaningful problem — records incident and reflex |
| `/cortex-handoff` | Before ending a substantial session — updates state and handoff |
| `/cortex-status` | Quick orientation at any point — read-only, no changes |

### Memory files

| File | Purpose |
|------|---------|
| `docs/ai/CURRENT_STATE.md` | Where things stand right now |
| `docs/ai/ARCHITECTURE.md` | Stack, data flow, env var names, fragile areas |
| `docs/ai/WORKSPACE_MAP.md` | Interfaces, dashboards, tabs, verification points |
| `docs/ai/SESSION_HANDOFF.md` | Where the last session ended |
| `docs/ai/REFLEX_RULES.md` | Earned lessons from confirmed incidents |
| `docs/ai/INCIDENT_LOG.md` | Every meaningful problem and its resolution |
| `docs/ai/DEPLOY_RUNBOOK.md` | Step-by-step deployment procedure |
| `docs/ai/ROLLBACK_RUNBOOK.md` | Step-by-step rollback procedure |
| `docs/ai/LLM_TASK_REGISTRY.md` | What model performed what task with what outcome |
| `docs/ai/prompts/ACTIVE_TASK_PROMPT.md` | Current controlling task prompt |

---

## Project-specific rules

<!-- Add project-specific overrides here after /cortex-init runs -->

---

## Do not touch

<!-- List files, branches, systems, or configurations that must not be changed without explicit approval -->

---

## Key commands

<!-- Add project build, test, dev server, and deploy commands here after /cortex-init runs -->
