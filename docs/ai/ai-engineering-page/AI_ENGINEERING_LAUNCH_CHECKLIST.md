# AI_ENGINEERING_LAUNCH_CHECKLIST.md
## Launch Criteria — /ai-engineering
## Field Agent: PG2-AI-ENGINEERING

---

## STATUS: STUB — Criteria Established

Checklist will be executed in Phase 8 (Launch Readiness). Items are defined now so nothing is missed at launch.

---

## Pre-Launch Gates (Mandatory — Cannot Launch Without These)

### Content and Claims
- [ ] All factual claims in copy have a corresponding entry in AI_ENGINEERING_CLAIMS_VERIFICATION.md with VERIFIED status
- [ ] No NEEDS PETE items remain unresolved in copy
- [ ] Revenue/outcome figures confirmed publicly shareable by Pete (Kestum Bilt, HSN, Tampa Digital)
- [ ] CORTEX naming decision confirmed by Pete
- [ ] Chicago SRT case study: sanitization confirmed by Pete (no facility names, vendor names, network specifics)
- [ ] Qvisor slot: either source material supplied and case study written, OR slot removed from page

### Quality Bar
- [ ] CLM has reviewed all copy and approved it for Pete's eyes
- [ ] Pete has reviewed and approved the complete page
- [ ] The standard: "Pete would be comfortable using this as a major public proof point"

### Language Constraints
- [ ] "Mistakes disappear" does NOT appear anywhere in the page
- [ ] "Pete proved the engineers wrong" framing does NOT appear anywhere
- [ ] "Starts from zero" concept is correctly framed
- [ ] "Previous mistakes no longer need to be rediscovered" or "The organization should not have to pay for the same mistake twice" is used correctly
- [ ] "Expert opinion was treated as valuable evidence, but not as a substitute for verified system behavior" is correctly used for SRT

### CORTEX Accuracy
- [ ] V1/Ruflo NOT described as currently active (both are designed, not yet deployed)
- [ ] TENTACLES described accurately (file-exchange model, not live supervisory connection)
- [ ] Proposed reflex rules from SRT NOT described as canonical CORTEX doctrine (pending Pete's approval)
- [ ] The architecture diagram reflects current reality (V0) plus clearly labeled designed-but-not-active (V1/Ruflo)

---

## Technical Pre-Launch Requirements

### Astro Implementation
- [ ] New file created: src/pages/ai-engineering.astro
- [ ] Page uses appropriate layout (custom, not standard BaseLayout hero template)
- [ ] Dark sections implemented with correct Tailwind classes
- [ ] Level 1/2/3/4 progression designed and rendered
- [ ] Architecture diagram implemented (SVG or styled HTML — no external library)
- [ ] Case study proof blocks designed and populated
- [ ] All internal links verified working: /contact, /shear-enterprises, /industry-insights/how-ai-actually-helps, /studios
- [ ] All images (if used) confirmed to exist at correct paths in /public/images/

### SEO and Metadata
- [ ] Page title tag set (not "AI Engineering | Pete Guzzo" — needs keyword-bearing title)
- [ ] Meta description set (specific, not generic)
- [ ] Article/WebPage schema added (Pete as author)
- [ ] Page URL added to sitemap (via Astro sitemap integration — automatic if page exists in /pages/)
- [ ] llms.txt updated: /ai-engineering added with one-line description

### Navigation and Discovery
- [ ] Page confirmed reachable from navigation (Pete decides: main nav, About page link, footer, or combination)
- [ ] Not orphaned (must be linked from at least one current-nav page)

### Testing
- [ ] Page renders correctly in light mode (site default)
- [ ] Page renders correctly in dark mode (if site supports theme toggle — verify)
- [ ] Mobile layout tested: no horizontal scroll, no broken progressions
- [ ] All links tested and confirmed working
- [ ] Images (if used): load at correct sizes, no broken src attributes

---

## Post-Launch Actions

- [ ] Verify page is indexed by Google (submit URL to Search Console if available)
- [ ] LinkedIn launch post drafted, reviewed by CLM, approved by Pete, published
- [ ] AI_ENGINEERING_CURRENT_STATE.md updated: STATUS: LAUNCHED
- [ ] CORTEX capture: /cortex-capture run to record the development and launch
- [ ] CLM notified: field agent task complete

---

## NOT Launch Criteria (things that are nice but not blockers)

- Qvisor case study (NEEDS PETE — not a launch blocker; slot can be hidden or omitted)
- Scroll animations (desirable; not required for launch)
- AI auto-fill or interactive elements (not planned for this page)
- LinkedIn posts (post-launch; not a pre-launch requirement)
- "As seen on" or press links (post-launch when Barstool press page is live)

---

## Launch Authority

Publishing the page (pushing to production) is TIER 3 — requires Pete's explicit approval.
No launch action is taken by any agent without Pete's sign-off.
CLM reviews before Pete. Pete approves before launch. No exceptions.
