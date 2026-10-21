---
number: 1
title: Document the architecture with arc42, MADR and Mermaid
summary: Lean arc42 plus MADR decision records with Mermaid diagrams, bilingual, in the code repository and rendered on the site.
area: Documentation
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Document the architecture with arc42, MADR and Mermaid

## Context and Problem Statement

The website is a showcase for architecture work. Its value lies in traceable decisions and trade-offs, not in the number of tools. How do we document architecture and decisions so that they are readable on GitHub without a build, rendered on the site, available in German and English, and verifiable against the code?

## Decision Drivers

- Decisions must show the considered options, not only the result
- Readable in the public repository without any build step
- One toolchain for code and documentation; no extra runtime such as Java
- Both languages with the same structure
- Documentation that can be checked: quality scenarios and decisions point to the tests that confirm them

## Considered Options

- arc42 with MADR records and Mermaid diagrams
- arc42 with Nygard-style ADRs
- Structurizr DSL (C4 model) with ADRs
- Free-form Markdown or a wiki

## Decision Outcome

Chosen option: "arc42 with MADR records and Mermaid diagrams", because it is the only option that shows options and trade-offs in a standard format while staying plain Markdown.

- **arc42, lean:** chapters 1, 2, 3, 4, 5, 8, 10 and 11 in full; 6 and 7 brief; chapter 9 links to the ADRs; chapter 12 only if needed. Files live in `docs/architecture/<lang>/`, one file per chapter.
- **MADR:** one file per decision and language with the same number and slug (`docs/adr/<lang>/NNNN-slug.md`), YAML front matter with number, title, summary, area, status (proposed, accepted, superseded, deprecated) and date. Templates live in `docs/adr/templates/`.
- **Accepted ADRs are immutable** in content. A changed decision gets a new ADR that supersedes the old one, which keeps the translation effort bounded.
- **Confirmation** in every ADR names the test or fitness function that confirms the decision, so ADRs and arc42 chapter 10 fit together.
- **Mermaid** diagrams live directly in the Markdown of each language, are pre-rendered to SVG at build time (no Mermaid library in the client) and carry `accTitle` and `accDescr`.

### Consequences

- Good, because GitHub renders Markdown and Mermaid directly, so the docs are readable in the repository.
- Good, because the "Considered Options" and "Pros and Cons" sections are exactly the trade-offs the site wants to show.
- Good, because a content collection can validate the front matter and render an ADR index with status.
- Bad, because every document exists twice and translations must be kept in sync.
- Bad, because Mermaid's C4 syntax is still experimental. Before the first C4 diagram we check whether it is sufficient or whether C4 diagrams are drawn as flowcharts with C4 conventions; the result is recorded in a follow-up ADR.
- Bad, because diagrams in case studies and on the start page are hand-built SVG components (highlighted path, build-up animation), so there are two ways to draw diagrams. Finding a better approach is an open decision.

### Confirmation

- A test that every ADR and every arc42 chapter exists in both languages (Phase 5).
- A content collection schema that validates the ADR front matter at build time (Phase 5).
- arc42 chapter 10 links each quality scenario to its test (Phase 7).

## Pros and Cons of the Options

### arc42 with MADR records and Mermaid diagrams

- Good, because both are widely known standards, and arc42 templates exist in German and English.
- Good, because everything is Markdown in a single toolchain.
- Bad, because Mermaid has limited layout control.

### arc42 with Nygard-style ADRs

- Good, because the format is very short.
- Bad, because it has no section for considered options, which is the core of what the site shows.

### Structurizr DSL (C4 model) with ADRs

- Good, because one model yields consistent views.
- Bad, because it needs additional tooling (Java or a container) and is not rendered by GitHub.
- Bad, because a model with several views only pays off with many diagrams; here there are three or four.

### Free-form Markdown or a wiki

- Good, because it needs no conventions.
- Bad, because nothing can be validated or rendered consistently, and a wiki lives outside the repository.

## More Information

- arc42: <https://arc42.org>, MADR: <https://adr.github.io/madr/>
- Rejected for case-study diagrams for now: post-processing Mermaid SVGs (fragile across Mermaid updates), D2, Structurizr and LikeC4 (additional toolchain, no build-up on scroll).
