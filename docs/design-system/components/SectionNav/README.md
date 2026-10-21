# SectionNav

Die mitlaufende Abschnittsnavigation der Startseite direkt unter dem Header: **Über mich · Schwerpunkte · Projekte · Werdegang · Diese Seite**.

**Consumer liefert:** `items` (`{ id, label }`), `current` (per IntersectionObserver gesetzt, `aria-current="true"`).

- Header und SectionNav sind zusammen sticky; `scroll-margin-top` der Abschnitte berücksichtigt beide.
- Aktiv: 2-px-Unterstrich in `color-accent`. Hover: Unterstrich in `color-border-strong`.
- Ohne JavaScript eine normale Sprungnavigation. Mobil scrollt die Leiste horizontal, der aktive Eintrag wird ins Bild geschoben.
- Nur auf der Startseite; dasselbe Muster wie `DocTabs`.
