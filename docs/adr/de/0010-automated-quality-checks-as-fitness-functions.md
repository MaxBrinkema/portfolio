---
number: 10
title: Jedes Qualitätsziel mit automatischen Checks als Fitness Functions absichern
summary: Jedes Qualitätsziel hat einen automatischen Check, lokal mit einem Befehl ausführbar und in der CI erzwungen.
area: Qualität
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Jedes Qualitätsziel mit automatischen Checks als Fitness Functions absichern

## Kontext und Problemstellung

Die Seite entsteht zu großen Teilen mit einem Coding Agent und soll zeigen, dass AI kontrolliert eingesetzt wird. Qualitätsziele (Sicherheit, Barrierefreiheit, Wartbarkeit, Performance, Responsive) sind nur glaubwürdig, wenn sie laufend geprüft werden. Wie sichern wir sie ab?

## Entscheidungstreiber

- Jedes Qualitätsziel aus arc42 Kapitel 1 muss messbar sein
- Schnelles, deterministisches Feedback für Menschen und Coding Agents
- Checks laufen lokal und in der CI gleich
- Schwellen werden nur angehoben, nie gesenkt

## Betrachtete Optionen

- Ein vollständiger Satz automatischer Checks als Fitness Functions hinter einem Befehl
- Ein minimaler Satz (Lint und Unit-Tests) plus manuelles Review

## Entscheidung

Gewählte Option: „Ein vollständiger Satz automatischer Checks“, weil sie zugleich die Fitness Functions der Architektur und die Sensoren sind, die fehlerhaften Agent-Output abfangen.

| Check                                 | Werkzeug                                   | Schwelle                                                       |
| ------------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| Unit-Tests inkl. `.astro`-Komponenten | Vitest, Astro Container API                | Coverage ≥ 80 % (Lines, Branches, Functions)                   |
| Testqualität                          | Stryker (Mutation Testing)                 | Startwert in Phase 7, dann steigend                            |
| E2E inkl. Auth-Flow                   | Playwright                                 | Gültiges, abgelaufenes, manipuliertes Token; mehrere Viewports |
| Barrierefreiheit                      | axe-core in Playwright, ESLint-a11y-Plugin | 0 Verstöße                                                     |
| Kontrast der Tokens                   | Vitest                                     | WCAG AA                                                        |
| Performance und a11y-Score            | Lighthouse CI                              | Budgets, a11y = 100, CLS ≤ 0,1                                 |
| Bundle-Größe                          | size-limit o. ä.                           | Budget pro Island                                              |
| Modulgrenzen                          | dependency-cruiser                         | Keine Verletzung                                               |
| Typen                                 | `tsc --noEmit`, `astro check`              | 0 Fehler                                                       |
| Lint und Format                       | ESLint, Prettier                           | 0 Fehler                                                       |

`pnpm verify` führt die schnellen Checks lokal und in der CI aus. Langsame Checks (Mutation Testing, Dependency-Audit) laufen zeitgesteuert. ESLint erzwingt zusätzlich Clean-Code-Grenzen (Komplexität, Funktionslänge, Verschachtelung, Parameter, Magic Numbers, JSDoc an Package-Exporten, `eslint-disable` nur mit Begründung).

### Konsequenzen

- Gut, weil ein Verstoß in Sekunden sichtbar wird, nicht erst im Review.
- Gut, weil die Checks dokumentierte Belege für arc42 Kapitel 10 sind.
- Schlecht, weil die Toolchain groß ist und gepflegt werden muss (Renovate).
- Schlecht, weil automatische Accessibility-Checks nur einen Teil der Probleme finden; eine manuelle Prüfung vor jedem Release bleibt nötig.

### Bestätigung

- `Verify` ist ein Pflicht-Check auf `main` (aktiv seit Phase 1).
- Phase 7 aktiviert alle Fitness Functions in der CI und verlinkt sie aus arc42 Kapitel 10.

## Vor- und Nachteile der Optionen

### Ein vollständiger Satz automatischer Checks

- Gut, weil Qualität laufend und deterministisch geprüft wird.
- Schlecht, weil die CI länger dauert und das Setup vorab Zeit kostet.

### Ein minimaler Satz plus manuelles Review

- Gut, weil das Setup schnell steht.
- Schlecht, weil Qualität von der Aufmerksamkeit im Review abhängt und Agent-Output nicht systematisch geprüft wird.

## Weitere Informationen

Die Checks kommen Phase für Phase dazu; `docs/plan.md`, Abschnitt „Qualitätssicherung & Fitness Functions“, listet sie mit ihrer Phase.
