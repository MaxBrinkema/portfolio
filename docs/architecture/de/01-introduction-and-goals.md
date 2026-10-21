---
chapter: 1
title: Einführung und Ziele
---

# 1 Einführung und Ziele

## Aufgabenstellung

Eine persönliche Website, die Max Brinkema als Software-Entwickler und -Architekten vorstellt, ausgewählte Projekte als anonymisierte Case Studies zeigt und den Lebenslauf als PDF anbietet. Der Fokus liegt auf Architektur. Die Seite ist selbst ein Showcase-Projekt: Jede Entscheidung ist begründet und dokumentiert.

- **Zielgruppe:** ausschließlich Personen, die einen Einladungslink erhalten (Recruiter, Hiring Manager, Architekten bei potenziellen Arbeitgebern oder Kunden).
- **Lieferstufe 1:** Sämtliche Inhalte (Vorstellung, Case Studies, Architektur-Doku, Lebenslauf) sind nur mit gültiger Einladung erreichbar. Ohne Einladung erreichbar sind nur `/invite`, eine neutrale Hinweisseite und der Datenschutzhinweis.
- **Lieferstufe 2 (optional, später):** Teile der Seite werden über eine Konfigurationsänderung plus ADR öffentlich, ohne Umbau.
- **Zweisprachig:** alle Inhalte, UI-Texte, die Architektur-Doku und der Lebenslauf auf Deutsch und Englisch.
- **Lebenslauf als PDF:** wird beim Build aus denselben Daten erzeugt wie die Website.

## Qualitätsziele

| Priorität | Qualitätsziel                                                                                                                  | Messbar über                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| 1         | Sicherheit: kein Zugriff auf Inhalte ohne gültiges Token (deny by default)                                                     | Playwright-Tests für gültige, abgelaufene und manipulierte Tokens            |
| 2         | Barrierefreiheit: WCAG 2.2 AA                                                                                                  | axe-core, Lighthouse a11y = 100, Kontrast-Test der Tokens, manuelle Prüfung  |
| 3         | Wartbarkeit und Erweiterbarkeit: klare Modulgrenzen, dokumentierte Entscheidungen, öffentlicher Bereich ohne Umbau nachrüstbar | dependency-cruiser, ADRs, Coverage ≥ 80 %, Mutation Score, Route-Policy-Test |
| 4         | Performance: schnelle Ladezeit, auch mobil                                                                                     | Lighthouse-Budgets inkl. CLS, Bundle-Size-Limit                              |
| 5         | Responsive: Mobile first, Komponenten über Container Queries                                                                   | Playwright auf mehreren Viewports                                            |
| 6         | Kosten: Betrieb im Free Tier                                                                                                   | Infrastruktur-Review im ADR                                                  |

## Stakeholder

| Rolle                                                         | Erwartung                                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Eingeladene Besucher (Recruiter, Hiring Manager, Architekten) | Schneller Überblick, glaubwürdige Case Studies mit Trade-offs, CV-Download, funktioniert mobil und mit assistiven Technologien |
| Max Brinkema (Betreiber)                                      | Wenig Pflege, Kosten nahe null, Inhalte nur für Eingeladene, Einhaltung der NDAs                                               |
| Arbeitgeber und Kunden früherer Projekte                      | Keine identifizierenden Details aus NDA-Projekten                                                                              |
| Coding Agent                                                  | Klare Regeln, schnelles deterministisches Feedback (siehe `AGENTS.md`)                                                         |
