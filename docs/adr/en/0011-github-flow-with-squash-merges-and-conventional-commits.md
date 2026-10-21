---
number: 11
title: Use GitHub Flow with squash merges and Conventional Commits
summary: main plus short-lived PR branches without a dev branch; squash merges only; Conventional Commits with mandatory scope.
area: Workflow
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Use GitHub Flow with squash merges and Conventional Commits

## Context and Problem Statement

Changes are rare and come mostly from one person working with a coding agent. The agent creates branches, commits and pull requests; only the owner reviews and merges. Which branching model and commit conventions do we use?

## Decision Drivers

- Changes are rare; no parallel release trains
- Every change is reviewed and checked before it reaches `main`
- A readable history on `main`
- The agent must not be able to merge or push to `main`

## Considered Options

- GitHub Flow (`main` plus PR branches)
- Git Flow with a `dev` staging branch
- Trunk-based development with direct commits to `main`

## Decision Outcome

Chosen option: "GitHub Flow", because rare changes and a protected preview per pull request make a staging branch unnecessary.

- Branch names `feat/…`, `fix/…`, `docs/…`, `refactor/…`, `chore/…`, `ci/…`; short, English, kebab-case.
- Every change goes through a pull request to `main`, merged by squash only; the PR title becomes the commit on `main`.
- Conventional Commits `type(scope): subject` with a mandatory scope; types and scopes are listed in `commitlint.config.ts`.
- Atomic commits on the branch; tests in the same commit.
- Roles: the owner reviews and merges; the agent creates branches, commits and pull requests, but never merges.

### Consequences

- Good, because `main` is always deployable and has one commit per pull request.
- Good, because commit types and scopes make the history searchable.
- Bad, because larger changes must be split into several pull requests.

### Confirmation

- Ruleset on `main`: pull request required, required checks `Verify` and `Conventional commits`, squash only, no force push, no deletion, no bypass (active since Phase 1).
- commitlint as a `commit-msg` hook and in CI for the PR title and every PR commit (active since Phase 1).
- `.claude/settings.json` denies merging and pushing to `main` for the agent; this is a guardrail, the ruleset is the actual boundary (active since Phase 1).

## Pros and Cons of the Options

### GitHub Flow

- Good, because it is the simplest model that still reviews everything.
- Bad, because there is no place to bundle several features for a joint release.

### Git Flow with a `dev` branch

- Good, because releases can be bundled and tested together.
- Bad, because it adds a branch to maintain without a real need at this rate of change.

### Trunk-based with direct commits

- Good, because it has the least overhead.
- Bad, because changes would reach `main` without review or checks, which contradicts the control over agent output.

## More Information

Re-evaluate when several features are developed in parallel or releases should be bundled; then introduce `dev` as a staging branch.
