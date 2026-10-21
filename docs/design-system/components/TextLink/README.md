# TextLink

Link im Fließtext oder als eigenständiger Verweis mit Pfeil; extern mit Pfeil nach rechts oben und Screenreader-Hinweis.

**Consumer liefert:** `href`, Text, optional `arrow` (interne Weiterführung) oder `external`.

- Im Fließtext und als externer Link immer unterstrichen; Hover verdickt die Unterstreichung auf 3 px statt die Farbe zu wechseln (Hover-Vokabular C).
- `color-accent-text` auf allen Flächen (≥ 4,9:1). Im `AccentBand` werden Links automatisch `color-on-accent`.
- Linktext beschreibt das Ziel („ADR 007“), nie „hier“.
- **Hover:** Pfeil-Links haben in Ruhe keinen Unterstrich; er läuft beim Hover von links ein, der Pfeil rückt 3 px nach (Vokabular A + B). Externe Links: Pfeil rückt diagonal nach.
