# Pager

Vorherige und nächste Seite, z. B. ADR-007 ← → ADR-009 oder Kapitel 3 ← → Kapitel 5.

**Consumer liefert:** `prev` und `next` als `{ label, title, href }`, optional `label` für die Navigation.

- Ruhige Karte wie die Case-Teaser (Fläche, Haarlinie, Radius `radius-md`); Hover färbt den Rahmen Kupfer, unter dem Titel läuft der Unterstrich ein und der Pfeil im Label rückt in seine Richtung. Auf einem Band liegt die Karte auf `color-bg`.
- Fehlt ein Eintrag, steht der andere allein.
- Pfeile im Label sind Icons (`arrow-left`, `arrow-right`), keine Textzeichen – Screenreader lesen nur „vorherige“ bzw. „nächste“.
