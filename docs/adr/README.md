# Architecture Decision Records

Decisions in [MADR](https://adr.github.io/madr/) format, one file per decision and language with the same number and slug: [`de/`](de/) and [`en/`](en/). The site renders them behind the login; this index is for reading on GitHub.

## Rules

- New ADR: copy [`templates/madr-en.md`](templates/madr-en.md) and [`templates/madr-de.md`](templates/madr-de.md), take the next free number, write both languages in the same pull request.
- Status: `proposed` while under discussion, `accepted` once Max has decided (merged), `superseded` or `deprecated` later.
- Accepted ADRs are not changed in content. A changed decision gets a new ADR that supersedes the old one (`supersedes` / `superseded-by` in the front matter).
- Every ADR names in "Confirmation" the test or fitness function that secures it.
- Architecture changes update the ADRs and arc42 ([`docs/architecture/`](../architecture/)) in the same pull request.

## Index

| No.  | Decision                                                                                                                                                                                                               | Area                 | Status   |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------- |
| 0001 | Document the architecture with arc42, MADR and Mermaid ([en](en/0001-architecture-documentation-with-arc42-madr-and-mermaid.md), [de](de/0001-architecture-documentation-with-arc42-madr-and-mermaid.md))              | Documentation        | accepted |
| 0002 | Use Astro and render all content pages on demand ([en](en/0002-astro-with-on-demand-rendering.md), [de](de/0002-astro-with-on-demand-rendering.md))                                                                    | Framework            | accepted |
| 0003 | Use Vue 3 for interactive islands ([en](en/0003-vue-for-interactive-islands.md), [de](de/0003-vue-for-interactive-islands.md))                                                                                         | Framework            | accepted |
| 0004 | Organize the code as a pnpm monorepo with one-way dependencies ([en](en/0004-pnpm-monorepo-with-one-way-dependencies.md), [de](de/0004-pnpm-monorepo-with-one-way-dependencies.md))                                    | Repository           | accepted |
| 0005 | Use TypeScript in strict mode with additional checks ([en](en/0005-strict-typescript.md), [de](de/0005-strict-typescript.md))                                                                                          | Code quality         | accepted |
| 0006 | Separate the public code repository from a private content repository ([en](en/0006-separate-public-code-and-private-content-repositories.md), [de](de/0006-separate-public-code-and-private-content-repositories.md)) | Repository           | accepted |
| 0007 | Manage content as Astro content collections with Zod schemas ([en](en/0007-content-collections-with-zod-schemas.md), [de](de/0007-content-collections-with-zod-schemas.md))                                            | Content              | accepted |
| 0008 | Build interactive parts with native HTML instead of a headless UI library ([en](en/0008-native-html-instead-of-headless-ui-library.md), [de](de/0008-native-html-instead-of-headless-ui-library.md))                   | Design system        | accepted |
| 0009 | Style with CSS custom properties from the design tokens and container queries ([en](en/0009-css-custom-properties-and-container-queries.md), [de](de/0009-css-custom-properties-and-container-queries.md))             | Styling              | accepted |
| 0010 | Secure every quality goal with automated checks as fitness functions ([en](en/0010-automated-quality-checks-as-fitness-functions.md), [de](de/0010-automated-quality-checks-as-fitness-functions.md))                  | Quality              | accepted |
| 0011 | Use GitHub Flow with squash merges and Conventional Commits ([en](en/0011-github-flow-with-squash-merges-and-conventional-commits.md), [de](de/0011-github-flow-with-squash-merges-and-conventional-commits.md))       | Workflow             | accepted |
| 0012 | Use Astro's built-in i18n with typed dictionaries ([en](en/0012-astro-i18n-with-typed-dictionaries.md), [de](de/0012-astro-i18n-with-typed-dictionaries.md))                                                           | Internationalization | accepted |

## Pending decisions

Not yet decided; each becomes an ADR once Max has decided (see `docs/plan.md`, "Offene Entscheidungen" and "Zu klären" per phase).

| Topic                                                                                                                | Needed in |
| -------------------------------------------------------------------------------------------------------------------- | --------- |
| Hosting provider, comparison and exit strategy (proposal: Cloudflare Workers with static assets)                     | Phase 2   |
| Middleware order (security headers, route policy and session, language resolution)                                   | Phase 2   |
| Auth: signed invitation links, key derivation per period, denylist, link and session lifetime, logging of used links | Phase 3   |
| Component catalog: Storybook or an own catalog route                                                                 | Phase 4   |
| Components in running text: Markdown directives or MDX                                                               | Phase 5   |
| C4 diagrams: Mermaid C4 syntax or flowcharts with C4 conventions                                                     | Phase 5   |
| CV PDF: generation tool and delivery (R2 or worker bundle)                                                           | Phase 6   |
| Diagrams: a better approach than Mermaid plus hand-built SVG                                                         | later     |
| Prefetching of follow-up pages                                                                                       | later     |
| Delivery stage 2: whether, when and which parts become public                                                        | later     |
