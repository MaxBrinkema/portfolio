# portfolio

Source code of a personal, invitation-only portfolio website. Content lives in a separate private repository; this repository builds and tests with fictional example content only.

Plan, context and working rules: [`docs/plan.md`](docs/plan.md).

## Setup

Requires the Node version from [`.nvmrc`](.nvmrc); pnpm is pinned via the `packageManager` field and provided by Corepack.

```sh
nvm install && nvm use   # nvm-windows: nvm install 24.21.0 && nvm use 24.21.0
corepack enable
pnpm install             # also installs the Git hooks (lefthook)
pnpm verify              # format check, lint, typecheck, tests with coverage
```

## License

Code and documentation: MIT, see [`LICENSE`](LICENSE).

Exceptions: the fonts Newsreader and Geist Mono (`docs/design-system/fonts/`) are licensed under the SIL Open Font License 1.1, not MIT.
