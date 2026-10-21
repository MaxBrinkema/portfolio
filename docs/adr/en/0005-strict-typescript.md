---
number: 5
title: Use TypeScript in strict mode with additional checks
summary: All code is TypeScript with strict mode and additional compiler checks, from the content schemas to the dictionaries.
area: Code quality
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Use TypeScript in strict mode with additional checks

## Context and Problem Statement

Content, UI texts, route policy and token handling all depend on correct data shapes. Errors there break either the most important requirement (no access without a token) or the bilingual completeness. How strictly do we type the code?

## Decision Drivers

- Type safety all the way into the content (schemas, dictionaries)
- Catch mistakes at build time instead of in production
- Fast, deterministic feedback for humans and coding agents

## Considered Options

- TypeScript `strict` plus additional checks
- TypeScript `strict` only
- JavaScript with JSDoc type annotations

## Decision Outcome

Chosen option: "TypeScript `strict` plus additional checks", because the additional flags catch exactly the classes of errors that matter here: missing keys, optional values and unchecked index access.

The shared base configuration `tsconfig.base.json` enables, besides `strict`, among others `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noImplicitReturns`, `noPropertyAccessFromIndexSignature` and `verbatimModuleSyntax`.

### Consequences

- Good, because a missing key in the English dictionary fails the typecheck (see ADR-0012).
- Good, because type-aware lint rules (typescript-eslint, strict) build on it.
- Bad, because `exactOptionalPropertyTypes` and `noUncheckedIndexedAccess` require more explicit code.

### Confirmation

- `tsc --noEmit` in `pnpm verify` (active since Phase 1); `astro check` once the app exists (Phase 2).

## Pros and Cons of the Options

### TypeScript `strict` plus additional checks

- Good, because it catches the most errors at compile time.
- Bad, because some library types do not fit `exactOptionalPropertyTypes` without workarounds.

### TypeScript `strict` only

- Good, because it is the common default.
- Bad, because index access and optional properties stay unchecked.

### JavaScript with JSDoc

- Good, because it needs no compile step.
- Bad, because the annotations are more verbose and many checks are weaker in practice.

## More Information

TypeScript is pinned to 6.0 for now, because typescript-eslint and `@astrojs/check` do not support TypeScript 7 yet. Renovate can raise the version once they do.
