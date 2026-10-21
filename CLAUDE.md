# CLAUDE.md

All project rules live in `AGENTS.md`, so they apply to every coding agent, not only Claude Code:

@AGENTS.md

## Claude Code specifics

- `.claude/settings.json` holds versioned deny rules (no `gh pr merge`, no force push, no push to `main`). Do not try to work around them; if one blocks a necessary step, ask Max.
- Personal overrides belong in `.claude/settings.local.json` (git-ignored), never in the versioned settings.
