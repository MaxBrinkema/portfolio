# CaseTeaser

Teaser auf eine Case Study als ruhige Karte auf `color-surface`: kursive Kupfer-Nummer in Serif, Meta-Zeile, Titel, ein Satz, Kennzahlen, Tags, Skizze.

**Consumer liefert:** `number`, `meta`, `title`, `summary`, `href`, `kpis`, `tags`, optional `visual` und `detail` (z. B. ein `DecisionCompare`, liegt über der klickbaren Fläche); `variant` `feature` oder `row`.

- Case Study 01 trägt auf der Startseite statt Kennzahlen und Skizze den Optionsvergleich mit Ergebniszahlen.

- Karte ohne Schatten; Hover färbt Rahmen und Nummer Kupfer, unter Titel und „Case Study lesen“ läuft der Unterstrich ein, der Pfeil rückt nach. Fokus umfasst die ganze Karte.
- **Bewegung:** Das Visual baut sich wie ein Diagramm auf. Verlinkte Teaser tragen am Titel `view-transition-name: bk-case-<Nummer>` – die Case-Study-Seite setzt denselben Namen über `PageHeader transitionName`, dann wird der Titel beim Seitenwechsel zur Überschrift. Jeder Name darf pro Seite nur einmal vorkommen; `transitionName={false}` schaltet ihn ab. Hover: Unterstrich läuft unter Titel und „Case Study lesen“ ein, der Pfeil rückt nach.
