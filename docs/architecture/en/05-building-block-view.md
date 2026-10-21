---
chapter: 5
title: Building Block View
---

# 5 Building Block View

> TODO (Phase 2 to 4): C4 level 2 and 3 diagrams for the app and the packages, with their dependencies.

## Level 1: Workspaces

| Building block     | Responsibility                                                                 | May depend on     |
| ------------------ | ------------------------------------------------------------------------------ | ----------------- |
| `apps/web`         | Astro app: pages, layouts, middleware, route policy, content collections, i18n | `packages/*`      |
| `packages/tokens`  | Design tokens as CSS custom properties, contrast tests                         | –                 |
| `packages/ui`      | Component library (Astro components and Vue islands)                           | `packages/tokens` |
| `packages/auth`    | Pure functions: sign and verify tokens, key derivation; no dependency on Astro | –                 |
| `tools/invite-cli` | Creates and revokes invitation links                                           | `packages/auth`   |

The dependency direction is decided in ADR-0004 and enforced by dependency-cruiser from Phase 4.
