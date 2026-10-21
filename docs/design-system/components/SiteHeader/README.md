# SiteHeader

Seitenkopf mit Wortmarke, Hauptnavigation (Vorstellung, Projekte, Lebenslauf, Architektur), Sprach- und Theme-Umschalter; ohne Session nur Wortmarke und Sprache.

**Consumer liefert:** `lang`, `current` (aktive Seite), `session`, Theme-Callbacks, `langHrefs`.

- Unter 52rem Containerbreite wird die Navigation zum Menü (`<details>`) – funktioniert ohne JavaScript, Panel auf `color-surface-raised` mit `shadow-raised`.
- Aktive Seite: 2-px-Unterstrich in `color-accent` plus `aria-current="page"`.
- Enthält den Sprunglink „Zum Inhalt springen“; die Seite braucht ein Ziel mit `id="inhalt"`.
- Kein Hintergrund-Blur, keine Transparenz. Bei fixiertem Header `scroll-margin-top` = `layout-header-height`.
