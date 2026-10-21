# Button

Primär (Kupfer) für die eine Handlung, für die die Ansicht da ist; Sekundär (Rahmen) für alles andere.

**Consumer liefert:** Label als `children`, optional `href` (rendert `<a>`), `icon` (`arrow-right` für Navigation), `disabled`.

- Höchstens ein Primär-Button pro Ansicht. Auf der Startseite ist das „Case Study lesen“ oder der Lebenslauf, nicht beides.
- Labels mit Verb, Satzanfang groß: „Case Study lesen“, „Neuen Link anfragen“. Deutsche Labels sind ein Drittel länger – nie feste Breiten.
- Hover kippt Primär auf Tinte (`color-text`), Aktiv auf `color-accent-text`; Fokus ist der 2-px-Ring in `color-focus`.
- Mindesthöhe 44 px (`layout-target-min`). Text auf Kupfer ist `color-on-accent`, nie Weiß.
- `state` erzwingt einen Zustand nur für Dokumentation.
