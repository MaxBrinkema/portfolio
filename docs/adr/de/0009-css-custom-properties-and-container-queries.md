---
number: 9
title: Mit CSS Custom Properties aus den Design Tokens und Container Queries stylen
summary: Design Tokens werden zu CSS Custom Properties; Komponenten reagieren auf ihren Container, Typografie skaliert fluide mit clamp().
area: Styling
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Mit CSS Custom Properties aus den Design Tokens und Container Queries stylen

## Kontext und Problemstellung

Das Design System liefert `tokens.json` als einzige Quelle für Farben (Light und Dark), Typografie, Abstände, Radien und Bewegung, dazu ein fertiges `bundle.css` mit `bk-`-Klassen, das Container Queries nutzt. Wie bringen wir das in den Code, ohne das Design zu duplizieren oder neu zu interpretieren?

## Entscheidungstreiber

- Das Design System ist die einzige maßgebliche Quelle; keine erfundenen Tokens
- Light und Dark sind gleichwertig, ohne Aufblitzen vor dem ersten Paint und ohne Inline-Script
- Mobile first; Komponenten reagieren auf ihren Container, nicht auf den Viewport
- Wenig oder kein CSS-Tooling zur Laufzeit

## Betrachtete Optionen

- CSS Custom Properties aus `tokens.json`, reines CSS mit Container Queries
- Tailwind CSS mit einem aus den Tokens erzeugten Theme
- CSS-in-JS
- Sass-Variablen

## Entscheidung

Gewählte Option: „CSS Custom Properties aus `tokens.json`“, weil `bundle.css` des Design Systems bereits so geschrieben ist und unverändert übernommen werden kann.

- `packages/tokens` erzeugt die Custom Properties aus `tokens.json`, je Theme über `data-theme` am `<html>`-Element, dazu eine Variante ohne `data-theme`, die `prefers-color-scheme` folgt.
- `packages/ui` übernimmt `bundle.css` unverändert; Komponenten bauen dieselbe HTML-Struktur und dieselben Klassennamen nach.
- Fluide Typografie mit `clamp()`; Komponenten nutzen Container Queries.

### Konsequenzen

- Gut, weil Design System und Code dieselben Namen nutzen (`color.text.muted` ↔ `--color-text-muted`).
- Gut, weil kein CSS-Framework beim Build oder im Client läuft.
- Schlecht, weil Token-Änderungen immer über einen neuen Export aus dem Design System laufen.

### Bestätigung

- Ein Kontrast-Test prüft alle Text/Hintergrund-Paare in Light und Dark gegen WCAG AA (Phase 4).
- Playwright auf mehreren Viewports (Phase 4).

## Vor- und Nachteile der Optionen

### CSS Custom Properties mit reinem CSS

- Gut, weil `bundle.css` unverändert gilt.
- Gut, weil Themes ohne neu gebaute Styles wechseln.
- Schlecht, weil es keine Kurzschreibweise über Utility-Klassen gibt.

### Tailwind CSS

- Gut, weil Utility-Klassen schnelles Prototyping erlauben.
- Schlecht, weil die Komponenten des Design Systems in Utilities umgeschrieben werden müssten und die Vorschauen nicht mehr vergleichbar wären.

### CSS-in-JS

- Gut, weil Styles auf Komponenten begrenzt sind.
- Schlecht, weil es JavaScript zur Laufzeit oder zusätzliche Build-Schritte braucht und nicht zu `.astro`-Komponenten ohne Islands passt.

### Sass-Variablen

- Gut, weil die Syntax vertraut ist.
- Schlecht, weil die Variablen beim Build aufgelöst werden; ein Theme-Wechsel bräuchte getrennte Stylesheets.

## Weitere Informationen

Das Theme ohne Script (Cookie, serverseitiges `data-theme`) beschreibt `docs/plan.md`, Abschnitt „Theme Light und Dark“.
