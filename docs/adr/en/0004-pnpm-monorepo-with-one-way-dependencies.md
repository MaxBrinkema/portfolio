---
number: 4
title: Organize the code as a pnpm monorepo with one-way dependencies
summary: One app and separate packages for tokens, UI and auth in pnpm workspaces; dependencies only point from apps to packages and from ui to tokens.
area: Repository
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Organize the code as a pnpm monorepo with one-way dependencies

## Context and Problem Statement

The site consists of a web app, design tokens, a component library, security-critical auth logic and a command-line tool for invitation links. The middleware and the CLI share the same token functions. How do we structure the code so that module boundaries are explicit and checkable?

## Decision Drivers

- Clear module boundaries (quality goal: maintainability)
- Security-critical logic must be framework-independent and fully unit-testable
- Middleware and invite CLI must use identical token functions
- Reproducible installs locally, in CI and for coding agents

## Considered Options

- pnpm workspaces
- A single package with folders
- npm or Yarn workspaces
- pnpm workspaces plus a build orchestrator (Nx, Turborepo)

## Decision Outcome

Chosen option: "pnpm workspaces", because they make package boundaries explicit with a strict `node_modules` layout and need no extra tooling at this size.

Structure: `apps/web` (Astro), `packages/tokens`, `packages/ui`, `packages/auth`, `tools/invite-cli`.

Dependency rules:

- `apps` → `packages`, never the other way round
- `ui` → `tokens`
- `auth` has no dependency on Astro, so it stays usable from the CLI and testable in isolation

Node and pnpm versions are pinned (`.nvmrc`, `packageManager`, `engines`); the lockfile is binding (`--frozen-lockfile`).

### Consequences

- Good, because a package can only use what it declares; undeclared imports fail.
- Good, because the auth logic can be tested without a running app.
- Bad, because each package needs its own `package.json` and configuration.

### Confirmation

- dependency-cruiser rules enforce the dependency direction (Phase 4).
- CI installs with `--frozen-lockfile` and the pinned toolchain (active since Phase 1).

## Pros and Cons of the Options

### pnpm workspaces

- Good, because strict resolution prevents phantom dependencies.
- Good, because installs are fast and save disk space thanks to the content-addressable store.
- Bad, because some tools assume a flat `node_modules`.

### A single package with folders

- Good, because the setup is minimal.
- Bad, because boundaries exist only by convention, and the auth logic would share dependencies with Astro.

### npm or Yarn workspaces

- Good, because npm ships with Node.
- Bad, because the hoisted layout lets packages use dependencies they did not declare.

### pnpm workspaces plus Nx or Turborepo

- Good, because of caching and task graphs.
- Bad, because the overhead does not pay off for five workspaces.

## More Information

Re-evaluate a build orchestrator if CI duration becomes a problem.
