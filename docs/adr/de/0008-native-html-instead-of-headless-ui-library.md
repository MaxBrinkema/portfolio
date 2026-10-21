---
number: 8
title: Interaktive Teile mit nativem HTML statt einer Headless-UI-Bibliothek bauen
summary: Das eigene Design System wird mit nativen HTML-Elementen und kleinen Vue-Islands nachgebaut; keine Headless-Komponentenbibliothek.
area: Design System
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Interaktive Teile mit nativem HTML statt einer Headless-UI-Bibliothek bauen

## Kontext und Problemstellung

Die Seite hat ein eigenes Design System („Brinkema – Portfolio Design“). Interaktiv sind ein mobiles Menü, ein mobiles Inhaltsverzeichnis, der Sprachwechsel, ein Theme-Umschalter und zwei Filter. Headless-Bibliotheken liefern barrierefreies Verhalten für komplexe Widgets. Brauchen wir eine?

## Entscheidungstreiber

- Barrierefreiheit: WCAG 2.2 AA
- Wenig JavaScript; alles soll auch ohne funktionieren
- Eigener Look; Klassennamen und Struktur müssen zu `bundle.css` des Design Systems passen

## Betrachtete Optionen

- Natives HTML plus kleine Vue-Islands
- Eine Headless-Bibliothek für Vue (z. B. Headless UI, Reka UI, Ark UI)

## Entscheidung

Gewählte Option: „Natives HTML plus kleine Vue-Islands“, weil eine Headless-Bibliothek für Disclosure, Links, Toggle und Filter nichts bietet, was natives HTML nicht kann.

| Element                                  | Ohne JavaScript        | Mit JavaScript           |
| ---------------------------------------- | ---------------------- | ------------------------ |
| Mobiles Menü, mobiles Inhaltsverzeichnis | `<details>`            | –                        |
| Sprachwechsel                            | echte Links            | –                        |
| Theme-Umschalter                         | Systemeinstellung gilt | Umschalten und Speichern |
| Tag-Filter, Status-Filter                | vollständige Liste     | Filtern (Island)         |

### Konsequenzen

- Gut, weil native Elemente Tastaturbedienung und Semantik mitbringen und ohne JavaScript funktionieren.
- Gut, weil keine Abhängigkeit entsteht, deren Markup von `bundle.css` abweichen könnte.
- Schlecht, weil ein künftiger Dialog, eine Combobox oder ein Popover von Hand gebaut und getestet werden müsste.

### Bestätigung

- axe-core in Playwright ohne Befund (Phase 4).
- `eslint-plugin-vuejs-accessibility` in `pnpm verify` (aktiv seit Phase 1).
- Playwright-Tests mit deaktiviertem JavaScript für die interaktiven Teile (Phase 4).

## Vor- und Nachteile der Optionen

### Natives HTML plus kleine Vue-Islands

- Gut, weil es die kleinste Lösung mit dem besten Progressive Enhancement ist.
- Schlecht, weil komplexe Widgets eigene Umsetzungen bräuchten.

### Eine Headless-Bibliothek für Vue

- Gut, weil Fokus-Management und ARIA-Muster für komplexe Widgets erprobt sind.
- Schlecht, weil es die Widgets, die das brauchen, auf der Seite nicht gibt.
- Schlecht, weil sie Client-JavaScript und eine zu pflegende Abhängigkeit hinzufügt.

## Weitere Informationen

Neu bewerten, sobald ein Dialog, eine Combobox oder ein Popover gebraucht wird.
