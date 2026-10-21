---
number: 6
title: Öffentliches Code-Repo und privates Content-Repo trennen
summary: Code, Schemas, Tests und Architektur-Doku sind öffentlich unter MIT; Profil, Case Studies, CV-Daten und Bilder liegen in einem privaten Repo.
area: Repository
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Öffentliches Code-Repo und privates Content-Repo trennen

## Kontext und Problemstellung

Der Code soll öffentlich sein, weil er Teil des Showcase ist. Die Inhalte (Profil, Case Studies, CV-Daten) dürfen nur Eingeladene sehen, und Case Studies unterliegen NDAs. Lägen die Inhalte im öffentlichen Repo, wären sie auf GitHub lesbar und die Einladungsprüfung sinnlos. Wie veröffentlichen wir den Code, ohne die Inhalte zu veröffentlichen?

## Entscheidungstreiber

- Showcase-Wirkung des öffentlichen Codes
- Sicherheit: Inhalte nur für Eingeladene
- NDA: Kundendetails nie an einem öffentlichen Ort
- Das öffentliche Repo muss ohne Zugriff auf private Inhalte bauen und testen
- Kosten nahe null, kein CMS

## Betrachtete Optionen

- Öffentliches Code-Repo plus privates Content-Repo
- Ein öffentliches Repo inklusive Inhalte
- Ein privates Repo für alles
- Öffentliches Code-Repo mit den Inhalten als Git-Submodul

## Entscheidung

Gewählte Option: „Öffentliches Code-Repo plus privates Content-Repo“, weil nur diese Option den Code öffentlich und die Inhalte privat hält, ohne zusätzliche Infrastruktur.

- `portfolio` (öffentlich, MIT): Code, Schemas, Tests, Architektur-Doku, fiktive Beispielinhalte in `content-example/`.
- `portfolio-content` (privat): Profil, Projekte, CV-Daten und Bilder auf Deutsch und Englisch, dazu die Vorschauen des Design Systems, die echte Inhalte enthalten.
- Der Build liest Inhalte aus dem Pfad in `CONTENT_DIR`; Standard ist `content-example/`.
- Pull Requests bauen und testen nur mit Beispielinhalten. Nur der Deploy-Job auf `main` und der manuelle Content-Preview-Workflow checken das Content-Repo aus, per read-only Deploy Key.
- Echte Inhalte werden beim Deploy gegen die Schemas des Code-Repos validiert; fehlerhafte Inhalte stoppen den Deploy.

### Konsequenzen

- Gut, weil das Code-Repo vollständig öffentlich sein kann und trotzdem eigenständig baut und testet.
- Gut, weil Inhaltsänderungen in einem eigenen Repo versioniert und geprüft werden.
- Schlecht, weil eine Inhaltsänderung einen manuell ausgelösten Deploy braucht.
- Schlecht, weil Leck-Schutz zur dauerhaften Pflicht wird: keine Build-Artefakte, Screenshots, Videos oder Playwright-Traces mit echten Inhalten; Lighthouse CI nie mit öffentlichem temporärem Speicher gegen echte Inhalte; Logs geben nie Inhalte aus; Workflows aus Forks bekommen nie Secrets.
- Schlecht, weil persönliche Bilder nicht unter die MIT-Lizenz fallen und nie ins öffentliche Repo gelangen dürfen; Beispielinhalte nutzen neutrale Platzhalterbilder.

### Bestätigung

- CI auf Pull Requests läuft ohne Zugriff auf das Content-Repo (aktiv seit Phase 1).
- Ein Test durchsucht `dist/` nach echten Inhalten und Content-Bildern (Phase 5).
- Die Content-Validierung stoppt den Deploy (Phase 5).

## Vor- und Nachteile der Optionen

### Öffentliches Code-Repo plus privates Content-Repo

- Gut, weil beide Ziele mit reinem Git erreicht werden.
- Schlecht, weil zwei Repos kompatibel bleiben müssen (Schemas und Inhalte).

### Ein öffentliches Repo inklusive Inhalte

- Gut, weil es das einfachste Setup ist.
- Schlecht, weil alle Inhalte öffentlich wären. Das bricht die Kernanforderung und die NDAs.

### Ein privates Repo für alles

- Gut, weil nichts versehentlich nach außen gelangt.
- Schlecht, weil der Code seine Showcase-Wirkung verliert.

### Öffentliches Repo mit den Inhalten als Git-Submodul

- Gut, weil der Commit der Inhalte im Code-Repo festgehalten ist.
- Schlecht, weil der Submodul-Verweis das private Repo offenlegt und jede Inhaltsänderung an einen Code-Commit koppelt.
- Schlecht, weil Submodule Checkouts in CI und für Mitwirkende verkomplizieren.

## Weitere Informationen

Details zur CI-Einbindung und zum Leck-Schutz: `docs/plan.md`, Abschnitt „Getrennte Inhalte: privates Content-Repo“.
