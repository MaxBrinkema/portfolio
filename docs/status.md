# Project status

Handover between sessions. Describes the state of `main` once the pull request that last changed this file is merged. Every pull request updates it; the phases themselves are defined in [`plan.md`](plan.md) ("Umsetzungsphasen").

Last updated: 2026-10-21

## Current phase: 1 – Foundation and harness

Done when: `pnpm verify` passes locally and in CI without access to the content repository.

| Part | Content                                                                                                                                         | Status                                                       |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 1    | pnpm workspace, pinned Node/pnpm, strict TypeScript, ESLint, Prettier, Vitest, `pnpm verify`, commitlint with lefthook, `.claude/settings.json` | done ([#1](https://github.com/MaxBrinkema/portfolio/pull/1)) |
| 2    | CI (`Verify`, `Conventional commits`), shared setup action, PR template                                                                         | done ([#2](https://github.com/MaxBrinkema/portfolio/pull/2)) |
| 3    | MADR templates, ADR-0001 to ADR-0012 (DE/EN), arc42 skeleton (DE/EN), `AGENTS.md`, this status file                                             | done ([#3](https://github.com/MaxBrinkema/portfolio/pull/3)) |
| 4    | `content-example/` with fictional content (DE/EN), `CONTENT_DIR` mechanism                                                                      | open                                                         |
| –    | Ruleset on `main` (PR required, both checks required, squash only, no force push or deletion, no bypass)                                        | done (Max)                                                   |
| –    | Secret scanning with push protection                                                                                                            | done (Max)                                                   |
| –    | Private content repository `portfolio-content`                                                                                                  | done (Max)                                                   |
| –    | 2FA with passkey for GitHub and Cloudflare                                                                                                      | open (Max)                                                   |

## Next step

**Part 4 of Phase 1** on a new branch (e.g. `feat/content-example`):

- `content-example/` with fictional example content in German and English, same structure as the content repository (`de/`, `en/`, `assets/`); neutral placeholder images only.
- `CONTENT_DIR` mechanism: the build reads content from `CONTENT_DIR`, defaulting to `content-example/`; locally set in `.env.local`. Keep it small: the schemas themselves come in Phase 5.
- First real tests; remove the bootstrap setting `passWithNoTests` from `vitest.config.ts` in the same pull request.

After that, Phase 1 is complete. Phase 2 (walking skeleton with access lock) starts with the hosting ADR (proposal, decided by Max).

## Pending decisions (Max)

None blocking the next step. Upcoming ones are listed in [`adr/README.md`](adr/README.md) under "Pending decisions"; the first is the hosting provider in Phase 2.

## Open items for Max

- 2FA with passkey for GitHub and Cloudflare.
- Started now because they take time (see `plan.md`, "Offene Entscheidungen"): clearing the anonymization with the employer or legal department, securing the domain.

## Notes

- The font license texts (OFL 1.1) are still missing next to `docs/design-system/fonts/`; they are added in Phase 4.
- `docs/plan.md` and `docs/design-system/` are exports and excluded from Prettier; do not edit them by hand.
