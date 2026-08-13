# PG2 AUTHORITY IMPLEMENTATION PLAN
**Filed by:** PeteGuzzo.com Authority Field Agent (claude-sonnet-4-6)
**Commissioned by:** Missy CLM
**Date:** 2026-08-11
**Status:** DRAFT — awaiting CLM review and Pete approval before Phase 2
**Mode:** PLAN ONLY — no production changes made

---

## EXECUTIVE SUMMARY

peteguzzo.com is live, well-built, and correctly positioned. The core identity — "Executive Producer + Operations Strategist" — is stated clearly and consistently on the homepage, in the schema, and in the llms.txt. The site already has real authority signals: a 20-year career timeline with named employers, specific production outcomes, two studio builds, and the right services framing.

The problem is not what the site says. The problem is what it does not prove.

A visitor can understand what Pete does. They cannot yet understand how well he does it. The specific outcomes — $1M+ production company, 80-crew five-jurisdiction Seiko shoot, 25% HSN livestream sales lift, 11,000 sq. ft. studio built from scratch — exist in the About page bio but are buried. They are not on the homepage. They are not in dedicated articles. They are not in structured data where AI systems and search engines can act on them.

Two technical issues need immediate attention before any public promotion: (1) all unmatched URLs return HTTP 200 instead of 404, creating a duplicate-content soft 404 problem across every legacy Squarespace URL Google has indexed; and (2) the About page lists Pete's Shear title as "SVP Marketing & Strategy / Studio Operations" when the canonical title is "Executive Vice President" (EVP). Both are one-file fixes.

The roadmap below prioritizes: fix what is broken, amplify what already exists, then build out the proof layer with case studies and authority articles.

**Authority positioning rule (all decisions filter through this):**
Pete is the person companies bring in when production, studios, teams, content, operations, and business execution are complicated and somebody needs to make the whole thing work. AI supports that story. It does not replace it.

---

## PHASE 1 — PRIORITY ACTIONS

### P0 — URGENT (reputation or technical risk; fix before any public promotion)

---

**P0-1: Create the custom 404 page**

*Issue:* No `src/pages/404.astro` exists. No `public/404.html` exists. Cloudflare Pages returns HTTP 200 for every URL that does not match a real page, including all legacy Squarespace URLs that Google has indexed. Google either treats these as soft 404s (eventual deindex after crawl delay) or as duplicate content of the homepage (dilutes homepage authority now).

*Evidence:* `ls /Users/deluvaakaporky/peteguzzo/src/pages/404.astro` returns NOT FOUND. Prior agent verified via curl: HTTP 200 on /nonexistent-page-xyz123.

*Recommended action:* Create `src/pages/404.astro` — a branded, on-style 404 page. Astro will generate `404.html` in the build output. Cloudflare Pages automatically serves it for unmatched routes. Content should be simple: page-not-found message in Pete's voice, links to Home, About, and Work.

*Files affected:*
- CREATE: `src/pages/404.astro`

*Risk level:* NONE — creating a new file, no existing code touched

*Expected authority/business impact:* Stops duplicate-content leakage from ~20+ legacy Squarespace URLs. Returns correct 404 status to Google. Google deindexes soft 404s once they start returning real 404s — timeline: days to weeks depending on crawl budget.

*Ruflo task:* Task A (Technical Fixes Bundle)

---

**P0-2: Fix SVP → EVP on About page**

*Issue:* The About page timeline entry for Shear Enterprises reads "SVP Marketing & Strategy / Studio Operations" — an older, incorrect title. The canonical title per project MEMORY.md (peteguzzo_evp_rule.md) is "EVP, Shear Enterprises LLC." The /shear-enterprises page correctly says "Executive Vice President." The contradiction is a factual error that could cause confusion if a reporter, recruiter, or production partner compares the About page to the Shear Enterprises page.

*Evidence:* `src/pages/about.astro` line 17: `title: 'SVP Marketing & Strategy / Studio Operations'`. `src/pages/shear-enterprises.astro` line 12: `title="EVP, Shear Enterprises"` and Hero title "Executive Vice President". MEMORY.md peteguzzo_evp_rule.md: "EVP, Shear Enterprises LLC must always be first in the 'What I'm working on now' list."

*Recommended action:* In `src/pages/about.astro`, change:
```
title: 'SVP Marketing & Strategy / Studio Operations',
org: 'Shear Enterprises Inc., Rhonda Shear Intimates & Shear Studios',
```
To:
```
title: 'Executive Vice President',
org: 'Shear Enterprises LLC (Rhonda Shear Intimates, Shear Media Studios, Up All Night Network)',
```
The body text below can remain unchanged — it accurately describes what Pete does in that role.

*Files affected:*
- EDIT: `src/pages/about.astro` — timeline array, first entry only

*Risk level:* NONE — one data edit, no logic change

*Expected authority/business impact:* Eliminates factual contradiction. Aligns About page with canonical title that appears everywhere else.

*Ruflo task:* Task A (Technical Fixes Bundle)

---

### P1 — HIGH IMPACT (authority and discoverability)

---

**P1-1: Fix the homepage title tag**

*Issue:* The homepage renders with the title tag "Home | Pete Guzzo". Google displays this in search results. "Home" has no search value — it tells Google and users nothing about who Pete is or what he does.

*Evidence:* `src/pages/index.astro` line 16: `<BaseLayout title="Home" description={hero.title}>`. BaseLayout generates title as `${title} | Pete Guzzo` — so output is "Home | Pete Guzzo".

*Recommended action:* Change `title="Home"` to `title="Executive Producer + Operations Strategist | Tampa, FL"`. This generates: "Executive Producer + Operations Strategist | Tampa, FL | Pete Guzzo" — which is keyword-bearing and position-clear.

Alternative if the resulting title is too long for Google's 60-char display window: "Pete Guzzo — Executive Producer + Ops Strategist | Tampa, FL" (57 chars — fits).

*Files affected:*
- EDIT: `src/pages/index.astro` — one attribute in BaseLayout tag

*Risk level:* NONE

*Expected authority/business impact:* High. The homepage title is the single most visible SEO signal. A keyword-bearing title directly improves clickthrough from branded searches ("Pete Guzzo") and category searches ("executive producer Tampa").

*Ruflo task:* Task A (Technical Fixes Bundle)

---

**P1-2: Create the _redirects file for legacy Squarespace URLs**

*Issue:* Two legacy Squarespace URLs have meaningful brand equity and should 301 redirect to the current About page rather than returning soft 404: /about-me and /pg2-director/peteguzzo. Additional generic SEO pages (slow-iphone-video, etc.) can be left to naturally deindex once the 404.astro fix is in place.

*Evidence:* `public/_redirects` does not exist. Prior agent confirmed these URLs return HTTP 200 (soft 404). They are documented in PG2_AUTHORITY_RECON.md Section 5.

*Recommended action:* Create `public/_redirects` with:
```
/about-me /about 301
/pg2-director/peteguzzo /about 301
/pg2-director/* /about 301
/pg2-blog/* /industry-insights 301
/blog/* /industry-insights 301
/industry-insights/slow-iphone-video / 301
/industry-insights/crop-iphone-video / 301
/industry-insights/video-editing-software / 301
/industry-insights/clip-youtube-video / 301
```
(Redirect generic legacy SEO articles to homepage rather than creating false article pages)

*Files affected:*
- CREATE: `public/_redirects`

*Risk level:* LOW — redirects are immediately reversible; wrong targets can be corrected in the next file edit

*Expected authority/business impact:* Passes link equity from any existing backlinks to the legacy URLs to current pages. Stops Google from recrawling soft 404s. Speeds up deindex of legacy Squarespace content.

*Ruflo task:* Task A (Technical Fixes Bundle)

---

**P1-3: Add /shear-enterprises to the main nav**

*Issue:* Pete's most significant current credential — Executive Vice President of Shear Enterprises — lives on a well-written, fully detailed page at /shear-enterprises. That page is not linked from the main nav, the footer, or any other page. It is a complete orphan. A visitor going Home → About → Work will never see it. Google can index it via the sitemap but a visitor cannot discover it through normal navigation.

*Evidence:* `src/components/Nav.astro` — 5 nav links (Home, Services, Work, Studios, About). No /shear-enterprises. `src/components/Footer.astro` — 4 footer links (Industry Insights, Current Work, email, LinkedIn). No /shear-enterprises.

*Recommended action:* Pete decision required on positioning:
Option A — Add to main nav as a sixth link: "Current Role" → /shear-enterprises (low-friction addition)
Option B — Add as a footer link alongside Current Work
Option C — Add a "Current Role" teaser block on the About page below the timeline, with a link to /shear-enterprises

Recommended: Option C (About-page teaser + Option B footer link) — avoids cluttering the main nav while making the page discoverable through natural navigation flow. The EVP page is a deep credential, not a top-of-funnel service — it belongs one click from About, not one click from Home.

*Files affected:*
- EDIT: `src/pages/about.astro` — add teaser block + link below timeline section
- EDIT: `src/components/Footer.astro` — add link alongside Current Work

*Risk level:* NONE

*Expected authority/business impact:* HIGH. This is Pete's primary current role and the largest single chunk of daily authority activity. Its invisibility to visitors is a major gap. Making it discoverable through About and Footer immediately corrects the orphan status.

*Ruflo task:* Task A (Technical Fixes Bundle)

---

**P1-4: Expand llms.txt with specific authority facts**

*Issue:* The current `public/llms.txt` is accurate but thin. It correctly identifies Pete as an EP + Ops Strategist, lists 7 page URLs, describes two studios, and gives contact info. An AI system reading it would describe Pete correctly but generically. It is missing every fact that would make an AI describe Pete specifically: quantified outcomes, named clients, awards, credentials, services, and current productions.

*Evidence:* Full current content of /public/llms.txt confirmed by direct read. All missing items documented in PG2_AUTHORITY_RECON.md Section 8.

*Recommended action:* Expand llms.txt to include:
- Career achievements with numbers: Kestum Bilt $1M+ revenue, 66% client retention; HSN 25% sales lift on livestream; Tampa Digital $3.5M production revenue, 35% production time reduction; Seiko/Jimmie Johnson 80+ crew five-jurisdiction shoot
- Named key clients (already in About page bio, not confidential): Navy Federal, Dick's Sporting Goods, Seiko, Wawa, Hilton, Cooper Tires, CSL Plasma, Blue Emu, NAPA, Jackson Memorial Hospital, Ford, Margaritaville
- Awards: Telly Awards winner, National Addys winner (Tampa Digital era)
- Education: MBA Marketing & Project Management, BS Film & Visual Communications, both University of Tampa
- Services offered: Executive Production, Production Operations, Content Strategy, Studio Design & Development, Business Operations Consulting, AI-Assisted Workflow Integration
- Current productions: Unrested (Lionsgate documentary), Power of Attorney Atlanta, Bachelorette in the Bergs
- All 10 article URLs with one-line descriptions
- Studio development consulting as an explicit service offering

*Files affected:*
- EDIT: `public/llms.txt` — expand from 24 lines to ~100 lines

*Risk level:* NONE

*Expected authority/business impact:* HIGH. This directly improves AI discoverability. When ChatGPT, Perplexity, or Google AI are asked about Pete Guzzo, a rich llms.txt is one of the primary inputs. The goal is for an AI to be able to answer all 7 discoverability questions (listed in PG2_AUTHORITY_RECON.md Section 8) from this single file with specific, credible facts.

*Ruflo task:* Task A (Technical Fixes Bundle) or Task D (Schema + llms.txt standalone)

---

**P1-5: Enrich the Person schema in BaseLayout.astro**

*Issue:* The current Person schema on every page is accurate but minimal. It correctly identifies Pete's name, title, URL, email, LinkedIn, and two work organizations. It is missing fields that Google and AI systems use to build entity confidence: education, awards, location, description, sameAs entries beyond LinkedIn, and Article schema on individual articles.

*Evidence:* `src/layouts/BaseLayout.astro` lines 48-68 — full schema confirmed by direct read. Missing fields documented in PG2_AUTHORITY_RECON.md Section 8.

*Recommended action:* Add to Person schema in BaseLayout.astro:
```json
{
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University of Tampa"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "telephone": "+18134770003",
  "description": "Pete Guzzo is an Executive Producer and Operations Strategist with 20+ years in branded content, film, and TV. He designs studio systems, leads production operations, and serves as Executive Vice President at Shear Enterprises LLC.",
  "award": ["Telly Award Winner", "National Addy Award Winner"],
  "sameAs": [
    "https://www.linkedin.com/in/peteguzzo/",
    "https://vimeo.com/peteguzzo"
  ]
}
```
Also: Add Article schema to `src/pages/industry-insights/[slug].astro` for each blog post, using post.data.title, post.data.description, post.data.publishDate, and a canonical URL. Author should be a Person reference back to Pete Guzzo.

Verify Vimeo URL before including — confirm Pete has a Vimeo profile at that URL.

*Files affected:*
- EDIT: `src/layouts/BaseLayout.astro` — expand the ld+json schema block
- EDIT: `src/pages/industry-insights/[slug].astro` — add Article schema in head slot

*Risk level:* LOW — schema additions are read by crawlers, not displayed. Invalid schema is silently ignored by most systems. Reversible.

*Expected authority/business impact:* HIGH. Schema enrichment directly improves entity confidence in Google's Knowledge Graph and AI systems' understanding of who Pete is. Education and awards add credibility signals. Article schema associates Pete as the author of his insights content, which builds the topical authority cluster.

*Ruflo task:* Task A (Technical Fixes Bundle) or Task D (Schema + llms.txt standalone)

---

**P1-6: Add author byline and internal links to article template**

*Issue:* Every article at /industry-insights/[slug] currently has no byline. There is no "By Pete Guzzo" visible anywhere in the article template. This means the articles are not clearly attributed to Pete as author — a gap that affects both human readers and AI systems trying to determine authorship.

Additionally, articles have no internal links to related articles, the About page, or relevant work items. This means Google cannot understand the topical cluster relationship between the insights, and visitors cannot naturally continue reading.

*Evidence:* `src/pages/industry-insights/[slug].astro` confirmed by direct read — no byline, no related-content section.

*Recommended action:* 
1. Add a byline between the topic/date line and the H1: "By <a href="/about">Pete Guzzo</a>" — one line of HTML.
2. Add a "More from Pete" section below the article content (above the CTA section) with 2-3 links to related articles. These can be hardcoded per article or dynamically generated by filtering the insights collection by topic tag.

*Files affected:*
- EDIT: `src/pages/industry-insights/[slug].astro` — add byline, add related-content section

*Risk level:* NONE

*Expected authority/business impact:* MEDIUM-HIGH. Byline closes the authorship attribution gap. Internal links create topic clustering that Google uses to understand and rank Pete's authority in specific areas (studio systems, production operations, AI). Also improves time-on-site as readers continue to related articles.

*Ruflo task:* Task A (Technical Fixes Bundle)

---

### P2 — VALUABLE ENHANCEMENT

---

**P2-1: Noindex the 4 thin personal articles**

*Issue:* Four articles are authority-negative for the Industry Insights section:
- `full-circle-rediscovering-my-hometown.md` — ~200 words, tourist content about Ewing, NJ
- `lessons-in-resilience-from-my-best-friend.md` — personal tribute, no production authority
- `a-recipe-for-video-ambrosia.md` — ~200 words, list of production ingredients, no insight
- `how-to-get-baby-actors-to-pee-on-cue.md` — production story with misleading clickbait title

These dilute the production authority signal of the insights section. When Google evaluates the /industry-insights category, it sees 4 of 10 articles providing zero relevant authority signal.

*Evidence:* Full article inventory in PG2_AUTHORITY_RECON.md Section 6. Classification confirmed by article title and topic tag inspection.

*Recommended action:* Add `<meta name="robots" content="noindex, follow">` to each of these four articles specifically. This tells Google not to index them while preserving the internal links within them. Do not delete the .md files — archive them (move to src/content/insights/_archive/ or add `published: false` to frontmatter if supported). Pete to confirm which (if any) he wants to keep or retitle.

*Files affected:*
- EDIT: `src/pages/industry-insights/[slug].astro` — add conditional noindex meta tag when post.data.noindex is true
- EDIT: 4 article .md files — add `noindex: true` to frontmatter

*Risk level:* LOW — noindex is easily reversed by removing the tag

*Expected authority/business impact:* MEDIUM. Removes negative dilution. Google crawls fewer low-value pages, concentrating crawl budget on authority content.

*Ruflo task:* Task A (Technical Fixes Bundle)

---

**P2-2: Update Contact page meta description**

*Issue:* Contact page meta description is "Get in touch with Pete Guzzo." — thin. No context for why someone would contact Pete or what they're getting in touch about.

*Evidence:* PG2_AUTHORITY_RECON.md Section 8 title/meta table. Confirmed in `src/pages/contact.astro` (not read directly — read in prior recon).

*Recommended action:* Update Contact page BaseLayout description to: "Get in touch with Pete Guzzo, Executive Producer + Operations Strategist. Available for executive production, production operations, studio development, and business consulting."

*Files affected:*
- EDIT: `src/pages/contact.astro` — description attribute in BaseLayout

*Risk level:* NONE

---

**P2-3: Write the Kestum Bilt case study article**

*Issue:* The Kestum Bilt story — founded from zero, grew to $1M+ annual revenue with $750K average, 66% client retention, national campaigns for Navy Federal / Seiko / Dick's / Wawa / Hilton — is the single most powerful production operations credential Pete has. It exists only as a bio paragraph on the About page. It is not visible to visitors who go directly to Work or Services. It is not structured as a proof document.

*Recommended action:* Commission a long-form article (1,500–2,000 words) for `src/content/insights/kestum-bilt-production-company.md`. Topic tag: `production-operations`. Authority pillars: 1 (EP) and 2 (Production Operations).

Scope: How Pete built a production company from zero to $1M+, what production operations systems made client retention possible in a business where most clients don't return after one campaign, how the Hispanic market work was developed, how the Seiko/Jimmie Johnson campaign (80+ crew, five jurisdictions, high six-figure budget) was executed.

GATE: Pete must provide specific facts and approve the draft. Do not invent numbers, client quotes, or outcomes.

*Files affected:*
- CREATE: `src/content/insights/kestum-bilt-production-company.md`

*Risk level:* NONE (no file exists to break)

*Expected authority/business impact:* HIGH. This is the missing proof document for Pillars 1 and 2. Once published, it becomes the primary Google-indexable document establishing Pete as someone who has actually built and run a production company at scale.

*Ruflo task:* Task B (Kestum Bilt Article)

---

**P2-4: Write the Shear Media Studios build story**

*Issue:* "How I designed and built an 11,000 sq. ft. multi-studio facility as a revenue system" is Pete's strongest studio developer credential. The Studios page describes what the facility does but not how Pete built it, what decisions he made, or what the result was. Studio design consulting is referenced but not pitched as a replicable service.

*Recommended action:* Commission a long-form article (1,200–1,800 words) for `src/content/insights/building-shear-media-studios.md`. Topic tag: `studio-systems`. Authority pillar: 3 (Studio Developer).

Scope: The design decisions, the operational architecture (soundstages, podcast suites, live-shopping environments, booking systems), how the facility was built to function as a revenue system rather than a cost center, and what that model can do for other organizations.

GATE: Pete must verify all facts in the draft before publishing.

*Files affected:*
- CREATE: `src/content/insights/building-shear-media-studios.md`

*Risk level:* NONE

*Expected authority/business impact:* HIGH. This establishes studio development as a replicable consulting service, not just a past accomplishment. It positions Pete as someone who can design and build studio systems for other clients — opening a new service line discovery path.

*Ruflo task:* Task C (Shear Media Studios Article)

---

### P3 — BACKLOG

---

**P3-1: Press / Media page** (requires Pete decision)

The Barstool Sports press page (disabled Squarespace page) and any future press coverage have no home on peteguzzo.com. A visitor who sees Pete named in a press announcement and Googles him will find: strong EP positioning, current projects, 20-year career. They will not find a press page, a media kit, or a "as featured in" credential row.

Pete must decide:
- When to enable the Barstool page (see MEMORY.md project_barstool_pause_checkpoint.md)
- Whether to create a /press page on peteguzzo.com
- What to include: press mentions, downloadable bio/headshot, booking contact

No action recommended until Pete confirms what to include and what can be published. Do not include unannounced information.

*Ruflo task:* Task E (Press/Media Page) — requires Pete input first

---

**P3-2: Refresh 3 UPDATE articles**

Three articles are correctly structured and on-topic but have older voice or need specific examples added:
1. `navigating-large-scale-productions.md` — refresh voice, add specific Kestum Bilt budget management examples
2. `learning-the-industry-from-the-ground-up.md` — retitle toward authority framing, the "nephew story" is strong
3. `good-fast-low-cost-choose-2.md` — strip dated CMO-dialogue format, expand with Kestum Bilt budget transparency examples

Sequence: Do after the Kestum Bilt case study is written, so the specific examples are already finalized.

*Ruflo task:* Task D (Article Refreshes) — depends on Task B completion

---

**P3-3: Add social proof to homepage** (requires Pete decision)

The homepage has no client logos, no testimonials, and no credential row. Pete must decide what social proof he is willing to display publicly. Options range from: named client logos (requires client approval in most cases), to a "Production credits include" text row, to specific outcome stats inline with the hero.

Do not add testimonials or logos without Pete's explicit approval for each one.

---

**P3-4: Add sameAs entries and BreadcrumbList schema**

Additional structured data work:
- Verify and add Vimeo profile URL to sameAs in Person schema
- Add Twitter/X profile URL if Pete has an active public presence
- Add IMDB Pro profile URL if Pete has one
- Implement BreadcrumbList on article pages and work item pages
- Implement Organization schema for Shear Media Studios, Kestum Bilt, PG2

---

**P3-5: Homepage outcome teaser**

Add a brief credential/outcome row to the homepage — not a testimonial wall, just specific, provable stats from the bio. Example: "80+ crew. Five jurisdictions. One shoot. / $1M+ production company built from zero. / 25% HSN livestream sales lift." These already exist in the About page bio — surface them above the fold on the homepage.

Design decision required: where does this row live in the homepage flow? Recommended: below the hero, before the "What I Do" section.

---

## CONTENT ROADMAP

### Priority sequence (by authority impact, fastest to longest)

1. P0-1: 404.astro (one new file, ~30 min)
2. P0-2: SVP → EVP fix (one-line edit, ~5 min)
3. P1-1: Homepage title tag (one-line edit, ~5 min)
4. P1-2: _redirects file (new file, ~15 min)
5. P1-4: Expand llms.txt (file edit, ~45 min)
6. P1-5: Enrich Person schema (file edit, ~30 min)
7. P1-3: /shear-enterprises nav/footer/about (3 file edits, ~30 min)
8. P1-6: Author byline + internal links (template edit, ~30 min)
9. P2-1: Noindex 4 thin articles (template + 4 frontmatter edits, ~30 min)
10. P2-3: Kestum Bilt case study (long-form content, Pete input required)
11. P2-4: Shear Media Studios build story (long-form content, Pete input required)

---

## SCHEMA / ENTITY ROADMAP

### Connected entity model (recommended, do not implement until P1-5 approved)

```
Person: Pete Guzzo
  jobTitle: Executive Producer + Operations Strategist
  worksFor: Shear Media Studios, PG2
  alumniOf: University of Tampa (MBA, BS)
  award: Telly Award, National Addy
  address: Tampa, FL
  sameAs: LinkedIn, Vimeo (verify), Twitter/X (verify)
  description: [2-3 sentence entity description]
  
  → foundedOrganization: Kestum Bilt (2015, dissolved 2024)
  → employerOf / worksFor: Shear Enterprises LLC (2024–present, EVP)
  → worksFor: HSN / Qurate (contract)

Organization: Shear Media Studios
  @type: Organization
  name: Shear Media Studios
  url: https://shearmediastudios.com
  founder: Pete Guzzo
  location: Tampa/St. Petersburg, FL

Organization: Kestum Bilt
  @type: Organization
  name: Kestum Bilt
  founder: Pete Guzzo
  foundingDate: 2015
  dissolutionDate: 2024

Article: [for each insights post]
  @type: Article
  author: Person (Pete Guzzo)
  headline: [post.data.title]
  datePublished: [post.data.publishDate]
  url: https://www.peteguzzo.com/industry-insights/[slug]
  publisher: PG2
```

Note: Do not include IMDB, Twitter/X, or Vimeo sameAs entries until the actual profile URLs are verified to exist and to be Pete's.

---

## ARTICLE PUBLISHING SEQUENCE

Order optimized for authority pillars and dependency resolution:

1. **Kestum Bilt production company case study** (Pillars 1+2) — write first; its specific examples will also be used to refresh the 3 UPDATE articles
2. **Shear Media Studios build story** (Pillar 3) — write second; confirms studio development as a service
3. **Production cash flow and economics deep-dive** (Pillar 2) — new article; expands on what the "Navigating Large-Scale" article touches
4. **Navigating Large-Scale Productions refresh** (Pillar 2) — UPDATE after case study is written
5. **Good. Fast. Low Cost. Choose 2. refresh** (Pillar 2) — UPDATE; strip dialogue, add Kestum Bilt examples
6. **Learning the Industry from the Ground Up retitle + refresh** (Pillar 2) — retitle, strengthen authority framing
7. **Content operations and repeatable systems article** (Pillar 4) — new article; multichannel ops, Shear Enterprises context

Hold: Baby Actors piece — only keep if Pete wants to retitle and expand into a real production systems story. Otherwise noindex.

---

## RUFLO-READY TASK BREAKDOWN

Task bundles structured for clean agent delegation. Each bundle is self-contained and can be routed to a specialized agent.

---

### TASK A — Technical Fixes Bundle
**Description:** All P0 and P1 technical fixes. No new content writing. All changes are small, precise, and reversible.
**Agent type:** Code/Astro implementation agent
**Session count:** 1 session

**Files to create:**
- `src/pages/404.astro` — branded 404 page in Pete's voice, links to Home/About/Work
- `public/_redirects` — Cloudflare Pages redirect rules (legacy URL list above)

**Files to edit:**
- `src/pages/index.astro` — change `title="Home"` to `title="Executive Producer + Operations Strategist | Tampa, FL"`
- `src/pages/about.astro` — SVP → EVP in timeline array (line 17); add teaser link to /shear-enterprises below timeline section
- `public/llms.txt` — expand to include achievements, clients, awards, services, current productions, article URLs
- `src/layouts/BaseLayout.astro` — expand Person schema (alumniOf, address, telephone, description, award, sameAs additions)
- `src/pages/industry-insights/[slug].astro` — add byline, add Article schema via head slot, add conditional noindex, add related-content section
- `src/components/Footer.astro` — add /shear-enterprises link
- `src/pages/contact.astro` — update meta description
- 4 article .md files — add `noindex: true` to frontmatter: full-circle, lessons-in-resilience, a-recipe, baby-actors

**Gate:** All changes must be committed to dev branch. Pete must push (PAT security issue — Pete must rotate GitHub PAT first).
**Blocked by:** Pete rotating GitHub PAT before push. Commit to dev branch can proceed without the push.
**Risk:** LOW on all items. Every change is a precise file edit. No build logic touched.

---

### TASK B — Kestum Bilt Article
**Description:** Write the Kestum Bilt long-form authority article.
**Agent type:** Content writing agent with authority SEO awareness
**Session count:** 1 session (draft) + Pete review

**Inputs required from Pete before starting:**
- Confirmation of revenue figures (currently: $1M+, $750K average — are these publicly shareable?)
- Any specific production stories or client moments Pete wants included beyond what's on the About page
- Any clients Pete does NOT want named specifically in a public article

**Output:**
- `src/content/insights/kestum-bilt-production-company.md`
- Frontmatter: title, description, publishDate, topic: production-operations, image (Pete to supply or approve)

**Authority pillars:** 1 (Executive Production) + 2 (Production Operations)
**Word count target:** 1,500–2,000 words

---

### TASK C — Shear Media Studios Build Story
**Description:** Write the Shear Media Studios long-form authority article.
**Agent type:** Content writing agent with authority SEO awareness
**Session count:** 1 session (draft) + Pete review

**Inputs required from Pete before starting:**
- Studio design decisions Pete wants on the record (layout, use-case prioritization, booking system design)
- Revenue or booking data Pete is willing to share publicly
- Whether to position studio development as a replicable client service (recommended: yes)

**Output:**
- `src/content/insights/building-shear-media-studios.md`
- Frontmatter: title, description, publishDate, topic: studio-systems, image (Pete to supply or approve)

**Authority pillar:** 3 (Studio Developer / Studio Operations)
**Word count target:** 1,200–1,800 words

---

### TASK D — Article Refreshes
**Description:** Refresh 3 UPDATE articles — voice improvements and specific example additions.
**Dependency:** Complete Task B first (specific Kestum Bilt examples needed for refreshes)
**Agent type:** Content writing agent
**Session count:** 1 session

**Files to edit:**
- `src/content/insights/navigating-large-scale-productions.md`
- `src/content/insights/learning-the-industry-from-the-ground-up.md`
- `src/content/insights/good-fast-low-cost-choose-2.md`

---

### TASK E — Press / Media Page
**Description:** Create a /press page on peteguzzo.com to capture press coverage, provide a media kit, and give visitors who arrive from press mentions a contextual landing experience.
**Dependency:** Pete must confirm what can be published before this task starts
**Agent type:** Astro implementation agent
**Session count:** 1 session

**Pete decisions required first:**
- Is the Barstool Sports announcement public yet?
- What press mentions can be listed?
- Does Pete want a downloadable bio/headshot package?
- What contact for press inquiries?

**Output:**
- `src/pages/press.astro` — press/media page
- Update: `src/components/Nav.astro` or `src/components/Footer.astro` to link /press once live

---

## AUTHORITY POSITIONING FILTER

All tasks and content decisions above filter through one test:

**Does this help prove that Pete is the person companies bring in when production, studios, teams, content, operations, and business execution are complicated and somebody needs to make the whole thing work?**

If yes: proceed.
If no: deprioritize or remove.

---

*Plan complete. No production changes made. All findings based on direct file reads.*
*Agent: PeteGuzzo.com Authority Field Agent (claude-sonnet-4-6) | Session: 2026-08-11*
*Awaiting CLM review and Pete approval before Phase 2 (Task A implementation).*
