---
number: 7
title: Inhalte als Astro Content Collections mit Zod-Schemas verwalten
summary: Projekte als Markdown, Stammdaten als JSON oder YAML, alles beim Build gegen Zod-Schemas validiert; kein CMS.
area: Inhalte
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Inhalte als Astro Content Collections mit Zod-Schemas verwalten

## Kontext und Problemstellung

Inhalte ändern sich selten und werden direkt im privaten Content-Repo gepflegt. Case Studies brauchen Fließtext und strukturierte Felder (Kennzahlen, Optionsvergleich, Diagramm), und aus den CV-Daten entstehen sowohl die Website als auch das PDF. Wie speichern und validieren wir Inhalte ohne CMS?

## Entscheidungstreiber

- Kosten nahe null, kein CMS
- Typsicherheit bis in die Inhalte; ungültige Inhalte müssen den Build scheitern lassen
- Case Studies brauchen Fließtext und strukturierte Felder
- Eine Quelle für Website und CV-PDF
- Beide Sprachen mit gleichen Slugs

## Betrachtete Optionen

- Astro Content Collections mit Zod-Schemas
- Ein Headless CMS
- Einfache JSON- oder Markdown-Importe ohne Schema-Validierung

## Entscheidung

Gewählte Option: „Astro Content Collections mit Zod-Schemas“, weil die Validierung eingebaut ist, die Schemas TypeScript-Typen liefern und die Inhalte einfache Dateien in Git bleiben.

- Projekte (Case Studies) sind Markdown mit Frontmatter für die strukturierten Felder; Stammdaten (Profil, CV) sind JSON oder YAML.
- Collections lesen aus `CONTENT_DIR` (siehe ADR-0006); jeder Eintrag existiert je Sprache mit gleichem Slug.
- Dieselben Collections werden für ADRs und arc42-Kapitel genutzt.

### Konsequenzen

- Gut, weil ein fehlendes oder fehlerhaftes Feld den Build mit einer klaren Meldung stoppt.
- Gut, weil Website und CV-PDF aus denselben Daten entstehen.
- Schlecht, weil Inhalte in Dateien bearbeitet werden statt in einer Editor-Oberfläche. Das ist akzeptabel, weil Änderungen selten sind.

### Bestätigung

- Ungültige Inhalte lassen den Build scheitern (Phase 5).
- Ein Test erwartet jeden Eintrag in beiden Sprachen (Phase 5).

## Vor- und Nachteile der Optionen

### Astro Content Collections mit Zod-Schemas

- Gut, weil Schemas, Typen und Laden Teil des Frameworks sind.
- Schlecht, weil das Schema der privaten Inhalte im öffentlichen Repo liegt und damit deren Struktur zeigt (nicht aber die Inhalte).

### Ein Headless CMS

- Gut, weil es eine komfortable Editor-Oberfläche bietet.
- Schlecht, weil Betriebskosten oder Free-Tier-Grenzen anfallen und die Inhalte bei einem Drittanbieter lägen.

### Einfache Importe ohne Validierung

- Gut, weil gar kein Schema-Code nötig ist.
- Schlecht, weil Fehler erst auf der gerenderten Seite auffallen.

## Weitere Informationen

Offen und separat entschieden: ob Komponenten im Fließtext (Mark, Optionsvergleich, Abbildung, Callout) über Markdown-Direktiven oder MDX laufen. Die konkreten Felder folgen dem Content-Modell in `docs/plan.md` und werden in Phase 5 festgelegt.
