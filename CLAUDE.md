# CLAUDE.md

> Bootstrap version. Phase 1 of `docs/plan.md` replaces this file with the full `AGENTS.md` / `CLAUDE.md` (architecture rules, conventions, links to ADRs and arc42).

## Start here

- **Read `docs/plan.md` before every task.** It holds context, requirements, decisions, phases, open decisions and the working rules (section „Arbeitsregeln für Claude Code“). Once ADRs (`docs/adr/`) and arc42 (`docs/architecture/`) exist, they take precedence; the plan then only describes the path there.
- **Visual design:** `docs/design-system/` is the only authoritative source (snapshot of „Brinkema – Portfolio Design“, V5). Start with `docs/design-system/SNAPSHOT.md`. Never invent tokens, states or pages; mark gaps as placeholders and ask Max.
- **Visual previews** of components and pages live in the private content repo (`portfolio-content/design-previews/`, open `index.html`) because they contain real CV and case-study content. Use them for visual comparison only; never copy their texts, screenshots or traces into this repository.

## Non-negotiables (summary – details in the plan)

- One phase or one clearly scoped goal at a time. Current phase: **1 – Fundament & Harness**.
- Open decisions belong to Max: propose an ADR draft with options and trade-offs, then wait.
- Code, identifiers, comments, commit messages and PR descriptions in English.
- One branch per task, Conventional Commits with mandatory scope, PR via `gh pr create`. Never merge, never push to `main`, never force-push.
- No secrets, client names, NDA material or real content (profile, projects, CV data) in this public repository. Develop and test with `content-example/` only.
- Run `pnpm verify` before every commit once it exists. Fix red checks; never lower thresholds or disable tests.
- End every session with a short summary: done, open, decisions pending.
