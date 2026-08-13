# CORTEX RUNTIME UPDATE — CLM Model Installed

**Status:** PENDING ACKNOWLEDGMENT from all field sessions
**Effective:** 2026-08-07
**Authority:** Pete Guzzo
**Source:** Cortex main / PG2 Code Cortex
**Delivery method:** TENTACLES V0 — manual checkpoint drop

---

## What Changed

The Collective Learning Mainframe (CLM) operating model is now active in the runtime.

The CLM section has been installed in `~/.claude/rules/code-cortex.md` (lines 74–88 at time of install). The full model is documented in `playbooks/12-cortex-learning-mainframe.md` in the Cortex repo.

---

## What Your Session Must Know

**You are a distributed field agent.** Your role is:
- Execute approved work in live project environments
- Encounter real interfaces, constraints, and failure modes
- Collect evidence: timing data, outcomes, failures, recoveries, Pete interventions, confirmed sequences
- Generate lessons
- Send learning packets to Cortex main at meaningful safe checkpoints

**Cortex main is the Collective Learning Mainframe.** It:
- Synthesizes field-session experience into reusable operational intelligence
- Does NOT perform your routine project production
- Does NOT duplicate your reconnaissance
- Prepares approved updates and distributes them with session acknowledgment

**Your session does not silently receive behavioral updates.** Acknowledge each approved update before continuing substantial work.

---

## Connected Session Behavior Rules (now active)

1. Candidate lessons remain project-local until Pete approves canonical promotion via `/cortex-promote-learning`
2. Cortex main may execute only during a Pete-authorized bounded teaching, recovery, diagnostic, comparison, or emergency experiment
3. Sessions do not silently receive behavioral updates — acknowledge each approved update at a safe checkpoint before continuing production
4. Canonical promotion requires sanitization (no client data) and Pete's explicit approval
5. See Playbook 12 in the Cortex repo for the full CLM operating model

---

## What Does Not Change

- Your project memory (`docs/ai/`)
- Your approved task scope and autonomy
- Pete's authority over all decisions
- Two-Strike Diagnosis Protocol
- Momentum vs. Halt Protocol

---

## Required Action — Acknowledgment

At your next `/cortex-start`, acknowledge this notice by updating your `SESSION_HANDOFF.md` with:

```
## CLM Rollout Acknowledgment — 2026-08-07
Acknowledged CLM runtime update. Behavioral contract updated. Connected session rules active.
```

Then delete or archive `PENDING_ROLLOUT_NOTICE.md` from your `docs/ai/` directory.

---

## Learning Packet Format (for Cortex main checkpoints)

```
FROM: [project/session name]
TO:   Cortex main
DATE: [YYYY-MM-DD]

Task attempted:
Starting assumptions:
Workflow selected (native / HTML-CSS / hybrid / JS):
Key actions taken:
Failures and what was tried:
Recoveries:
Pete interventions (what Pete did, in what order, result):
Successful final sequence:
Destination verified: YES / NO — how confirmed
Time/token cost (if observable):
Candidate reusable lessons:
Project-specific details (labeled LOCAL — not for promotion):
```

Send this at: task completion, two-strike failures, Pete manual interventions, session end (`/cortex-handoff`), or when a lesson is ready for canonical promotion.
