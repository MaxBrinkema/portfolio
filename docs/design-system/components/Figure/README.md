# Figure

Diagramm-Container mit Punktraster und Bildunterschrift („Abb. 1“) für eingebettete SVG-Diagramme, die über die `.bk-dg-*`-Klassen dem Theme folgen.

**Consumer liefert:** ein Inline-`<svg>` mit `<title>`, eindeutigen Marker-IDs und den Klassen `bk-dg-node`, `bk-dg-node--hl`, `bk-dg-node--ghost`, `bk-dg-edge`, `bk-dg-edge--hl`, `bk-dg-edge--muted`, `bk-dg-label`, `bk-dg-sub`, `bk-dg-num`; Bildunterschrift.

- Pro Diagramm genau ein hervorgehobener Pfad (`--hl`, `color-diagram-highlight`): die Entscheidung.
- Erkundbare Knoten als `<a class="bk-dg-link">` auf den passenden Abschnitt – per Tastatur erreichbar, Fokus sichtbar.
- Unter 34rem Breite scrollt das Diagramm in seinem Container (fokussierbare Region) statt unlesbar klein zu werden.
- Keine Farben im SVG hart codieren; nur die Klassen nutzen, dann funktioniert es in Light, Dark und Druck.
- **Bewegung:** Beim ersten Hineinscrollen bauen sich Knoten, dann Kanten, zuletzt der hervorgehobene Pfad auf (`duration-stagger`, `duration-draw`). Abschalten mit `motion={false}`; bei reduzierter Bewegung und ohne JS ist das Diagramm sofort vollständig.
