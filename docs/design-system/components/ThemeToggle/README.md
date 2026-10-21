# ThemeToggle

Schalter zwischen Light und Dark mit `aria-pressed` (gedrückt = dunkel).

**Consumer liefert:** `theme` und `onToggle`; die Seite setzt `data-theme` auf `<html>` und merkt sich die Wahl. Ohne Wahl gilt `prefers-color-scheme`.

- JavaScript-Insel: Ohne JS fehlt der Schalter, das System-Theme gilt.
- Icon zeigt den aktuellen Zustand (Sonne/Mond), Tooltip und Screenreader-Text „Dunkles Design“.
