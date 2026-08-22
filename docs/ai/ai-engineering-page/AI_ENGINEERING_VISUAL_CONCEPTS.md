# AI_ENGINEERING_VISUAL_CONCEPTS.md
## Section-by-Section Visual Direction
## Field Agent: PG2-AI-ENGINEERING | Date: 2026-08-12

Responding to CLM addendum: "Break the mold. Dark sections, bold contrast, unexpected layout. The Level 1/2/3/4 should be a designed visual section — not a bullet list."

This file documents proposed visual concepts for each page section. Diagrams are ASCII for Phase 1; final execution in Phase 7+ (Astro implementation). Visual concepts are proposals — CLM reviews before Phase 3 copy begins.

---

## LOCKED VISUAL CONSTRAINTS — PETE VIA CLM (2026-08-12)

FORBIDDEN visual metaphors — never use, never approve, never implement:
- Robots (any form — humanoid, mechanical, cartoon)
- Glowing brains
- Neon circuits (the generic "tech" aesthetic)
- Floating chatbot bubbles
- Generic "AI" stock imagery (any image that screams "AI article")

REQUIRED visual language — design toward these; every diagram, illustration, and icon choice should reference these:
- Agent nodes (discrete labeled units with clear identity)
- Handoffs between agents (arrows, connectors, directional flows)
- State and verification markers (indicators of confirmed vs. unconfirmed status)
- CLM supervision layer visible ABOVE agents (hierarchy is important — CLM is not a peer of the agents)
- Evidence flowing INTO persistent learning (upward arrows, accumulation visual metaphor)
- Process flows that look like real systems (think: operations diagram, not sci-fi poster)

The page is EXHIBIT A. If a visual choice could appear on a generic "AI Marketing" website, it is wrong for this page.

---

## DESIGN PHILOSOPHY

This page is NOT the standard peteguzzo.com template (Hero → copy → CTA).

The existing site uses: Fraunces (display serif) + Inter (sans); clean white sections; large hero text; work cards in a grid. This page breaks that pattern intentionally.

**Direction: Dark-forward, system-aesthetic, earned authority.**
- Primary background: near-black (#0d0d0d or equivalent dark neutral, not pure black)
- Accent: a single sharp color — electric blue (#3b82f6 family) or cold white for emphasis
- Typography: Fraunces still works for display, but Inter gets more weight here; code-like monospace used for system labels
- No decorative imagery in hero — lead with statement type
- Images used only where they carry operational meaning (control room, production set)
- Diagrams designed to be read — labeled, high-contrast, with clear directionality

**Standard peteguzzo.com template (what we're NOT doing):**
```
[Hero image with overlay]
[H1 with subtitle]
[CTA button]
[Body section]
[Work cards]
[CTA footer]
```

**This page's pattern:**
```
[Full-bleed dark type section — NO image]
[4-level progression section — visual sequence]
[Case study proof blocks — structured, not narrative]
[Architecture diagram section — designed visual]
[Philosophy/principle section — wide, breathable]
[Services section — clean, forward-looking]
[Related links footer]
```

---

## SECTION-BY-SECTION VISUAL SPECS

---

### SECTION 1: LOCKED OPENING — Visual Treatment

**Status:** Copy is LOCKED — visual treatment must serve the locked words, not compete with them.

**Visual treatment:**
- Full-width, dark background (#0d0d0d or equivalent dark neutral)
- NO hero image — the words carry the section
- Eyebrow: "AI ENGINEERING & OPERATIONAL INTELLIGENCE" in monospace or small-caps, small, mid-gray — sets context before the H1 lands
- H1: "This page was built by the system it describes." — this is the largest type on the page; Fraunces at display weight; near-white
- Intro copy: Inter, readable body weight, moderate line-height — not cramped; the three paragraphs breathe
- Transition line: "AI agents are powerful, but most of them still walk into the room like it's their first day." — set slightly differently than body copy; could be a larger weight or accent color; marks the hard pivot into Section 2

**DO NOT add:** any circuit imagery, robot icons, chatbot bubbles, or generic "AI tech" background textures — FORBIDDEN per locked visual directive.

**Optional subtle texture:** A very low-opacity system process diagram (agent nodes, arrows) as background texture is acceptable IF it reads as a real system diagram, not as generic circuit art. Default: no texture — just type.

**Layout (ASCII concept — serving locked copy):**
```
┌─────────────────────────────────────────────────────────────────┐
│ [dark background — full width, generous padding]                │
│                                                                 │
│   AI ENGINEERING & OPERATIONAL INTELLIGENCE                     │
│   [eyebrow — monospace or small-caps, small, #888]              │
│                                                                 │
│   This page was built by the system                             │
│   it describes.                                                 │
│   [H1 — Fraunces display, largest type on page, #f5f5f5]        │
│                                                                 │
│   CORTEX is the operational intelligence system...              │
│   [3 paragraphs of locked intro copy — Inter body, #ccc]        │
│                                                                 │
│   ─────────────────────────────────────────                     │
│                                                                 │
│   AI agents are powerful, but most of them still               │
│   walk into the room like it's their first day.                 │
│   [transition — slightly larger, or accent color treatment]     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Color palette for this section:**
- Background: #0f0f0f
- Eyebrow: #666666
- H1: #f5f5f5
- Body copy: #cccccc
- Transition line: #ffffff or #3b82f6 (electric blue) — marks the shift; decide accent color first
- Divider (if used): #333333

**Responsive behavior:** On mobile, reduce font sizes; H1 wraps to 2 lines (fine — don't force single-line on mobile); intro copy stacks naturally; no layout changes needed.

---

### SECTION 2: THE FOUR LEVELS (Flagship Section)

**Visual treatment:**
- This is the highest-design section on the page
- NOT a bullet list — a visual progression
- Each level gets its own full row, with increasing visual weight as you progress
- Level 4 BREAKS the pattern — different background, different energy
- Scroll experience should feel like descending a staircase; Level 4 is the floor where things are different

**Layout concept (desktop):**

```
┌─────────────────────────────────────────────────────────────────┐
│ LEVEL 1 — MANUAL                                                │
│ [light-dark row, narrow top padding]                            │
│                                                                 │
│  ○  Manual instruction.                                         │
│     Task completes. Session ends. Everything forgotten.         │
│     Next session: start over.                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ LEVEL 2 — DOCUMENTATION                                         │
│ [slightly darker row, slightly more padding]                    │
│                                                                 │
│  ◑  You add a README.                                           │
│     The agent reads it. Better than nothing.                    │
│     But documentation doesn't capture what went wrong.          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ LEVEL 3 — HANDOFF NOTES                                         │
│ [darker row, more padding, more visual weight]                  │
│                                                                 │
│  ●  Before each session ends, you write down what happened.     │
│     The next agent reads the notes.                             │
│     Real improvement — but only as good as what you remembered  │
│     to include.                                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ LEVEL 4 — THE SYSTEM THAT STAYS                                 │
│ [DIFFERENT — accent background, bigger padding, different font   │
│  treatment, possibly a left border in accent color]             │
│                                                                 │
│  ■  CORTEX                                                      │
│                                                                 │
│     An experienced supervisor who never leaves.                 │
│     Accumulates verified experience across every session.       │
│     Knows what broke and why.                                   │
│     Gives the next agent a real baseline                        │
│     instead of zero.                                            │
│                                                                 │
│  "Previous mistakes no longer need to be rediscovered."         │
│  [pull quote treatment — left border, italic, accent color]     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Visual markers for each level:**
- Circular icons or simple indicators: ○ (empty) → ◑ (half) → ● (full) → ■ (filled square, different shape) — purely decorative, text-based so they scale cleanly
- Background progression: #1a1a1a → #141414 → #0f0f0f → [accent tint] for Level 4
- The label "LEVEL 1 / LEVEL 2 / LEVEL 3" in monospace (code-like); "LEVEL 4" in display serif for contrast

**Mobile behavior:** Single column; same progression; each level stacks; Level 4 still breaks the pattern with accent treatment.

---

### SECTION 3: META-STORY — This Page Is One of the Case Studies

**Status:** REQUIRED section — locked by Pete via CLM directive.

**Purpose:** Make the reader feel the system before they read about the other case studies. This section is the pivot — from "here's the concept" (Sections 1+2) to "here's what it actually produced" (Sections 3+4).

**Visual treatment:** Distinguished from the other case studies. NOT a proof-block card. A full-width feature section with its own treatment. Two possible approaches:

APPROACH A — Process Table (recommended):
A structured visual showing the actual production chain for this page.
Dark background, table or timeline format, each row = one agent role.
Left column: agent function. Right column: what it did. No corporate buzzwords — operational language.

APPROACH B — Agent Handoff Diagram:
A horizontal flow diagram showing handoffs between CLM and agents.
CLM at top. Agents below. Arrows between them labeled with what was handed. Pete at the end as the approval gate.

Recommendation: APPROACH A for simplicity and readability; Approach B available as a diagram below or alongside the table.

**Layout concept (Approach A — ASCII):**
```
┌─────────────────────────────────────────────────────────────────┐
│ [dark section — distinct from surrounding]                      │
│                                                                 │
│   HOW THIS PAGE WAS MADE                                        │
│   [eyebrow — monospace]                                         │
│                                                                 │
│   ┌────────────────────┬──────────────────────────────────┐    │
│   │ CLM SUPERVISION    │ Mission defined. Context retained  │    │
│   │                    │ across all sessions. Work          │    │
│   │                    │ reconciled against project history.│    │
│   ├────────────────────┼──────────────────────────────────┤    │
│   │ SOURCE RECON AGENT │ Read CORTEX system files,          │    │
│   │                    │ project docs, case study evidence. │    │
│   │                    │ Image assets inventoried.          │    │
│   ├────────────────────┼──────────────────────────────────┤    │
│   │ CLAIMS AGENT       │ Every factual claim mapped to      │    │
│   │                    │ verified source before copy touch. │    │
│   ├────────────────────┼──────────────────────────────────┤    │
│   │ WRITING AGENT      │ Copy drafted against verified      │    │
│   │                    │ claims only. Language constraints  │    │
│   │                    │ enforced at sentence level.        │    │
│   ├────────────────────┼──────────────────────────────────┤    │
│   │ ENGINEERING AGENT  │ Astro implementation. Same stack   │    │
│   │                    │ described on the page.             │    │
│   ├────────────────────┼──────────────────────────────────┤    │
│   │ QA AGENT           │ Launch checklist. Links tested.    │    │
│   │                    │ Claims cross-checked against map.  │    │
│   ├────────────────────┼──────────────────────────────────┤    │
│   │ PETE               │ Locked opening. Framing decisions. │    │
│   │ [HUMAN AUTHORITY]  │ Launch approval.                   │    │
│   └────────────────────┴──────────────────────────────────┘    │
│                                                                 │
│   "AI agents performed substantial research, engineering,       │
│    and execution inside a supervised operating system."         │
│   [pull quote — accent color, large]                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Key visual signal:** Pete's row must look visually different from the agent rows — he is not another agent. Options: different background tint on his row, bold border, "HUMAN AUTHORITY" label in a different color. The hierarchy must be visible.

**Design constraint:** Do NOT make this section look like a marketing table about services. It should look like an operational log — factual, precise, honest about what each layer did.

---

### SECTION 4: CASE STUDY PROOF BLOCKS

**Visual treatment:**
- Structured, not narrative — each case study has a 3-part architecture
- Grid: 2-column on desktop (2 case studies per row), single column on mobile
- Each block: dark card with subtle border; structured label + value pairs; NO long paragraphs
- Pull quotes inside cards where available
- Subtle icon or indicator for each case study (monospace number: 01, 02, 03, etc.)

**Card structure (per case study):**
```
┌────────────────────────────────────┐
│ 01                                 │
│                                    │
│ OPERATIONAL INTELLIGENCE           │
│ [monospace label, small caps]      │
│                                    │
│ THE PROBLEM                        │
│ Every session starts cold.         │
│ [2–3 lines, direct language]       │
│                                    │
│ THE ENGINEERING                    │
│ Field agents. Memory files.        │
│ Institutional knowledge.           │
│ [2–3 lines, technical but clear]   │
│                                    │
│ "The model's weights are unchanged.│
│  The model's effective behavior    │
│  improves..." [pull quote]         │
│                                    │
└────────────────────────────────────┘
```

**Case study ordering on page (Section 4 — OTHER projects, after the meta-story):**
1. CORTEX — Operational Intelligence (leads; establishes the framework)
2. Heights Lounge — Production Engineering (concrete, client-focused)
3. Chicago SRT — Supervised Infrastructure (expert opinion vs. verified truth)
4. SEO + AI Discovery — peteguzzo.com + SMS (methodology)
5. Qvisor — PLACEHOLDER (if Pete supplies source)

**Image use in case studies:**
- Heights Lounge: no image — the story is in the engineering, not the aesthetic
- Chicago SRT: NO images from this event (PRIVATE raw record)
- Control room image (studios/gallery/control-room-live-wall.jpg or studios/Shear-Media-Studios-Control-Room.jpg): could be used as a background image for the CORTEX or SRT section — confirm Pete approves using SMS images in this context

---

### SECTION 5: ARCHITECTURE DIAGRAM

**Visual treatment:**
- Full-width dark section
- Designed diagram — NOT a code-block or ASCII; actual SVG or styled HTML elements
- Clear visual hierarchy: CLM at top, agents at bottom, arrows showing flow
- Labels in monospace for system components; readable sans-serif for descriptions
- Arrows: solid downward (task routing); dotted upward (learning/evidence flow)

**Diagram concept (ASCII reference — actual implementation in SVG or styled HTML):**

```
  ┌─────────────────────────────────────┐
  │           CORTEX / CLM              │
  │   governance · memory · learning    │
  │   approval · cross-project intel    │
  └──────────────┬──────────────────────┘
                 │
         ┌───────┴────────┐
   task bundles        learning
   directives          synthesis
         │                │
         ▼                ▲
  ┌──────────────────────────┐
  │         Ruflo            │
  │  routing · tracking      │
  │  heartbeat monitoring    │
  │  [DESIGNED — not yet     │
  │   active]                │
  └──────────┬───────────────┘
             │
    ──────────────────────
    │                    │
    ▼                    ▼
┌───────────┐      ┌──────────────┐
│ Claude    │      │   Codex      │
│ Code      │      │   Technical  │
│ Field     │      │   Agent      │
│ Agent     │      │              │
│ browser · │      │ code · schema│
│ CMS       │      │ architecture │
└───────────┘      └──────────────┘
```

**Required callout text for diagram:**
- "TENTACLES V0 — manual checkpoint file exchange (current operating model)"
- "V1 heartbeat infrastructure — designed; not yet active"
- "The system is file-based, human-readable, and fully auditable — not a black box"

**Design notes:**
- The diagram should NOT feel like a technical architecture slide — it should feel like a designed page element
- Dark background, white/accent lines, clear labels
- "Not yet active" states labeled differently (e.g., dashed border, grayed treatment) — accurate, not overclaiming

---

### SECTION 6: THE PHILOSOPHY

**Visual treatment:**
- Wide, light or very slightly lighter than surrounding dark sections — breathing room
- One or two large pull quotes — centered, large Fraunces, wide line-height
- A horizontal rule to separate from case studies above
- NO images — pure type

**Content concept:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [light divider rule]                                           │
│                                                                 │
│                                                                 │
│  "AI that learns through retraining                             │
│   is a black box.                                               │
│                                                                 │
│   AI that learns through accumulated                            │
│   external memory is an audit trail.                            │
│                                                                 │
│   You can read it. You can edit it.                             │
│   You can delete a bad lesson.                                  │
│   Try that with a neural network."                              │
│                                                                 │
│                       — [attribution style TBD]                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Note:** The quote above is concept copy — not sourced from a verified document. It would be Pete's voice writing this principle for the page. CLM should review whether this framing is approved before it enters the copy draft.

**Alternative if the quote framing is not approved:** Use the verified machine learning comparison table as a visual element — styled as a designed comparison, not a table.

---

### SECTION 7: SERVICES

**Visual treatment:**
- Clean, lighter section — contrast from the dark above
- 4 service descriptions in a 2x2 grid on desktop; stacked on mobile
- Each service: a short title (monospace label) + 2-3 line description
- CTA at bottom: "Get in touch" → /contact (standard site style)

**Grid concept:**
```
┌──────────────────────┬──────────────────────┐
│ OPERATIONAL          │ MULTI-AGENT           │
│ INTELLIGENCE         │ COORDINATION          │
│                      │                       │
│ [2-3 lines]          │ [2-3 lines]           │
├──────────────────────┼──────────────────────┤
│ AI-ASSISTED          │ SUPERVISED            │
│ WORKFLOW             │ AUTONOMY              │
│ INTEGRATION          │ DESIGN                │
│                      │                       │
│ [2-3 lines]          │ [2-3 lines]           │
└──────────────────────┴──────────────────────┘
              [Get in touch →]
```

---

### SECTION 8: RELATED LINKS

**Visual treatment:**
- Minimal dark footer strip for this page
- 3-4 text links with brief descriptors
- No card treatment — just clean, spaced links

---

## EXISTING IMAGES — USAGE PLAN

| Image | Section | Treatment |
|-------|---------|-----------|
| about/pete-business-forum.jpg | Consider: About Pete strip between Sections 5 and 6 | Portrait crop, small, alongside bio line |
| about/pete-on-set-shear.jpg | Consider: intro to case studies (Section 3 header) | Atmospheric background treatment, low opacity |
| studios/Shear-Media-Studios-Control-Room.jpg | Section 3 — CORTEX or SRT case study | Background texture or card image |
| studios/gallery/control-room-live-wall.jpg | Section 3 or Section 4 header | Operational context — strongest available image |
| brand/pg2-logo-full.png | Navigation and page footer (standard site use) | Standard |

**IMAGE DECISION NOTE FOR PETE:**
Using Shear Media Studios control room images on the peteguzzo.com AI engineering page — is this appropriate? The images belong to Shear Media Studios. Pete controls both organizations (EVP) but confirmation is needed before using SMS assets on a personal site page.

---

## ASSETS TO CREATE

| Asset | Description | Phase | Owner |
|-------|-------------|-------|-------|
| CORTEX architecture diagram (SVG/HTML) | Styled version of ASCII concept above | Phase 7 (Astro implementation) | AI Engineering agent |
| Level 1/2/3/4 progression graphic | May be pure HTML/CSS — no image required | Phase 7 | AI Engineering agent |
| Abstract system texture (optional) | Subtle background for Section 1 | Phase 7 | Pete to approve direction |

---

## OPEN VISUAL QUESTIONS FOR CLM/PETE

1. Single accent color — electric blue vs. cold white vs. amber? Recommend blue (#3b82f6) for tech/systems aesthetic; Pete decides.
2. Monospace typeface for system labels — use a system monospace (Courier, Consolas) or import a custom one? Recommendation: system monospace to avoid external font load; consistent with CORTEX's no-CDN approach.
3. Using SMS control room images on peteguzzo.com — needs Pete confirmation.
4. The philosophy quote (Section 5) — concept copy, not sourced. Needs Pete voice input or CLM approval of the framing.
5. Animation: subtle scroll-triggered fade for the Level 1/2/3/4 progression? Adds impact but increases implementation complexity. Recommendation: yes if implementation is bounded; Pete and CLM to decide.
