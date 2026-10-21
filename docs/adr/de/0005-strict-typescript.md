---
number: 5
title: TypeScript im Strict-Modus mit zusätzlichen Prüfungen nutzen
summary: Der gesamte Code ist TypeScript mit Strict-Modus und zusätzlichen Compiler-Prüfungen, von den Content-Schemas bis zu den Wörterbüchern.
area: Codequalität
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# TypeScript im Strict-Modus mit zusätzlichen Prüfungen nutzen

## Kontext und Problemstellung

Inhalte, UI-Texte, Route-Policy und Token-Verarbeitung hängen von korrekten Datenstrukturen ab. Fehler dort brechen entweder die wichtigste Anforderung (kein Zugriff ohne Token) oder die Vollständigkeit beider Sprachen. Wie streng typisieren wir den Code?

## Entscheidungstreiber

- Typsicherheit bis in die Inhalte (Schemas, Wörterbücher)
- Fehler beim Build statt in Produktion finden
- Schnelles, deterministisches Feedback für Menschen und Coding Agents

## Betrachtete Optionen

- TypeScript `strict` plus zusätzliche Prüfungen
- Nur TypeScript `strict`
- JavaScript mit JSDoc-Typannotationen

## Entscheidung

Gewählte Option: „TypeScript `strict` plus zusätzliche Prüfungen“, weil die zusätzlichen Flags genau die Fehlerklassen finden, die hier zählen: fehlende Schlüssel, optionale Werte und ungeprüfte Indexzugriffe.

Die gemeinsame Basiskonfiguration `tsconfig.base.json` aktiviert neben `strict` unter anderem `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noImplicitReturns`, `noPropertyAccessFromIndexSignature` und `verbatimModuleSyntax`.

### Konsequenzen

- Gut, weil ein fehlender Schlüssel im englischen Wörterbuch den Typecheck scheitern lässt (siehe ADR-0012).
- Gut, weil typbasierte Lint-Regeln (typescript-eslint, strict) darauf aufbauen.
- Schlecht, weil `exactOptionalPropertyTypes` und `noUncheckedIndexedAccess` expliziteren Code verlangen.

### Bestätigung

- `tsc --noEmit` in `pnpm verify` (aktiv seit Phase 1); `astro check`, sobald die App existiert (Phase 2).

## Vor- und Nachteile der Optionen

### TypeScript `strict` plus zusätzliche Prüfungen

- Gut, weil die meisten Fehler zur Compile-Zeit auffallen.
- Schlecht, weil manche Bibliothekstypen ohne Umwege nicht zu `exactOptionalPropertyTypes` passen.

### Nur TypeScript `strict`

- Gut, weil es der verbreitete Standard ist.
- Schlecht, weil Indexzugriffe und optionale Properties ungeprüft bleiben.

### JavaScript mit JSDoc

- Gut, weil kein Compile-Schritt nötig ist.
- Schlecht, weil die Annotationen umständlicher sind und viele Prüfungen in der Praxis schwächer greifen.

## Weitere Informationen

TypeScript ist vorerst auf 6.0 gepinnt, weil typescript-eslint und `@astrojs/check` TypeScript 7 noch nicht unterstützen. Renovate kann die Version anheben, sobald das der Fall ist.
