# Toc

Inhaltsverzeichnis für lange Seiten (Case Study, arc42). Die Startseite nutzt dafür `SectionNav`.

**Consumer liefert:** `items` (`id`, `label`, `level` 2|3), `current` (per Scroll-Spy-Insel gesetzt), optional `title` und `compact` (immer eingeklappt, für die mobile Variante über dem Artikel).

- Ab 13rem Containerbreite als Liste mit Achse links; schmaler als eingeklappte `<details>`-Box. Auf Desktop in einer `layout-toc-width`-Spalte, `position: sticky`.
- Aktueller Abschnitt: Achse in `color-accent`, Text fett, `aria-current="location"`.
- Nummern in Mono (01, 02 …) – sie entsprechen den Abschnittsnummern der Seite.
