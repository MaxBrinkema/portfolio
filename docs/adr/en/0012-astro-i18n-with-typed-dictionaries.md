---
number: 12
title: Use Astro's built-in i18n with typed dictionaries
summary: German and English from the start, via Astro i18n routing with a language prefix and typed UI dictionaries; no extra i18n library.
area: Internationalization
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Use Astro's built-in i18n with typed dictionaries

## Context and Problem Statement

All content, UI texts, the architecture docs and the CV exist in German and English, with a language switch on every page. Adding i18n later is much more expensive than building it in from the start. Which approach do we use for routing and UI texts?

## Decision Drivers

- Both languages are equal from day one
- A missing translation must be detected automatically
- No i18n runtime in the client
- The amount of UI text is small

## Considered Options

- Astro's built-in i18n with typed dictionaries
- Paraglide JS (inlang)
- i18next or vue-i18n

## Decision Outcome

Chosen option: "Astro's built-in i18n with typed dictionaries", because it covers routing and language helpers without an extra dependency, and a TypeScript type makes missing keys a compile error.

- Routing with a prefix in every URL (`/de/…`, `/en/…`); links to the other language via the Astro helpers.
- UI texts in typed dictionaries (`de.ts`, `en.ts`) with a small `t()` helper. The English dictionary must satisfy the type of the German one.
- Vue islands receive their texts as props; no `vue-i18n` in the client.
- Dates and numbers via the built-in `Intl` API.
- First visit: `/invite` picks the language from the optional link parameter, otherwise from `Accept-Language`. The choice is stored in a cookie.

### Consequences

- Good, because a missing key fails the typecheck.
- Good, because no i18n library is shipped to the client.
- Bad, because plural forms and placeholders have to be handled by hand.

### Confirmation

- Typecheck over the dictionaries in `pnpm verify` (from Phase 2).
- A test expects every content entry, ADR and arc42 chapter in both languages (Phase 5).
- E2E: the language switch lands on the same page, the `lang` attribute is correct, axe passes in both languages (Phase 2).

## Pros and Cons of the Options

### Astro's built-in i18n with typed dictionaries

- Good, because it adds no dependency and stays typed.
- Bad, because ICU features such as plurals are missing.

### Paraglide JS

- Good, because messages compile to typed, tree-shakable functions.
- Bad, because it adds a toolchain that this small amount of text does not need yet.

### i18next or vue-i18n

- Good, because they are feature-complete and widely used.
- Bad, because they add a client runtime and lose type safety of keys without extra tooling.

## More Information

Upgrade path: switch to Paraglide JS if the amount of text, plural forms or placeholders grow substantially. The middleware order (security headers, route policy and session, then language resolution) is decided together with the auth concept.
