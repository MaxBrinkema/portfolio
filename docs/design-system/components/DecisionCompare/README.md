# DecisionCompare

Optionen nebeneinander, die gewählte mit Kupferrahmen, „gewählt“ und Häkchen; darunter die Kriterien je Option und – optional – die Ergebniszahlen der gewählten Option.

**Consumer liefert:** `question` (z. B. die Tabellenbeschriftung), `criteria` (`{ key, label }`), `options` (`{ name, values, chosen? }`), optional `eyebrow`, `result` (`{ value, label }`, 1–3), `caption`, `href`.

- Ersetzt in Richtung C die Optionstabelle: Optionen sind Karten, weil jede eine eigene Einheit ist.
- Gewählt ist nie nur Farbe: Rahmenstärke, Wort und Häkchen markieren sie.
- Das Ergebnis steht unter einer Kupferlinie mit dem Namen der gewählten Option („Ergebnis · Inkrementell in Blöcken“), die erste Zahl in Kupfer – so werden Zahlen zum Beleg der Entscheidung.
- Startseite: als `detail` im Teaser von Case Study 01. Case Study: im Abschnitt „Betrachtete Optionen“.
- **Bewegung:** Optionen erscheinen nacheinander, dann wechselt die gewählte zu Kupfer, danach folgen Ergebnis und Zahlen. Abschalten mit `motion={false}`.
