---
chapter: 2
title: Randbedingungen
---

# 2 Randbedingungen

| Randbedingung                      | Hintergrund                                                     | Konsequenz                                                                                                                                                                               |
| ---------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Keine Auffindbarkeit               | Die Seite ist nur für Personen gedacht, die einen Link erhalten | Echte serverseitige Auth als einzige Grenze; `X-Robots-Tag: noindex, nofollow` auf allen Routen; geschützte Pfade nicht in `robots.txt`                                                  |
| NDA                                | Kundenprojekte unterliegen NDAs                                 | Case Studies nur anonymisiert und abstrahiert: keine Kundennamen, Screenshots, kein Code, keine identifizierenden Zahlen. Freigabe pro Case Study durch Arbeitgeber bzw. Rechtsabteilung |
| Kosten nahe null                   | Privates Projekt                                                | Kein CMS, Free-Tier-Hosting                                                                                                                                                              |
| Seltene Änderungen                 | Inhalte ändern sich selten                                      | Pflege direkt im privaten Content-Repo, keine Editor-Oberfläche                                                                                                                          |
| Keine Analytics                    | Datenschutz und Vertrauen                                       | Kein Tracking, keine Skripte oder Fonts von Drittanbietern                                                                                                                               |
| Öffentlicher Code, private Inhalte | Der Code ist Teil des Showcase                                  | Getrennte Repos (ADR-0006); das Code-Repo baut nur mit Beispielinhalten                                                                                                                  |
| Zweisprachig                       | Deutsch- und englischsprachige Zielgruppe                       | Jeder Text, jede Seite, jedes ADR und jedes arc42-Kapitel existiert in beiden Sprachen                                                                                                   |
| AI-gestützte Entwicklung           | Große Teile setzt ein Coding Agent um                           | Leitplanken und Sensoren im Repo (`AGENTS.md`, `.claude/settings.json`, Ruleset auf `main`, `pnpm verify`)                                                                               |
