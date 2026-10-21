---
number: 9
title: Style with CSS custom properties from the design tokens and container queries
summary: Design tokens become CSS custom properties; components react to their container, typography scales fluidly with clamp().
area: Styling
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Style with CSS custom properties from the design tokens and container queries

## Context and Problem Statement

The design system ships `tokens.json` as the single source for colors (light and dark), typography, spacing, radii and motion, plus a finished `bundle.css` with `bk-` classes that uses container queries. How do we bring this into the code without duplicating or reinterpreting the design?

## Decision Drivers

- The design system is the only authoritative source; no invented tokens
- Light and dark theme are equal, with no flash before the first paint and no inline script
- Mobile first; components react to their container, not to the viewport
- Little or no CSS tooling at runtime

## Considered Options

- CSS custom properties generated from `tokens.json`, plain CSS with container queries
- Tailwind CSS with a theme generated from the tokens
- CSS-in-JS
- Sass variables

## Decision Outcome

Chosen option: "CSS custom properties generated from `tokens.json`", because the design system's `bundle.css` is already written that way and can be used unchanged.

- `packages/tokens` generates the custom properties from `tokens.json`, per theme via `data-theme` on `<html>`, plus a variant without `data-theme` that follows `prefers-color-scheme`.
- `packages/ui` takes over `bundle.css` unchanged; components rebuild the same HTML structure and class names.
- Fluid typography with `clamp()`; components use container queries.

### Consequences

- Good, because the design system and the code use the same names (`color.text.muted` ↔ `--color-text-muted`).
- Good, because no CSS framework runs at build time or in the client.
- Bad, because token changes always go through a new export from the design system.

### Confirmation

- A contrast test checks all text/background pairs in light and dark against WCAG AA (Phase 4).
- Playwright on several viewports (Phase 4).

## Pros and Cons of the Options

### CSS custom properties with plain CSS

- Good, because `bundle.css` applies unchanged.
- Good, because themes switch without rebuilding styles.
- Bad, because there is no utility-class shorthand.

### Tailwind CSS

- Good, because of fast prototyping with utility classes.
- Bad, because the design system's components would have to be rewritten into utilities, and the previews would no longer be comparable.

### CSS-in-JS

- Good, because styles are scoped to components.
- Bad, because it needs runtime JavaScript or extra build steps, and it does not fit `.astro` components without islands.

### Sass variables

- Good, because the syntax is familiar.
- Bad, because the variables are resolved at build time, so a theme switch would need separate stylesheets.

## More Information

Theme handling without a script (cookie, server-side `data-theme`) is described in `docs/plan.md`, section "Theme Light und Dark".
