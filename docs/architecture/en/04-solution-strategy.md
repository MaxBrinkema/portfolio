---
chapter: 4
title: Solution Strategy
---

# 4 Solution Strategy

| Goal or constraint           | Approach                                                                                                               | Decision                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| Security, deny by default    | Every content page renders per request behind a middleware that only lets allowlisted routes through without a session | ADR-0002; auth concept in Phase 3 |
| Content stays private        | Public code repository, private content repository, build reads `CONTENT_DIR`                                          | ADR-0006                          |
| Little client JavaScript     | Astro islands, native HTML first, Vue only for the few interactive parts                                               | ADR-0002, ADR-0003, ADR-0008      |
| Type safety into the content | Strict TypeScript, content collections with Zod schemas, typed dictionaries                                            | ADR-0005, ADR-0007, ADR-0012      |
| Maintainability              | pnpm monorepo with one-way dependencies; security logic framework-independent                                          | ADR-0004                          |
| Own design, accessible       | Design tokens as CSS custom properties, container queries, design system rebuilt with the same class names             | ADR-0009                          |
| Verifiable quality           | Every quality goal secured by automated checks behind `pnpm verify` and in CI                                          | ADR-0010                          |
| Controlled changes           | GitHub Flow, squash merges, Conventional Commits, ruleset on `main`                                                    | ADR-0011                          |
| Bilingual                    | Astro i18n routing with a language prefix                                                                              | ADR-0012                          |
| Traceable decisions          | arc42, MADR and Mermaid, rendered on the site                                                                          | ADR-0001                          |
