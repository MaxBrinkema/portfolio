---
number: 12
title: Astros eingebautes i18n mit typisierten Wörterbüchern nutzen
summary: Deutsch und Englisch von Anfang an, über Astro-i18n-Routing mit Sprachpräfix und typisierte UI-Wörterbücher; keine zusätzliche i18n-Bibliothek.
area: Mehrsprachigkeit
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Astros eingebautes i18n mit typisierten Wörterbüchern nutzen

## Kontext und Problemstellung

Alle Inhalte, UI-Texte, die Architektur-Doku und der Lebenslauf existieren auf Deutsch und Englisch, mit einem Sprachwechsel auf jeder Seite. i18n nachträglich einzubauen ist deutlich teurer als von Beginn an. Welchen Ansatz nutzen wir für Routing und UI-Texte?

## Entscheidungstreiber

- Beide Sprachen sind vom ersten Tag an gleichwertig
- Eine fehlende Übersetzung muss automatisch auffallen
- Keine i18n-Runtime im Client
- Die Menge an UI-Texten ist klein

## Betrachtete Optionen

- Astros eingebautes i18n mit typisierten Wörterbüchern
- Paraglide JS (inlang)
- i18next oder vue-i18n

## Entscheidung

Gewählte Option: „Astros eingebautes i18n mit typisierten Wörterbüchern“, weil es Routing und Sprachhelfer ohne zusätzliche Abhängigkeit abdeckt und ein TypeScript-Typ fehlende Schlüssel zum Compile-Fehler macht.

- Routing mit Präfix in jeder URL (`/de/…`, `/en/…`); Links in die andere Sprache über die Astro-Helfer.
- UI-Texte in typisierten Wörterbüchern (`de.ts`, `en.ts`) mit einem kleinen `t()`-Helfer. Das englische Wörterbuch muss den Typ des deutschen erfüllen.
- Vue-Islands erhalten ihre Texte als Props; kein `vue-i18n` im Client.
- Datums- und Zahlenformate über die eingebaute `Intl`-API.
- Erster Besuch: `/invite` wählt die Sprache über den optionalen Parameter im Link, sonst über `Accept-Language`. Die Wahl wird in einem Cookie gespeichert.

### Konsequenzen

- Gut, weil ein fehlender Schlüssel den Typecheck scheitern lässt.
- Gut, weil keine i18n-Bibliothek an den Client ausgeliefert wird.
- Schlecht, weil Pluralformen und Platzhalter von Hand behandelt werden müssen.

### Bestätigung

- Typecheck über die Wörterbücher in `pnpm verify` (ab Phase 2).
- Ein Test erwartet jeden Inhaltseintrag, jedes ADR und jedes arc42-Kapitel in beiden Sprachen (Phase 5).
- E2E: Der Sprachwechsel landet auf derselben Seite, das `lang`-Attribut stimmt, axe ohne Befund in beiden Sprachen (Phase 2).

## Vor- und Nachteile der Optionen

### Astros eingebautes i18n mit typisierten Wörterbüchern

- Gut, weil keine Abhängigkeit dazukommt und alles typisiert bleibt.
- Schlecht, weil ICU-Funktionen wie Pluralformen fehlen.

### Paraglide JS

- Gut, weil Nachrichten zu typisierten, tree-shakebaren Funktionen kompiliert werden.
- Schlecht, weil es eine Toolchain hinzufügt, die diese kleine Textmenge noch nicht braucht.

### i18next oder vue-i18n

- Gut, weil sie vollständig und weit verbreitet sind.
- Schlecht, weil sie eine Client-Runtime mitbringen und die Typsicherheit der Schlüssel ohne zusätzliches Tooling verloren geht.

## Weitere Informationen

Upgrade-Pfad: Wechsel auf Paraglide JS, falls Textmenge, Pluralformen oder Platzhalter deutlich wachsen. Die Reihenfolge der Middleware (Security-Header, Route-Policy und Session, danach Sprachauflösung) wird zusammen mit dem Auth-Konzept entschieden.
