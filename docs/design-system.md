# Design System

This site is intentionally small and agent-editable. Treat the components as Lego pieces instead of introducing a CMS too early.

## Visual Direction

Quiet Mediterranean spa: warm white paper, deep teal, sage, clay accents, editorial serif headlines, real treatment photography, and restrained motion.

## Tokens

Defined in `src/app/globals.css`:

- `--ink`, `--ink-soft`: text
- `--teal`, `--teal-deep`: brand color and dark sections
- `--sage`, `--mist`: soft natural surfaces
- `--clay`: accent, focus, eyebrow text
- `--paper`, `--white`: page backgrounds
- `--radius`: 8px default radius

## Content Blocks

- Home hero: `src/app/page.tsx`
- Intro, principles, treatment cards, ritual band: `src/app/page.tsx` with data from `src/content/site.ts`
- Treatment pages: `CategoryPage` using groups/items from `src/content/treatments.ts`
- Contact band: `ContactSection`

## Rules For Future Edits

- Edit copy and prices in content files first.
- Add a new service by adding an item to the right group in `src/content/treatments.ts`.
- Add a new page only if it has a clear user job.
- Keep service text in cards; do not place text over busy photos.
- Keep the header readable on every page.
- Use local images in `public/media/` and reference them from `src/content/site.ts`.
