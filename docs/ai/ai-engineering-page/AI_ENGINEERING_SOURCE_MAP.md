# AI_ENGINEERING_SOURCE_MAP.md
## Verified Source Material — Phase 1 Reconnaissance
## Field Agent: PG2-AI-ENGINEERING | Date: 2026-08-12

All entries below reflect only what was directly read from source files. No inference, no invention.

---

## CASE STUDY 1: CORTEX — Operational Intelligence System

SOURCE FILES:
- /Users/deluvaakaporky/PROJECTS CODE/PG2-Code-Cortex/docs/tentacles/TENTACLES_V0.md
- /Users/deluvaakaporky/PROJECTS CODE/PG2-Code-Cortex/docs/tentacles/RUFLO_INTEGRATION_PLAN.md
- /Users/deluvaakaporky/PROJECTS CODE/PG2-Code-Cortex/docs/tentacles/RUFLO_TASK_BUNDLE_FORMAT.md
- /Users/deluvaakaporky/PROJECTS CODE/PG2-Code-Cortex/docs/doctrine/PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md
- /Users/deluvaakaporky/PROJECTS CODE/PG2-Code-Cortex/docs/case-studies/PG2-CORTEX-PROJECT-JOURNAL.md
- /Users/deluvaakaporky/.claude/projects/-Users-deluvaakaporky/memory/pg2_code_cortex.md

VERIFIED FACTS:
- CORTEX is designated as the Collective Learning Mainframe (CLM)
- The architecture is: CLM (governance) → Ruflo (routing, future) → Claude Code field agents + Codex technical agent
- TENTACLES V0 is operational: cross-session observability via manual checkpoint file exchange (not automatic sync)
- V0 confirmed limitation (verified 2026-08-07 live-link test): NOT a live connection; Pete currently acts as the relay
- TENTACLES V1 is designed but NOT yet implemented; gate: after Barstool reaches a verified safe checkpoint
- Ruflo is designed (full spec in RUFLO_INTEGRATION_PLAN.md) but NOT yet active; gate: Pete's explicit activation directive
- 5 field sessions registered under TENTACLES V0: SMS-Barstool-Press-Page, shear-barstool-site, shear-media-studios-seo, heights-lounge-cms, peteguzzo
- Codex registered as a capability agent (not a project session)
- Current version: V2.0.1 (Proactive Operational Intelligence + Plugin Registration Repair)
- Cortex installed globally in ~/.claude/ with 8 skills: cortex-init, cortex-start, cortex-recover, cortex-capture, cortex-handoff, cortex-status, cortex-review, cortex-promote-learning
- Memory file structure per project: CURRENT_STATE.md, ARCHITECTURE.md, SESSION_HANDOFF.md, REFLEX_RULES.md, INCIDENT_LOG.md, DEPLOY_RUNBOOK.md, ROLLBACK_RUNBOOK.md, LLM_TASK_REGISTRY.md
- Persistent Operational Learning vs. Machine Learning comparison exists in canonical doctrine (PG2-PROACTIVE-OPERATIONAL-INTELLIGENCE.md)
- The doctrine comparison table dimensions: Learning mechanism, Memory location, Auditability, Editability, Project isolation, Error correction, Evidence requirement, Explainability
- Machine learning uses weight updates inside the model; Persistent Operational Learning uses external state files
- Every action must be traceable to: current observable evidence, verified project fact, reusable playbook, prior confirmed incident, approved reflex rule, recognized workflow pattern, documented dependency, explicit risk
- PG2-CORTEX-PROJECT-JOURNAL.md describes what guides future inference: current state files, session handoffs, reflex rules, incident logs, architecture docs, workspace maps, deploy/rollback runbooks, active task prompts
- The journal notes the core concept: "The model's weights are unchanged. The model's effective behavior improves because every new session starts with a richer, verified operational context."
- Task bundles (Ruflo format): task_id, created_by, created_at, project_id, assigned_to, task_type, routing_rationale, dependency_on, success_criteria, protected_actions
- Constraint classification framework in SRT learning doc: VERIFIED / DOCUMENTED / OBSERVED / ASSUMED / INHERITED / INFERRED / HISTORICAL PRACTICE

GAPS:
- PG2-CORTEX-PROJECT-JOURNAL.md has [PENDING] entries — not all milestone dates or specific outcomes are confirmed
- No user or client testimonials about CORTEX performance
- Timeline of CORTEX development (exact start date) not in source files
- V1 and Ruflo design docs are detailed but these capabilities are NOT yet live

PUBLISHABLE: PARTIAL — The system is real and documented. Pending milestones in the journal are not publishable. The architecture and the Learning Mainframe concept are fully publishable. NEEDS PETE: confirm whether CORTEX should be named by name on the public page.

---

## CASE STUDY 2: PeteGuzzo.com Rebuild

SOURCE FILES:
- /Users/deluvaakaporky/peteguzzo/docs/ai/ARCHITECTURE.md
- /Users/deluvaakaporky/peteguzzo/docs/ai/CURRENT_STATE.md
- /Users/deluvaakaporky/peteguzzo/docs/ai/PG2_AUTHORITY_RECON.md
- /Users/deluvaakaporky/peteguzzo/docs/ai/PG2_AUTHORITY_IMPLEMENTATION_PLAN.md

VERIFIED FACTS:
- Stack: Astro 6.4.7, TinaCMS (Tina Cloud) 3.10.0, Tailwind CSS 4.x, @astrojs/sitemap, Node >=22.12.0, Cloudflare Pages (CI/CD auto-build on push), GitHub (repo: peteguzzo-dev)
- Site is LIVE at peteguzzo.com — DNS switched after 2026-08-04 session (confirmed by direct observation via robots.txt: Sitemap: https://www.peteguzzo.com/sitemap-index.xml)
- Previous platform: Squarespace (now decommissioned from primary domain)
- 73 total pages in sitemap (confirmed)
- 52 work item .md files; 50 in sitemap
- 10 articles in src/content/insights/
- Content collections: work, studios, pages (home.json), insights
- Tina CMS provides in-browser visual editor via /admin, writes to source files via GitHub API
- Cortex initialized: 2026-08-04
- Critical issue discovered and documented: no 404.astro exists; Cloudflare returns HTTP 200 for all unmatched URLs (soft 404 problem)
- Critical issue discovered: Homepage title tag is "Home | Pete Guzzo" (not keyword-bearing)
- Critical issue: SVP/EVP title contradiction on About page (SVP is stale; EVP is canonical)
- /shear-enterprises page is orphaned (not in nav or footer)
- llms.txt exists but is thin (24 lines; missing quantified achievements, clients, services)
- GitHub PAT embedded in git remote URL (security issue — Pete must rotate before push)
- Active branch: dev
- Field agent (Authority Recon) discovered: soft 404 problem, discovered by curl verification
- AI/LLM discoverability assessment conducted: AI can describe Pete correctly but generically; specific facts missing from llms.txt
- Entire authority audit and implementation plan created by AI field agent sessions: zero production changes made during audit phases
- Multi-agent coordination: Missy CLM commissioned two separate agents; first agent did recon; second agent wrote implementation plan; current agent (PG2-AI-ENGINEERING) is the third
- The rebuild process demonstrates: AI-assisted site audit, semantic architecture, entity clarity improvements, llms.txt optimization

GAPS:
- Exact date of DNS switch is unknown
- Specific commit history for content migration not documented
- No before/after traffic data (was not the scope of the recon)
- GitHub PAT rotation date unknown

PUBLISHABLE: YES — the architecture, the audit methodology, and the AI-discoverability work are all publishable. Revenue/traffic data is absent (not needed for this case study — the story is about the technical and SEO engineering).

---

## CASE STUDY 3: Heights Lounge CMS

SOURCE FILES:
- /Users/deluvaakaporky/heights-lounge-cms/docs/ai/CURRENT_STATE.md
- /Users/deluvaakaporky/heights-lounge-cms/docs/ai/REFLEX_RULES.md
- /Users/deluvaakaporky/heights-lounge-cms/docs/ai/SESSION_HANDOFF.md
- /Users/deluvaakaporky/heights-lounge-cms/CLAUDE.md

VERIFIED FACTS:
- Stack: Next.js 16.2.10 (static export, output: 'export', trailingSlash: true), TinaCMS (tinacms latest), JSON content format, Cloudflare Pages (auto-deploy from GitHub native integration as of 2026-08-04)
- GitHub repo: peteguzzo/heights-lounge-cms
- Live site: heights-lounge-cms.pages.dev
- Client: Heights Lounge Tampa (kava bar)
- AI component: Cloudflare Worker (heights-lounge-extract) with ANTHROPIC_API_KEY — provides AI auto-fill for CMS content
- Auto-deploy: push to main → Cloudflare Pages auto-rebuilds and deploys (confirmed enabled 2026-08-04)
- 14 documented reflex rules in REFLEX_RULES.md, including:
  - Rule 1: Tina GraphQL Schema Mismatch (tina-lock.json 3-key sync pattern — verified via HLC-INC-003, HLC-INC-004)
  - Rule 7: Boolean toggle bug (doesn't mark form dirty — edit JSON directly)
  - Rule 8: expiresAt field causes "Invalid Date" (omit field when not needed; empty string or null both fail)
  - Rule 9: Events don't appear after Tina save (Tina writes to GitHub; no auto-rebuild)
  - Rule 13: SEO hardcoded in page TSX files (removed from CMS after causing schema mismatch)
- Active TinaCloud client ID field: NEXT_PUBLIC_TINA_CLIENT_ID (value not recorded — env var name only)
- Colors: primaryColor field maps to --green CSS variable (buttons, CTAs, headline text)
- 5 identified incidents (HLC-INC-001 through HLC-INC-005)
- Last commit: bceac75 TinaCMS content update (as of 2026-08-04)
- Custom color wheel component built: tina/ColorWheelField.tsx (Pete can set brand colors via native OS color picker)
- Content types: featured-events, schedule, pages, settings (all JSON)
- No .env file on disk — secrets in Cloudflare Pages dashboard only
- Stated design principle: "complexity in engineering, simplicity for client"
- SEO removed from CMS after schema mismatch; hardcoded in src/app/*/page.tsx via generateMetadata()

GAPS:
- No client revenue or satisfaction metrics in source files
- Custom domain (if any beyond pages.dev) is listed as UNVERIFIED
- Auto-deploy first smoke test not yet confirmed in source files

PUBLISHABLE: YES — the technical complexity + client simplicity story is strong. The 14 reflex rules (earned from real failures) demonstrate institutional learning. AI auto-fill is a real deployed feature. No client metrics available, so outcome story focuses on engineering quality and client experience design.

---

## CASE STUDY 4: SEO + AI Discovery (peteguzzo.com + Shear Media Studios)

SOURCE FILES:
- /Users/deluvaakaporky/peteguzzo/docs/ai/PG2_AUTHORITY_RECON.md (full audit)
- /Users/deluvaakaporky/peteguzzo/docs/ai/PG2_AUTHORITY_IMPLEMENTATION_PLAN.md
- /Users/deluvaakaporky/PROJECTS CODE/shear-media-studios-seo/docs/ai/CURRENT_STATE.md

VERIFIED FACTS:

PeteGuzzo.com SEO/LLM findings:
- /public/llms.txt exists; 24 lines; correctly identifies Pete as EP + Ops Strategist; lists 7 page URLs; describes studios; gives contact info
- llms.txt missing: quantified achievements, named key clients, awards, education, services, current productions, article URLs
- Person schema in BaseLayout.astro: @type Person, name, jobTitle, url, email, sameAs (LinkedIn only), worksFor (Shear Media Studios with URL + PG2 without URL), knowsAbout (6 items)
- Schema missing: alumniOf, telephone, address, description, award, additional sameAs, Article schema on blog posts, BreadcrumbList
- AI discoverability finding: "Can an AI confidently answer 'Who is Pete Guzzo?' — Yes, but generically."
- Soft 404 problem exposes all legacy Squarespace URLs as returning HTTP 200 with homepage content
- Full article inventory conducted: 10 articles, classified as KEEP (3) / UPDATE (3) / NOINDEX-REMOVE CANDIDATE (4)
- Semantic architecture analysis: 5 authority pillars defined (EP, Production Operations, Studio Developer, Media/Business Operations, Practical AI)
- Article classification methodology documented: maps each article to authority pillar
- Specific SEO findings: homepage title "Home | Pete Guzzo" has no search value; About title "About | Pete Guzzo" reasonable; Studios meta distinctive

Shear Media Studios SEO:
- 20 SEO articles in progress for shearmediastudios.com (Squarespace platform: bugle-giraffe-6cdy.squarespace.com)
- Each article has: .md (body copy), .json (SEO metadata), .schema.json (JSON-LD structured data) — systematic three-file source structure
- Reconciliation audit (2026-08-10): 15 Squarespace DRAFT shells confirmed; 5 LOCAL_ONLY; 5 bodies verified via iframe
- ClipboardEvent dispatch method: bypasses system clipboard entirely; injects HTML directly via DataTransfer object (proven fix after Cmd+V two-strike failure)
- R10 and R04 bulk fixes applied across all 20 articles (entity sentence standardization + internal link URL corrections)
- Phase 2 complete (SEO titles + meta descriptions applied to 8 accessible articles in Squarespace)
- Correct internal link path: /studios-spaces/studio-a and /studios-spaces/studio-g (NOT /studio-a or /studio-g)
- No article published without Pete's explicit approval (TIER 3 gate)

GAPS:
- No before/after search ranking data (project in progress)
- SMS SEO project outcome not yet verifiable (Phase 3 pending, articles not yet published)
- Peteguzzo.com implementation plan not yet executed (awaiting Pete approval after PAT rotation)

PUBLISHABLE: PARTIAL — The methodology is fully publishable (semantic architecture approach, AI discoverability framework, llms.txt strategy, structured data planning). Outcome data is pending. The story is "how we designed and approached it" not "here are the results." Frame as methodology case study, not results case study.

---

## CASE STUDY 5: Supervised Network/Production Engineering (Chicago SRT Test)

SOURCE FILES:
- /Users/deluvaakaporky/PROJECTS CODE/PG2-Code-Cortex/docs/case-studies/SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md
- /Users/deluvaakaporky/PROJECTS CODE/PG2-Code-Cortex/docs/case-studies/SHEAR_CHICAGO_SRT_TEST_2026-08-12.md (PRIVATE — raw record; do not publish directly)

VERIFIED FACTS (sanitized — no IPs, MACs, ports, facility names, or vendor credentials):
- Event type: Real-world infrastructure connectivity test, multi-party broadcast
- Objective: Establish multiple live video feeds between two facilities using SRT/UDP
- Multi-party scope: Three separate control domains (local network, media appliance vendor, remote broadcast team)
- Expert consensus problem: Multiple experienced engineers stated the required configuration could NOT be accomplished through a specific network path — that assertion was false
- Team response: Did NOT redesign the system around the unverified assertion; instead established actual topology, identified and stabilized dependencies, made minimum scoped change, tested incrementally
- Outcome: All feeds and return path succeeded through the path engineers said would not work
- Core learning (canonical, in SHEAR_CHICAGO_SRT_OPERATIONAL_LEARNING.md): EXPERT CONSENSUS IS NOT THE SAME AS VERIFIED SYSTEM TRUTH
- Constraint classification framework developed: VERIFIED / DOCUMENTED / OBSERVED / ASSUMED / INHERITED / INFERRED / HISTORICAL PRACTICE
- ASSUMED, INHERITED, HISTORICAL PRACTICE should trigger a verification step — not immediate redesign
- Proposed reflex CONFIGURED ≠ VERIFIED: Configuration success is an intermediate state. Completion requires evidence that the intended outcome occurred at the actual endpoint.
- Proposed reflex STABILIZE DEPENDENCIES FIRST: Stabilize the upstream value before creating a dependency on it
- Proposed reflex MINIMUM REVERSIBLE CHANGE: Define the smallest change that addresses only the failing boundary; establish rollback; apply; validate at endpoint
- Proposed reflex MULTI-PARTY RESPONSIBILITY MAP: Before remediation, map each layer to who controls / observes / can change it
- These reflexes are proposed and PENDING Pete approval for canonical promotion
- The learning doc cross-references existing CORTEX doctrine: Reconnaissance before action, Two-Strike Diagnosis, Minimum reversible action, Evidence-based verification, Multi-source evidence, Checkpoint discipline, State preservation
- Language constraint from briefing: Do NOT frame as "Pete proved the engineers wrong" — SAY: "Expert opinion was treated as valuable evidence, but not as a substitute for verified system behavior"
- Classification is PRIVATE in source (raw event record); the learning packet (OPERATIONAL_LEARNING.md) is the publishable-candidate version

GAPS:
- Sanitization review required before any public use: NEEDS PETE to confirm no facility names, vendor names, or network specifics should appear even in abstract form
- The 6 proposed reflex rules are PENDING Pete approval — do not state them as official CORTEX doctrine yet
- The playbook candidate (Remote Video/SRT Connection Validation) is also PENDING Pete approval

PUBLISHABLE: PARTIAL — The learning and the methodology are publishable after sanitization review. The raw event record (SHEAR_CHICAGO_SRT_TEST_2026-08-12.md) is PRIVATE — INTERNAL ONLY. The operational learning doc is the approved publishable candidate, pending Pete's sanitization confirmation.

---

## CASE STUDY 6: Qvisor.com

SOURCE FILES: NONE FOUND

SEARCH CONDUCTED:
- find /Users/deluvaakaporky -name "*.md" -path "*qvisor*" 2>/dev/null — NO RESULTS
- find /Users/deluvaakaporky -name "*.md" -path "*Qvisor*" 2>/dev/null — NO RESULTS
- find "/Users/deluvaakaporky/PROJECTS CODE" -maxdepth 3 -type d 2>/dev/null — NO Qvisor directory found
- Directories found in PROJECTS CODE: PG2-Code-Cortex, SE-CashForecast, shear-media-studios-seo, shear-barstool-site, Ruflo-Lab, kestumbilt-seo, SMS-Barstool-Press-Page (no qvisor)
- TENTACLES_V0.md registered sessions: no Qvisor listed

STATUS: NEEDS PETE — QVISOR SOURCE MATERIAL MISSING
No source files, no project directory, no CORTEX registration, no mentions in any discovered file.
This case study CANNOT be written without Pete supplying source material.
Placeholder included in case studies file; not included in page draft.

---

## CORTEX SYSTEM ARCHITECTURE (for page conceptual diagrams)

SOURCE: TENTACLES_V0.md, RUFLO_INTEGRATION_PLAN.md

VERIFIED ARCHITECTURE (current — V0):
```
CORTEX / CLM (governance, memory, learning, priorities, approval)
        |
        | [Manual checkpoint file exchange — V0]
        |
  Field Sessions (project agents — execute, collect evidence, send learning packets)
        |
  Claude Code (browser/CMS execution)
  Codex (technical/code — registered 2026-08-11)
```

DESIGNED ARCHITECTURE (V1/Ruflo — not yet active):
```
CORTEX / CLM
        |
     Ruflo (orchestration — routing, status, workflow coordination)
        |
   Claude Code + Codex (field agents)
```

TENTACLES V0 is NOT a live supervisory connection — confirmed by 2026-08-07 live-link test.
Pete currently acts as the live relay between sessions in real time.
V1 heartbeat infrastructure is DESIGNED but NOT implemented.
Ruflo is DESIGNED but NOT active. Gate: Pete's explicit activation directive.

---

## IMAGE ASSET INVENTORY

SOURCE: /Users/deluvaakaporky/peteguzzo/public/images/ (full recursive listing)

### USABLE FOR AI ENGINEERING PAGE

| File | Description | Relevance |
|------|-------------|-----------|
| about/pete-business-forum.jpg | Pete at a business forum | Strategic/leadership context — hero or about section |
| about/pete-on-set-shear.jpg | Pete on set at Shear | Production context — shows real-world application |
| studios/Shear-Media-Studios-Control-Room.jpg | Control room, full view | Tech/systems context — excellent for CORTEX section |
| studios/gallery/control-room-live-wall.jpg | Control room live wall | Operational tech — strongest image for "systems" section |
| studios/gallery/studio-a-green-screen.jpg | Studio A green screen | Production capability |
| studios/gallery/studio-g-event-space.jpg | Studio G event space | Production scale |
| brand/pg2-logo-full.png | PG2 wordmark | Brand use |
| brand/pg2-icon.png | PG2 icon | Brand use |
| work/Seiko+Jimmie+Johnson+Pete+Guzzo-Producer-.png | Seiko/Jimmie Johnson campaign | Production scale proof |
| current-work/up-all-night-network.jpg | Up All Night Network | Active operations context |

### NOT RELEVANT TO AI ENGINEERING PAGE

- recipes/ — food photography, wrong context
- Most work/ thumbnails — portfolio context, not AI engineering context
- evp/ — brand logos (Shear, RSI, UAN) — could be used to show operational scope
- insights/ — article images, wrong context
- studios/Branded+Content+Pete+Guzzo.png — branded content context (lower relevance)
- studios/Ewing+NJ+Pete+Guzzo.jpg — NJ hometown image (not relevant)

### WHAT'S MISSING (need to create or source)

| Needed asset | Description | Priority |
|-------------|-------------|---------|
| CORTEX architecture diagram | Visual representation of CLM / field agent / Ruflo structure | HIGH — designed in Visual Concepts file |
| Level 1/2/3/4 progression graphic | Visual of the analogy (Manual → Video → Expert Notes → CORTEX) | HIGH — core page section |
| Pete working with systems/AI | Pete at computer, in a strategy context (not a production set) | MEDIUM |
| Abstract system/network illustration | Dark-mode tech aesthetic consistent with page direction | MEDIUM |
| Timeline/flow diagram | CORTEX development from first project to multi-session network | LOW |

---

## PETEGUZZO.COM SITE STRUCTURE (for page integration planning)

SOURCE: PG2_AUTHORITY_RECON.md, ARCHITECTURE.md

CONFIRMED PAGES:
- / (Home), /services, /work, /studios, /about, /contact (primary nav)
- /industry-insights, /current-work (footer)
- /shear-enterprises (orphan — not in nav or footer)
- /unrested, /recipes (reachable by link)
- 50 work items at /work/[slug]
- 10 articles at /industry-insights/[slug]

PROPOSED NEW PAGE: /ai-engineering (not currently in nav or footer)
INTEGRATION DECISION NEEDED: Where does /ai-engineering live in the nav? Options:
  A. Add to main nav as a new link (6th link)
  B. Add to Services page as a section with a link to /ai-engineering
  C. Add to footer
  D. Linked from About page and homepage only
RECOMMENDATION: Start as a linked-from-About + standalone URL; Pete decides nav placement after reviewing the page

---

## CONTENT FROM EXISTING ARTICLES (verified relevant to AI engineering page)

SOURCE: PG2_AUTHORITY_RECON.md Section 6; inferred from article classifications

"How AI Actually Helps a Production Team Move Faster" (topic: practical-ai, Jun 2026):
- Classification: KEEP (strong, specific, de-hypes AI, correct positioning for AI authority)
- This article is the existing Pillar 5 content — the AI engineering page should link to it and build on it
- The article's positioning ("practical, disciplined, de-hypes AI") aligns with the page direction

No other articles directly support the AI engineering narrative. The page needs to go beyond what any current article says.
