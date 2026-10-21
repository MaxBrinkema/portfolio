---
chapter: 4
title: Lösungsstrategie
---

# 4 Lösungsstrategie

| Ziel oder Randbedingung          | Ansatz                                                                                                                     | Entscheidung                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| Sicherheit, deny by default      | Jede Inhaltsseite wird pro Anfrage hinter einer Middleware gerendert, die ohne Session nur Routen der Allowlist durchlässt | ADR-0002; Auth-Konzept in Phase 3 |
| Inhalte bleiben privat           | Öffentliches Code-Repo, privates Content-Repo, der Build liest `CONTENT_DIR`                                               | ADR-0006                          |
| Wenig Client-JavaScript          | Astro-Islands, natives HTML zuerst, Vue nur für die wenigen interaktiven Teile                                             | ADR-0002, ADR-0003, ADR-0008      |
| Typsicherheit bis in die Inhalte | Strict TypeScript, Content Collections mit Zod-Schemas, typisierte Wörterbücher                                            | ADR-0005, ADR-0007, ADR-0012      |
| Wartbarkeit                      | pnpm-Monorepo mit einseitigen Abhängigkeiten; Sicherheitslogik framework-unabhängig                                        | ADR-0004                          |
| Eigenes Design, barrierefrei     | Design Tokens als CSS Custom Properties, Container Queries, Design System mit denselben Klassennamen nachgebaut            | ADR-0009                          |
| Prüfbare Qualität                | Jedes Qualitätsziel durch automatische Checks hinter `pnpm verify` und in der CI abgesichert                               | ADR-0010                          |
| Kontrollierte Änderungen         | GitHub Flow, Squash-Merges, Conventional Commits, Ruleset auf `main`                                                       | ADR-0011                          |
| Zweisprachigkeit                 | Astro-i18n-Routing mit Sprachpräfix                                                                                        | ADR-0012                          |
| Nachvollziehbare Entscheidungen  | arc42, MADR und Mermaid, auf der Seite gerendert                                                                           | ADR-0001                          |
