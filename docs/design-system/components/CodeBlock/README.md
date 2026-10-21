# CodeBlock

Codeblock auf `color-surface` mit Sprachkürzel und optionaler Bildunterschrift; scrollt horizontal und ist per Tastatur fokussierbar.

**Consumer liefert:** `code`, `language`, optional `caption`.

- Kopf mit Sprache und Dateiname in Mono, Fläche und Radius wie die Karten.
- Syntax-Highlighting ohne Bibliothek für TypeScript/JavaScript (auch `tsx`, `astro`), JSON und Shell – fünf ruhige Rollen statt Regenbogen: Schlüsselwort Kupfer (`color-code-keyword`), String Grün (`color-code-string`), Zahl und Literal Blau (`color-code-number`), Funktion und JSON-Schlüssel Sand (`color-code-function`), Kommentar gedämpft und kursiv (`color-code-comment`). Alle ≥ 6:1 auf `color-surface` in Light und Dark.
- Andere Sprachen bleiben einfarbig; `highlight={false}` schaltet es ab. Im Druck ist Code schwarz.
- Kurze Ausschnitte (≤ 15 Zeilen) – der Code illustriert eine Entscheidung, er dokumentiert sie nicht.
