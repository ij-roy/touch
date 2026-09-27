# Anonymous Community Landing Page Design

## Goal

Rework the static Touch GitHub Pages homepage to present the implemented anonymous-community experience with a glassmorphism visual system aligned to the mobile app and clear Google Play and web CTAs.

## Scope

- Replace mood-based homepage messaging with anonymous communities, community feeds, post queues, community chat, and safety/reporting.
- Use the existing Touch logo and Play Store asset.
- Keep the static HTML/CSS/JS architecture and existing policy pages.
- Add verified CTA destinations from the repository/config; do not invent a store URL.
- Preserve responsive navigation, reduced-motion behavior, metadata, and accessibility.

## Design

The homepage will use a warm Touch palette based on the mobile app: blush background, pink accent, plum contrast, translucent white cards, soft borders, and layered blurred decorative shapes. The hero pairs concise product copy with a glass preview made from CSS panels representing a community feed, an anonymous post, and a queue. A primary Play Store button and secondary web button are repeated in the final conversion section.

Content is organized as hero, product promise, implemented capabilities, trust/safety, and final CTA. Claims are limited to behavior visible in the mobile/web codebase. Mood reels and mood-based discovery are removed from homepage copy and metadata.

## Verification

- Static checks confirm the homepage contains both required CTA labels and destinations.
- Static checks confirm no mood-based homepage copy remains.
- Local HTTP preview is inspected at desktop and mobile widths.
- Existing navigation and policy links remain valid.
