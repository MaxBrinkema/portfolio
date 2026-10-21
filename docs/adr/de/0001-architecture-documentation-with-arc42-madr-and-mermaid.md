---
number: 1
title: Architektur mit arc42, MADR und Mermaid dokumentieren
summary: Schlankes arc42 plus MADR-Entscheidungen mit Mermaid-Diagrammen, zweisprachig, im Code-Repo und auf der Seite gerendert.
area: Dokumentation
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Architektur mit arc42, MADR und Mermaid dokumentieren

## Kontext und Problemstellung

Die Website ist ein Showcase für Architekturarbeit. Ihr Wert liegt in nachvollziehbaren Entscheidungen und Trade-offs, nicht in der Anzahl der Tools. Wie dokumentieren wir Architektur und Entscheidungen so, dass sie auf GitHub ohne Build lesbar sind, auf der Seite gerendert werden, auf Deutsch und Englisch vorliegen und sich gegen den Code prüfen lassen?

## Entscheidungstreiber

- Entscheidungen müssen die betrachteten Optionen zeigen, nicht nur das Ergebnis
- Im öffentlichen Repo ohne Build lesbar
- Eine Toolchain für Code und Doku, keine zusätzliche Laufzeit wie Java
- Beide Sprachen mit gleicher Struktur
- Prüfbare Doku: Qualitätsszenarien und Entscheidungen verweisen auf die Tests, die sie bestätigen

## Betrachtete Optionen

- arc42 mit MADR-Entscheidungen und Mermaid-Diagrammen
- arc42 mit ADRs nach Nygard
- Structurizr DSL (C4-Modell) mit ADRs
- Freies Markdown oder ein Wiki

## Entscheidung

Gewählte Option: „arc42 mit MADR-Entscheidungen und Mermaid-Diagrammen“, weil nur diese Option Optionen und Trade-offs in einem Standardformat zeigt und trotzdem reines Markdown bleibt.

- **arc42, schlank:** Kapitel 1, 2, 3, 4, 5, 8, 10 und 11 vollständig, 6 und 7 knapp, Kapitel 9 verweist auf die ADRs, Kapitel 12 nur bei Bedarf. Dateien liegen in `docs/architecture/<lang>/`, eine Datei pro Kapitel.
- **MADR:** eine Datei pro Entscheidung und Sprache mit gleicher Nummer und gleichem Slug (`docs/adr/<lang>/NNNN-slug.md`), YAML-Frontmatter mit Nummer, Titel, Zusammenfassung, Bereich, Status (proposed, accepted, superseded, deprecated) und Datum. Vorlagen liegen in `docs/adr/templates/`.
- **Akzeptierte ADRs bleiben inhaltlich unverändert.** Eine geänderte Entscheidung bekommt ein neues ADR, das das alte ersetzt. Das begrenzt den Übersetzungsaufwand.
- **Bestätigung** nennt in jedem ADR den Test oder die Fitness Function, die die Entscheidung absichert. So passen ADRs und arc42 Kapitel 10 zusammen.
- **Mermaid-Diagramme** stehen direkt im Markdown der jeweiligen Sprache, werden beim Build als SVG vorgerendert (keine Mermaid-Library im Client) und tragen `accTitle` und `accDescr`.

### Konsequenzen

- Gut, weil GitHub Markdown und Mermaid direkt rendert und die Doku damit im Repo lesbar ist.
- Gut, weil die Abschnitte „Betrachtete Optionen“ und „Vor- und Nachteile“ genau die Trade-offs sind, die die Seite zeigen will.
- Gut, weil eine Content Collection das Frontmatter validieren und einen ADR-Index mit Status rendern kann.
- Schlecht, weil jedes Dokument doppelt existiert und Übersetzungen synchron bleiben müssen.
- Schlecht, weil die C4-Syntax von Mermaid noch experimentell ist. Vor dem ersten C4-Diagramm prüfen wir, ob sie reicht oder ob C4-Diagramme als Flowchart mit C4-Konventionen gezeichnet werden; das Ergebnis hält ein Folge-ADR fest.
- Schlecht, weil Diagramme in Case Studies und auf der Startseite handgebaute SVG-Komponenten sind (hervorgehobener Pfad, Aufbau-Animation). Es gibt damit zwei Wege für Diagramme. Ein besserer Ansatz ist eine offene Entscheidung.

### Bestätigung

- Ein Test prüft, dass jedes ADR und jedes arc42-Kapitel in beiden Sprachen existiert (Phase 5).
- Ein Schema der Content Collection validiert das ADR-Frontmatter beim Build (Phase 5).
- arc42 Kapitel 10 verlinkt jedes Qualitätsszenario mit seinem Test (Phase 7).

## Vor- und Nachteile der Optionen

### arc42 mit MADR-Entscheidungen und Mermaid-Diagrammen

- Gut, weil beide verbreitete Standards sind und es die arc42-Vorlagen auf Deutsch und Englisch gibt.
- Gut, weil alles Markdown in einer Toolchain ist.
- Schlecht, weil Mermaid das Layout nur begrenzt steuern lässt.

### arc42 mit ADRs nach Nygard

- Gut, weil das Format sehr kurz ist.
- Schlecht, weil es keinen Abschnitt für betrachtete Optionen hat. Genau die soll die Seite aber zeigen.

### Structurizr DSL (C4-Modell) mit ADRs

- Gut, weil ein Modell konsistente Sichten liefert.
- Schlecht, weil es zusätzliches Tooling braucht (Java oder Container) und GitHub es nicht rendert.
- Schlecht, weil sich ein Modell mit mehreren Sichten erst bei vielen Diagrammen lohnt. Hier sind es drei bis vier.

### Freies Markdown oder ein Wiki

- Gut, weil es keine Konventionen braucht.
- Schlecht, weil sich nichts validieren oder einheitlich rendern lässt, und ein Wiki liegt außerhalb des Repos.

## Weitere Informationen

- arc42: <https://arc42.org>, MADR: <https://adr.github.io/madr/>
- Für Case-Study-Diagramme vorerst verworfen: Mermaid-SVGs im Build nachbearbeiten (zu fragil bei Mermaid-Updates), D2, Structurizr und LikeC4 (zusätzliche Toolchain, kein Aufbau beim Scrollen).
