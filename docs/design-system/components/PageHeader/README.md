# PageHeader

Seitenkopf für Detailseiten: Zurück-Link, Meta-Zeile in Mono, H1, Lead, Rahmendaten, optional Aktionen und Unternavigation.

**Consumer liefert:** `title`, optional `back` (`{ href, label }`), `eyebrow` (Liste), `lead`, `facts`, `actions`, `band` (auf `color-surface-strong`, für die Architektur-Doku) und `DocTabs` als `children`.

- Case Studies, Lebenslauf und Projektübersicht stehen auf `color-bg`; die Architektur-Doku auf dem Band – so erkennt man den Bereich.
- Der Titel ist auf 22 Zeichen pro Zeile begrenzt und balanciert.
- **Seitenwechsel:** `transitionName` (z. B. `bk-case-01`) verbindet die Überschrift mit dem Titel des Teasers, von dem man kommt (View Transitions).
- **Zurück-Link:** Pfeil rückt nach links, der Unterstrich läuft beim Hover ein (wie Pfeil-Links).
