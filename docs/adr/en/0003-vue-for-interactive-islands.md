---
number: 3
title: Use Vue 3 for interactive islands
summary: The few interactive islands are Vue 3 components that receive content and texts only as props.
area: Framework
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Use Vue 3 for interactive islands

## Context and Problem Statement

Almost everything works as plain HTML. A few elements need JavaScript: the theme toggle, the tag filter on the projects page and the status filter in the ADR list. Which UI framework do we use for these islands?

## Decision Drivers

- Only a handful of small islands; bundle size per island matters
- Islands must never import content, because client JavaScript under `/_astro/` is public
- Accessibility can be checked by linting
- Maintainability by the owner of the site

## Considered Options

- Vue 3 (`@astrojs/vue`)
- React (`@astrojs/react`)
- Svelte (`@astrojs/svelte`)
- Vanilla TypeScript / Web Components without a framework

## Decision Outcome

Chosen option: "Vue 3", because it is the owner's personal preference, and with only a few islands the options are equivalent on the merits.

Rules for islands:

- Islands receive content and UI texts exclusively as props from the Astro page; they never import content.
- No `vue-i18n` in the client; texts come as props (see ADR-0012).
- Everything an island does must have a working state without JavaScript (progressive enhancement).

### Consequences

- Good, because single-file components with `<script setup lang="ts">` are compact and typed.
- Good, because `eslint-plugin-vue` and `eslint-plugin-vuejs-accessibility` check templates, including accessibility.
- Bad, because the design system's reference implementation is React and cannot be reused directly. This is acceptable: only its HTML structure and class names are rebuilt, so `bundle.css` still applies unchanged.

### Confirmation

- ESLint with `eslint-plugin-vue` and `eslint-plugin-vuejs-accessibility` in `pnpm verify` (active since Phase 1).
- Bundle-size budget per island (Phase 7).
- `dist/` scan for real content (Phase 5).

## Pros and Cons of the Options

### Vue 3

- Good, because of a mature Astro integration and small runtime.
- Good, because of accessibility linting for templates.
- Bad, because the reference components cannot be copied.

### React

- Good, because the design system's reference implementation could serve as a starting point.
- Bad, because the runtime is larger than Vue's for the same few islands.
- Neutral, because the reference implementation is not meant to be copied anyway.

### Svelte

- Good, because compiled islands are very small.
- Bad, because it is not the owner's preference, which costs maintainability.

### Vanilla TypeScript / Web Components

- Good, because there is no framework runtime at all.
- Bad, because state, templating and accessibility linting would have to be built by hand.

## More Information

Re-evaluate if islands grow substantially in number or size.
