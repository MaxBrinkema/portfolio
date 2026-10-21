---
number: 4
title: Code als pnpm-Monorepo mit einseitigen Abhängigkeiten organisieren
summary: Eine App und getrennte Packages für Tokens, UI und Auth in pnpm Workspaces; Abhängigkeiten zeigen nur von Apps auf Packages und von ui auf tokens.
area: Repository
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Code als pnpm-Monorepo mit einseitigen Abhängigkeiten organisieren

## Kontext und Problemstellung

Die Seite besteht aus einer Web-App, Design Tokens, einer Komponenten-Bibliothek, sicherheitskritischer Auth-Logik und einem Kommandozeilen-Tool für Einladungslinks. Middleware und CLI teilen dieselben Token-Funktionen. Wie strukturieren wir den Code, damit Modulgrenzen ausdrücklich und prüfbar sind?

## Entscheidungstreiber

- Klare Modulgrenzen (Qualitätsziel Wartbarkeit)
- Sicherheitskritische Logik muss framework-unabhängig und vollständig unit-testbar sein
- Middleware und Invite-CLI müssen identische Token-Funktionen nutzen
- Reproduzierbare Installationen lokal, in CI und für Coding Agents

## Betrachtete Optionen

- pnpm Workspaces
- Ein einzelnes Package mit Ordnern
- npm oder Yarn Workspaces
- pnpm Workspaces plus Build-Orchestrator (Nx, Turborepo)

## Entscheidung

Gewählte Option: „pnpm Workspaces“, weil sie Package-Grenzen durch ein striktes `node_modules`-Layout ausdrücklich machen und in dieser Größe kein zusätzliches Tooling brauchen.

Struktur: `apps/web` (Astro), `packages/tokens`, `packages/ui`, `packages/auth`, `tools/invite-cli`.

Abhängigkeitsregeln:

- `apps` → `packages`, nie umgekehrt
- `ui` → `tokens`
- `auth` hängt nicht von Astro ab und bleibt damit aus der CLI nutzbar und isoliert testbar

Node- und pnpm-Version sind gepinnt (`.nvmrc`, `packageManager`, `engines`); das Lockfile ist verbindlich (`--frozen-lockfile`).

### Konsequenzen

- Gut, weil ein Package nur nutzen kann, was es deklariert; nicht deklarierte Importe schlagen fehl.
- Gut, weil sich die Auth-Logik ohne laufende App testen lässt.
- Schlecht, weil jedes Package eine eigene `package.json` und Konfiguration braucht.

### Bestätigung

- dependency-cruiser-Regeln setzen die Abhängigkeitsrichtung durch (Phase 4).
- CI installiert mit `--frozen-lockfile` und der gepinnten Toolchain (aktiv seit Phase 1).

## Vor- und Nachteile der Optionen

### pnpm Workspaces

- Gut, weil die strikte Auflösung Phantom-Abhängigkeiten verhindert.
- Gut, weil Installationen dank des inhaltsadressierten Stores schnell sind und Platz sparen.
- Schlecht, weil manche Tools ein flaches `node_modules` erwarten.

### Ein einzelnes Package mit Ordnern

- Gut, weil das Setup minimal ist.
- Schlecht, weil Grenzen nur per Konvention existieren und die Auth-Logik Abhängigkeiten mit Astro teilen würde.

### npm oder Yarn Workspaces

- Gut, weil npm mit Node ausgeliefert wird.
- Schlecht, weil das gehoistete Layout Packages Abhängigkeiten nutzen lässt, die sie nicht deklariert haben.

### pnpm Workspaces plus Nx oder Turborepo

- Gut, weil Caching und Task-Graphen dazukommen.
- Schlecht, weil sich der Aufwand bei fünf Workspaces nicht lohnt.

## Weitere Informationen

Einen Build-Orchestrator neu bewerten, falls die CI-Dauer zum Problem wird.
