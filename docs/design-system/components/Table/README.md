# Table

Tabelle mit Beschriftung, die in ihrem eigenen Container horizontal scrollt (fokussierbare Region); eine Zeile kann als gewählte Option markiert werden.

**Consumer liefert:** `caption`, `columns`, `rows`, optional `highlight` (Index der gewählten Option) und `note`.

- Die gewählte Zeile trägt das Wort „Gewählt“ plus Häkchen, `color-accent-soft` und eine Akzentkante – nie nur Farbe.
- Erste Spalte ist Zeilenkopf (`th scope="row"`). Zahlen rechtsbündig (`align: 'end'`).
- Mindestbreite 36rem, darunter scrollt der Container – die Seite selbst scrollt nie horizontal.
- **Bewegung:** Mit `highlight` erscheinen die Zeilen nacheinander, dann läuft der Marker über die gewählte Zeile und „gewählt“ erscheint. Abschalten mit `motion={false}`.
