# Anonymous Community Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the static Touch homepage to present anonymous communities with glassmorphism UI and Google Play/web CTAs.

**Architecture:** Keep the existing static site. Replace homepage structure and tokens in `index.html` and `assets/css/styles.css`, add only small CTA/accessibility behavior in `assets/js/main.js`, and retain all legal subpages.

**Tech Stack:** HTML, CSS, vanilla JavaScript, GitHub Pages.

---

### Task 1: Replace homepage content

**Files:**
- Modify: `index.html`

- [ ] Update title, descriptions, Open Graph metadata, and homepage copy to anonymous communities.
- [ ] Add primary Google Play and secondary Continue on web CTAs using the verified repository destinations.
- [ ] Replace mood-based cards with community, anonymous posting, queue, chat, and safety cards.
- [ ] Keep existing policy links in the header/footer.

### Task 2: Apply Touch glassmorphism system

**Files:**
- Modify: `assets/css/styles.css`

- [ ] Align colors and type with the mobile app tokens.
- [ ] Style hero preview panels, CTA buttons, capability cards, trust section, and final CTA.
- [ ] Preserve responsive layout, focus states, and reduced-motion support.

### Task 3: Verify behavior and presentation

**Files:**
- Modify: `README.md`

- [ ] Update README product description to match the implemented anonymous-community homepage.
- [ ] Run static link/content checks.
- [ ] Serve the site locally and inspect the homepage at desktop and mobile widths.
- [ ] Confirm no unsupported mood-based claims remain on the homepage.
