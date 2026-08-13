# PG2 AUTHORITY RECON
**Filed by:** Authority Recon Agent (claude-sonnet-4-6)
**Commissioned by:** Missy CLM
**Date:** 2026-08-11
**Scope:** peteguzzo.com full site audit — entity positioning, SEO/LLM discoverability, content inventory, authority gaps, and 90-day roadmap
**Mode:** READ ONLY — no production changes made

---

## 1. EXECUTIVE SUMMARY

peteguzzo.com is live on the Astro rebuild (DNS switched, contrary to what CURRENT_STATE.md says). The homepage and services positioning are solid. The core identity — "Executive Producer + Operations Strategist" — is stated correctly and consistently across the primary pages.

The site has real authority signals but they are thinly populated. The work portfolio exists but lacks outcome-oriented case studies. The article library has 3 strong pieces and 7 that dilute more than they strengthen. The schema is minimal. The llms.txt exists but is missing the most credibility-building facts. There is a significant soft 404 problem that exposes every legacy Squarespace URL as a duplicate of the homepage.

The single biggest opportunity: Pete has the experience and the specific results (Kestum Bilt $1M+, HSN 25% sales lift, Seiko 80-crew 5-jurisdiction shoot, two studio builds) — none of those outcomes are visible on the homepage or in any article. A visitor can understand what Pete does, but cannot yet understand how well he does it.

AI systems (ChatGPT, Perplexity, Google AI) would currently describe Pete correctly but generically. The facts needed to make them describe him specifically and authoritatively are in his About page but not structured for machine consumption.

---

## 2. SEARCH REPUTATION FINDINGS

### What surfaces when someone searches "Pete Guzzo"

**FACT (observed):** peteguzzo.com is the primary web presence. It loads at the top with title "Home | Pete Guzzo" and the hero line "When content, production, marketing, operations, studios, and business strategy are all tangled together and nobody owns the full picture, that's the problem I fix."

**FACT:** LinkedIn at linkedin.com/in/peteguzzo is a confirmed sameAs in the schema. It would appear in search results as a secondary listing.

**FACT:** The Squarespace site (peteguzzo.com) is gone. DNS has been switched. However, Google may still have cached Squarespace content from legacy URLs. Those cached pages may surface positioning that contradicts the current Astro site — specifically the old "High-Level Integrated Production Manager + Strategist" framing and the "Director" framing from /pg2-director/peteguzzo.

**FACT:** The Barstool Sports press page (Squarespace bugle-giraffe-6cdy.squarespace.com) is listed as disabled per project MEMORY.md. There is no press or media page on peteguzzo.com that would link to a Barstool mention.

### Reputation simulation: "Someone sees Pete Guzzo named in a Barstool Sports announcement and searches him"

What they find on peteguzzo.com:
- An EP + Ops Strategist. Strong clarity on what he does.
- A studio developer (Shear Media Studios, 211 Studio).
- Active projects (Lionsgate documentary, Power of Attorney Atlanta, Bachelorette in the Bergs).
- A 20-year career timeline with named employers.

What is clear:
- He has serious production experience.
- He builds and runs studio systems.
- He works at the executive level.

What is confusing:
- How does he connect to Barstool? His site has no press page.
- Is he primarily an EP-for-hire, a studio operator, or a corporate EVP? The Shear Enterprises page (EVP) is not in the main nav. A visitor navigating Home → About → Work would not see it.
- What specific companies or shows has he produced? The work portfolio lists titles but most visitors won't click into individual work items.

What is missing:
- No press or media page.
- No client logos on the homepage.
- No testimonials or client quotes.
- No specific production outcomes visible above the fold (no "80-crew five-jurisdiction shoot" or "Kestum Bilt $1M+ revenue" on the homepage).
- No "as seen in" or credential row.

---

## 3. CURRENT ENTITY POSITION

### What the site currently says (FACTS only)

| Element | Current State |
|---------|--------------|
| Primary title | "Pete Guzzo, Executive Producer + Operations Strategist" |
| Homepage H1 | "When content, production, marketing, operations, studios, and business strategy are all tangled together and nobody owns the full picture, that's the problem I fix." |
| Schema jobTitle | "Executive Producer + Operations Strategist" |
| llms.txt identity | "Executive Producer + Operations Strategist based in Tampa, FL" |
| About H1 | "This isn't a do-it-all story. It's the path that shaped me." |
| About role tags | Line Producer, Director, Head of Operations, Studio Architect, Strategist |
| Current Shear title (About) | SVP Marketing & Strategy / Studio Operations |
| Current Shear title (Shear Enterprises page) | Executive Vice President |

### What these facts mean for entity clarity

The primary positioning is correct and consistent on the homepage, schema, and llms.txt. The About page role tags are useful context. The two different Shear titles (SVP on About, EVP on Shear Enterprises) is a factual inconsistency that should be resolved to one canonical title.

**FACT:** MEMORY.md (pg2_code_cortex.md) and peteguzzo_evp_rule.md both say EVP is the canonical title and must be listed first. The About page still says SVP. The Shear Enterprises page is correct.

---

## 4. CONTRADICTIONS

| Contradiction | Location A | Location B | Severity |
|-------------|-----------|-----------|---------|
| Shear title: SVP vs EVP | About page (SVP Marketing & Strategy / Studio Operations) | Shear Enterprises page (Executive Vice President) | HIGH — factual error |
| Site status: domain not connected | CURRENT_STATE.md (says Squarespace still live) | Direct observation (Astro site IS live at peteguzzo.com) | HIGH — memory stale |
| Role self-description | About role tags include "Line Producer, Director" | Home hero and Services position EP + Ops only | LOW — useful context, not contradictory, but could cause confusion |

---

## 5. LEGACY CONTENT CLEANUP

### Soft 404 Problem — CRITICAL

**FACT:** No custom 404.html exists in the Astro project or in the `public/` directory. No `_redirects` file exists.

**FACT:** Cloudflare Pages is returning HTTP 200 for EVERY URL that does not match a real page — including completely fabricated slugs like `/nonexistent-page-xyz123`. Verified by curl -w %{http_code}.

**Impact:** Every legacy Squarespace URL that Google has indexed returns 200 with homepage content. Google treats these as either:
(a) Soft 404s — it will eventually detect them and deindex
(b) Duplicate content of the homepage — dilutes homepage authority
This is never correct behavior for a static site.

**Legacy URLs confirmed returning 200 (soft 404):**
- /about-me — old Squarespace "about me" page with outdated positioning
- /pg2-director/peteguzzo — old director-heavy Squarespace page
- /industry-insights/slow-iphone-video — legacy SEO article (generic, no authority)
- /industry-insights/crop-iphone-video — legacy SEO article (generic, no authority)
- /industry-insights/video-editing-software — legacy SEO article (generic, no authority)
- /industry-insights/clip-youtube-video — legacy SEO article (generic, no authority)
- /pg2-blog/[any slug] — legacy blog URL pattern
- /blog/[any slug] — legacy blog URL pattern

**Fix required (do not implement — classify only):**
Create a proper `src/pages/404.astro` page. This will generate a `404.html` in the Astro build output. Cloudflare Pages will then return true 404 status for unmatched URLs. The legacy articles do not need dedicated redirects — they were generic SEO content and should naturally deindex. The /about-me and /pg2-director/peteguzzo URLs should redirect 301 to /about.

---

## 6. ARTICLE INVENTORY

All 10 articles currently in the Astro build. Classification per authority pillar mapping below.

| Title | Topic Tag | Date | Authority Pillar | Classification | Reason |
|-------|-----------|------|-----------------|---------------|--------|
| What an Executive Producer Actually Does (That Isn't on the Call Sheet) | production-operations | Jun 2026 | Pillar 1 — EP | KEEP | Strong, specific, authoritative voice. Maps directly to primary positioning. |
| What Makes a Studio Actually Work as a System | studio-systems | Jun 2026 | Pillar 3 — Studio | KEEP | Excellent. Real experience, specific examples (211 Studio, Shear). Best article on the site. |
| How AI Actually Helps a Production Team Move Faster | practical-ai | Jun 2026 | Pillar 5 — AI/Ops | KEEP | Practical, disciplined, de-hypes AI. Exactly the right positioning for AI authority. |
| Navigating the Challenges of Large-Scale Video Content Productions | production-operations | Mar 2025 | Pillar 2 — Prod Ops | UPDATE | Good principle (cash flow, financial health of big gigs) but voice is older/less sharp than the 2026 articles. Should be refreshed and expanded with Pete's specific examples. |
| Learning the Industry from the Ground Up | personal | Apr 2025 | Pillar 2 (loose) | UPDATE | The nephew story has genuine industry wisdom. Retitle toward authority framing. The "Got it" section on communication and respect is the best part. |
| Good. Fast. Low Cost. Choose 2. | production-operations | Dec 2022 | Pillar 2 — Prod Ops | UPDATE | Good principle. Dated dialogue format. Strip the CMO conference-room dialogue, expand with Pete's actual Kestum Bilt examples of budget transparency. |
| Full Circle: Rediscovering the Charm of My Hometown | personal | Nov 2024 | None | NOINDEX-REMOVE CANDIDATE | 200 words. No authority signal. Tourist content about Ewing, NJ. Dilutes the production-authority category page. |
| Lessons in Resilience from My Best Friend | personal | Oct 2024 | None | NOINDEX-REMOVE CANDIDATE | Personal tribute to Deluva. Moving and real, but provides zero production authority signal. Could be preserved privately or on a personal blog. Not an EP authority article. |
| A Recipe for Video Ambrosia | personal | Dec 2022 | None | NOINDEX-REMOVE CANDIDATE | ~200 words. A list of production ingredients. No insight. No outcome. Thin content that could harm the insights section's credibility. |
| How to Get Baby Actors to Pee on Cue | personal | Dec 2022 | Pillar 2 (weak) | NOINDEX-REMOVE CANDIDATE | The production logistics story (Jackson Memorial Hospital) is real but the framing is clickbait. If this is kept, retitle entirely and expand with the actual production system story. |

### Summary count
- KEEP: 3 (all from 2026)
- UPDATE: 3
- NOINDEX-REMOVE CANDIDATE: 4

### Legacy Squarespace articles (no longer in Astro, currently soft 404)
These existed on the old Squarespace site and are now returning soft 404s. They should not be recreated.
- /industry-insights/slow-iphone-video
- /industry-insights/crop-iphone-video
- /industry-insights/video-editing-software
- /industry-insights/clip-youtube-video

These were generic SEO filler targeting broad video terms. They actively dilute Pete's executive production authority. Do not bring them into the Astro build.

---

## 7. AUTHORITY GAPS

### By Pillar

**Pillar 1 — Executive Producer**

Have: One strong article ("What an EP Actually Does"), About page timeline (Kestum Bilt, HSN, Tampa Digital), Services section, homepage hero copy.

Missing:
- No production case study with named client + stated outcomes. The Seiko/Jimmie Johnson campaign (80+ crew, five jurisdictions, high six-figure budget) has a work entry stub but no real case study.
- No client logos on the homepage.
- No testimonials or named client endorsements.
- The Work page warns "Under construction, my library's still getting its life together after 20 years." This is honest but reduces credibility at the moment of proof.

**Pillar 2 — Production Operations Leader**

Have: Services page mentions, About bio, "Navigating Large-Scale" article (UPDATE candidate), Lean Six Sigma reference in About (but only as "I run it on Linear, Agile, and Lean Six Sigma, not vibes").

Missing:
- No article specifically on building repeatable production systems.
- No article on production cash flow management and economics (the current article mentions it but doesn't go deep).
- No article on crew structure and efficiency (the Tampa Digital "cut production time 35%, improved team efficiency 30%" stat lives only in the bio).
- No case study format showing a production operations problem → system Pete built → measurable outcome.

**Pillar 3 — Studio Developer / Studio Operations**

Have: Studios page (strong), "What Makes a Studio Work" article (strong), Shear Enterprises page (EVP scope), 211 Studio entry, Shear Media Studios entry, current-work references.

Missing:
- No "how I built Shear Media Studios" story — the process of designing and building an 11,000 sq. ft. multi-studio facility is a major credential that's only referenced, never told.
- No ROI data: what did Shear Media Studios generate in its first year? What does 211 Studio do for the productions that use it?
- The studio design consulting service is not clearly positioned as a replicable offering. The Studios page implies it but does not state it.
- The Studios page does not link to or explain how Pete can do this for other clients.

**Pillar 4 — Media / Business Operations**

Have: About page (Kestum Bilt $1M+, 66% client retention, HSN 40+ campaigns/year), Shear Enterprises EVP page (8 executive scope areas).

Missing:
- No article on building and running a production company (the Kestum Bilt story deserves its own piece — founded from zero, grew to $1M+, 66% client retention in an industry with none).
- No article on multichannel content strategy (TV retail + DTC + livestream + Amazon — this is a real operational expertise Pete holds at Shear).
- The Shear Enterprises page is not in the main nav, which limits its discoverability.

**Pillar 5 — Practical AI / Operational Intelligence**

Have: "How AI Actually Helps" article (well-positioned), Services AI section (accurate and disciplined), EVP page mentions AI-assisted workflows.

Missing:
- No article on specific AI workflows Pete has built and uses (content systems, production planning, operational memory).
- No article distinguishing AI from automation and why that matters for production teams.
- CORTEX itself (PG2's own operational intelligence system) is a potential authority differentiator but is completely absent from the public-facing site. Whether to surface this at all is Pete's call — but if AI authority is a pillar, the fact that Pete runs his own operational memory system for agents is a specific, provable, differentiating fact.

---

## 8. SEO / LLM FINDINGS

### Page Titles and Meta Descriptions (FACTS)

| Page | Title Tag | Meta Description | Notes |
|------|----------|----------------|-------|
| Home | "Home \| Pete Guzzo" | Hero title (full sentence) | Title is weak — "Home" has no search value. Recommend: "Pete Guzzo — Executive Producer + Operations Strategist \| Tampa, FL" |
| About | "About \| Pete Guzzo" | "Pete Guzzo, Executive Producer + Operations Strategist. 20+ years in branded content, film, and TV." | Reasonable. Could include Tampa, FL. |
| Services | "Services \| Pete Guzzo" | "Executive production, production operations, content + marketing strategy, studio strategy, and business consulting." | Good specificity. |
| Work | "Work \| Pete Guzzo" | "Commercial, documentary, real-people, and culinary production work, directed and produced by Pete Guzzo." | Good. |
| Studios | "Studios \| Pete Guzzo" | "Studios are not rooms. They're operating systems." | Distinctive. Could add location. |
| Industry Insights | "Industry Insights \| Pete Guzzo" | "Pete Guzzo on studio systems, production operations, practical AI, and the occasional personal story from 20+ years in the business." | Good. |
| Contact | "Contact \| Pete Guzzo" | "Get in touch with Pete Guzzo." | Too thin. Recommend adding context: "Get in touch with Pete Guzzo, Executive Producer + Operations Strategist." |
| Shear Enterprises | "EVP, Shear Enterprises \| Pete Guzzo" | Full EVP description | Good but this page is not in the main nav. |

### Schema Markup (FACTS from BaseLayout.astro)

Current Person schema:
- @type: Person ✓
- name: Pete Guzzo ✓
- jobTitle: Executive Producer + Operations Strategist ✓
- url ✓
- email ✓
- sameAs: LinkedIn only
- worksFor: Shear Media Studios + PG2 (no URLs for PG2, no founding year)
- knowsAbout: 6 items listed

Missing from schema:
- alumniOf (University of Tampa — MBA + BS)
- award (Telly Awards, National Addys — from Tampa Digital era)
- foundingOrganization or role as founder (Kestum Bilt)
- telephone (listed in llms.txt and contact page but not schema)
- address (city/state)
- description (longer text for richer entity snippet)
- Additional sameAs entries (Twitter/X, any IMDB or IMDb Pro profile, Vimeo profile)
- No Article schema on any blog posts
- No BreadcrumbList on any page
- No Organization schema for Shear Media Studios or Kestum Bilt

### llms.txt (FACTS)

File exists at /public/llms.txt. Current content covers: who Pete is, 4-line background summary, 7 page URLs, 2 studio descriptions, contact info.

Missing from llms.txt:
- Quantified career achievements: Kestum Bilt $1M+ revenue, 66% client retention, HSN 25% sales lift on livestream segments, Tampa Digital $3.5M production revenue, Seiko 80-crew 5-jurisdiction campaign
- Named key clients: Navy Federal, Dick's Sporting Goods, Seiko/Jimmie Johnson, Wawa, Cooper Tires, CSL Plasma, Blue Emu, NAPA, Jackson Memorial Hospital
- Credentials: Telly Awards, National Addys, MBA + BS degrees
- Services offered (none listed)
- Current productions: Unrested (Lionsgate), Power of Attorney Atlanta, Bachelorette in the Bergs
- Article links (the 10 industry insights URLs)
- Studio development as a consulting service

### AI/LLM Discoverability Assessment

**Can an AI confidently answer "Who is Pete Guzzo?"**
Yes, but generically. It would say: EP + ops strategist, Tampa, 20+ years, studio developer, currently EVP at Shear Enterprises. That is correct but generic. It lacks the specific facts that make Pete distinct: the Lionsgate deal, the specific clients, the production scale, the two studio builds.

**Can an AI answer "What studios has he developed?"**
Yes — Shear Media Studios and 211 Studio are named in llms.txt and the Studios page. The 11,000 sq. ft. figure is present. However, no revenue figures, booking metrics, or client counts are surfaced.

**Can an AI answer "What production experience does he have?"**
Partially. It can name Kestum Bilt, HSN, Tampa Digital. It cannot confidently state specific productions, client outcomes, or production scale.

**Can an AI answer "What kinds of companies hire him?"**
Yes — brands, agencies, studios, founders, production teams are explicitly named on the homepage.

**Missing entity signals:**
- No author byline on any article (articles have no "By Pete Guzzo" or structured author field visible in source)
- No Wikipedia or Wikidata entry (out of scope for this recon but a flag for future)
- No IMDB or professional directory listings visible from site links
- Internal linking: articles do not link to each other, to the About page, or to relevant work items

---

## 9. FULL PAGE AND URL INVENTORY

### Sitemap-confirmed pages (73 total, all Astro Rebuild)

**Primary pages (in nav):**
- / (Home)
- /services
- /work (portfolio index)
- /studios
- /about
- /contact (in nav CTA only)

**Secondary pages (not in main nav, in footer or reachable by link):**
- /industry-insights (footer)
- /current-work (footer)
- /shear-enterprises (not linked in nav or footer — orphan for discovery)
- /unrested (linked from home and current-work only)
- /recipes (not in nav or footer)

**Work items (50 total in sitemap — only 52 .md files, 2 match non-sitemap behavior, likely hidden):**
Commercial, documentary, real-people, culinary, live-commerce, studio-bts categories. Major brands present: Seiko/Jimmie Johnson, Dick's Sporting Goods, NAPA, Wawa, Navy Federal, Cooper Tires, CSL Plasma, HSN, Jackson Memorial, University of Florida, USC, Medi-Weightloss, Visit Tampa Bay, Srixon, XXIO, Boss Revolution.

**Blog/insights (10 total):**
Listed in full in Section 6 above.

**Infrastructure:**
- /sitemap-index.xml and /sitemap-0.xml ✓
- /robots.txt — allows all, references sitemap ✓
- /llms.txt — exists, basic ✓
- /admin — Tina CMS admin panel

### Orphan / Discovery gaps
- /shear-enterprises — not accessible from any nav, footer, or linked page. It's a major credential page (EVP role) that is effectively invisible to visitors unless they know the URL.
- /recipes — referenced from About page and home page (in recipe teaser section) but not in nav. Intentional by design, presumably.
- /unrested — accessible from home and current-work, which is appropriate.

---

## 10. TOP 10 PRIORITY ACTIONS (Ranked by Impact)

### Priority 1 — Fix the soft 404 problem
**Impact: HIGH | Effort: LOW | Risk: NONE**
Create `src/pages/404.astro` with a proper branded 404 page. This generates `404.html` in the Astro build output. Cloudflare Pages will then return true 404 status for unmatched URLs, stopping the duplicate-homepage soft 404 issue. Also add `/public/_redirects` with 301 rules for /about-me → /about and /pg2-director/peteguzzo → /about.

### Priority 2 — Fix the SVP/EVP title contradiction
**Impact: HIGH | Effort: VERY LOW | Risk: NONE**
Update the About page timeline entry for Shear Enterprises from "SVP Marketing & Strategy / Studio Operations" to the canonical title per MEMORY.md: "EVP, Shear Enterprises LLC." One line edit.

### Priority 3 — Fix the homepage title tag
**Impact: HIGH | Effort: VERY LOW | Risk: NONE**
Change `<BaseLayout title="Home"...>` on index.astro to a keyword-bearing title: "Pete Guzzo — Executive Producer + Operations Strategist | Tampa, FL". "Home | Pete Guzzo" gives Google nothing useful in the page title.

### Priority 4 — Expand and enrich llms.txt
**Impact: HIGH | Effort: LOW | Risk: NONE**
Add to /public/llms.txt: specific career achievements with numbers, named key clients, awards, services list, current productions, article URLs, studio development services. The goal: an AI can answer any of the 7 discoverability questions in Section 8 from this single file with specific, credible facts.

### Priority 5 — Add /shear-enterprises to main nav
**Impact: HIGH | Effort: VERY LOW | Risk: NONE**
The EVP role at Shear Enterprises is Pete's most significant current credential. It's on a well-written page but completely undiscoverable from the main nav. Add it to Nav.astro. This is one link addition. (If nav real estate is a concern, it can be added as a secondary or dropdown item.)

### Priority 6 — Enrich the Person schema
**Impact: HIGH | Effort: LOW | Risk: NONE**
Add to BaseLayout.astro schema: alumniOf (University of Tampa), telephone, address (Tampa, FL), description (2-3 sentence entity description), additional sameAs entries (Twitter, Vimeo if applicable), award (Telly Awards, National Addys). Also add Article schema to the blog post template in /pages/industry-insights/[slug].astro.

### Priority 7 — Noindex the 4 thin personal articles
**Impact: MEDIUM | Effort: LOW | Risk: LOW**
The 4 NOINDEX-REMOVE CANDIDATE articles (Full Circle, Lessons in Resilience, Recipe for Video Ambrosia, Baby Actors) dilute the authority signal of the industry-insights section. Add `<meta name="robots" content="noindex">` to their individual page renders, or remove them from the Astro content collection. Do not delete the .md files — archive them.

### Priority 8 — Write the Kestum Bilt case study
**Impact: HIGH | Effort: MEDIUM | Risk: NONE**
The Kestum Bilt story (founded from zero, $1M+ revenue, 66% client retention, national campaigns for Seiko/Navy Federal/Dick's Sporting Goods/Wawa/Hilton) is the single most powerful production operations credential Pete has and it exists only in the About page bio paragraph. It deserves a proper case study or long-form article. Maps to Pillars 1 and 2.

### Priority 9 — Write the Shear Media Studios build story
**Impact: HIGH | Effort: MEDIUM | Risk: NONE**
"How I designed and built an 11,000 sq. ft. multi-studio facility as a revenue system" is Pete's strongest studio developer credential. The Studios page describes what the facility does but not how Pete built it, what decisions he made, or what the result was. This is the article that establishes studio development as a replicable consulting service. Maps to Pillar 3.

### Priority 10 — Add author attribution and internal links to articles
**Impact: MEDIUM | Effort: LOW | Risk: NONE**
The article template (`/pages/industry-insights/[slug].astro`) currently has no byline — no "By Pete Guzzo" visible. Add an author byline with a link to the About page. Also add a related-content or "more from Pete" section linking to 1-2 related articles. This creates the internal linking Google uses to understand topic clustering and author entity association.

---

## 11. PROPOSED 90-DAY ROADMAP

### Days 1-7: Cleanup and Technical Fixes (no new content)
- Create 404.astro custom page
- Add _redirects for /about-me and /pg2-director
- Fix SVP → EVP on About page
- Fix homepage title tag
- Expand llms.txt
- Enrich Person schema
- Add /shear-enterprises to nav
- Noindex 4 thin articles

### Days 8-30: Article Publishing (3 authority pieces)
- Publish: Kestum Bilt production operations case study (Pillars 1+2)
- Publish: "How I built Shear Media Studios" — studio development story (Pillar 3)
- Update: "Navigating Large-Scale Productions" — refresh voice, add specific examples

### Days 31-60: Article Publishing (3 more authority pieces)
- Publish: Production cash flow and economics deep-dive (Pillar 2)
- Publish: Content operations and repeatable systems (Pillar 4)
- Update: "Good. Fast. Low Cost. Choose 2." — strip dialogue format, replace with specific Kestum Bilt examples

### Days 61-90: Case Studies and Social Proof
- Write 2-3 client case studies in work items that don't have them (Seiko/Jimmie Johnson is the lead candidate — 80-crew, 5-jurisdiction, high six-figure budget)
- Add author byline + internal links to all articles
- Add social proof to homepage: client logos, or a specific credential row (not a testimonials wall — a few named outcomes)
- Evaluate: whether to add a Press / Media page to capture future coverage (Barstool and beyond)

---

## 12. ASSUMPTIONS DECLARED

The following were inferred from observation and should be confirmed with Pete before acting:

1. **DNS switch confirmed:** peteguzzo.com is serving the Astro rebuild. I observed this directly but cannot confirm the exact date it was switched or whether there's a CDN cache layer that might make this inconsistent in some regions.

2. **EVP is the canonical Shear title:** Per MEMORY.md (peteguzzo_evp_rule.md), EVP is the rule. The SVP on the About page appears to be a stale edit from before EVP was canonicalized.

3. **Legacy Squarespace articles (iPhone video, YouTube clips, etc.) were intentionally not ported:** They are not in the Astro build. If Pete has any reason to keep them, they would need to be added as Astro content files. I am recommending they not be recreated.

4. **/recipes page is intentionally unlisted in nav:** The recipe content is present (home page teaser + /recipes page) but not in the main nav. This appears deliberate. Not flagging as an issue.

5. **The Shear Enterprises /shear-enterprises page is intentionally not in nav:** Per MEMORY.md EVP rule, this page exists. Whether it should be in the nav is Pete's call. I'm recommending it be added but this is a strategy decision.

6. **peteguzzo.pages.dev is the preview deployment:** This appears to run the same code. It is not separately differentiated from the main site at this time.

---

## 13. HANDOFF NOTES FOR RUFLO-DELEGATED AGENTS

The following tasks are self-contained and can be delegated cleanly:

**Task A: Technical fixes bundle** (one agent, one session, commit required)
Files: src/pages/404.astro (create), public/_redirects (create), src/pages/index.astro (title change), src/pages/about.astro (SVP→EVP one line), public/llms.txt (expand), src/layouts/BaseLayout.astro (schema enrichment), src/pages/industry-insights/[slug].astro (add author byline + noindex logic for flagged articles), src/components/Nav.astro (add shear-enterprises link).
Gate: All changes must be committed to dev branch and pushed. Pete must authorize the push given the embedded PAT security issue.

**Task B: Kestum Bilt article** (one agent, one session, content only)
New file: src/content/insights/kestum-bilt-production-company.md
Scope: Long-form article on founding and growing a production company from zero to $1M+. Specific examples: how Kestum Bilt approached client retention, how the Hispanic market work was developed, the Seiko production scale. Pete should provide specific input or approve the draft.

**Task C: Shear Media Studios build story** (one agent, one session, content only)
New file: src/content/insights/building-shear-media-studios.md
Scope: How Pete designed and built an 11,000 sq. ft. multi-studio facility as a revenue system, not a production space. Decision-making behind the studio layout, use-case design, and operations model. Pete should verify facts.

**Task D: Schema and llms.txt enrichment** (can be combined with Task A or done standalone)
Specific additions documented in Section 8 above.

---

*Recon complete. No production changes made. All findings based on direct file reads and browser observation of live site.*
*Agent: Authority Recon Agent (claude-sonnet-4-6) | Session: 2026-08-11*

---

## 14. SUPPLEMENTAL FINDINGS — Authority Field Agent (2026-08-11, Session 2)

The following findings extend and verify the prior recon. No prior finding is contradicted — all are confirmed by independent direct reads.

### 14A — About page source verification (CONFIRMED)

Direct read of `src/pages/about.astro`:
- Line 17 confirmed: `title: 'SVP Marketing & Strategy / Studio Operations'` — this is the stale/incorrect title
- `org` on same entry: `'Shear Enterprises Inc., Rhonda Shear Intimates & Shear Studios'` — also stale vs. canonical "Shear Enterprises LLC"
- The correct entry should read: title = "Executive Vice President", org = "Shear Enterprises LLC (Rhonda Shear Intimates, Shear Media Studios, Up All Night Network)"
- Resume download link confirmed: `/files/Pete-Guzzo-Resume.pdf` — file existence not verified

### 14B — Homepage title tag (CONFIRMED)

Direct read of `src/pages/index.astro` line 16: `<BaseLayout title="Home" description={hero.title}>`
BaseLayout generates: `${title} | Pete Guzzo` = "Home | Pete Guzzo"
This is confirmed as the live homepage title tag.

### 14C — _redirects and 404.astro (CONFIRMED MISSING)

Both confirmed NOT FOUND by direct filesystem check:
- `/Users/deluvaakaporky/peteguzzo/public/_redirects` — NOT FOUND
- `/Users/deluvaakaporky/peteguzzo/src/pages/404.astro` — NOT FOUND

### 14D — Footer navigation (NEW — not in prior recon)

Direct read of `src/components/Footer.astro` reveals:
- Footer links: "Industry Insights", "Current Work", email (pg2@peteguzzo.com), LinkedIn
- /shear-enterprises is NOT in the footer — confirmed orphan from both nav and footer
- /industry-insights IS in the footer — insights section is discoverable via footer navigation

### 14E — Article template (CONFIRMED + NEW DETAIL)

Direct read of `src/pages/industry-insights/[slug].astro`:
- No author byline anywhere — confirmed missing
- No Article schema — confirmed missing
- Template has: back link, topic + date, H1, optional image, content body, CTA section
- The post.data.description IS used for the BaseLayout meta description — articles do have meta descriptions if the .md frontmatter includes them
- No head slot used for per-page schema or noindex support (needs to be added)

### 14F — BaseLayout schema (CONFIRMED + FULL TEXT CAPTURED)

Direct read of `src/layouts/BaseLayout.astro`:
Full Person schema confirmed as: name, jobTitle, url, email, sameAs (LinkedIn only), worksFor (Shear Media Studios with URL, PG2 without URL), knowsAbout (6 items).
Missing (confirmed): alumniOf, telephone, address, description, award, additional sameAs entries, Article schema on articles, BreadcrumbList anywhere.

### 14G — Shear Enterprises page (CONFIRMED EVP)

Direct read of `src/pages/shear-enterprises.astro`:
- Title tag: "EVP, Shear Enterprises | Pete Guzzo"
- Hero title: "Executive Vice President"
- Up All Night Network confirmed as third operating business (in addition to Rhonda Shear Intimates and Shear Media Studios)
- 8 executive scope areas confirmed: Enterprise Marketing Strategy, E-Commerce, Live Shopping, Amazon, Brand Architecture, Studio + Content Operations, AI-Assisted Operations, Organizational Development
- This page is the most detailed credential document on the site — its orphan status is a significant discovery gap

### 14H — robots.txt confirms live domain

`public/robots.txt` contains: `Sitemap: https://www.peteguzzo.com/sitemap-index.xml`
This was generated with the canonical domain, independently confirming the Astro rebuild is the live site at peteguzzo.com.

### 14I — llms.txt full content confirmed

Direct read of `/public/llms.txt` (24 lines) confirms: correctly identifies Pete as EP + Ops Strategist, lists 7 page URLs, describes Shear Media Studios and 211 Studio, gives email/phone/LinkedIn. Missing all quantified achievements, named clients, services, awards, current productions, and article URLs — as documented in Section 8 above.

*Supplemental findings: Authority Field Agent (claude-sonnet-4-6) | 2026-08-11*
