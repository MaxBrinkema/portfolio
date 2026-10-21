---
number: 10
title: Secure every quality goal with automated checks as fitness functions
summary: Each quality goal has an automated check, runnable locally with one command and enforced in CI.
area: Quality
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Secure every quality goal with automated checks as fitness functions

## Context and Problem Statement

The site is developed largely with a coding agent and is meant to prove that AI is used in a controlled way. Quality goals (security, accessibility, maintainability, performance, responsiveness) are only credible if they are checked continuously. How do we secure them?

## Decision Drivers

- Every quality goal from arc42 chapter 1 must be measurable
- Fast, deterministic feedback for humans and coding agents
- Checks run locally and in CI the same way
- Thresholds are only raised, never lowered

## Considered Options

- A full set of automated checks as fitness functions behind one command
- A minimal set (lint and unit tests) plus manual review

## Decision Outcome

Chosen option: "A full set of automated checks", because they are both the architecture's fitness functions and the sensors that catch faulty agent output.

| Check                                    | Tool                                       | Threshold                                         |
| ---------------------------------------- | ------------------------------------------ | ------------------------------------------------- |
| Unit tests including `.astro` components | Vitest, Astro Container API                | Coverage ≥ 80 % (lines, branches, functions)      |
| Test quality                             | Stryker (mutation testing)                 | Start value set in Phase 7, then raised           |
| E2E including auth flow                  | Playwright                                 | Valid, expired, tampered token; several viewports |
| Accessibility                            | axe-core in Playwright, ESLint a11y plugin | 0 violations                                      |
| Token contrast                           | Vitest                                     | WCAG AA                                           |
| Performance and a11y score               | Lighthouse CI                              | Budgets, a11y = 100, CLS ≤ 0.1                    |
| Bundle size                              | size-limit or similar                      | Budget per island                                 |
| Module boundaries                        | dependency-cruiser                         | No violations                                     |
| Types                                    | `tsc --noEmit`, `astro check`              | 0 errors                                          |
| Lint and format                          | ESLint, Prettier                           | 0 errors                                          |

`pnpm verify` runs the fast checks locally and in CI. Slow checks (mutation testing, dependency audit) run on a schedule. ESLint additionally enforces clean-code limits (complexity, function length, nesting, parameters, magic numbers, JSDoc on package exports, `eslint-disable` only with a reason).

### Consequences

- Good, because a violation is visible in seconds, not in review.
- Good, because the checks are documented evidence for arc42 chapter 10.
- Bad, because the toolchain is large and needs maintenance (Renovate).
- Bad, because automated accessibility checks find only part of the problems; a manual check before each release remains necessary.

### Confirmation

- `Verify` is a required status check on `main` (active since Phase 1).
- Phase 7 activates all fitness functions in CI and links them from arc42 chapter 10.

## Pros and Cons of the Options

### A full set of automated checks

- Good, because quality is checked continuously and deterministically.
- Bad, because CI takes longer and the setup costs time up front.

### A minimal set plus manual review

- Good, because the setup is quick.
- Bad, because quality depends on the reviewer's attention, and agent output is not checked systematically.

## More Information

The checks are introduced phase by phase; `docs/plan.md`, section "Qualitätssicherung & Fitness Functions", lists them with their phase.
