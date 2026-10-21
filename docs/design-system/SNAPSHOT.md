# Design-System-Snapshot: Brinkema – Portfolio Design (V5)

Dieser Ordner ist ein unveränderter Export des Design Systems „Brinkema – Portfolio Design“, freigegeben am 19.10.2026, Stand des Exports 21.10.2026 (letzte Änderung im Design System: 20.10.2026, Tab „Überblick“ der Architektur-Doku).

**Regel:** Design-Änderungen entstehen zuerst im Design System und kommen per neuem Export hierher – nie umgekehrt. Dateien in diesem Ordner werden nicht von Hand angepasst. Was fehlt (Token, Zustand, Seite), wird als Platzhalter markiert und bei Max angefragt, nicht erfunden.

## Lesereihenfolge

1. `README.md` – Brand Book: Prüfstein, Stimme, Farbe, Typografie, Layout, Barrierefreiheit, Bewegung, Komponentenliste.
2. `entscheidungen.md` – Gestaltungsentscheidungen und Annahmen, die nicht im Briefing standen.
3. `token-uebergabe.md` – alle Tokens als Tabelle mit geprüften Kontrasten (Referenz für den Kontrast-Test in `packages/tokens`).
4. `components/<Name>/README.md` – Verhalten, Zustände, Barrierefreiheit und Bewegung je Komponente.
5. `components/index.d.ts` – Props-Schnittstellen je Komponente.

## Inhalt

| Pfad | Zweck | Verwendung im Code |
| --- | --- | --- |
| `tokens.json` | Einzige Quelle für Farben (Dark/Light), Typografie, Abstände, Radien, Bewegung, Breakpoints | Grundlage für `packages/tokens` (CSS Custom Properties). Erstes Theme = Fallback ohne Systemvorgabe: `dark` |
| `token-uebergabe.md` | Token-Tabelle mit Kontrastwerten, Namensmuster `color.text.muted` ↔ `--color-text-muted` | Erwartungswerte für den Kontrast-Test |
| `components/bundle.css` | Fertige Styles aller Komponenten (Präfix `bk-`, Container Queries) | Wird unverändert in `packages/ui` übernommen |
| `components/index.d.ts` | Props je Komponente | Vorlage für die Props der `.astro`-Komponenten und Vue-Islands |
| `components/<Name>/README.md` | Guidelines je Komponente (37 Stück) | Verhalten und a11y beim Nachbau |
| `components/bundle.js` | React-Referenzimplementierung (`window.Brinkema`) | **Nicht übernehmen.** Nur lesen, um HTML-Struktur und Klassennamen exakt nachzubauen |
| `components/lib/` | React 18.3.1 (MIT) für die Referenzimplementierung | Nicht übernehmen |
| `fonts/` | Newsreader (normal, kursiv) und Geist Mono, variabel, woff2 | Selbst hosten; SIL Open Font License 1.1, nicht MIT |
| `assets/logos/` | Wortmarke und Monogramm (je dark/light), Favicon | Siehe `assets/logos/README.md` |

**Nachbau-Prinzip:** Komponenten entstehen als `.astro` (statisch) bzw. Vue-Islands (interaktiv) mit derselben HTML-Struktur und denselben Klassennamen wie `bundle.js`. Dann gilt `bundle.css` unverändert, und die Vorschauen bleiben vergleichbar.

## Was hier bewusst fehlt

- **Vorschauen (`preview.html`)** aller Komponenten und Seiten (Desktop, mobil, Druck). Sie enthalten echte Lebenslaufdaten, Zertifikats-Links und Case-Study-Inhalte und liegen deshalb im privaten Repo `portfolio-content` unter `design-previews/` (Einstieg `index.html`, ohne Build im Browser öffenbar, Theme per `?theme=light|dark`). Nur als visuelle Referenz nutzen: keine Texte, Screenshots oder Traces daraus in dieses Repo übernehmen.
- **`tokens.css`** – im Design System wird sie zur Laufzeit erzeugt. Im Repo baut `packages/tokens` sie aus `tokens.json` (Phase 4).

## Bekannte Punkte

- **Lizenztexte der Schriften fehlen** (OFL 1.1 für Newsreader und Geist Mono). Laut Plan liegen sie neben den Schriftdateien; beim Übernehmen nach `packages/tokens` bzw. `packages/ui` aus den offiziellen Quellen ergänzen.
- `--font-sans` ist kein Token: `bundle.css` definiert es selbst als Alias (`:root { --font-sans: var(--font-serif); }`).
- `bundle.css`/`bundle.js` enthalten Reste der verworfenen Richtung „Blaupause“ (Klassen `bk-bp*`, Variablen `--color-blueprint*`, für die es keine Tokens gibt). Nicht verwenden; ob sie entfernt werden, entscheidet Max im Design System.
- Platzhalter: Texte in den Komponenten-Guidelines und Vorschauen stammen teils aus Werkstatt+ (V4) und sind nicht final. Domain und Kontakt (`brinkema.dev`, `kontakt@brinkema.dev`) sind Platzhalter. Die ADRs in den Vorschauen sind Platzhalter, nicht die echten ADRs dieses Repos.
