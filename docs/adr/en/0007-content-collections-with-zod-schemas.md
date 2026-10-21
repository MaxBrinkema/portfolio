---
number: 7
title: Manage content as Astro content collections with Zod schemas
summary: Projects as Markdown, master data as JSON or YAML, all validated against Zod schemas at build time; no CMS.
area: Content
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Manage content as Astro content collections with Zod schemas

## Context and Problem Statement

Content changes rarely and is maintained directly in the private content repository. Case studies need running text plus structured fields (key figures, option comparison, diagram), and the CV data must produce both the website and the PDF. How do we store and validate content without a CMS?

## Decision Drivers

- Costs near zero; no CMS
- Type safety into the content; invalid content must fail the build
- Case studies need running text and structured fields
- One source of truth for website and CV PDF
- Both languages with the same slugs

## Considered Options

- Astro content collections with Zod schemas
- A headless CMS
- Plain JSON or Markdown imports without schema validation

## Decision Outcome

Chosen option: "Astro content collections with Zod schemas", because validation is built in, the schemas yield TypeScript types, and the content stays plain files in Git.

- Projects (case studies) are Markdown with front matter for the structured fields; master data (profile, CV) is JSON or YAML.
- Collections read from `CONTENT_DIR` (see ADR-0006); each entry exists per language with the same slug.
- The same collections are used for ADRs and arc42 chapters.

### Consequences

- Good, because a missing or malformed field stops the build with a clear error.
- Good, because website and CV PDF are generated from the same data.
- Bad, because content edits happen in files, not in an editor UI. This is acceptable because changes are rare.

### Confirmation

- Invalid content fails the build (Phase 5).
- A test expects every entry in both languages (Phase 5).

## Pros and Cons of the Options

### Astro content collections with Zod schemas

- Good, because schemas, types and loading are part of the framework.
- Bad, because the schema of the private content lives in the public repository, so it reveals the structure (but not the content).

### A headless CMS

- Good, because of a comfortable editor UI.
- Bad, because of running costs or free-tier limits, and content would live with a third party.

### Plain imports without validation

- Good, because there is no schema code at all.
- Bad, because errors only show up on the rendered page.

## More Information

Open and decided separately: whether components in running text (Mark, option comparison, figure, callout) use Markdown directives or MDX. The concrete fields follow the content model in `docs/plan.md` and are settled in Phase 5.
