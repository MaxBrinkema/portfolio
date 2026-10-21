import { defineConfig } from 'vitest/config';

/** Quality target 3 in docs/plan.md: at least 80 % lines, branches and functions. */
const COVERAGE_THRESHOLD_PERCENT = 80;

const WORKSPACE_SOURCES = '{apps,packages,tools}/*/src';

export default defineConfig({
  test: {
    // A single root config is enough while no workspace needs its own Vite setup (Astro will).
    include: [`${WORKSPACE_SOURCES}/**/*.test.ts`],
    // Bootstrap only: no workspace has tests yet. Remove together with the first test suite.
    passWithNoTests: true,
    coverage: {
      provider: 'v8',
      include: [`${WORKSPACE_SOURCES}/**`],
      reporter: ['text', 'html', 'lcov'],
      thresholds: {
        lines: COVERAGE_THRESHOLD_PERCENT,
        branches: COVERAGE_THRESHOLD_PERCENT,
        functions: COVERAGE_THRESHOLD_PERCENT,
      },
    },
  },
});
