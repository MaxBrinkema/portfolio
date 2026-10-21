---
chapter: 5
title: Bausteinsicht
---

# 5 Bausteinsicht

> TODO (Phase 2 bis 4): Diagramme C4 Level 2 und 3 für die App und die Packages mit ihren Abhängigkeiten.

## Ebene 1: Workspaces

| Baustein           | Verantwortung                                                                            | Darf abhängen von |
| ------------------ | ---------------------------------------------------------------------------------------- | ----------------- |
| `apps/web`         | Astro-App: Seiten, Layouts, Middleware, Route-Policy, Content Collections, i18n          | `packages/*`      |
| `packages/tokens`  | Design Tokens als CSS Custom Properties, Kontrast-Tests                                  | –                 |
| `packages/ui`      | Komponenten-Bibliothek (Astro-Komponenten und Vue-Islands)                               | `packages/tokens` |
| `packages/auth`    | Reine Funktionen: Token signieren und prüfen, Key-Ableitung; keine Abhängigkeit zu Astro | –                 |
| `tools/invite-cli` | Erzeugt und widerruft Einladungslinks                                                    | `packages/auth`   |

Die Abhängigkeitsrichtung ist in ADR-0004 entschieden und wird ab Phase 4 durch dependency-cruiser erzwungen.
