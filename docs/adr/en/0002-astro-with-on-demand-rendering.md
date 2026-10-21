---
number: 2
title: Use Astro and render all content pages on demand
summary: Astro as framework; in delivery stage 1 every content page renders per request behind the auth middleware.
area: Framework
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Use Astro and render all content pages on demand

## Context and Problem Statement

The site is mostly static text that changes rarely, but in delivery stage 1 every content page must be reachable only with a valid invitation. On the intended host, pre-rendered pages are served as static assets without the middleware running. Which framework and rendering mode give us little client JavaScript and a server-side access check on every content request?

## Decision Drivers

- Security first: no content without a valid session (deny by default)
- Little JavaScript in the client; interactivity only where it adds value
- Content as typed, validated collections without a CMS
- Delivery stage 2 (parts become public) must be a configuration change, not a rebuild
- Runs at the edge within a free tier

## Considered Options

- Astro with on-demand rendering by default
- Next.js
- SvelteKit
- A static site generator (e.g. Eleventy) with a separate edge function in front

## Decision Outcome

Chosen option: "Astro with on-demand rendering by default", because Astro ships no client JavaScript unless an island needs it, has content collections with schema validation built in, and lets every route choose between per-request rendering and pre-rendering.

In stage 1 the default is `prerender = false` for all pages, so the middleware checks every content request. Public pages from stage 2 may later be pre-rendered.

### Consequences

- Good, because pages are plain HTML from the server; islands are the explicit exception.
- Good, because opening a page in stage 2 means changing the route policy and, optionally, pre-rendering it.
- Bad, because every page view costs CPU time in the worker. CPU and response time per request are measured in Phase 2.
- Bad, because static assets, including the build output under `/_astro/`, are public. Content must therefore never be placed in `public/` or go through the asset pipeline; content images are served via a protected endpoint.

### Confirmation

- Route policy test: every built route without a session redirects to the notice page unless it is on the allowlist (Phase 2).
- Test that scans `dist/` for real content and content images after the build (Phase 5).

## Pros and Cons of the Options

### Astro with on-demand rendering by default

- Good, because of the island architecture with zero JavaScript by default.
- Good, because content collections with Zod schemas are built in.
- Good, because rendering mode can be set per route.
- Bad, because pre-rendering, the cheapest mode, cannot be used for protected pages.

### Next.js

- Good, because of a large ecosystem.
- Bad, because pages hydrate with the React runtime by default, which is more client JavaScript than this site needs.
- Bad, because many of its features (client routing, data fetching) solve problems this site does not have.

### SvelteKit

- Good, because it produces small bundles and supports per-route rendering.
- Bad, because it hydrates pages and uses a client router by default; islands are not the default model.
- Bad, because it lacks built-in typed content collections.

### Static site generator with a separate edge function

- Good, because the build is simple and fast.
- Bad, because the auth logic would live outside the site and every page would still be a static file that has to be shielded.
- Bad, because stage 2 would mean changing two systems.

## More Information

- Rendering-mode details and the hardening of public build assets: `docs/plan.md`, sections "Wichtiges Detail zum Hosting" and "Härtung".
- The hosting decision (Cloudflare Workers with static assets) is still a proposal and gets its own ADR in Phase 2.
