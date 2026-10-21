---
chapter: 11
title: Risiken und technische Schulden
---

# 11 Risiken und technische Schulden

> TODO (Phase 7): Threat Model (STRIDE light). Für jede Bedrohung: Gegenmaßnahme und, wo möglich, der Test, der sie absichert. Das Threat Model nennt Maßnahmen, nie Secrets oder Schlüsseldetails.

## Bekannte Risiken

| Risiko                                     | Umgang                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Weitergeleiteter Einladungslink            | Bewusst akzeptiertes Restrisiko, begrenzt durch kurze Laufzeiten und Widerruf über eine Denylist |
| NDA-Verstoß durch identifizierende Details | Anonymisierung und Freigabe pro Case Study vor der Veröffentlichung                              |
| Geleaktes Root Secret                      | Notfall-Runbook: Root Secret rotieren, neu deployen, Empfänger neu einladen                      |
| Kompromittierte Abhängigkeit               | Gepinnte Versionen und Actions, Frozen Lockfile, Renovate, zeitgesteuertes Audit                 |
| Vendor-Lock-in beim Hoster                 | Exit-Strategie im Hosting-ADR (Phase 2)                                                          |

## Technische Schulden

| Punkt                                                     | Hintergrund                                                      |
| --------------------------------------------------------- | ---------------------------------------------------------------- |
| Zwei Wege für Diagramme (Mermaid und handgebaute SVGs)    | Siehe ADR-0001; ein besserer Ansatz ist eine offene Entscheidung |
| Lizenztexte der Schriften fehlen neben den Schriftdateien | Werden in Phase 4 aus den offiziellen Quellen ergänzt            |
