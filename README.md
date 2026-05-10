# Y beauty

Modern rebuild of the Y beauty salon site for Dénia, Spain.

## Stack

- Next.js App Router
- React + TypeScript
- Bun package manager
- `oxlint` for fast linting
- Prettier for formatting
- Local images and videos copied from the current Wix site

## Commands

```bash
bun install
bun run dev
bun run format
bun run lint
bun run lint:next
bun run build
```

## Editing Guide

Most non-technical edits should start in `src/content/`.

- `src/content/site.ts`: brand copy, contact details, hours, navigation, home sections, image references
- `src/content/treatments.ts`: facial, body, waxing, and makeup service menus
- `public/media/`: local photos
- `public/video/`: local decorative videos

Reusable site sections live in `src/components/`.

- `site-header.tsx`: logo, desktop nav, mobile menu, WhatsApp CTA
- `site-footer.tsx`: footer navigation and contact links
- `contact-section.tsx`: hours, location, WhatsApp, email
- `category-page.tsx`: shared treatment page layout and service cards
- `brand-logo.tsx`: extracted Y beauty SVG logo

Design tokens and layout rules live in `src/app/globals.css`. Keep changes there conservative: use the existing color variables, 8px radius, responsive grids, and readable text over photography.
