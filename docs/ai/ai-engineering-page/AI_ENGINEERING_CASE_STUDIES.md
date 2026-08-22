# AI_ENGINEERING_CASE_STUDIES.md
## Case Study Evidence and Drafts
## Field Agent: PG2-AI-ENGINEERING | Date: 2026-08-12

All claims mapped to verified source. No fabricated facts. Gaps flagged explicitly.

---

## CASE STUDY A: CORTEX — The Operational Intelligence System

### Evidence Status: RICH — PUBLISHABLE (with Pete confirmation on naming)

### The Problem Being Solved

Every AI coding session resets to zero. The model has no memory of the previous session. Errors that were diagnosed and resolved in one session must be re-diagnosed from scratch in the next. There's no institutional learning — only whatever the human remembers to include in the prompt.

Verified in source: "Claude Code sessions reset cold. Cortex gives every session access to accumulated memory, incidents, reflex rules, and handoff state — and synthesizes field-session experience into reusable doctrine across projects." (pg2_code_cortex.md)

### What Was Built

A persistent operational learning system operating on two layers:

**Project layer (per project):**
- CURRENT_STATE.md — live operational state, not theoretical
- SESSION_HANDOFF.md — where the last session ended; where the next one starts
- REFLEX_RULES.md — lessons earned from verified incidents; not theory
- INCIDENT_LOG.md — every meaningful problem and its resolution
- ARCHITECTURE.md — stack, data flow, fragile areas, env var names
- DEPLOY_RUNBOOK.md and ROLLBACK_RUNBOOK.md — step-by-step operational procedures
- LLM_TASK_REGISTRY.md — what model performed what task with what outcome

**System layer (CORTEX CLM):**
- Collective Learning Mainframe — synthesizes lessons from all project sessions
- 5 field sessions registered as of 2026-08-07 (verified: SMS-Barstool, shear-barstool-site, shear-media-studios-seo, heights-lounge-cms, peteguzzo)
- TENTACLES V0 — cross-session observability via manual checkpoint file exchange
- Ruflo — designed orchestration layer (not yet active)
- Current version: V2.0.1

### Why This Is Different from Machine Learning

VERIFIED comparison from canonical doctrine (PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md):

| Dimension | Machine Learning | Persistent Operational Learning (CORTEX) |
|-----------|-----------------|------------------------------------------|
| Learning mechanism | Weight updates via training | External state files updated by humans and agents |
| Memory location | Inside the model | Human-readable files outside the model |
| Auditability | Opaque | Fully visible |
| Editability | Requires retraining | Edit a text file |
| Project isolation | Not possible | Per-project memory scoped |
| Error correction | Requires retraining | Delete or update the rule |
| Evidence requirement | Statistical | Incident-specific, traceable |
| Explainability | Limited | Every action traceable to source |

### Key Verified Quotes (from source files)

"The model's weights are unchanged. The model's effective behavior improves because every new session starts with a richer, verified operational context."
— PG2-CORTEX-PROJECT-JOURNAL.md (VERIFIED)

"Previous mistakes no longer need to be rediscovered."
— Briefing language (Pete-approved framing)

"The organization should not have to pay for the same mistake twice."
— Briefing language (Pete-approved framing)

### What Guides Future Inference (verified list from PG2-CORTEX-PROJECT-JOURNAL.md)
- Current state files
- Session handoffs
- Reflex rules earned from verified incidents
- Incident logs
- Architecture documentation
- Workspace maps
- Deploy and rollback runbooks
- Active task prompts

### Current State (as of 2026-08-12)

- CORTEX V2.0.1 fully operational
- 8 skills installed globally
- 5 field sessions active
- TENTACLES V0 operational (file-exchange model; Pete as live relay)
- TENTACLES V1 designed but NOT yet active (gate: Barstool safe checkpoint)
- Ruflo designed but NOT yet active (gate: Pete's explicit activation)
- PG2-CORTEX-PROJECT-JOURNAL.md active — milestone documentation in progress (some entries have PENDING status)

### Gaps / What's Not Yet Documented

- Exact development timeline not fully confirmed in source files (journal has PENDING entries)
- No performance metrics (token savings, time savings) — observational but not measured
- V1/Ruflo are designed architecture, not live capability — must not be presented as currently operational

### NEEDS PETE

- Should CORTEX be named by name on the public page? Currently planned: yes (Pete invented it; it's his differentiator).
- Are the PENDING entries in the project journal expected to be resolved before this page launches?

---

## CASE STUDY B: Heights Lounge CMS

### Evidence Status: RICH — PUBLISHABLE

### The Problem Being Solved

A client (kava bar, Heights Lounge Tampa) needed a website they could update themselves. Requirements: event listings, schedule management, brand color control, page content editing. Reality: Next.js + TinaCMS + Cloudflare Pages is technically complex. The engineering challenge is making that complexity invisible to the client.

Added complexity: AI auto-fill functionality required integrating a Cloudflare Worker with the Anthropic API — an additional system layer that needed to be stable and invisible.

### What Was Built

Stack (verified):
- Framework: Next.js 16.2.10, static export (output: 'export', trailingSlash: true)
- CMS: TinaCMS (Tina Cloud) — JSON content files
- Hosting: Cloudflare Pages with auto-deploy from GitHub (push to main → rebuild)
- AI component: Cloudflare Worker (heights-lounge-extract) with ANTHROPIC_API_KEY — AI auto-fill for CMS content
- Custom component: ColorWheelField.tsx — custom TinaCMS field giving client native OS color picker

Content types managed by client: featured-events, schedule, page content, site settings (all JSON)

### The Learning System in Action (14 Earned Reflex Rules)

This project generated 14 documented reflex rules from real incidents:

Selected reflex rules with verified source (REFLEX_RULES.md, heights-lounge-cms):

Rule 1 — TINA GRAPHQL SCHEMA MISMATCH
Root cause verified: TinaCloud reads schema from tina-lock.json in GitHub, not from tina/__generated__/ directly. If lock file is stale, mismatch persists regardless of code state. Resolution: sync ALL THREE keys (schema, graphql, lookup) from tina/__generated__/ into tina-lock.json after any schema change.
Incident: HLC-INC-003, HLC-INC-004

Rule 7 — BOOLEAN TOGGLE BUG
The active toggle field sometimes doesn't mark the TinaCMS form dirty — won't save. Workaround: edit JSON directly. Root cause: known TinaCMS v3.x behavior.

Rule 8 — EXPIRESAT FIELD
Empty string ("") → "Invalid Date" on save. Null → "Dec 31, 1969" in UI. Correct behavior: omit the field entirely when not needed.

Rule 9 — EVENTS DON'T APPEAR AFTER TINA SAVE
Tina writes content to GitHub. The live site does NOT auto-rebuild. Requires: git pull → next build → wrangler pages deploy. (Note: auto-deploy was subsequently wired in 2026-08-04, addressing this for future saves.)

Rule 13 — DO NOT ADD SEO BACK TO TINA
SEO was removed from Tina CMS after it caused the original schema mismatch incident. Now hardcoded in generateMetadata() in each page TSX file. Adding it back would repeat HLC-INC-003.

### Engineering Outcome

Verified state (as of 2026-08-04):
- TinaCloud schema mismatch resolved (commit 267792d — all 3 tina-lock.json keys synced)
- Auto-deploy from GitHub via Cloudflare Pages native integration: ENABLED
- AI auto-fill (Cloudflare Worker): ANTHROPIC_API_KEY set and operational
- Custom color wheel in TinaCMS: functional — client controls brand colors via native OS color picker
- Events filter: .filter(ev => ev.active !== false) (boolean-safe implementation)

### Key Sentence for Page Copy

"14 operational rules — each one earned from a real failure, documented, and prevented from happening again."

### Gaps

- No client revenue or satisfaction metrics in source files — outcome story focuses on engineering quality
- Auto-deploy first smoke test was pending as of last documented session (2026-08-04)
- Custom domain (if any beyond pages.dev) listed as UNVERIFIED

---

## CASE STUDY C: SEO + AI Discovery

### Evidence Status: PARTIAL — methodology publishable; outcomes pending

### The Problem Being Solved

Two related but distinct challenges:

For peteguzzo.com: AI systems (ChatGPT, Perplexity, Google AI) could describe Pete correctly but generically. The specific facts that make Pete distinct — Kestum Bilt $1M+, 80-crew Seiko production, two studio builds — weren't structured for machine consumption. The site said what Pete does; it couldn't prove how well he does it.

For Shear Media Studios: 20 SEO articles needed to be developed and published on Squarespace with correct entity architecture, structured data, and AI/LLM discoverability. Each article required a three-source structure: body copy (.md), SEO metadata (.json), JSON-LD schema (.schema.json).

### What Was Built / Approached

PeteGuzzo.com (verified findings from PG2_AUTHORITY_RECON.md):
- Full authority audit: 73 pages inventoried; 10 articles classified; 5 authority pillars defined
- Soft 404 problem discovered and documented: HTTP 200 on all unmatched URLs
- AI discoverability assessment framework: 7 specific questions an AI should be able to answer about Pete
- Person schema gap analysis: missing alumniOf, telephone, address, description, award, Article schema
- llms.txt gap analysis: missing quantified achievements, named clients, services, awards, current productions
- Implementation plan created as Ruflo-ready task bundles — self-contained, delegatable
- Audit conducted without making any production changes (verified — both agents state this at end of their documents)

Shear Media Studios (verified findings from SMS-SEO CURRENT_STATE.md):
- 20 articles with systematic source files: .md, .json, .schema.json per article
- Reconciliation audit (2026-08-10): 15 Squarespace DRAFT shells, 5 LOCAL_ONLY, 5 bodies verified via iframe
- Two-strike failure: Cmd+V clipboard paste failed (system clipboard replaced between copy and paste)
- Recovery: ClipboardEvent dispatch — inject HTML directly via DataTransfer object; bypasses system clipboard
- R10 bulk fix: all 20 articles standardized to "production studio" entity sentence
- R04 bulk fix: all 20 articles corrected to /studios-spaces/studio-a and /studios-spaces/studio-g links
- Phase 2 complete (SEO titles + meta descriptions applied to 8 accessible articles)
- Gate: no article published without Pete's explicit approval (Tier 3)

### Key Principles Demonstrated

1. Semantic architecture: every page mapped to an authority pillar before writing anything
2. AI discoverability as a design constraint: structured data and llms.txt planned for machine consumption, not just human readers
3. Audit without changes: the authority recon generated no production changes — recommendations only
4. Evidence-based content: every article claim has a source gate; soft-blocker facts are held, not fabricated

### Gaps / Status

- PeteGuzzo.com implementation plan not yet executed (waiting for Pete: GitHub PAT rotation before push)
- SMS SEO: project in progress, no published results to cite yet
- No before/after ranking or traffic data
- This is a methodology case study, not a results case study — frame accordingly

### NEEDS PETE

- Kestum Bilt revenue figures ($1M+, $750K average): confirm publicly shareable on web page
- HSN 25% sales lift: confirm publicly shareable and attributed correctly
- Tampa Digital $3.5M: confirm publicly shareable

---

## CASE STUDY D: Supervised Infrastructure Engineering (Chicago SRT Test)

### Evidence Status: VERIFIED — PUBLISHABLE after sanitization confirmation

### SANITIZATION STATUS: PENDING PETE CONFIRMATION
The raw event record (SHEAR_CHICAGO_SRT_TEST_2026-08-12.md) is PRIVATE.
The operational learning doc (SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md) is the approved publishable-candidate version.
NEEDS PETE: confirm no facility names, vendor names, or specific network details (IPs, ports, equipment model names) should appear even in abstract form.

Current plan: describe as "live broadcast infrastructure connectivity test" — no facility names, no network specifics.

### The Problem Being Solved

Multi-party live broadcast connectivity test. Three separate control domains (local network team, media appliance vendor, remote broadcast team). Multiple experienced engineers asserted the required configuration was impossible through a specific network path.

The problem: an asserted impossibility that had not been verified against actual system state.

### What Was Done

Verified from SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md:
1. Did NOT redesign the system around the unverified assertion
2. Established full topology: equipment, IPs, physical path, connection quality (reconnaissance before action)
3. Confirmed device identity (IP and MAC)
4. Stabilized device address before touching port forwarding (STABILIZE DEPENDENCIES FIRST)
5. Applied minimum scoped change (MINIMUM REVERSIBLE CHANGE)
6. Tested incrementally with remote team
7. Validated at actual endpoints (CONFIGURED ≠ VERIFIED)

Result: All feeds and return path succeeded through the path engineers said would not work.

### The Learning Captured

CORTEX captured this as a constraint classification framework (PROPOSED — pending Pete approval for canonical promotion):

| Classification | Meaning |
|----------------|---------|
| VERIFIED | Tested against this actual system |
| DOCUMENTED | Published by controlling authority |
| OBSERVED | Seen to fail in this environment previously |
| INHERITED | Passed down from prior operator; original reason not preserved |
| ASSUMED | Based on experience or convention — not tested |
| INFERRED | Logically derived, not directly observed |
| HISTORICAL PRACTICE | How it has been done; not necessarily the only way |

ASSUMED, INHERITED, and HISTORICAL PRACTICE should trigger a verification step — not immediate redesign.

Also captured (all PROPOSED — pending Pete approval):
- CONFIGURED ≠ VERIFIED: Configuration success is an intermediate state; completion = endpoint verification
- STABILIZE DEPENDENCIES FIRST: Stabilize upstream values before creating downstream dependencies
- MINIMUM REVERSIBLE CHANGE: Define the smallest change that addresses only the failing boundary; establish rollback; validate at endpoint
- MULTI-PARTY RESPONSIBILITY MAP: Map each layer to who controls / can observe / can change it before remediation

### Key Language (from briefing — approved framing)

USE: "Expert opinion was treated as valuable evidence, but not as a substitute for verified system behavior."
DO NOT USE: "Pete proved the engineers wrong."

### Gaps

- 6 proposed reflex rules are PENDING Pete approval for canonical promotion — cannot state them as official CORTEX doctrine
- Facility names, vendor names, and network specifics excluded from public-facing content
- The playbook candidate (Remote Video/SRT Connection Validation Playbook) is also PENDING Pete approval

---

## CASE STUDY E: Qvisor.com

### Evidence Status: NONE FOUND — CANNOT WRITE WITHOUT PETE

Search conducted (2026-08-12):
- find /Users/deluvaakaporky -name "*.md" -path "*qvisor*" — NO RESULTS
- find /Users/deluvaakaporky -name "*.md" -path "*Qvisor*" — NO RESULTS
- All directories in PROJECTS CODE listed — no Qvisor directory
- TENTACLES_V0.md registered sessions — no Qvisor

STATUS: NEEDS PETE — SOURCE MATERIAL MISSING
This slot is held open in the page outline. Will be populated if Pete supplies source material.
DO NOT invent, infer, or fabricate any Qvisor claims.

---

## CROSS-CASE THEMES (for page narrative cohesion)

These themes appear across multiple verified case studies:

1. **Reconnaissance before action** — documented in Chicago SRT; peteguzzo.com audit; SMS-SEO reconciliation
2. **Configured ≠ Verified** — explicit reflex in SRT case; implicit in Heights Lounge deploy workflow
3. **Reflex rules earned from real failures** — Heights Lounge 14 rules; SRT constraint classification; SMS-SEO ClipboardEvent fix
4. **No production changes during audit phases** — peteguzzo.com authority recon; SMS-SEO reconciliation
5. **Expert opinion classified, not accepted** — SRT test; implicit in all CORTEX constraint classification
6. **Three-tier action model** — Tier 1 (autonomous) / Tier 2 (escalate with recommendation) / Tier 3 (halt) — runs through all projects
7. **Memory that accumulates across sessions** — the core CORTEX value; demonstrated across all case studies

These themes are the connective tissue for the page narrative.
