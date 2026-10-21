# AGENTS.md

Guide for coding agents (and humans) working in this repository: an invitation-only portfolio website whose code is public and whose content lives in a private repository.

## Sources of truth

Read before every task, in this order of precedence:

1. **ADRs** in [`docs/adr/`](docs/adr/README.md): decided architecture, including pending decisions.
2. **arc42** in [`docs/architecture/`](docs/architecture/): goals, constraints, building blocks, concepts.
3. **Plan** in [`docs/plan.md`](docs/plan.md): context, requirements and the path there (phases, open decisions, open items for Max). Where ADRs or arc42 cover a topic, they take precedence.
4. **Design system** in [`docs/design-system/`](docs/design-system/SNAPSHOT.md): the only authoritative source for visual design (snapshot of "Brinkema – Portfolio Design", V5). Start with `SNAPSHOT.md`.

Visual previews with real content live in the private content repository (`portfolio-content/design-previews/`). Use them for visual comparison only; never copy texts, screenshots or traces from them into this repository.

## Project status

[`docs/status.md`](docs/status.md) is the handover between sessions: current phase, what is done, the next step, pending decisions and open items for Max. **Read it first in every session.** It describes the state of `main` once the pull request that touches it is merged, so every pull request updates it before it is opened.

## Commands

| Command                                      | Purpose                                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `pnpm install`                               | Install dependencies and Git hooks (Node and pnpm versions are pinned; use Corepack)              |
| `pnpm verify`                                | Everything CI checks: format check, lint, typecheck, tests with coverage. Run before every commit |
| `pnpm format`                                | Apply Prettier                                                                                    |
| `pnpm lint` / `pnpm typecheck` / `pnpm test` | Single checks                                                                                     |

## Repository layout

| Path                                              | Content                                                                |
| ------------------------------------------------- | ---------------------------------------------------------------------- |
| `apps/web`                                        | Astro app (from Phase 2)                                               |
| `packages/tokens`, `packages/ui`, `packages/auth` | Design tokens, component library, auth functions                       |
| `tools/invite-cli`                                | Invitation-link CLI                                                    |
| `content-example/`                                | Fictional example content; the only content allowed in this repository |
| `docs/adr/`, `docs/architecture/`                 | ADRs and arc42, each in `de/` and `en/`                                |
| `docs/design-system/`                             | Design-system snapshot; never edited by hand                           |

## Architecture rules

- **Deny by default.** The middleware blocks every route that the central route policy does not explicitly allow. New pages are protected automatically.
- **Render content on demand.** In delivery stage 1, `prerender = false` is the default; pre-rendered pages would bypass the middleware (ADR-0002).
- **Static assets are public.** Never put content into `public/` or through the asset pipeline (`/_astro/`). Content images go through a protected endpoint. Vue islands never import content; they receive content and texts only as props.
- **Dependency direction:** `apps` → `packages`, `ui` → `tokens`. `packages/auth` has no dependency on Astro (ADR-0004).
- **Content comes from `CONTENT_DIR`**, defaulting to `content-example/` (ADR-0006).
- **Bilingual.** Every new text and page exists in German and English. Missing translations are marked as TODO, never silently omitted.
- **Architecture changes** need an ADR (proposed first, decided by Max) and update arc42 in the same pull request.

## Working rules

1. Read `docs/status.md` and the sources of truth above before every task.
2. Work on one phase or one clearly scoped goal at a time. Do not anticipate later phases.
3. Do not make open decisions yourself. Propose an ADR draft with options and trade-offs and wait for Max's decision.
4. **English in code:** code, identifiers, comments, JSDoc, commit messages and PR descriptions are English. German only in German content and UI texts.
5. **Clean code:**
   - Descriptive names; no abbreviations except established ones (`id`, `url`).
   - Small functions with one responsibility; early returns instead of deep nesting.
   - Prefer pure functions; keep side effects at the edges (middleware, CLI).
   - No magic numbers or strings; use named constants.
   - No duplicates, no dead code, no commented-out blocks.
   - Comments explain why, not what.
   - JSDoc for every exported function, type and component of the packages.
   - ESLint enforces what can be checked automatically (complexity, function length, nesting, parameters, magic numbers, JSDoc).
6. No new dependency without a short justification in the PR. Pin exact versions, at least 14 days old.
7. Write security-critical code (`packages/auth`, middleware) test-first.
8. Run `pnpm verify` before every commit. Fix red checks; never work around them. Do not lower thresholds, do not disable tests, no `eslint-disable` without a written reason.
9. No visual design decisions. Use only existing tokens and components from the design system and implement its page drafts. If something is missing (token, state, page), mark it as a placeholder and ask Max; never invent it.
10. Every new text and every new page in German and English (see architecture rules).
11. No secrets, client names, NDA material or real content (profile, projects, CV data) in this public repository. Develop and test with example content only. Never upload artifacts, screenshots or traces with real content.
12. Architecture changes update ADRs and arc42 in the same pull request.
13. Follow the Git workflow below. Update `docs/status.md` in every pull request (done, next step, pending decisions, open items for Max). End every session with a short summary: what is done, what is open, which decisions are pending.

## Git workflow

- One branch per task: `feat/…`, `fix/…`, `docs/…`, `refactor/…`, `chore/…`, `ci/…`; short, English, kebab-case.
- Atomic commits in Conventional Commits format `type(scope): subject` (English, imperative, lower case, no trailing period, at most 72 characters). The body explains why; the footer references ADRs (`Refs: ADR-0003`) or marks `BREAKING CHANGE:`.
- Types: `feat`, `fix`, `refactor`, `test`, `docs`, `build`, `ci`, `chore`, `perf`. Scopes (mandatory): `web`, `ui`, `tokens`, `auth`, `invite-cli`, `docs`, `ci`, `deps`, `repo`.
- Open pull requests with `gh pr create` and fill in the template. The PR title must also be a valid Conventional Commit: it becomes the squash commit on `main`.
- **Never merge, never push to `main`, never force-push.** Max reviews and merges. `.claude/settings.json` denies these commands as a guardrail; the ruleset on `main` is the actual boundary (ADR-0011).
