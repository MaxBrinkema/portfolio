---
number: 6
title: Separate the public code repository from a private content repository
summary: Code, schemas, tests and architecture docs are public under MIT; profile, case studies, CV data and images live in a private repository.
area: Repository
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Separate the public code repository from a private content repository

## Context and Problem Statement

The code should be public, because it is part of the showcase. The content (profile, case studies, CV data) must only be visible to invited people, and case studies are subject to NDAs. If content sat in the public repository, it would be readable on GitHub and the invitation check would be pointless. How do we publish the code without publishing the content?

## Decision Drivers

- Showcase effect of public code
- Security: content only for invited people
- NDA: client details never in a public place
- The public repository must build and test without access to private content
- Costs near zero; no CMS

## Considered Options

- Public code repository plus private content repository
- One public repository including content
- One private repository for everything
- Public code repository with the content as a Git submodule

## Decision Outcome

Chosen option: "Public code repository plus private content repository", because it is the only option that keeps the code public and the content private without extra infrastructure.

- `portfolio` (public, MIT): code, schemas, tests, architecture docs, fictional example content in `content-example/`.
- `portfolio-content` (private): profile, projects, CV data and images in German and English, plus the design-system previews that contain real content.
- The build reads content from the path in `CONTENT_DIR`; the default is `content-example/`.
- Pull requests build and test with example content only. Only the deploy job on `main` and the manual content-preview workflow check out the content repository, with a read-only deploy key.
- Real content is validated against the schemas of the code repository at deploy time; invalid content stops the deploy.

### Consequences

- Good, because the code repository can be fully public and still builds and tests on its own.
- Good, because content changes are versioned and reviewed in their own repository.
- Bad, because a content change requires a manually triggered deploy.
- Bad, because leak protection becomes a permanent duty: no build artifacts, screenshots, videos or Playwright traces with real content; Lighthouse CI never with public temporary storage against real content; logs never print content; fork workflows never get secrets.
- Bad, because personal images are not covered by the MIT license and must never enter the public repository; example content uses neutral placeholder images.

### Confirmation

- CI on pull requests runs without access to the content repository (active since Phase 1).
- Test that scans `dist/` for real content and content images (Phase 5).
- Content validation stops the deploy (Phase 5).

## Pros and Cons of the Options

### Public code repository plus private content repository

- Good, because it achieves both goals with plain Git.
- Bad, because two repositories have to be kept compatible (schemas versus content).

### One public repository including content

- Good, because it is the simplest setup.
- Bad, because all content would be public, which breaks the core requirement and the NDAs.

### One private repository for everything

- Good, because nothing leaks by accident.
- Bad, because the code loses its showcase effect.

### Public repository with the content as a Git submodule

- Good, because the commit of the content is pinned in the code repository.
- Bad, because the submodule reference reveals the private repository and couples every content change to a code commit.
- Bad, because submodules complicate checkouts in CI and for contributors.

## More Information

Details on CI integration and leak protection: `docs/plan.md`, section "Getrennte Inhalte: privates Content-Repo".
