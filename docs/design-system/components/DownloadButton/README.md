# DownloadButton

Der Download des Lebenslaufs als PDF: kräftiger Rahmen, Kupfer-Feld mit Download-Glyphe, Label und Dateiangabe in Mono.

**Consumer liefert:** `href` zur PDF-Datei, `label` (Standard „Lebenslauf“), `meta` (Standard „PDF“; Seitenzahl und Größe aus dem Build ergänzen), `lang`.

- Im Hero der Startseite, im Werdegang-Abschnitt und auf der Lebenslauf-Seite. Nicht im Header.
- Rendert `<a download>`. In der Druckansicht ausgeblendet.
