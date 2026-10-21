**Brinkema – Portfolio Design** ist das Design System der Portfolio-Website (V5), hervorgegangen aus Richtung C „Dark first“ des Design-Briefings und am 19. Oktober 2026 gewählt. Es ist die einzige maßgebliche Quelle für die Umsetzung. Inhaltlicher Anker sind **die Entscheidungen: warum das System so gebaut ist**. Optionen stehen nebeneinander, die gewählte ist hervorgehoben, Kriterien und Trade-offs werden gegenübergestellt. Das greift den Aufbau von Case Studies und ADRs auf. Grundstimmung Anthrazit, Akzent Kupfer. Dark und Light sind gleichwertig und folgen dem System-Theme des Lesers.

> **Inhalte:** Case Study 01 („Ein Support-Portal für viele Märkte“) ist ein Entwurf mit echten Inhalten – Fakten und Zahlen von Max, Formulierungen von mir; Max überarbeitet sie noch. Alle übrigen Texte, Case Studies 02–03, ADRs und Lebenslaufdaten stammen noch aus Werkstatt+ (V4) und sind Platzhalter, bis die finalen Inhalte vorliegen. Neue Beschriftungen, die es in V4 nicht gab, stehen in der Sektion „Entscheidungen und Annahmen“.

> **Umfang: komplett.** Tokens, Logo, alle Komponenten (jede Vorschau in Light und Dark) und alle Seiten: Startseite, Case Study, Projekte, Lebenslauf (mit Druckfassung), Architektur mit Überblick („How this site was built“) und arc42, ADR-Liste, ADR-Detail, Datenschutz, Hinweis- und Fehlerseiten – Desktop und, wo es Sinn ergibt, mobil. Seitenvorschauen folgen dem Theme-Umschalter der Ansicht.

## Prüfstein

Mutig in Farbe, Typografie und Rhythmus, zurückhaltend bei Effekten. Jedes auffällige Element zeigt etwas über die Arbeit – in dieser Richtung ist das eine Entscheidung: Optionen, Kriterien, die Wahl.

## Stimme und Inhalt

Unverändert aus V4: Ich-Form, Leser werden gesiezt, „Hallo, ich bin Max.“, kleine Selbstironie, echter HTTP-Status auf Fehlerseiten, ein Textmarker pro Absatz. Footer wie in V4: „Lust, über Architektur zu sprechen?“, „Handgebaut mit Astro und TypeScript …“, „Code unter MIT · Inhalte © 2026 Max Brinkema“, „zuletzt aktualisiert“.

## Farbe

- **Dark** (Anthrazit, Text warmes Weiß ≥ 14:1) und **Light** (warmes Papier) sind gleichwertig. Die Seite folgt `prefers-color-scheme`; eine Wahl über den Umschalter hat Vorrang. Dark ist nur der Fallback ohne Systemvorgabe.
- `color-surface` für Options-Karten, Case-Teaser und Bänder im Wechsel mit dem Grund; im Light-Theme tragen Bänder `color-surface-strong`, damit sie sichtbar bleiben.
- Einziger Akzent ist **Kupfer**: `color-accent` als Fläche (Akzentband, Primär-Button, Cursor), `color-accent-text` für Links, Fokus, kursive Case-Nummern, `color-accent-soft` hinter der gewählten Option und dem Textmarker.
- Keine Leuchtkanten, kein Glassmorphism: Dunkel heißt hier ruhig, nicht „Tech-Startup“.

## Typografie

- **Newsreader** (Variable Serif, optische Größe automatisch) für Überschriften, Fließtext und Zahlen – gut lesbar auf Dunkel, mit großen Sprüngen von `display` 46–84 px bis `body` 18–19 px.
- **Geist Mono** für alles, was man bedient oder vergleicht: Navigation, Buttons, Tags, Kriterien, Labels. Der Wechsel Serif/Mono trennt Lesen und Bedienen.
- Kennzahlen kräftig (Newsreader 640) mit Kupferlinie und Kontextzeile – Zahlen als Beleg einer Entscheidung, nicht als Plakat. Case-Nummern kursiv in Kupfer.

## Layout und Rhythmus

- Hero mit Begrüßung und Porträt wie in Signal. Die Entscheidung steht im Projekte-Abschnitt: Case Study 01 trägt den Optionsvergleich (`DecisionCompare`) mit den Ergebniszahlen der gewählten Option.
- Abschnitte wechseln zwischen Grund und Band (`bk-section--band`); Case-Teaser sind ruhige Karten ohne Schatten.
- „Wie diese Seite gebaut ist“ zeigt die zuletzt getroffenen ADRs – die Entscheidungen der Seite selbst sind Inhalt.
- Weichere Formen: `radius-sm` 4 px, `radius-md` 8 px.

## Zustände und Barrierefreiheit

WCAG 2.2 AA in Dark und Light (Nachweis in „Token-Übergabe“). Gewählte Optionen nie nur über Farbe: Rahmenstärke, Wort „gewählt“ und Häkchen. Fokus: 2-px-Ring in `color-focus`. Klickflächen ≥ 24 px, Buttons 44 px. Menü und Sprachumschalter ohne JavaScript.

## Bewegung

Bewegung erklärt einen Ablauf oder antwortet auf eine Aktion – sie ist nie Dekoration. Alles Weitere in der Karte **Motion** (Grundlagen).

1. **Diagramme bauen sich auf** (`Figure`, Teaser-Visual): erst die Knoten, dann die Kanten (sie zeichnen sich), zuletzt der hervorgehobene Pfad – die Entscheidung kommt am Schluss.
2. **Entscheidung löst sich auf** (`DecisionCompare`: die Optionen erscheinen nacheinander, dann wird die gewählte hervorgehoben, danach folgen die Ergebniszahlen – Frage → Abwägung → Entscheidung → Beleg; `Table` mit `highlight`: der Marker läuft über die gewählte Zeile).
3. **Seitenwechsel** (Cross-Document View Transitions): Der Titel im Teaser wird zur Überschrift der Case Study (`view-transition-name: bk-case-<Nummer>`), der Rest blendet über. Braucht keine Bibliothek; Browser ohne Unterstützung wechseln normal.
4. **Hover antwortet – ein Vokabular für alles, was klickbar ist:**
   - **A · Richtungs-Icons** (Pfeile, Download-Pfeil) rücken in ihre Richtung nach – in Links, Buttons und klickbaren Blöcken (Case Study, Zertifikat, Pager). Nicht-gerichtete Icons (Mail, Theme, Status, Häkchen) bleiben stehen.
   - **B · Links ohne Unterstrich in Ruhe** – Titel verlinkter Blöcke (Case Study, ADR, Pager), Pfeil-Links, „Case Study lesen“, Zurück-Link: Der Unterstrich läuft von links ein (`duration-base`).
   - **C · Links mit Unterstrich in Ruhe** – Fließtext, Footer, externe Links, Zertifikatsnachweise: Der Unterstrich wird dicker (1 → 3 px). Im Fließtext bleiben Links so immer als Links erkennbar.
   - **D · Navigation** (Hauptnavigation, Unternavigation, Inhaltsverzeichnis): Indikatorlinie und Textfarbe.
   - **E · Bedienelemente** (Buttons, Download, Umschalter, Tags): Fläche und Rahmen.
   - Diagramm-Knoten, die verlinken, werden beim Hover kräftiger umrandet. In Windows-Kontrastmodus ersetzt ein normaler Unterstrich den einlaufenden.

- Tokens: `duration-stagger` 70 ms (Versatz), `duration-slow` 360 ms (Einblenden, Hervorheben), `duration-draw` 520 ms (Kante), dazu `duration-instant`/`-fast`/`-base` für Zustände. Easing `ease-standard`, Einblenden `ease-enter`.
- Jede Choreografie läuft **einmal**, beim ersten Hineinscrollen; bereits vorbeigescrollte Elemente bleiben statisch. Danach werden alle Hilfsklassen entfernt.
- **Progressive Enhancement:** Ohne JavaScript, ohne IntersectionObserver oder bei `prefers-reduced-motion: reduce` ist alles sofort vollständig da, Seitenübergänge entfallen. Im Druck ist immer alles sichtbar.
- Nicht verwendet: Parallax, Hochzählen von Zahlen, Einblenden ganzer Sektionen, Animations-Bibliotheken.
- Umsetzung in Astro: Komponenten mit Choreografie (Figure, Table mit `highlight`, DecisionCompare) brauchen eine kleine Client-Insel oder ein Inline-Script, das den Ausgangszustand **vor dem ersten Paint** setzt – sonst blitzt der Endzustand kurz auf. Abschalten pro Instanz mit `motion={false}`.

## Logo

Wortmarke **brinkema■** aus Geist Mono mit Kupfer-Block-Cursor – nah am früheren Zeichen „brinkema▍“ –, Monogramm **mb_**. Dateien in der Asset-Gruppe Logos.

## Komponenten

Alle Bausteine liegen in `components/bundle.js` als `window.Brinkema` (React 18), Styles in `components/bundle.css` mit Präfix `bk-`. Gleicher Baukasten wie Signal, durchgehend im Dark-first-Stil:

- Grundlagen: `Wordmark`, `Icon` – dazu die Karte **Motion** (alle Bewegungen und das Hover-Vokabular)
- Navigation: `SiteHeader`, `SectionNav`, `DocTabs`, `Toc`, `Pager`, `SiteFooter`, `LanguageSwitch`, `ThemeToggle`
- Aktionen: `Button`, `TextLink`, `DownloadButton`
- Inhalt: `Hero`, `Portrait`, `PageHeader`, `FactList`, `FocusList`, `Metric`, `AccentBand`, `CaseTeaser` (mit `detail`), `DecisionCompare`, `CertList`, `Timeline`, `ADRList`, `Consequences`, `Tag`, `StatusBadge`, `Callout`
- Text: `Prose`, `Mark`, `SectionHeading`, `CodeBlock`, `Table`, `Figure`
- Seiten: `NoticePage`

Eigenes gegenüber Signal: `DecisionCompare` (Optionen als Karten, Ergebniszahlen) ersetzt die Optionstabelle in Case Study und ADR; Case-Teaser, Pager und Konsequenzen sind ruhige Karten; Nummern (Case, Kapitel, HTTP-Status) kursiv in Kupfer.
