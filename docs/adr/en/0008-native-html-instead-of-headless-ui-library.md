---
number: 8
title: Build interactive parts with native HTML instead of a headless UI library
summary: The own design system is rebuilt with native HTML elements and small Vue islands; no headless component library.
area: Design system
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Build interactive parts with native HTML instead of a headless UI library

## Context and Problem Statement

The site has its own design system ("Brinkema – Portfolio Design"). Its interactive parts are a mobile menu, a mobile table of contents, the language switch, a theme toggle and two filters. Headless libraries provide accessible behavior for complex widgets. Do we need one?

## Decision Drivers

- Accessibility: WCAG 2.2 AA
- Little JavaScript; everything should work without it
- Own look; class names and structure must match the design system's `bundle.css`

## Considered Options

- Native HTML plus small Vue islands
- A headless Vue library (e.g. Headless UI, Reka UI, Ark UI)

## Decision Outcome

Chosen option: "Native HTML plus small Vue islands", because for disclosure, links, a toggle and filters a headless library offers nothing that native HTML cannot do.

| Element                               | Without JavaScript     | With JavaScript  |
| ------------------------------------- | ---------------------- | ---------------- |
| Mobile menu, mobile table of contents | `<details>`            | –                |
| Language switch                       | real links             | –                |
| Theme toggle                          | system setting applies | toggle and store |
| Tag filter, status filter             | full list              | filter (island)  |

### Consequences

- Good, because native elements bring keyboard support and semantics for free and work without JavaScript.
- Good, because there is no dependency whose markup could diverge from `bundle.css`.
- Bad, because a future dialog, combobox or popover would have to be built and tested by hand.

### Confirmation

- axe-core in Playwright with zero violations (Phase 4).
- `eslint-plugin-vuejs-accessibility` in `pnpm verify` (active since Phase 1).
- Playwright tests with JavaScript disabled for the interactive parts (Phase 4).

## Pros and Cons of the Options

### Native HTML plus small Vue islands

- Good, because it is the smallest solution with the best progressive enhancement.
- Bad, because complex widgets would need custom implementation.

### A headless Vue library

- Good, because focus management and ARIA patterns for complex widgets are tested.
- Bad, because the widgets that need this do not exist on the site.
- Bad, because it adds client JavaScript and a dependency to keep up to date.

## More Information

Re-evaluate as soon as a dialog, combobox or popover is needed.
