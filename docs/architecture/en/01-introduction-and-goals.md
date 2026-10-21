---
chapter: 1
title: Introduction and Goals
---

# 1 Introduction and Goals

## Requirements Overview

A personal website that introduces Max Brinkema as a software developer and architect, shows selected projects as anonymized case studies and offers the CV as a PDF. The focus is on architecture. The site is itself a showcase project: every decision is justified and documented.

- **Audience:** only people who receive an invitation link (recruiters, hiring managers, architects at potential employers or clients).
- **Delivery stage 1:** all content (introduction, case studies, architecture docs, CV) is reachable only with a valid invitation. Without one, only `/invite`, a neutral notice page and the privacy notice are reachable.
- **Delivery stage 2 (optional, later):** parts of the site become public through a configuration change plus an ADR, without restructuring.
- **Bilingual:** all content, UI texts, architecture docs and the CV in German and English.
- **CV as PDF:** generated at build time from the same data as the website.

## Quality Goals

| Priority | Quality goal                                                                                                                     | Measured by                                                                  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1        | Security: no access to content without a valid token (deny by default)                                                           | Playwright tests for valid, expired and tampered tokens                      |
| 2        | Accessibility: WCAG 2.2 AA                                                                                                       | axe-core, Lighthouse a11y = 100, token contrast test, manual review          |
| 3        | Maintainability and extensibility: clear module boundaries, documented decisions, public area can be added without restructuring | dependency-cruiser, ADRs, coverage ≥ 80 %, mutation score, route policy test |
| 4        | Performance: fast loading, also on mobile                                                                                        | Lighthouse budgets including CLS, bundle size limit                          |
| 5        | Responsive: mobile first, components via container queries                                                                       | Playwright on several viewports                                              |
| 6        | Costs: operation within a free tier                                                                                              | Infrastructure review in the ADR                                             |

## Stakeholders

| Role                                                       | Expectation                                                                                                       |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Invited visitors (recruiters, hiring managers, architects) | Quick overview, credible case studies with trade-offs, CV download, works on mobile and with assistive technology |
| Max Brinkema (owner)                                       | Low maintenance, near-zero costs, content only for invited people, NDA compliance                                 |
| Employers and clients of past projects                     | No identifying details from NDA projects                                                                          |
| Coding agent                                               | Clear rules, fast deterministic feedback (see `AGENTS.md`)                                                        |
