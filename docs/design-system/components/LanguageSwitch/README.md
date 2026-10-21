# LanguageSwitch

DE/EN-Umschalter als zwei echte Links (`hreflang`), damit er ohne JavaScript funktioniert.

**Consumer liefert:** `value` (aktuelle Sprache) und `hrefs` auf die jeweils gleiche Seite in der anderen Sprache.

- Die aktive Sprache ist gefüllt (`color-text` auf `color-bg`) und trägt `aria-current`; Kürzel sichtbar, voller Sprachname für Screenreader.
- Sitzt im Header rechts, mobil im Menü-Panel. Auf Hinweisseiten das einzige Bedienelement im Header.
