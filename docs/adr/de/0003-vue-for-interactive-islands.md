---
number: 3
title: Vue 3 für interaktive Islands nutzen
summary: Die wenigen interaktiven Islands sind Vue-3-Komponenten, die Inhalte und Texte ausschließlich als Props erhalten.
area: Framework
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Vue 3 für interaktive Islands nutzen

## Kontext und Problemstellung

Fast alles funktioniert als reines HTML. Einige Elemente brauchen JavaScript: der Theme-Umschalter, der Tag-Filter der Projektübersicht und der Status-Filter der ADR-Liste. Welches UI-Framework nutzen wir für diese Islands?

## Entscheidungstreiber

- Nur eine Handvoll kleiner Islands; die Bundle-Größe pro Island zählt
- Islands dürfen nie Inhalte importieren, weil Client-JavaScript unter `/_astro/` öffentlich ist
- Barrierefreiheit lässt sich per Lint prüfen
- Wartbarkeit durch den Betreiber der Seite

## Betrachtete Optionen

- Vue 3 (`@astrojs/vue`)
- React (`@astrojs/react`)
- Svelte (`@astrojs/svelte`)
- Vanilla TypeScript / Web Components ohne Framework

## Entscheidung

Gewählte Option: „Vue 3“, weil es die persönliche Präferenz des Betreibers ist und die Optionen bei wenigen Islands sachlich gleichwertig sind.

Regeln für Islands:

- Islands erhalten Inhalte und UI-Texte ausschließlich als Props von der Astro-Seite; sie importieren nie Inhalte.
- Kein `vue-i18n` im Client; Texte kommen als Props (siehe ADR-0012).
- Alles, was eine Island tut, hat ohne JavaScript einen funktionierenden Zustand (Progressive Enhancement).

### Konsequenzen

- Gut, weil Single-File-Components mit `<script setup lang="ts">` kompakt und typisiert sind.
- Gut, weil `eslint-plugin-vue` und `eslint-plugin-vuejs-accessibility` Templates einschließlich Barrierefreiheit prüfen.
- Schlecht, weil die Referenz-Implementierung des Design Systems in React vorliegt und nicht direkt übernommen werden kann. Das ist akzeptabel: Nachgebaut werden nur HTML-Struktur und Klassennamen, `bundle.css` gilt damit unverändert.

### Bestätigung

- ESLint mit `eslint-plugin-vue` und `eslint-plugin-vuejs-accessibility` in `pnpm verify` (aktiv seit Phase 1).
- Bundle-Size-Budget pro Island (Phase 7).
- Prüfung von `dist/` auf echte Inhalte (Phase 5).

## Vor- und Nachteile der Optionen

### Vue 3

- Gut, weil die Astro-Integration ausgereift und die Runtime klein ist.
- Gut, weil es Accessibility-Linting für Templates gibt.
- Schlecht, weil sich die Referenzkomponenten nicht kopieren lassen.

### React

- Gut, weil die Referenz-Implementierung des Design Systems als Ausgangspunkt dienen könnte.
- Schlecht, weil die Runtime für dieselben wenigen Islands größer ist als die von Vue.
- Neutral, weil die Referenz-Implementierung ohnehin nicht kopiert werden soll.

### Svelte

- Gut, weil kompilierte Islands sehr klein sind.
- Schlecht, weil es nicht die Präferenz des Betreibers ist, was Wartbarkeit kostet.

### Vanilla TypeScript / Web Components

- Gut, weil gar keine Framework-Runtime anfällt.
- Schlecht, weil Zustand, Templating und Accessibility-Linting von Hand gebaut werden müssten.

## Weitere Informationen

Neu bewerten, falls Islands in Anzahl oder Umfang deutlich wachsen.
