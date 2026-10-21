---
chapter: 3
title: Kontextabgrenzung
---

# 3 Kontextabgrenzung

> TODO (Phase 2): Kontextdiagramm C4 Level 1 (Besucher, Website, Hoster, GitHub). Die Notation (Mermaid-C4-Syntax oder Flowchart mit C4-Konventionen) wird vor dem ersten Diagramm entschieden, siehe ADR-0001.

## Fachlicher Kontext

| Partner               | Austausch                                                                           |
| --------------------- | ----------------------------------------------------------------------------------- |
| Eingeladener Besucher | Öffnet den Einladungslink, liest Inhalte, lädt den Lebenslauf herunter              |
| Max Brinkema          | Erzeugt Einladungslinks mit der Invite-CLI, pflegt Inhalte im privaten Content-Repo |

## Technischer Kontext

| Partner                        | Kanal               | Zweck                                                                |
| ------------------------------ | ------------------- | -------------------------------------------------------------------- |
| Browser des Besuchers          | HTTPS               | Seiten, Session-Cookie                                               |
| GitHub                         | Git, GitHub Actions | Code- und Content-Repo, CI, Deploy                                   |
| Hoster (Vorschlag: Cloudflare) | Deploy-API          | Hosting, Secrets, Speicher für die Denylist; Entscheidung in Phase 2 |
