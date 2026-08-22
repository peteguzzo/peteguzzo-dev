# AI_ENGINEERING_CLAIMS_VERIFICATION.md
## Every Factual Claim Mapped to Verified Evidence
## Field Agent: PG2-AI-ENGINEERING | Phase: 1 STUB — Expanded in Phase 2

---

## STATUS: PHASE 2 — ACTIVE

Updated 2026-08-12 to incorporate LOCKED OPENING DIRECTIVE from Pete via CLM.
Phase 2 claim mapping is now complete for all sections based on current page outline.

Claims are classified as:
- VERIFIED — confirmed by direct file read in Phase 1
- PENDING — needs Phase 2 confirmation from source
- NEEDS PETE — requires Pete to confirm before publishing
- DO NOT USE — cannot be verified or is specifically prohibited
- LOCKED — approved by Pete; do not modify without Pete

---

## PRE-VERIFIED CLAIMS (confirmed in Phase 1 recon)

### CORTEX Architecture Claims

| Claim | Source | Status |
|-------|--------|--------|
| CORTEX is a real operational system, not a theoretical concept | TENTACLES_V0.md, pg2_code_cortex.md | VERIFIED |
| 5 active field sessions registered | TENTACLES_V0.md | VERIFIED (as of 2026-08-07) |
| Machine learning uses weight updates; CORTEX uses external state files | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| Every action in CORTEX is traceable to observable evidence | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| TENTACLES V0 is NOT a live supervisory connection | TENTACLES_V0.md (V0 Confirmed Limitations, 2026-08-07 live-link test) | VERIFIED |
| Pete acts as the live relay between sessions currently | TENTACLES_V0.md | VERIFIED |
| The system accumulates verified experience across sessions | PG2-CORTEX-PROJECT-JOURNAL.md | VERIFIED |
| "The model's weights are unchanged. The model's effective behavior improves because every new session starts with a richer, verified operational context." | PG2-CORTEX-PROJECT-JOURNAL.md (verbatim) | VERIFIED |
| Ruflo is designed but not yet active | RUFLO_INTEGRATION_PLAN.md | VERIFIED |
| V1 heartbeat infrastructure is designed but not yet implemented | TENTACLES_V0.md | VERIFIED |

### PeteGuzzo.com Rebuild Claims

| Claim | Source | Status |
|-------|--------|--------|
| peteguzzo.com is live on Astro rebuild | CURRENT_STATE.md (confirmed by DNS + robots.txt observation) | VERIFIED |
| Soft 404 problem discovered: HTTP 200 on all unmatched URLs | PG2_AUTHORITY_RECON.md Section 5 | VERIFIED |
| llms.txt exists and is undersupported | PG2_AUTHORITY_RECON.md Section 8, IMPLEMENTATION_PLAN.md P1-4 | VERIFIED |
| Person schema is accurate but minimal | PG2_AUTHORITY_RECON.md Section 8 | VERIFIED |
| AI/LLM can describe Pete correctly but generically | PG2_AUTHORITY_RECON.md Section 8 | VERIFIED |
| Authority audit was conducted without making production changes | AUTHORITY_RECON.md + IMPLEMENTATION_PLAN.md (both end with "no production changes made") | VERIFIED |
| Multi-agent coordination: 3 separate agents commissioned for this project | CURRENT_STATE.md + AUTHORITY_RECON.md + this session | VERIFIED |

### Heights Lounge Claims

| Claim | Source | Status |
|-------|--------|--------|
| Stack: Next.js + TinaCMS + Cloudflare Pages | CURRENT_STATE.md (heights-lounge-cms) | VERIFIED |
| AI auto-fill via Cloudflare Worker with Anthropic API | CURRENT_STATE.md (heights-lounge-cms), confirmed ANTHROPIC_API_KEY set | VERIFIED |
| 14 documented reflex rules earned from real incidents | REFLEX_RULES.md (heights-lounge-cms) — 14 numbered rules | VERIFIED |
| Auto-deploy: push to GitHub → Cloudflare Pages rebuilds | CURRENT_STATE.md, SESSION_HANDOFF.md (heights-lounge-cms) | VERIFIED |
| Tina 3-key sync pattern: all three of schema, graphql, lookup keys must be synced in tina-lock.json | REFLEX_RULES.md Rule 1 (heights-lounge-cms) — verified from HLC-INC-003, HLC-INC-004 | VERIFIED |
| SEO removed from CMS, hardcoded in TSX files — root cause was schema mismatch | REFLEX_RULES.md Rule 13, HLC-INC-003/INC-004 | VERIFIED |

### Chicago SRT Test Claims

| Claim | Source | Status |
|-------|--------|--------|
| Multi-party broadcast connectivity test conducted | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| Multiple engineers stated configuration was impossible — assertion was false | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| All feeds + return path succeeded | SHEAR_CHICAGO_SRT_TEST_2026-08-12.md (confirmed outcome table) | VERIFIED |
| Team mapped topology before making any change | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| Minimum reversible change applied | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| Constraint classification framework developed from this event | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| CONFIGURED ≠ VERIFIED reflex proposed | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| "Expert opinion was treated as valuable evidence, but not as a substitute for verified system behavior" | Briefing language constraint (approved framing) | VERIFIED |

### SEO + AI Discovery Claims

| Claim | Source | Status |
|-------|--------|--------|
| 20 SEO articles in systematic development for Shear Media Studios | SMS-SEO CURRENT_STATE.md | VERIFIED |
| Three-file source structure per article: .md, .json, .schema.json | SMS-SEO CURRENT_STATE.md | VERIFIED |
| ClipboardEvent dispatch method developed after Cmd+V two-strike failure | SMS-SEO CURRENT_STATE.md | VERIFIED |
| Authority pillar framework defined for peteguzzo.com (5 pillars) | PG2_AUTHORITY_RECON.md | VERIFIED |
| AI discoverability assessment conducted for peteguzzo.com | PG2_AUTHORITY_RECON.md Section 8 | VERIFIED |

---

## CLAIMS REQUIRING PETE CONFIRMATION (NEEDS PETE)

| Claim | Why Needs Pete | Priority |
|-------|---------------|---------|
| Kestum Bilt: $1M+ revenue, $750K average | Confirm publicly shareable on web page | HIGH |
| HSN: 25% sales lift on livestream | Confirm publicly shareable and correctly attributed | HIGH |
| Tampa Digital: $3.5M production revenue | Confirm publicly shareable | HIGH |
| Seiko/Jimmie Johnson: 80+ crew, five jurisdictions, high six-figure budget | Confirm publicly shareable | HIGH |
| CORTEX should be named by name on public page | Strategy decision | HIGH |
| Chicago SRT test: facility names or vendor names | Sanitization level confirmation | HIGH |
| Qvisor.com case study | Source material entirely missing | BLOCKER |

---

## PROHIBITED CLAIMS (DO NOT USE)

| Prohibited | Reason | Authority |
|------------|--------|-----------|
| "Mistakes disappear" | Explicitly prohibited by briefing | Initial briefing |
| "Pete proved the engineers wrong" | Explicitly prohibited by briefing | Initial briefing |
| "CORTEX prevents errors" | Not verified; use "Previous mistakes no longer need to be rediscovered" | Initial briefing |
| Any claim about Qvisor without source material | No source found | Phase 1 recon |
| Any V1/Ruflo capability as currently active | Both are designed but NOT YET active | TENTACLES_V0.md, RUFLO_INTEGRATION_PLAN.md |
| "AI actively supervising" field sessions | Confirmed false — TENTACLES V0 is file-exchange only | TENTACLES_V0.md confirmed limitations |
| "AI built this website by itself." | LOCKED prohibition — Pete via CLM 2026-08-12 | LOCKED OPENING DIRECTIVE |
| "AI built this autonomously." | LOCKED prohibition — Pete via CLM 2026-08-12 | LOCKED OPENING DIRECTIVE |
| Any overclaim of agent autonomy | The supervised, human-governed model is the point | LOCKED OPENING DIRECTIVE |

## LOCKED APPROVED FRAMING (use these; do not contradict)

| Approved phrasing | Source |
|------------------|--------|
| "AI agents performed substantial research, engineering, and execution inside a supervised operating system." | LOCKED OPENING DIRECTIVE — Pete via CLM 2026-08-12 |
| "Previous mistakes no longer need to be rediscovered." | Initial briefing (Pete-approved) |
| "The organization should not have to pay for the same mistake twice." | Initial briefing (Pete-approved) |
| "Expert opinion was treated as valuable evidence, but not as a substitute for verified system behavior." | Initial briefing (Pete-approved) — SRT case study framing |
| "The impressive part is that multiple AI specialists could work over time, preserve operational learning, hand work to one another, and remain governed by a human-controlled supervisory layer." | LOCKED OPENING DIRECTIVE — Pete via CLM 2026-08-12 |

---

## PHASE 2 — SECTION-BY-SECTION CLAIM MAP

Each planned claim mapped to its evidence source. Organized by page section.

---

### SECTION 1: LOCKED OPENING

| Claim | Source | Status |
|-------|--------|--------|
| Eyebrow: "AI ENGINEERING & OPERATIONAL INTELLIGENCE" | Pete via CLM directive 2026-08-12 | LOCKED |
| H1: "This page was built by the system it describes." | Pete via CLM directive 2026-08-12 | LOCKED |
| "CORTEX is the operational intelligence system I've been engineering around modern AI agents." | Pete via CLM directive 2026-08-12 | LOCKED |
| "It gives specialized agents persistent context, defined responsibilities, supervisory oversight, verification, learning and human approval gates" | Pete via CLM directive 2026-08-12 | LOCKED |
| "so they can work together without every new session starting from zero." | Pete via CLM directive 2026-08-12 | LOCKED |
| "This page became one of its own projects." | Pete via CLM directive 2026-08-12 | LOCKED |
| "Research, source verification, content architecture, writing, engineering and QA were distributed across specialized agents under CLM supervision." | Pete via CLM directive 2026-08-12 | LOCKED |
| "The work was reconciled against prior project history, verified before implementation, and kept offline until I approved the result." | Pete via CLM directive 2026-08-12 | LOCKED |
| "AI agents are powerful, but most of them still walk into the room like it's their first day." | Pete via CLM directive 2026-08-12 | LOCKED |

---

### SECTION 2: THE FOUR LEVELS

| Claim | Source | Status |
|-------|--------|--------|
| Level 1 framing: agent receives instruction, completes task, forgets everything | Observed behavior of any stateless AI session | VERIFIED — confirmed behavior of Claude Code sessions per pg2_code_cortex.md ("Sessions reset cold") |
| Level 2 framing: documentation helps but doesn't capture what went wrong | Standard limitation of static docs; confirmed implicitly by CORTEX rationale | VERIFIED — pg2_code_cortex.md: "Cortex gives every session access to accumulated memory, incidents, reflex rules, and handoff state" |
| Level 3 framing: handoff notes are only as good as what the human remembered to include | Confirmed by TENTACLES V0 limitation: Pete acts as live relay; manual checkpoint model | VERIFIED — TENTACLES_V0.md: "V0 is NOT a live connection. Pete currently acts as the live relay." |
| Level 4 framing: CORTEX — accumulated verified experience across sessions | PG2-CORTEX-PROJECT-JOURNAL.md, PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| "Previous mistakes no longer need to be rediscovered." | Initial briefing — Pete-approved language | LOCKED |
| "The organization should not have to pay for the same mistake twice." | Initial briefing — Pete-approved language | LOCKED |
| "The model's weights are unchanged. The model's effective behavior improves because every new session starts with a richer, verified operational context." | PG2-CORTEX-PROJECT-JOURNAL.md (verbatim) | VERIFIED |

---

### SECTION 3: META-STORY (This Page Is One of the Case Studies)

| Claim | Source | Status |
|-------|--------|--------|
| CORTEX/CLM established the mission and retained project context | Pete via CLM directive 2026-08-12; confirmed by existence of this agent session and its briefing structure | LOCKED + VERIFIED |
| Field agents performed: research, source verification, writing, architecture, engineering, QA | Pete via CLM directive 2026-08-12; confirmed by actual Phase 1 work product in this session | LOCKED + VERIFIED |
| Agents worked inside controlled project boundaries | Confirmed by agent briefing constraints: "DO NOT publish, push to production, alter DNS, modify live site structure, or interfere with other agents' work" | VERIFIED |
| Findings reported back to CLM | CLM review step in all phases per briefing | VERIFIED |
| CLM reconciled work across agents and prior project knowledge | Structure of PG2_AUTHORITY_RECON.md and PG2_AUTHORITY_IMPLEMENTATION_PLAN.md — two prior agents, this agent receives their work | VERIFIED |
| Pete remained human authority for consequential decisions and launch | "DO NOT publish" instruction; launch is Tier 3 per LAUNCH_CHECKLIST.md | VERIFIED |
| Implemented in Astro/GitHub/Cloudflare stack | ARCHITECTURE.md — confirmed stack | VERIFIED |
| NOT: "AI built this autonomously." | LOCKED prohibition — Pete via CLM | LOCKED |
| YES: "AI agents performed substantial research, engineering, and execution inside a supervised operating system." | LOCKED framing — Pete via CLM | LOCKED |

---

### SECTION 4: CASE STUDIES

#### A: CORTEX System

| Claim | Source | Status |
|-------|--------|--------|
| CORTEX is a real, operational system (not theoretical) | pg2_code_cortex.md, TENTACLES_V0.md | VERIFIED |
| Current version: V2.0.1 | pg2_code_cortex.md | VERIFIED |
| 8 skills installed globally | pg2_code_cortex.md | VERIFIED |
| 5 field sessions registered | TENTACLES_V0.md | VERIFIED |
| Memory file structure (CURRENT_STATE, SESSION_HANDOFF, REFLEX_RULES, INCIDENT_LOG, ARCHITECTURE, DEPLOY_RUNBOOK, ROLLBACK_RUNBOOK, LLM_TASK_REGISTRY) | pg2_code_cortex.md | VERIFIED |
| Machine learning vs. Persistent Operational Learning comparison table | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| Learning mechanism: weight updates vs. external state files | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| Memory location: inside model vs. human-readable files | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| Auditability: opaque vs. fully visible | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| Error correction: retraining vs. edit a text file | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| Ruflo designed but NOT yet active | RUFLO_INTEGRATION_PLAN.md | VERIFIED — do not claim Ruflo is live |
| V1 heartbeat infrastructure designed but NOT yet active | TENTACLES_V0.md | VERIFIED — do not claim V1 is live |
| TENTACLES V0 is NOT a live supervisory connection | TENTACLES_V0.md (confirmed by 2026-08-07 live-link test) | VERIFIED — critical accuracy point |

#### B: Heights Lounge

| Claim | Source | Status |
|-------|--------|--------|
| Stack: Next.js + TinaCMS + Cloudflare Pages | heights-lounge-cms/docs/ai/CURRENT_STATE.md | VERIFIED |
| AI auto-fill via Cloudflare Worker + Anthropic API | CURRENT_STATE.md (heights-lounge-cms) | VERIFIED |
| 14 reflex rules documented in REFLEX_RULES.md | heights-lounge-cms/docs/ai/REFLEX_RULES.md (14 numbered rules confirmed) | VERIFIED |
| Auto-deploy: push to GitHub → Cloudflare Pages rebuilds | CURRENT_STATE.md — "Auto-deploy from GitHub via Cloudflare Pages native integration: ENABLED 2026-08-04" | VERIFIED |
| tina-lock.json 3-key sync pattern (schema + graphql + lookup) | REFLEX_RULES.md Rule 1, sourced from HLC-INC-003 and HLC-INC-004 | VERIFIED |
| SEO removed from CMS; now hardcoded in generateMetadata() | REFLEX_RULES.md Rule 13 | VERIFIED |
| Boolean toggle doesn't mark form dirty — known TinaCMS behavior | REFLEX_RULES.md Rule 7 | VERIFIED |
| Custom color wheel field (native OS color picker for client) | CURRENT_STATE.md — "Color wheel picker in TinaCMS admin" | VERIFIED |
| "14 operational rules — each one earned from a real failure, documented, and prevented from happening again." | Synthesized from REFLEX_RULES.md (14 rules) + INCIDENT_LOG.md references | VERIFIED (conceptual summary — verify incident count matches exactly before publishing) |
| Client-facing simplicity hiding engineering complexity | Stated design principle in CURRENT_STATE.md | VERIFIED |

#### C: SEO + AI Discovery

| Claim | Source | Status |
|-------|--------|--------|
| Full authority audit of peteguzzo.com: 73 pages, 10 articles classified | PG2_AUTHORITY_RECON.md | VERIFIED |
| AI discoverability finding: "AI can describe Pete correctly but generically" | PG2_AUTHORITY_RECON.md Section 8 | VERIFIED |
| 5 authority pillars defined (EP, Production Ops, Studio Developer, Media/Business Ops, Practical AI) | PG2_AUTHORITY_RECON.md Section 7 | VERIFIED |
| llms.txt exists; 24 lines; missing quantified achievements | PG2_AUTHORITY_RECON.md Section 8 + direct read of public/llms.txt | VERIFIED |
| Person schema missing: alumniOf, telephone, address, description, award, additional sameAs, Article schema | PG2_AUTHORITY_RECON.md Section 8 | VERIFIED |
| Soft 404 problem: HTTP 200 for all unmatched URLs | PG2_AUTHORITY_RECON.md Section 5 | VERIFIED |
| Audit conducted without making any production changes | PG2_AUTHORITY_RECON.md and PG2_AUTHORITY_IMPLEMENTATION_PLAN.md both state this explicitly | VERIFIED |
| 20 SEO articles systematic development for Shear Media Studios | SMS-SEO CURRENT_STATE.md | VERIFIED |
| Three-file source structure (.md, .json, .schema.json) per article | SMS-SEO CURRENT_STATE.md | VERIFIED |
| ClipboardEvent dispatch method developed after Cmd+V two-strike failure | SMS-SEO CURRENT_STATE.md | VERIFIED |
| "The site says what Pete does. It doesn't yet prove how well he does it." | PG2_AUTHORITY_RECON.md Executive Summary | VERIFIED |
| Kestum Bilt $1M+ revenue | About page bio + PG2_AUTHORITY_RECON.md (multiple references) | NEEDS PETE — confirm publicly shareable |
| HSN 25% sales lift | PG2_AUTHORITY_RECON.md Section 8 | NEEDS PETE — confirm publicly shareable and attributed correctly |
| Tampa Digital $3.5M production revenue | PG2_AUTHORITY_RECON.md | NEEDS PETE — confirm publicly shareable |
| Seiko/Jimmie Johnson: 80+ crew, five jurisdictions | PG2_AUTHORITY_RECON.md, PG2_IMPLEMENTATION_PLAN.md | NEEDS PETE — confirm publicly shareable |

#### D: Chicago SRT Test

| Claim | Source | Status |
|-------|--------|--------|
| Multi-party broadcast connectivity test — real event | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| Multiple engineers stated configuration was impossible — assertion was false | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| Team did NOT redesign around the unverified assertion | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| Team established full topology before making any change | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| All feeds and return path succeeded | SHEAR_CHICAGO_SRT_TEST_2026-08-12.md (outcome table — PRIVATE source, publishable conclusion) | VERIFIED |
| Constraint classification framework developed: VERIFIED / DOCUMENTED / OBSERVED / ASSUMED / INHERITED / INFERRED / HISTORICAL PRACTICE | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED |
| CONFIGURED ≠ VERIFIED reflex proposed | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED — label as PROPOSED; pending Pete canonical approval |
| STABILIZE DEPENDENCIES FIRST reflex proposed | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED — label as PROPOSED |
| MINIMUM REVERSIBLE CHANGE reflex proposed | SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md | VERIFIED — label as PROPOSED |
| "Expert opinion was treated as valuable evidence, but not as a substitute for verified system behavior." | Initial briefing — Pete-approved language | LOCKED |
| No facility names, IPs, MACs, vendor names, or port numbers on public page | Per briefing + sanitization plan | VERIFIED constraint |
| Sanitization level confirmation (no facility names, vendor names in abstract form) | NEEDS PETE confirmation | NEEDS PETE |

#### E: Qvisor.com

| Claim | Source | Status |
|-------|--------|--------|
| Any Qvisor claim | NONE — no source found | DO NOT USE — NEEDS PETE |

---

### SECTION 5: ARCHITECTURE DIAGRAM

| Claim | Source | Status |
|-------|--------|--------|
| CLM at top of architecture: governance, memory, learning, approval | TENTACLES_V0.md | VERIFIED |
| Ruflo designed but not yet active | RUFLO_INTEGRATION_PLAN.md | VERIFIED — must be labeled "DESIGNED — not yet active" on diagram |
| Claude Code: browser/CMS execution | TENTACLES_V0.md | VERIFIED |
| Codex: technical agent (code, schema, architecture) | TENTACLES_V0.md | VERIFIED |
| Codex registered 2026-08-11 | TENTACLES_V0.md | VERIFIED |
| V0 operating model: file exchange at manual checkpoints | TENTACLES_V0.md | VERIFIED |
| Learning flows upward: field agents → CLM | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| Task bundles flow downward: CLM → Ruflo → agents | RUFLO_INTEGRATION_PLAN.md | VERIFIED |
| TENTACLES V0 confirmed NOT a live connection | TENTACLES_V0.md (2026-08-07 live-link test) | VERIFIED — critical: do not draw as live connection |

---

### SECTION 6: THE PHILOSOPHY

| Claim | Source | Status |
|-------|--------|--------|
| Machine learning comparison table (all 8 dimensions) | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |
| "AI that learns through retraining is a black box." | Concept copy — not from a source document; would be Pete's voice | NEEDS PETE — confirm this framing is approved |
| "AI that learns through accumulated external memory is an audit trail." | Concept copy | NEEDS PETE — confirm |
| "You can read it. You can edit it. You can delete a bad lesson." | Concept copy | NEEDS PETE — confirm |
| "The organization should not have to pay for the same mistake twice." | Pete-approved language | LOCKED |
| Persistent Operational Learning defined: external state files, human-readable, per-project memory, every action traceable | PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md | VERIFIED |

---

### SECTION 7: SERVICES

| Claim | Source | Status |
|-------|--------|--------|
| "Operational intelligence infrastructure" as a service | Inferred from CORTEX system design; consistent with shear-enterprises.astro "AI-Assisted Operations" scope | PENDING — Pete to confirm this is an offered service |
| "Multi-agent coordination" as a service | RUFLO_INTEGRATION_PLAN.md (architecture design), TENTACLES_V0.md | PENDING — Pete to confirm |
| "AI-assisted workflow integration" as a service | shear-enterprises.astro confirmed "AI-Assisted Operations" in 8 EVP scope areas | VERIFIED — at least for Shear; Pete to confirm offered to outside clients |
| "Supervised autonomy design" as a service | Inferred from CORTEX doctrine | PENDING — Pete to confirm |

---

## OPEN ITEMS FOR PHASE 3

Before copy writing begins, the following must be resolved:

1. NEEDS PETE: Qvisor source material
2. NEEDS PETE: Revenue figures (Kestum Bilt, HSN, Tampa Digital, Seiko) — publicly shareable?
3. NEEDS PETE: SRT sanitization confirmation (facility names, vendor names)
4. NEEDS PETE: Services section — are these four services offered to outside clients?
5. NEEDS PETE: Philosophy concept copy — is the "audit trail" vs. "black box" framing approved?
6. VERIFIED ACCURACY CHECK needed before publishing: confirm Heights Lounge incident count = 14 REFLEX RULES (all numbered and complete in REFLEX_RULES.md)

---

## PHASE 2 ADDITIONS (for Phase 3 — sentence-level citation)

Each sentence of actual page copy will be added here with its source citation as Phase 3 proceeds.
Format:
```
CLAIM: [exact sentence as it will appear on page]
SOURCE: [file path and line/section reference]
STATUS: VERIFIED / LOCKED / NEEDS PETE / DO NOT USE
NOTES: [any caveats]
```
