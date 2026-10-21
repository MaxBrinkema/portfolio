# Prose

Container für Langtext aus Markdown/MDX: H1–H4, Lead, Absätze, Listen, Zitat, Inline-Code, Links.

**Consumer liefert:** semantisches HTML als `children`; für den Lead `<p class="bk-lead">`.

- Lesespalte `layout-measure` (66 Zeichen). Tabellen, Diagramme und Codeblöcke dürfen breiter laufen (`layout-wide`) und erzeugen so Rhythmus.
- Große Sprünge zwischen Überschriften; H2 hat `space-16` Abstand nach oben.
- Zitat: groß gesetzt mit kurzer Kupfer-Linie darüber, keine Anführungszeichen-Grafik.
