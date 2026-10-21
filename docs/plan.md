# Portfolio-Website – Umsetzungsplan & Kontext

Max Brinkema · begonnen am 13.10.2026 · exportiert am 21.10.2026

> **Herkunft:** Export des gleichnamigen Claude Docs. Links auf claude.ai sind privat und für Claude Code nicht erreichbar – maßgeblich im Repo sind diese Datei und der Design-System-Snapshot unter `docs/design-system/`. Gegenüber dem Doc angepasst: Ablage der Design-Vorschauen (Abschnitte Repo-Struktur und Design System).

## Zweck dieses Dokuments

Dieses Dokument ist der Startpunkt für die Umsetzung mit Claude Code. Es bündelt Kontext, Anforderungen, getroffene Entscheidungen und offene Punkte.

Vorgesehene Nutzung: als Markdown exportieren, im Repo unter `docs/plan.md` ablegen und aus der `CLAUDE.md` bzw. `AGENTS.md` darauf verweisen. Sobald die ADRs und die arc42-Doku stehen, sind diese die maßgebliche Quelle. Dieser Plan beschreibt dann nur noch den Weg dorthin.

## Kontext & Ziel

Eine persönliche Website, die mich als Software-Entwickler und -Architekt vorstellt, ausgewählte Projekte zeigt und den Lebenslauf zum Download anbietet. Der Fokus liegt auf Architektur, weil ich künftig als Architekt arbeiten möchte.

Die Website ist selbst ein Showcase-Projekt. Sie soll hochwertig entwickelt sein, kein „vibe coded AI slop“. Bewusstes Over-Engineering ist erlaubt, solange jede Entscheidung begründet und dokumentiert ist. Der eigentliche Wert liegt in nachvollziehbaren Trade-offs, nicht in der Anzahl der Tools.

**Zielgruppe:** Ausschließlich Personen, denen ich aktiv einen Link schicke (Recruiter, Hiring Manager, Architekten bei potenziellen Arbeitgebern oder Kunden).

**Rahmenbedingungen:**

- **Keine Auffindbarkeit:** Die Seite wird nicht indexiert und soll nicht gecrawlt werden können.
- **NDA:** Kundenprojekte unterliegen NDAs. Sie werden nur anonymisiert und abstrahiert gezeigt: keine Kundennamen, keine Screenshots, kein Code, keine identifizierenden Zahlen. Gezeigt werden Problem, Rahmenbedingungen, Optionen, Entscheidung und Trade-offs. Abstimmung mit Arbeitgeber bzw. Rechtsabteilung steht noch aus. Die Freigabe erfolgt pro Case Study und umfasst neben dem Text die konkreten Zahlen, Branche, Zeitraum, Märkte und Stack, weil erst die Kombination identifizierend sein kann. Bis zur Freigabe liegen die Inhalte nur im privaten Content-Repo. Der Codeblock zeigt ausschließlich Code der eigenen Website, nie Kundencode.
- **Kosten nahe null:** Kein CMS, Free-Tier-Hosting.
- **Seltene Änderungen:** Inhalte ändern sich selten, Pflege direkt im privaten Content-Repo reicht.
- **Keine Analytics:** Kein Tracking, keine Analyse-Tools, keine Skripte oder Fonts von Drittanbietern.

## Anforderungen

### Funktional

- **Lieferstufe 1 – vollständig geschützt:** Sämtliche Inhalte (Vorstellung, Case Studies, Architektur-Doku, Lebenslauf) sind nur mit gültiger Einladung erreichbar. Ohne Einladung erreichbar sind nur `/invite`, eine neutrale Hinweisseite ohne Inhalte und der Datenschutzhinweis.
- **Lieferstufe 2 – optional, später:** Ein Teil der Seite (z. B. Vorstellung und Website-Case-Study) wird öffentlich. Die Architektur muss das ohne Umbau ermöglichen: eine Konfigurationsänderung plus ADR.
- **Zugang über Einladungslinks:** Pro Empfänger ein signierter Link mit Ablaufdatum. Signaturschlüssel rotieren automatisch. Im Token stehen nur Firmenname oder eine ID, keine Personennamen.
- **Hinweis- und Fehlerseiten:** Verständliche Seiten für abgelaufene Links, ungültige Links und fehlende Session, dazu 404 und 500. Details im Auth-Konzept.
- **Datenschutzhinweis (DE/EN):** Öffentlich erreichbar, verlinkt im Footer jeder Seite inklusive Hinweisseite. Inhalt: Verantwortlicher mit Kontakt, Hoster (Cloudflare) und Server-Logs, technisch notwendiges Session-Cookie, keine Analytics, Rechte der Betroffenen. Die Route steht in der Allowlist der Route-Policy.
- **Zweisprachig (DE/EN):** Alle Inhalte, UI-Texte, die Architektur-Doku und der Lebenslauf in Deutsch und Englisch, mit Language Switcher auf jeder Seite.
- **Lebenslauf als PDF:** Wird beim Build aus denselben Daten erzeugt wie die Website (Single Source of Truth), je Sprache ein PDF. Datensparsam: nur Stadt, keine vollständige Anschrift.
- **Architektur-Doku auf der Seite:** arc42 und ADRs werden als Seiten gerendert, in Stufe 1 hinter dem Login.

### Qualitätsziele

| Priorität | Qualitätsziel | Messbar über |
| --- | --- | --- |
| 1 | Sicherheit: kein Zugriff auf Inhalte ohne gültiges Token (deny by default) | Playwright-Tests für gültige, abgelaufene und manipulierte Tokens |
| 2 | Barrierefreiheit: WCAG 2.2 AA | axe-core, Lighthouse a11y = 100, Kontrast-Test der Tokens, manuelle Prüfung |
| 3 | Wartbarkeit & Erweiterbarkeit: klare Modulgrenzen, dokumentierte Entscheidungen, öffentlicher Bereich ohne Umbau nachrüstbar | dependency-cruiser, ADRs, Coverage ≥ 80 %, Mutation Score, Route-Policy-Test |
| 4 | Performance: schnelle Ladezeit auch mobil | Lighthouse-Budgets inkl. CLS, Bundle-Size-Limit |
| 5 | Responsive: Mobile-first, Komponenten über Container Queries | Playwright auf mehreren Viewports |
| 6 | Kosten: Betrieb im Free Tier | Infrastruktur-Review im ADR |

## Architekturentscheidungen

Die folgenden Entscheidungen sind gesetzt oder vorgeschlagen. Jede wird zu Beginn als ADR festgehalten.

| Thema | Entscheidung | Status | Begründung |
| --- | --- | --- | --- |
| Framework | Astro; in Stufe 1 alle Inhaltsseiten on-demand hinter der Auth-Middleware | gesetzt | Kaum JS im Client, Islands nur wo nötig |
| UI-Framework für Islands | Vue 3 (`@astrojs/vue`) | gesetzt | Persönliche Präferenz; bei wenigen Islands sachlich gleichwertig zu React |
| Package Manager | pnpm mit Workspaces | gesetzt | Monorepo mit getrennten Packages |
| Sprache | TypeScript, strict | gesetzt | Typsicherheit bis in die Inhalte |
| Repo-Modell | Öffentliches Code-Repo portfolio (MIT-Lizenz), privates Content-Repo portfolio-content | gesetzt | Showcase-Wirkung des Codes, ohne Inhalte preiszugeben; Details unten |
| Inhalte | Astro Content Collections mit Zod-Schemas; Projekte als Markdown, Stammdaten als JSON/YAML; Beispielinhalte im Code-Repo | gesetzt | Validierung beim Build, Case Studies brauchen Fließtext, kein CMS |
| Hosting | Cloudflare (Workers mit Static Assets) mit `@astrojs/cloudflare` | vorgeschlagen | Free Tier, Middleware am Edge, Secrets verfügbar; Vergleich im ADR |
| Auth | Signierte Einladungslinks, Key-Ableitung pro Zeitraum | vorgeschlagen | Details im Abschnitt Auth-Konzept |
| Design System | Brinkema – Portfolio Design (siehe Abschnitt Design System); keine Headless-Bibliothek: interaktive Teile mit nativem HTML und kleinen Vue-Islands | gesetzt | Eigener Look, wenig JS. Für Disclosure, Links, Toggle und Filter bringt eine Headless-Bibliothek nichts, was natives HTML nicht kann. Neubewertung, sobald Dialog, Combobox oder Popover gebraucht werden |
| Styling | CSS Custom Properties aus `tokens.json` des Design Systems, Container Queries, fluide Typografie mit `clamp()` | gesetzt | Komponenten reagieren auf ihren Container, nicht auf den Viewport |
| Dokumentation | arc42 + ADRs im MADR-Format, Diagramme in Mermaid, alles DE/EN | gesetzt | Siehe Abschnitt Dokumentation |
| Qualität | ESLint (inkl. `eslint-plugin-vue`, `eslint-plugin-vuejs-accessibility`), Prettier, Vitest + Vue Test Utils, Playwright, Stryker, dependency-cruiser, Lighthouse CI | gesetzt | Siehe Qualitätssicherung |
| Repo & CI | GitHub Flow (main + PR-Branches, Squash-Merge), GitHub Actions, Renovate | gesetzt | Siehe CI/CD |

**Zugriffsmodell – deny by default:** Die Middleware sperrt jede Route, die nicht explizit in einer zentralen Route-Policy freigegeben ist. In Stufe 1 sind nur `/invite` und die neutrale Hinweisseite freigegeben. Damit bleibt Stufe 2 eine Konfigurationsänderung statt eines Umbaus (Details im Auth-Konzept).

**Wichtiges Detail zum Hosting:** Vorgerenderte Seiten werden bei Cloudflare direkt als Static Assets ausgeliefert, ohne dass die Middleware läuft. In Stufe 1 werden deshalb alle Inhaltsseiten on-demand gerendert (`prerender = false` als Default). Öffentliche Seiten aus Stufe 2 dürfen später vorgerendert werden. Statische Assets wie CSS und Fonts bleiben öffentlich und dürfen deshalb keine Inhalte tragen: Lebenslauf und Bilder aus Case Studies nie in `public/`.

Das gilt auch für den Build-Output unter `/_astro/`: Importierte Bilder und Client-JavaScript sind dort öffentlich. Wie Inhalte und Bilder trotzdem geschützt bleiben, steht im Auth-Konzept unter Härtung.

### Getrennte Inhalte: privates Content-Repo

Das Code-Repo ist öffentlich, die Inhalte liegen in einem privaten Repo (z. B. `portfolio-content`). Sonst wären Profil, Case Studies und CV-Daten über GitHub frei lesbar und der Login sinnlos.

| Ort | Inhalt |
| --- | --- |
| Öffentliches Code-Repo | Code, Schemas, Tests, Architektur-Doku (arc42, ADRs), Beispielinhalte in `content-example/` |
| Privates Content-Repo | Profil, Projekte, CV-Daten und Bilder, jeweils DE/EN |

**Einbindung:**

- Der Build liest Inhalte aus dem Pfad in `CONTENT_DIR`. Standard ist `content-example/`, damit das Repo ohne Zugriff auf private Inhalte baut und testet.
- Lokal: Content-Repo daneben klonen, Pfad in `.env.local` setzen.
- CI: Pull Requests bauen und testen nur mit Beispielinhalten. Nur der Deploy-Job auf `main` checkt das Content-Repo per `actions/checkout` mit einem read-only Deploy Key aus. Dasselbe gilt für den manuellen Content-Preview-Workflow.
- Die echten Inhalte werden beim Deploy gegen die Schemas aus dem Code-Repo validiert. Fehlerhafte Inhalte stoppen den Deploy.
- Nach Änderungen am Content-Repo wird der Deploy manuell ausgelöst (`workflow_dispatch`). Optional später automatisch per `repository_dispatch`.

**Leck-Schutz im öffentlichen Repo:**

- Keine Build-Artefakte, Screenshots, Videos oder Playwright-Traces mit echten Inhalten hochladen. Das betrifft vor allem Deploy-Job und Smoke-Test.
- Lighthouse CI nie mit `temporary-public-storage` gegen echte Inhalte laufen lassen.
- Logs geben keine Inhalte aus.
- Workflows aus Forks bekommen keine Secrets. Der Deploy-Job läuft nur auf `main`.
- Persönliche Bilder (z. B. Profilfoto) liegen ausschließlich im Content-Repo und fallen damit nicht unter die MIT-Lizenz. Beispielinhalte verwenden neutrale Platzhalterbilder.

Die Architektur-Doku liegt bewusst im öffentlichen Repo: Sie beschreibt das eigene Projekt und enthält keine NDA-Inhalte. Das Threat Model nennt Maßnahmen, aber keine Secrets oder Schlüsseldetails.

## Repo-Struktur

Ein pnpm-Monorepo mit einer App und drei Packages. Abhängigkeiten laufen nur in eine Richtung: `apps` → `packages`, `ui` → `tokens`. dependency-cruiser setzt das durch.

```
# Öffentliches Code-Repo: portfolio (MIT)
/
├─ apps/
│  └─ web/                  # Astro-App
│     ├─ src/
│     │  ├─ access/
│     │  │  └─ policy.ts      # Route-Policy: deny by default, Allowlist
│     │  ├─ content.config.ts # Collections + Zod-Schemas, Quelle aus CONTENT_DIR
│     │  ├─ i18n/             # typisierte Wörterbücher für UI-Texte, Helfer für Sprachwechsel
│     │  ├─ middleware.ts     # wertet Policy aus, prüft Session, setzt Security-Header
│     │  ├─ pages/
│     │  │  ├─ [lang]/
│     │  │  │  ├─ index.astro    # Vorstellung       (Stufe 1 geschützt, Kandidat für Stufe 2)
│     │  │  │  ├─ architecture/  # arc42, ADRs       (Stufe 1 geschützt, Kandidat für Stufe 2)
│     │  │  │  ├─ projects/      # Case Studies      (immer geschützt)
│     │  │  │  ├─ cv/            # CV + PDF-Endpoint (immer geschützt)
│     │  │  │  ├─ privacy.astro  # Datenschutzhinweis (öffentlich)
│     │  │  │  └─ locked.astro   # Hinweisseite: abgelaufen / ungültig / keine Session (öffentlich)
│     │  │  ├─ invite/        # tauscht Token gegen Cookie, leitet in die Sprache weiter (öffentlich)
│     │  │  ├─ 404.astro
│     │  │  └─ 500.astro
│     │  └─ layouts/
│     └─ e2e/                 # Playwright, läuft gegen Beispielinhalte
├─ packages/
│  ├─ tokens/               # Design Tokens als CSS Custom Properties + Kontrast-Tests
│  ├─ ui/                   # Komponenten-Lib (Astro + Vue-Islands), Storybook
│  └─ auth/                 # reine Funktionen: Token signieren/prüfen, Key-Ableitung
├─ tools/
│  └─ invite-cli/           # pnpm invite --to "Firma X" --days 30 --lang en
├─ content-example/         # fiktive Beispielinhalte (DE/EN), gleiche Struktur wie das Content-Repo
├─ docs/
│  ├─ plan.md               # dieses Dokument
│  ├─ adr/
│  │  ├─ de/                # 0001-....md (MADR)
│  │  └─ en/
│  └─ architecture/
│     ├─ de/                # arc42 inkl. Mermaid-Diagramme
│     └─ en/
├─ .claude/
│  └─ settings.json         # Deny-Regeln für Claude Code (kein Merge, kein Push auf main, kein Force-Push)
├─ .github/
│  ├─ workflows/            # PR-Checks, Deploy, Content-Preview, Content-Deploy, Smoke-Test, Zeitgesteuert
│  └─ pull_request_template.md
├─ AGENTS.md / CLAUDE.md
├─ commitlint.config.ts     # Typen und Scopes für Conventional Commits
├─ lefthook.yml             # Git-Hooks, u. a. commit-msg mit commitlint
├─ LICENSE
└─ pnpm-workspace.yaml

# Privates Content-Repo: portfolio-content
/
├─ de/                      # Profil, Projekte, CV-Daten
├─ en/
├─ assets/                  # Profilfoto, Bilder aus Case Studies
└─ design-previews/         # Vorschauen des Design Systems (enthalten echte Inhalte), nur Referenz
```

`packages/auth` ist bewusst ein eigenes Package ohne Abhängigkeit zu Astro. So bleibt die sicherheitskritische Logik framework-unabhängig und vollständig unit-testbar. Middleware und Invite-CLI nutzen dieselben Funktionen.

## Auth-Konzept

Zugang erfolgt über signierte Einladungslinks pro Empfänger, ohne Datenbank und ohne Passwort. Ein zusätzliches Passwort bringt nur etwas, wenn es über einen zweiten Kanal verschickt wird.

### Schlüssel & Rotation (Vorschlag)

- Ein langlebiges **Root Secret** liegt als Cloudflare-Secret und lokal für die Invite-CLI vor.
- Daraus wird pro Zeitraum (z. B. Monat) per HKDF ein **Signing Key** abgeleitet. Die Key-ID im Token ist der Zeitraum.
- Geprüft werden der aktuelle und der vorherige Zeitraum. Die Rotation passiert damit automatisch, ohne Cron und ohne Redeploy.
- Notfall: Root Secret manuell rotieren. Damit werden alle bestehenden Links ungültig.
- Widerruf einzelner Links über eine Denylist (Token-ID) in Cloudflare KV. Pflicht, weil weitergeleitete Links sonst bis zum Ablauf gültig bleiben (siehe Härtung).

### Ablauf

1. Ich erzeuge lokal einen Link: `pnpm invite --to "Firma X" --days 30`. Ausgabe: Link + QR-Code.
2. Empfänger öffnet `/invite?t=<token>`.
3. Middleware prüft Signatur, Ablaufdatum und ggf. Denylist.
4. Bei Erfolg: Session-Cookie (Präfix \_\_Host-, HttpOnly, Secure, SameSite=Lax) mit eigener Session-Signatur und der Token-ID setzen und auf eine saubere URL ohne Token weiterleiten.
5. Jede weitere Anfrage prüft die Middleware gegen die Route-Policy. Nicht freigegebene Routen brauchen ein gültiges Session-Cookie, sonst Redirect auf die neutrale Hinweisseite.

### Hinweis- und Fehlerseiten

Eine Hinweisseite mit drei Varianten, dazu 404 und 500. Alle Seiten sind zweisprachig, ohne Inhalte und `noindex`.

| Fall | Erkennung | Status | Botschaft |
| --- | --- | --- | --- |
| Link abgelaufen | Signatur gültig, Ablaufdatum überschritten | 410 | Link ist abgelaufen, bitte neuen Link anfordern (mit Kontaktmöglichkeit) |
| Link ungültig | Signatur fehlt, falsch oder Key-ID unbekannt | 403 | Link ist ungültig, generisch ohne technische Details |
| Keine Session | Kein oder abgelaufenes Session-Cookie | 401 | Zugang nur per Einladung. Die Seite zeigt bewusst keinen Statuscode, weil sie für Eingeladene eher Hinweis als Fehler ist. Header WWW-Authenticate mit eigenem Schema (z. B. Invitation), wie HTTP es für 401 verlangt |
| Nicht gefunden | Route existiert nicht, nur mit gültiger Session | 404 | Seite nicht gefunden, Link zur Startseite |
| Serverfehler | Unerwarteter Fehler | 500 | Generische Meldung, Details nur im Log |

**Wichtig:** Ohne Session sieht eine nicht existierende Route genauso aus wie eine geschützte (Hinweisseite „Keine Session“). So lässt sich die Seitenstruktur nicht von außen erraten. Ein echter 404 erscheint erst mit gültiger Session.

Die Unterscheidung zwischen „abgelaufen“ und „ungültig“ ist bewusst: Ein Empfänger mit abgelaufenem Link soll wissen, dass er einfach nachfragen kann. Ein manipulierter Link bekommt keine Details.

Die Hinweisseite trägt neutrale Open-Graph-Tags. Link-Vorschauen in Mail, Teams oder LinkedIn sehen dadurch sauber aus, ohne Inhalte zu verraten.

### Lieferstufe 2: Teile öffentlich machen

Stufe 2 ist kein Umbau, sondern eine dokumentierte Freigabe einzelner Routen:

1. ADR schreiben: welche Seiten, warum, Indexierung ja oder nein.
2. Routen in die Route-Policy aufnehmen.
3. Optional: diese Seiten vorrendern.
4. Für die freigegebenen Seiten `X-Robots-Tag` und `robots.txt` anpassen, falls sie gefunden werden sollen.
5. Rechtliches neu bewerten: In Stufe 1 ist außer Hinweisseite und Datenschutzhinweis nichts öffentlich, ein Impressum ist deshalb nicht vorgesehen. Sobald Inhalte öffentlich werden, Impressumspflicht (DE) bzw. Offenlegungspflicht (AT) prüfen, ggf. ein Impressum ergänzen (zweisprachig, in der Allowlist) und den Datenschutzhinweis anpassen.
6. Route-Policy-Test und arc42 (Kapitel 2, 8, 10) aktualisieren.

**Voraussetzung schon in Stufe 1:** Layouts und Navigation kennen den Session-Status. Ohne Session blenden sie Links auf und Teaser von geschützten Inhalten aus. Sonst würde eine später öffentliche Seite z. B. Projekttitel aus der Navigation preisgeben.

### Schutz vor Indexierung & Crawling

- Echte serverseitige Auth ist die einzige echte Grenze.
- `X-Robots-Tag: noindex, nofollow` als HTTP-Header auf allen Routen, auch auf PDFs.
- Geschützte Pfade nicht in `robots.txt` auflisten.
- `Referrer-Policy: no-referrer`, damit Tokens nicht über Referrer abfließen.
- Security-Header (CSP, HSTS, `X-Content-Type-Options`, `Permissions-Policy`) zentral in der Middleware.
- Optional: Bot-Blocking bei Cloudflare inkl. AI-Crawler.
- Preview-Deployments müssen ebenfalls geschützt und `noindex` sein.

### Härtung

**Öffentliche Build-Assets:** Astro legt importierte Bilder und Client-JavaScript als statische Dateien unter `/_astro/` ab. Cloudflare liefert sie ohne Middleware aus, sie sind also ohne Login abrufbar.

- Bilder aus dem Content-Repo (Profilfoto, Case Studies) laufen nicht durch die Asset-Pipeline, sondern werden über einen geschützten Endpoint ausgeliefert (z. B. aus R2).
- Vue-Islands importieren nie Inhalte, sondern erhalten sie ausschließlich als Props.
- Ein Test durchsucht nach dem Build `dist/` nach echten Inhalten und Content-Bildern und schlägt bei Treffern fehl.

**Caching:** Alle geschützten Antworten tragen `Cache-Control: private, no-store`, damit weder Edge noch Browser sie ohne Session ausliefern. Per Test abgesichert.

**Zweit-Adressen:**

- Die `workers.dev`-Adresse ist für Produktion deaktiviert. Nur die eigene Domain antwortet.
- Previews nutzen ein eigenes Root Secret. Preview-Links funktionieren nicht auf Produktion und umgekehrt.

**Session-Cookie:** Präfix `__Host-`, `HttpOnly`, `Secure`, `SameSite=Lax`. Lax statt Strict, weil sonst ein späterer Klick aus einer Mail ohne Session ankommt.

**Token-Prüfung:** fester Algorithmus, Signaturprüfung über `crypto.subtle.verify` (zeitkonstant), nur Standardprimitive (HMAC, HKDF), keine eigene Kryptografie.

**Header:** strikte CSP mit Hashes statt `unsafe-inline` und `frame-ancestors 'none'` gegen Clickjacking, zusätzlich zu den Headern im Abschnitt oben. Einzige Inline-Ausnahme ist der Ein-Zeiler für die Animationen, per Hash freigegeben. Astro bringt eine CSP-Unterstützung mit automatischen Hashes mit; ihren Status bei Projektstart prüfen. Das Theme kommt ohne Script aus (siehe Design System).

**Rate Limiting auf `/invite`:** Erraten lässt sich ein Token praktisch nicht. Das Rate Limiting verhindert, dass ein Bot das Tageslimit des Free Tiers aufbraucht und die Seite damit für den Rest des Tages ausfällt.

**Widerruf:** Die Denylist in Cloudflare KV ist Pflicht. Die Session trägt die Token-ID des Einladungslinks, und die Middleware prüft die Denylist auch für bestehende Sessions. So wirkt ein Widerruf sofort, nicht erst nach Ablauf der Session.

**Restrisiko:** Ein Einladungslink wirkt wie ein Schlüssel. Wer ihn weitergeleitet bekommt, hat bis zum Ablauf oder Widerruf Zugriff. Begrenzt wird das durch kurze Laufzeiten und den Widerruf. Dieses Restrisiko wird im Threat Model bewusst akzeptiert.

### Offene Fragen zum Auth-Konzept

- Maximale Laufzeit eines Links und einer Session.
- Soll protokolliert werden, welcher Link verwendet wurde? Falls ja: minimal halten und datenschutzrechtlich prüfen.
- Auslieferung des CV-PDFs: über einen geschützten Endpoint aus R2 oder als Asset im Worker-Bundle.

## Mehrsprachigkeit (DE/EN)

Deutsch und Englisch werden von Anfang an gleichwertig unterstützt. i18n nachträglich einzubauen ist deutlich teurer als von Beginn an.

- **Ansatz:** Astros eingebautes i18n, keine zusätzliche i18n-Library. Festgehalten als ADR, mit Paraglide JS (inlang) als betrachteter Option und Upgrade-Pfad, falls Textmenge, Pluralformen oder Platzhalter deutlich wachsen.
- **Routing:** Astro-i18n-Routing mit Präfix in jeder URL (`/de/…`, `/en/…`). Links in die jeweils andere Sprache über die Astro-Helfer.
- **Sprachwahl beim ersten Besuch:** `/invite` leitet anhand eines optionalen Sprachparameters im Link (`pnpm invite --lang en`), sonst anhand von `Accept-Language` weiter.
- **Language Switcher:** Auf jeder Seite, wechselt auf dieselbe Seite in der anderen Sprache. Die Wahl wird in einem Cookie gespeichert.
- **UI-Texte:** Typisierte Wörterbücher in TypeScript (`de.ts`, `en.ts`) plus kleiner `t()`-Helfer. Das englische Wörterbuch muss den Typ des deutschen erfüllen; fehlt ein Schlüssel, schlägt der Typecheck fehl.
- **Vue-Islands:** Erhalten ihre Texte als Props von der Astro-Seite. Kein `vue-i18n` im Client.
- **Inhalte:** Content Collections je Sprache mit gleichem Slug. Ein Test stellt sicher, dass jeder Eintrag in beiden Sprachen existiert. Das gilt auch für ADRs und arc42.
- **Datums- und Zahlenformate:** über die eingebaute `Intl`-API.
- **Lebenslauf:** Je Sprache ein PDF, Download passend zur aktuellen Sprache.
- **Accessibility:** `lang`-Attribut am `<html>`-Element je Sprache; der Switcher ist per Tastatur bedienbar und hat ein verständliches Label.

### Zusammenspiel mit Auth: Middleware und Route-Policy

- **Reihenfolge der Middleware** wird explizit über Astros `sequence()` festgelegt und im ADR begründet. Vorschlag: zuerst Security-Header, dann Auswertung der Route-Policy und Session-Prüfung, danach Sprachauflösung. So erreicht keine Anfrage ohne gültige Session sprachspezifische Inhalte, und Redirects auf die Hinweisseite landen trotzdem in der passenden Sprache.
- **Route-Policy ist sprachunabhängig:** Freigaben werden als Muster mit Sprachplatzhalter definiert (z. B. `/:lang/locked`, `/:lang/privacy`), nicht pro Sprache einzeln. Neue Sprachen oder Seiten können dadurch keine Lücke reißen.
- **Test:** Der Route-Policy-Test läuft für jede gebaute Route in beiden Sprachpräfixen. Zusätzlich prüft ein Test, dass jede Route in der Allowlist für alle konfigurierten Sprachen gilt.

## Design System

**Maßgeblich ist ausschließlich das Design System [Brinkema – Portfolio Design](https://claude.ai/artifact/Xhtp3xdMRwtYZXhzhiQueU)** (V5), im Repo als Snapshot unter `docs/design-system/` (Einstieg: `docs/design-system/SNAPSHOT.md`). Es wurde im Design-Track erarbeitet und am 19.10.2026 freigegeben. Es enthält Tokens, Logo, alle Komponenten mit Zuständen in Light und Dark sowie Entwürfe aller Seiten (Desktop und mobil). Grundlage ist das [Design-Briefing – Portfolio-Website](https://claude.ai/artifact/7MKgiJmUwkzBKtasyFn8zv). Die Texte in den Vorschauen sind teils Platzhalter; maßgeblich für Inhalte ist das Content-Repo.

### Übergabe ins Repo

Das Design System wird als Snapshot unter `docs/design-system/` im öffentlichen Code-Repo abgelegt. Änderungen am Design entstehen zuerst im Design System und kommen per neuem Export ins Repo, nie umgekehrt.

| Datei | Zweck |
| --- | --- |
| `tokens.json` | Einzige Quelle für Farben (Light/Dark), Typografie, Abstände, Radien, Bewegung. Grundlage für `packages/tokens` (CSS Custom Properties). |
| `token-uebergabe.md` | Token-Tabelle mit geprüften Kontrasten. Referenz für den Kontrast-Test. |
| `components/bundle.css` | Fertige Styles aller Komponenten (Präfix `bk-`, Container Queries). Wird in `packages/ui` übernommen. |
| `components/<Name>/README.md` | Verhalten, Zustände, Barrierefreiheit und Bewegung je Komponente. |
| `components/index.d.ts` | Props-Schnittstellen je Komponente. |
| `entscheidungen.md`, `README.md` | Gestaltungsentscheidungen und Regeln. |
| `fonts/`, `assets/logos/` | Selbst gehostete Schriften und Logo-Dateien (Wortmarke, Monogramm, Favicon). |
| `components/bundle.js`, `components/lib/` | Nur Referenz-Implementierung in React (inkl. React 18 für die Vorschauen). Wird nicht übernommen. |

**Vorschauen (`preview.html`) liegen nicht im öffentlichen Repo**, sondern im privaten Content-Repo unter `design-previews/`: Sie enthalten echte Lebenslaufdaten, Zertifikats-Links und Case-Study-Inhalte (siehe Rahmenbedingung NDA und Arbeitsregel 11). Dort sind sie ohne Build im Browser öffenbar (`index.html`, Theme per `?theme=light|dark`). Texte, Screenshots oder Traces daraus gelangen nie ins öffentliche Repo.

Nachbau: Komponenten entstehen als `.astro` (statisch) bzw. Vue-Islands (interaktiv) mit derselben HTML-Struktur und denselben Klassennamen wie die Referenz. So gilt `bundle.css` unverändert, und die Vorschauen bleiben vergleichbar.

### Komponenten für packages/ui

| Gruppe | Komponenten |
| --- | --- |
| Grundlagen | Wordmark, Icon |
| Navigation | SiteHeader (mit und ohne Session), SectionNav, DocTabs, Toc, Pager, SiteFooter, LanguageSwitch, ThemeToggle |
| Aktionen | Button, TextLink, DownloadButton |
| Inhalt | Hero, Portrait, PageHeader, FactList, FocusList, Metric, AccentBand, CaseTeaser, DecisionCompare, CertList, Timeline, ADRList, Consequences, Tag, StatusBadge, Callout |
| Text | Prose, Mark, SectionHeading, CodeBlock, Table, Figure |
| Seiten | NoticePage (410 abgelaufen, 403 ungültig, Einladungshinweis, 404, 500) |
| Layout | Seite, Sticky-Header, Container, Abschnitt und Band, zweispaltig, Inhaltsverzeichnis seitlich, A4-Druckansicht |

Seitenentwürfe: Startseite, Case Study, Projekte, Lebenslauf und Druckfassung, arc42, ADR-Liste, ADR-Detail, Datenschutz, Hinweis- und Fehlerseiten. Der CodeBlock hebt Syntax mit fünf Rollen hervor (`color-code-*`); das Highlighting passiert beim Rendern auf dem Server, nicht im Client.

### Theme Light und Dark

- Beide Themes sind gleichwertig. Ohne Wahl folgt die Seite `prefers-color-scheme`; der Umschalter im Header überschreibt das.
- Umsetzung über `data-theme` am `<html>`-Element, Tokens je Theme.
- Das Theme muss vor dem ersten Paint feststehen, damit nichts aufblitzt.
- Die Wahl wird in einem Cookie gespeichert, und die Middleware setzt data-theme serverseitig ins HTML. Ohne Cookie greift prefers-color-scheme über eine Media-Query; die Token-CSS braucht dafür eine Variante ohne data-theme. Kein Inline-Script, kein Aufblitzen, funktioniert auch ohne JavaScript. Passt, weil alle Inhaltsseiten pro Anfrage gerendert werden und private, no-store tragen. Das Theme-Cookie gehört in den Datenschutzhinweis.

### Bewegung

Bewegung erklärt einen Ablauf oder antwortet auf eine Aktion, nie Dekoration. Details stehen im Design System in der Karte Motion und im Design-Briefing (Abschnitt Bewegung).

- **Diagramme bauen sich auf:** beim ersten Hineinscrollen erst Knoten, dann Kanten, zuletzt der hervorgehobene Pfad.
- **Entscheidung löst sich auf:** Optionen erscheinen nacheinander, dann wird die gewählte hervorgehoben, danach folgen die Ergebniszahlen.
- **Seitenwechsel:** Cross-Document View Transitions per CSS. Der Titel im Case-Study-Teaser wird zur Seitenüberschrift (`view-transition-name: bk-case-<Nummer>`, eindeutig pro Seite).
- **Hover:** ein einheitliches Vokabular für alles Klickbare (Pfeile rücken nach, Unterstriche laufen ein oder werden dicker, Navigation mit Indikatorlinie).
- Jede Choreografie läuft einmal. Dauern und Versatz kommen aus den Bewegungs-Tokens.
- **Progressive Enhancement:** Ohne JavaScript oder bei `prefers-reduced-motion` ist alles sofort vollständig da, Seitenübergänge entfallen. Im Druck ist immer alles sichtbar.
- Der Startzustand animierter Elemente muss vor dem ersten Paint gesetzt werden, sonst blitzt der Endzustand kurz auf. Umsetzung: Ein gehashter Inline-Ein-Zeiler setzt eine Klasse (JavaScript aktiv, Animationen erlaubt); die eigentliche Logik liegt in einem externen Script über 'self'. Lädt dieses Script nicht oder bricht es ab, erzwingt ein Fallback den Endzustand (siehe Ladeverhalten).

### Content-Modell der Case Study

Die Case-Study-Komponenten brauchen strukturierte Felder, nicht nur Fließtext:

- Nummer, Slug, Jahr, Dauer, Titel, Kurzfassung
- Rolle, Team, Technologien (Tags, auch für den Filter der Projektübersicht)
- 1–3 Kennzahlen (Wert und Label), nur belegte Zahlen
- Teaser-Visual (kleine SVG-Skizze)
- Lead mit einem markierten Kernsatz
- Abschnitte: Ausgangslage, Meine Rolle, Rahmenbedingungen, Betrachtete Optionen, Entscheidung, Trade-offs, Ergebnis
- Optionsvergleich: Kriterien (Schlüssel und Label) und 2–4 Optionen mit Werten je Kriterium; genau eine ist gewählt
- Ergebniszahlen der gewählten Option
- Diagramm (SVG mit Bildunterschrift, genau ein hervorgehobener Pfad)
- Learning (ein bis zwei Sätze)

Im Fließtext werden Komponenten gebraucht: Textmarker (Mark), Optionsvergleich, Abbildung, Callout. Ob das über Markdown mit Direktiven oder über MDX läuft, ist offen und wird als ADR entschieden. Die übrigen Collections (Profil, CV-Daten) folgen den Feldern der jeweiligen Komponenten.

### Schriften und Lizenzen

- Newsreader (Serif, variabel, normal und kursiv) für Lesetext und Zahlen, Geist Mono (variabel) für Bedienelemente und Labels.
- Beide selbst gehostet als woff2, keine Anfragen an Dritte.
- Beide stehen unter der SIL Open Font License 1.1. Die Lizenztexte liegen neben den Schriftdateien im Repo, und die README vermerkt, dass die Schriften nicht unter MIT fallen.

### Druckfassung des Lebenslaufs

- Entwurf im Design System: A4, Schwarz-Weiß, ohne Navigation. Profil, Berufserfahrung als Zeitleiste, Zertifikate mit ausgeschriebener Nachweis-URL, Kompetenzen und Sprachen.
- Das PDF wird im Build aus der Print-Route erzeugt, je Sprache eines. Mit welchem Werkzeug (z. B. Playwright), ist offen und wird als ADR entschieden.

### Interaktive Teile

| Element | Ohne JavaScript | Mit JavaScript |
| --- | --- | --- |
| Mobiles Menü | `<details>`, voll bedienbar | – |
| Sprachwechsel | echte Links | – |
| Mobiles Inhaltsverzeichnis | `<details>` | – |
| Theme-Umschalter | Systemeinstellung gilt | Umschalten und Speichern |
| Tag-Filter Projektübersicht | alle Projekte sichtbar | Filtern (Island) |
| Status-Filter ADR-Liste | vollständige Liste | Filtern (Island) |
| Bewegungen | Endzustand sofort sichtbar | Choreografie beim Scrollen |
| Seitenübergänge | normaler Seitenwechsel | View Transitions per CSS |

Islands erhalten Inhalte ausschließlich als Props (siehe Härtung).

## Ladeverhalten

Dokumentiert in arc42 Kapitel 8 (Querschnittskonzepte). Grundsatz: Jede Seite kommt als fertiges HTML aus dem Worker, Inhalte werden nie clientseitig nachgeladen. Ladeindikatoren lösen deshalb kein echtes Problem. Entscheidend sind schnelle Antworten und eine Seite, die beim Laden nicht springt.

- **Kein Skeleton Loading, keine eigenen Ladeindikatoren:** Ein Skeleton würde hier nur einen künstlichen Zwischenzustand erzeugen, mit mehr JavaScript, möglichem Layout Shift und zusätzlichem a11y-Aufwand, und widerspricht dem Progressive Enhancement. Die Filter-Islands arbeiten auf bereits gerenderten Daten. Neubewertung, sobald Inhalte clientseitig nachgeladen werden.
- **Seitenwechsel:** Ladeanzeige des Browsers plus View Transitions, kein eigener Fortschrittsbalken. Die Stellschraube ist die Antwortzeit des Workers inklusive KV-Lookup für die Denylist; sie wird in Phase 2 gemessen. Prefetching ist vorerst nicht vorgesehen (siehe Offene Entscheidungen).
- **Bilder:** Die einzige echte Nachlade-Stelle, weil Bilder über den geschützten Endpoint kommen. Jedes Bild trägt `width`/`height` bzw. `aspect-ratio`, dazu eine flächige Platzhalterfarbe aus den Tokens; fehlt ein passender Token, wird er im Design System angefragt. Das Porträt ist LCP-Kandidat: kein `loading="lazy"`, stattdessen `fetchpriority="high"` oder Preload. Bilder unterhalb des sichtbaren Bereichs laden mit `loading="lazy"`.
- **Schriften:** Preload der meistgenutzten woff2-Schnitte. Die Fallback-Schrift bekommt Metrik-Overrides (`size-adjust`, `ascent-override`, `descent-override`), damit der Wechsel auf die Webfont nichts verschiebt.
- **Animations-Startzustand:** Der Inline-Einzeiler versetzt Elemente vor dem ersten Paint in den Startzustand. Lädt das externe Script danach nicht oder bricht es ab, dürfen Inhalte nicht unsichtbar bleiben. Ein Fallback (z. B. verzögerte CSS-Animation oder Timeout) erzwingt dann den Endzustand.

**Absicherung:** CLS-Budget in Lighthouse CI und ein Playwright-Test mit blockiertem Animations-Script (siehe Qualitätssicherung).

## Qualitätssicherung & Fitness Functions

Jedes Qualitätsziel wird durch einen automatischen Check abgesichert. Diese Checks sind die Fitness Functions der Architektur und gleichzeitig die Sensoren für AI-Agents.

| Check | Werkzeug | Schwelle |
| --- | --- | --- |
| Unit-Tests inkl. `.astro`-Komponenten | Vitest + Astro Container API | Coverage ≥ 80 % (Lines, Branches, Functions) |
| Testqualität | Stryker (Mutation Testing) | Startwert festlegen, schrittweise erhöhen |
| E2E inkl. Auth-Flow | Playwright | Gültiges, abgelaufenes, manipuliertes Token; mehrere Viewports |
| Accessibility automatisch | axe-core in Playwright, ESLint-a11y-Plugin | 0 Verstöße |
| Kontrast der Design Tokens | Vitest-Test über alle Text/Hintergrund-Paare, Light + Dark | WCAG AA (4,5:1 Text, 3:1 großer Text und UI) |
| Performance & a11y-Score | Lighthouse CI | Budgets festlegen, a11y = 100 |
| Layout-Stabilität | Lighthouse CI | CLS ≤ 0,1 |
| Bundle-Größe | size-limit o. ä. | Budget pro Island |
| Modulgrenzen | dependency-cruiser | Keine Verletzung der Abhängigkeitsregeln |
| Typen | `astro check`, `tsc --noEmit` | 0 Fehler |
| Lint & Format | ESLint, Prettier | 0 Fehler |

**Manuell vor jedem Release:** Tastaturnavigation, Screenreader (VoiceOver, NVDA), Zoom 200 % und 400 %, `prefers-reduced-motion`, sichtbarer Fokus und Klickflächen ≥ 24 × 24 px. Automatische Tools finden nur einen Teil der Accessibility-Probleme.

`packages/auth` wird test-first entwickelt, weil hier ein Fehler die wichtigste Anforderung bricht.

**Route-Policy-Test (Fitness Function):** Ein E2E-Test ruft jede gebaute Route ohne Session auf und erwartet den Redirect auf die Hinweisseite, außer für Routen in der Allowlist. Neue Seiten sind damit automatisch geschützt. Jede Öffnung in Stufe 2 ist eine bewusste, getestete Änderung.

**Weitere Tests aus den neuen Anforderungen:**

- E2E je Variante der Hinweisseite (abgelaufen, ungültig, keine Session) inklusive HTTP-Status.
- Test, dass eine unbekannte Route ohne Session nicht von einer geschützten zu unterscheiden ist.
- Vollständigkeit der Übersetzungen: UI-Texte über den Typecheck, Inhalte über einen Test, der jeden Eintrag in beiden Sprachen erwartet.
- Language Switcher: Wechsel landet auf derselben Seite, `lang`-Attribut stimmt, axe ohne Befund in beiden Sprachen.
- Security-Tests: Build-Output (dist/) enthält keine echten Inhalte oder Content-Bilder; geschützte Antworten tragen Cache-Control: private, no-store; Session-Cookie hat die geforderten Attribute; CSP und weitere Security-Header sind gesetzt; ein widerrufener Link und eine Session mit widerrufener Token-ID werden abgewiesen; ein Preview-Token wird von Produktion abgelehnt.
- Ladeverhalten: Bei blockiertem Animations-Script sind alle Inhalte vollständig sichtbar; jedes Bild trägt Abmessungen; das Porträt wird nicht lazy geladen.

## Git-Workflow

### Branching & Merge-Strategie

GitHub Flow: `main` plus kurzlebige PR-Branches. Es gibt bewusst keinen `dev`-Branch.

- **Branch-Namen:** `feat/…`, `fix/…`, `docs/…`, `refactor/…`, `chore/…`, `ci/…`; kurz, englisch, kebab-case (z. B. `feat/invite-cli`).
- **Jede Änderung am Code-Repo läuft über einen PR nach `main`.** Merge ausschließlich per Squash. Der PR-Titel wird dabei zur Commit-Message auf `main`.
- **Rollen:** Max reviewt und mergt alle PRs. Claude Code legt Branches an, committet und erstellt PRs nach Vorlage (`gh pr create`), mergt aber nie.
- **Preview statt Staging:** Jeder PR erhält ein geschütztes Preview-Deployment mit Beispielinhalten. Das ersetzt eine eigene Staging-Umgebung.
- **Ruleset auf `main`:** Änderungen nur per PR, alle Checks grün, nur Squash-Merge, kein Force-Push, keine Löschung.
- **PR-Vorlage** (`.github/pull_request_template.md`): Was und Warum, verlinkte ADRs, Checkliste (Tests, DE/EN vollständig, Doku aktualisiert), Hinweis auf das Preview.
- **ADR:** Entscheidung für GitHub Flow und gegen `dev`. Begründung: seltene Änderungen, Preview pro PR. Auslöser für eine Neubewertung: Mehrere Features entstehen parallel oder Releases sollen gebündelt werden. Dann `dev` als Staging-Branch einführen.

### Commit-Konventionen

- **Format:** Conventional Commits `type(scope): subject`, z. B. `feat(auth): add key derivation per period`.
- **Betreff:** Englisch, Imperativ, kleingeschrieben, ohne Punkt am Ende, höchstens 72 Zeichen.
- **Body** erklärt das Warum. **Footer** verweist auf ein ADR (`Refs: ADR-0003`) oder markiert `BREAKING CHANGE:`.
- **Typen:** `feat`, `fix`, `refactor`, `test`, `docs`, `build`, `ci`, `chore`, `perf`.
- **Scopes (Pflicht):** `web`, `ui`, `tokens`, `auth`, `invite-cli`, `docs`, `ci`, `deps`, `repo` (für repo-weite Änderungen).
- **Atomare Commits auf dem Branch:** eine logische Änderung pro Commit, Tests im selben Commit, keine „WIP“- oder „fix stuff“-Commits. Auf `main` landet ein Squash-Commit pro PR.
- **Durchsetzung:** commitlint mit projektspezifischer Typ- und Scope-Liste als `commit-msg`-Hook über lefthook. In der CI zusätzlich ein Check auf den PR-Titel und commitlint über alle Commits des PRs, weil lokale Hooks mit `--no-verify` umgangen werden können.

## CI/CD-Pipeline

GitHub Actions. Änderungen erreichen `main` ausschließlich über PRs mit grünen Checks (Ruleset, siehe Git-Workflow).

**Pull Request:**

1. PR-Titel-Check (Conventional Commits) und commitlint über alle Commits des PRs
2. Install (pnpm, mit Cache)
3. Lint, Format-Check, Typecheck
4. Unit-Tests mit Coverage-Gate
5. dependency-cruiser
6. Build mit Beispielinhalten (inkl. CV-PDF)
7. Playwright E2E + axe
8. Lighthouse CI + Bundle-Size
9. Geschütztes Preview-Deployment mit Beispielinhalten (ersetzt Staging)

**Merge auf `main`:** dieselben Checks, danach Checkout des Content-Repos, Build mit echten Inhalten und Deploy auf Cloudflare.

**Content-Preview (manuell, `workflow_dispatch`):** Eingabe ist ein Branch des Content-Repos. Der Workflow baut den aktuellen Stand von `main` mit diesen Inhalten und veröffentlicht ein geschütztes Preview. So lassen sich Inhaltsänderungen prüfen, bevor sie live gehen.

**Content-Deploy (manuell, `workflow_dispatch`):** Nach dem Merge im Content-Repo löst Max den Deploy auf Produktion aus. Optional später automatisch per `repository_dispatch`.

**Zeitgesteuert (z. B. wöchentlich):** Stryker Mutation Testing (läuft länger) und Dependency-Audit.

**Begleitend:** Renovate für Updates, Secrets ausschließlich in GitHub- bzw. Cloudflare-Secrets, niemals im Repo.

**Smoke-Test gegen Produktion:** Täglicher Playwright-Lauf mit einem Test-Einladungslink (eigener Test-Empfänger, kurze Laufzeit). Prüft Hinweisseite, Einladungs-Flow und eine geschützte Seite. Bei Fehlschlag benachrichtigt GitHub per Mail.

**Supply-Chain-Sicherheit:**

- GitHub Secret Scanning mit Push Protection aktiviert (für öffentliche Repos kostenlos).
- GitHub Actions auf Commit-SHA pinnen, Renovate hält die SHAs aktuell.
- Minimale Berechtigungen pro Workflow (`permissions:` explizit, Standard nur Lesen).
- Lockfile ist verbindlich (`pnpm install --frozen-lockfile`), `pnpm audit` im zeitgesteuerten Workflow.
- Secrets nur in GitHub- bzw. Cloudflare-Secrets; Root Secret zusätzlich im Passwortmanager gesichert.
- Account-Härtung: 2FA mit Passkey für GitHub und Cloudflare; Cloudflare-API-Token für die CI mit minimalen Rechten (nur Deploy des einen Workers).
- Runbook für den Notfall: Root Secret rotieren, neu deployen, betroffene Empfänger neu einladen.
- Optional: OpenSSF Scorecard als Badge.

**Reproduzierbarkeit:** Node- und pnpm-Version sind gepinnt (`packageManager`-Feld in der `package.json`, `.nvmrc`). Lokal, in CI und für Claude Code gilt dieselbe Toolchain.

## Dokumentation

Die Architektur wird mit einem schlanken arc42 dokumentiert, ergänzt um ADRs und C4-Diagramme als Code. Alles liegt als Markdown im öffentlichen Code-Repo, auf Deutsch und Englisch, und wird über eine Content Collection auf der Seite gerendert, in Stufe 1 hinter dem Login.

| arc42-Kapitel | Umfang | Inhalt |
| --- | --- | --- |
| 1 Einführung & Ziele | voll | Qualitätsziele aus diesem Plan |
| 2 Randbedingungen | voll | NDA, Kosten, kein Indexing |
| 3 Kontext | voll | C4 Level 1: Besucher, Cloudflare, GitHub |
| 4 Lösungsstrategie | voll | Kernentscheidungen in wenigen Sätzen |
| 5 Bausteinsicht | voll | C4 Level 2/3: App, Packages, Abhängigkeiten |
| 6 Laufzeitsicht | knapp | Sequenzdiagramm Auth-Flow |
| 7 Verteilungssicht | knapp | Ein Diagramm |
| 8 Querschnittskonzepte | voll | Auth, Testing, Accessibility, Security-Header, Ladeverhalten, ggf. i18n |
| 9 Entscheidungen | Verweis | Link auf `docs/adr/` |
| 10 Qualitätsanforderungen | voll | Qualitätsszenarien, jedes mit verlinktem Test |
| 11 Risiken | voll | Threat Model (STRIDE light), NDA, Token-Leak, Vendor-Lock-in |
| 12 Glossar | weglassen | nur falls nötig |

**Kern-Idee:** Jedes Qualitätsszenario in Kapitel 10 verweist auf den Test, der es prüft. Beispiel: „Ohne gültiges Token kein Zugriff auf /projects“ → Playwright-Test. Die Doku wird so bei jedem Build verifiziert.

**Threat Model:** Eine leichte STRIDE-Analyse in Kapitel 11. Für jede Bedrohung (z. B. gefälschtes Token, abgefangener Link, kompromittierte Dependency, geleaktes Root Secret, weitergeleiteter Einladungslink als bewusst akzeptiertes Restrisiko) stehen Gegenmaßnahme und, wo möglich, der Test, der sie absichert.

**ADRs im MADR-Format:**

- Gliederung: Kontext und Problem, Entscheidungstreiber, betrachtete Optionen, Entscheidung mit Konsequenzen, Pro und Contra je Option.
- Der Abschnitt zur Bestätigung („Confirmation“) verweist auf den Test oder die Fitness Function, die die Entscheidung absichert. Damit passen ADRs und Kapitel 10 zusammen.
- YAML-Frontmatter mit Status (proposed, accepted, superseded, deprecated), Datum und Nummer. Eine Content Collection mit Zod-Schema liest sie ein und rendert einen ADR-Index mit Status. Optional kommt ein Block options dazu: Kriterien, Werte je Option und die gewählte Option. Daraus rendert die ADR-Seite den Optionsvergleich als Karten. Der MADR-Text bleibt vollständig, und ein Test prüft, dass die Optionsnamen zu „Considered Options“ passen. Ohne den Block zeigt die Seite nur den Text.
- Nummeriert, je Sprache eine Datei mit gleicher Nummer (`docs/adr/de/0001-….md`, `docs/adr/en/0001-….md`).
- Akzeptierte ADRs werden nicht mehr inhaltlich geändert, sondern durch neue ersetzt. Der Übersetzungsaufwand bleibt dadurch begrenzt.
- Warum nicht Nygard: Das Format kennt keine betrachteten Optionen. Genau die Abwägung zwischen Optionen soll die Seite aber zeigen.

**Diagramme in Mermaid:**

- GitHub rendert Mermaid direkt in Markdown. Die Doku ist damit auch im öffentlichen Repo ohne Build lesbar.
- Kein zusätzliches Tooling (z. B. Java für Structurizr), eine Toolchain für alles.
- Diagramme stehen direkt in den Markdown-Dateien je Sprache, Beschriftungen also natürlich DE/EN.
- Beim Build als SVG vorrendern, damit keine Mermaid-Library im Client lädt.
- Accessibility: jedes Diagramm mit `accTitle` und `accDescr`.
- Hinweis C4: Die C4-Syntax von Mermaid ist noch experimentell. C4-Diagramme müssen deshalb eventuell als Flowchart mit C4-Konventionen gezeichnet werden (Personen, Systeme, Container, beschriftete Beziehungen). Vor dem ersten Diagramm prüfen, ob die C4-Syntax reicht, und die Wahl im ADR zu den Formaten festhalten.
- Warum nicht Structurizr: Ein Modell mit mehreren Sichten lohnt sich erst bei vielen Diagrammen. Hier sind es drei bis vier.

**Ausnahme Case Studies und Startseite:** Diagramme dort sind handgebaute SVG-Komponenten mit den Diagramm-Klassen des Design Systems (`bk-dg-*`), genau einem hervorgehobenen Pfad, verlinkten Knoten und Aufbau-Animation. Mermaid bleibt für arc42 und ADRs, die Hervorhebung läuft dort über `classDef`. **Das ist keine optimale Lösung:** Es gibt damit zwei Wege für Diagramme. Ob es einen besseren Ansatz gibt, wird nochmal diskutiert. Vorerst verworfen: Mermaid-SVGs im Build nachbearbeiten (zu fragil bei Mermaid-Updates) sowie D2, Structurizr und LikeC4 (zusätzliche Toolchain, kein Aufbau beim Scrollen).

**Vollständigkeit:** Derselbe Test wie für Inhalte prüft, dass jedes ADR und jedes arc42-Kapitel in beiden Sprachen existiert.

**Pragmatischer Workflow für zwei Sprachen:** Eine Sprache wird zuerst geschrieben, die zweite im selben PR ergänzt (AI-gestützt, mit Review). Die offiziellen arc42-Vorlagen gibt es auf Deutsch und Englisch.

## Harness Engineering & AI-Workflow

Das Repo selbst ist der Harness, angelehnt an „Harness engineering for coding agent users“ (Birgitta Böckeler, martinfowler.com). Ziel: zeigen, dass AI kontrolliert eingesetzt wird, nicht nur, dass sie eingesetzt wird.

**Guides (Feedforward):**

- `AGENTS.md` / `CLAUDE.md` mit Architekturregeln, Konventionen und Verweis auf ADRs und arc42.
- Regel: Architekturänderungen nur mit ADR-Vorschlag; arc42 wird im selben PR aktualisiert.
- Regel: keine visuellen Designentscheidungen ohne Freigabe. Maßgeblich ist das Design System „Brinkema – Portfolio Design“; nur Tokens verwenden. Was dort fehlt, wird angefragt, nicht erfunden.

**Sensors (Feedback):**

- Alle Checks aus dem Abschnitt Qualitätssicherung, lokal per einem Befehl ausführbar (z. B. `pnpm verify`), damit der Agent schnelles, deterministisches Feedback bekommt.
- Bei Bedarf eigene ESLint-Regeln für Projektkonventionen.

**Leitplanken (technisch):**

- `.claude/settings.json` im Repo mit Deny-Regeln: kein `gh pr merge`, keine Pushes auf `main`, kein Force-Push. Deny-Regeln des Projekts haben Vorrang vor Allow-Regeln und lassen sich durch persönliche Einstellungen nicht aufheben.
- Die Deny-Regeln sind eine Leitplanke, keine Sicherheitsgrenze. Die eigentliche Absicherung ist das Ruleset auf `main` bei GitHub.
- Die Datei ist versioniert und damit selbst Teil des Harness.

**Sichtbar machen:** Die Seite „How this site was built“ ist der Tab „Überblick“ der Architektur-Doku und wird von der Startseite verlinkt, in Stufe 1 hinter dem Login und ein Kandidat für Stufe 2. Sie zeigt, was ich entschieden habe, was der Agent umgesetzt hat, und mindestens ein konkretes Beispiel, in dem ein Sensor fehlerhaften Agent-Output abgefangen hat. Solche Beispiele schon während der Umsetzung sammeln. Der Entwurf der Seite entsteht vorher im Design System; Claude Code gestaltet sie nicht selbst.

## Umsetzungsphasen

Acht Phasen für Lieferstufe 1, jede endet mit einem lauffähigen, geprüften Stand. Deny by default gilt ab Phase 2, und Auth kommt vor den Inhalten. So liegen zu keinem Zeitpunkt Inhalte offen.

### Design-Track (abgeschlossen)

Das Design ist vor der UI-Lib entstanden, damit Phase 4 direkt auf echten Tokens aufbaut statt auf Platzhaltern. Max hat es gemeinsam mit Claude im Chat erarbeitet, nicht mit Claude Code. Freigegeben am 19.10.2026; das Ergebnis ist das Design System „Brinkema – Portfolio Design“ (siehe Abschnitt Design System). Neue Entwürfe, z. B. der Tab „Überblick“, entstehen weiterhin dort.

**Ergebnisse:**

- Designprinzipien und Bildsprache (modern, clean, Fokus auf Inhalt und Architektur).
- Farbpalette Light und Dark mit geprüften Kontrasten (WCAG 2.2 AA).
- Typografie-Skala mit selbst gehosteter Schrift, Spacing, Radius, Schatten.
- Token-Spezifikation als Grundlage für `packages/tokens`.
- Entwürfe der Schlüsselseiten, mobil und Desktop: Hinweisseite, Vorstellung, Case Study, Lebenslauf (inkl. Druckansicht), Architektur-Doku, Datenschutzhinweis.
- Komponenteninventar mit allen Zuständen (Hover, Fokus, Disabled), inklusive Language Switcher und Navigation mit und ohne Session.

**Fertig, wenn:** Token-Spezifikation und Entwürfe freigegeben sind. Erledigt am 19.10.2026. Die Seiten aus Phase 2 und 3 bleiben trotzdem bewusst ungestylt: Das Styling kommt gesammelt mit den Paketen in Phase 4, damit nichts doppelt gebaut wird.

### Phasen

1. **Fundament & Harness**
   - Repo, pnpm Workspaces, TypeScript strict, ESLint (inkl. Vue-Plugins), Prettier, Vitest; Node- und pnpm-Version gepinnt.
   - `AGENTS.md` / `CLAUDE.md`, MADR-Vorlage, arc42-Gerüst (DE/EN), ADRs für die gesetzten Entscheidungen.
   - Privates Content-Repo anlegen, `content-example/` mit fiktiven Inhalten, `CONTENT_DIR`-Mechanismus.
   - CI-Grundgerüst (Lint, Typecheck, Tests), `LICENSE`.
   - Git-Workflow einrichten: Ruleset auf main, PR-Vorlage, commitlint mit lefthook, PR-Titel-Check in der CI, .claude/settings.json mit Deny-Regeln.
   - Account- und Repo-Härtung: 2FA mit Passkey für GitHub und Cloudflare, Secret Scanning mit Push Protection.
   - Fertig, wenn: `pnpm verify` läuft lokal und in CI grün, ohne Zugriff auf das Content-Repo.
2. **Walking Skeleton mit Zugriffssperre**
   - Astro-App mit Platzhalterseite und neutraler Hinweisseite, i18n-Routing DE/EN und Language Switcher von Anfang an.
   - Middleware mit Route-Policy (deny by default); vorerst ist nur die Hinweisseite freigegeben.
   - Deployment über CI, Security-Header, `noindex`. Deploy-Job checkt das Content-Repo per Deploy Key aus.
   - Geschütztes Preview-Deployment pro PR mit Beispielinhalten.
   - workers.dev-Adresse für Produktion deaktivieren; Previews mit eigenem Root Secret; Cache-Control: private, no-store für alle nicht öffentlichen Antworten.
   - Zu klären: Hosting-Anbieter final festlegen (ADR mit Vergleich und Exit-Strategie). Dafür CPU-Zeit und Antwortzeit pro Request im Free Tier messen.
   - Fertig, wenn: Push auf `main` deployt automatisch und der Route-Policy-Test beweist, dass alles außer der Hinweisseite gesperrt ist.
3. **Auth**
   - `packages/auth` test-first: Signieren, Prüfen, Key-Ableitung.
   - `/invite`-Route, Session-Cookie, Invite-CLI mit Sprachparameter, Hinweisseiten für abgelaufene und ungültige Links.
   - Denylist in Cloudflare KV (auch für bestehende Sessions), Rate Limiting auf /invite, Session-Cookie mit \_\_Host-Präfix und SameSite=Lax, CLI-Befehl zum Widerrufen eines Links.
   - Session-Status in Layouts verfügbar machen (Voraussetzung für Stufe 2).
   - Zu klären: Laufzeit von Links und Sessions; Protokollierung genutzter Links ja oder nein (beeinflusst den Datenschutzhinweis); Kontaktweg auf der Hinweisseite für abgelaufene Links.
   - Fertig, wenn: E2E-Tests für gültige, abgelaufene und manipulierte Tokens grün sind.
4. **Tokens & UI-Lib**
   - `packages/tokens` aus `tokens.json` des Design Systems (Light und Dark, dazu eine Variante ohne `data-theme` für die Systemeinstellung) und Kontrast-Test gegen die Werte aus `token-uebergabe.md`.
   - `packages/ui` mit allen Komponenten aus dem Abschnitt Design System, nachgebaut mit denselben Klassennamen, sodass `bundle.css` unverändert gilt. Komponenten-Katalog (Storybook oder eigene Katalog-Route) ist offen, siehe Offene Entscheidungen.
   - Ladeverhalten nach Abschnitt Ladeverhalten: Font-Preload und Fallback-Metriken, Fallback für den Animations-Startzustand inklusive Playwright-Test mit blockiertem Script.
   - dependency-cruiser-Regeln.
   - Fertig, wenn: Komponenten sind getestet, dokumentiert und a11y-geprüft.
5. **Inhalte**
   - Content Collections mit Zod-Schemas für Profil, Projekte, CV-Daten; Beispielinhalte vollständig.
   - arc42 und ADRs als Seiten, Mermaid als vorgerenderte SVGs. C4-Diagramme ggf. als Flowchart, weil die Mermaid-C4-Syntax experimentell ist.
   - Manuelle Workflows Content-Preview (Branch des Content-Repos als Eingabe, geschütztes Preview mit echten Inhalten) und Content-Deploy.
   - Bilder aus dem Content-Repo über einen geschützten Endpoint ausliefern, nicht über die Asset-Pipeline; Test, dass dist/ keine echten Inhalte enthält.
   - Bilder mit festen Abmessungen und Platzhalterfarbe; Porträt priorisiert, übrige Bilder lazy (siehe Ladeverhalten).
   - Zu klären: Welche Projekte gezeigt werden und welche Angaben die CV-Daten enthalten. Beides bestimmt die Schemas.
   - Fertig, wenn: ungültige Inhalte lassen den Build scheitern, beide Sprachen sind vollständig und alle Inhaltsseiten sind ohne Session gesperrt.
6. **Lebenslauf**
   - Print-Route aus den CV-Daten, PDF-Erzeugung im Build je Sprache, geschützte Auslieferung.
   - Zu klären: Auslieferung des PDFs über R2 oder als Asset im Worker-Bundle.
   - Fertig, wenn: PDF ist ohne gültige Session nicht abrufbar.
7. **Quality Gates schärfen**
   - Lighthouse-Budgets inkl. CLS, Bundle-Size-Limits, Stryker-Workflow, Renovate, täglicher Smoke-Test, Supply-Chain-Härtung, Threat Model.
   - Zu klären: Start-Schwelle für den Mutation Score und konkrete Lighthouse-Budgets.
   - Fertig, wenn: alle Fitness Functions in CI aktiv sind und Kapitel 10 der arc42 auf sie verweist.
8. **Inhalte, Feinschliff & Launch**
   - Design-Feinschliff am echten Inhalt (Abstände, Bilder, Mikro-Interaktionen).
   - Echte Inhalte im Content-Repo: anonymisierte Case Studies, Profil, CV-Daten; Seite „How this site was built“, Datenschutzhinweis in beiden Sprachen.
   - Domain, manuelle a11y-Prüfung, Review von ADRs und arc42.
   - Zu klären: Kontaktdaten im Datenschutzhinweis (E-Mail oder Anschrift); Freigabe der Anonymisierung durch Arbeitgeber bzw. Rechtsabteilung.
   - Fertig, wenn: erster Einladungslink verschickt ist.

**Lieferstufe 2 (optional, später):** Teile der Seite öffentlich machen, wie im Auth-Konzept beschrieben. Kein Bestandteil der aktuellen Umsetzung.

## Offene Entscheidungen

Diese Punkte trifft Max. Claude Code soll sie nicht eigenständig festlegen, sondern bei Bedarf Optionen als ADR-Entwurf vorschlagen. Offene Punkte, die eine spätere Phase betreffen, stehen dort jeweils unter „Zu klären“.

**Vor dem Start von Phase 1:**

- [x] Lizenz: MIT für das gesamte öffentliche Repo
- [x] Repos: `portfolio` (öffentlich), `portfolio-content` (privat)

**Jetzt anstoßen, weil es Vorlauf braucht:**

- [ ] Abstimmung zur Anonymisierung mit Arbeitgeber bzw. Rechtsabteilung (Ergebnis nötig in Phase 8)
- [ ] Domain sichern

**Später:**

- [ ] Lieferstufe 2: ob, wann und welche Teile öffentlich werden
- [ ] Komponenten-Katalog: Storybook mit a11y-Addon oder eine eigene Katalog-Route in Astro (z. B. /\_catalog, im Produktions-Build gesperrt, von Playwright mit axe und Screenshot-Vergleich geprüft)
- [ ] Diagramme: besserer Ansatz als die Aufteilung in Mermaid und handgebaute SVGs (siehe Dokumentation)
- [ ] Prefetching von Folgeseiten: Nutzen gegen zusätzliche Anfragen im Free Tier abwägen und Verträglichkeit mit Cache-Control: private, no-store prüfen

## Zuarbeit Max

Diese Punkte liefert nur Max. Claude Code arbeitet bis dahin mit Platzhaltern und Beispielinhalten und erfindet keine Inhalte. Alles, was hier nicht als fertig markiert ist, gilt als Platzhalter.

| Thema | Was fehlt | Stand | Benötigt bis |
| --- | --- | --- | --- |
| Domain und Kontakt-E-Mail | Domain sichern; Kontaktadresse für Hinweisseite, Footer und Datenschutzhinweis. Im Design stehen Platzhalter (brinkema.dev, kontakt@brinkema.dev). | offen | Domain jetzt anstoßen; Kontaktweg bis Phase 3 |
| Auswahl der Projekte | Welche Projekte als Case Study gezeigt werden | offen | Phase 5 (bestimmt die Schemas) |
| Case Studies | Inhalte nach dem Content-Modell im Abschnitt Design System. Case Study 01 (Support-Portal, hybrides Rendering) liegt als Entwurf vor, Max überarbeitet sie noch. Weitere Case Studies offen. | in Arbeit | Phase 8 |
| Startseite | Einstieg mit Kernsatz, „Kurz über mich“, Schwerpunkte, Erfahrungszahlen | offen (Platzhalter aus V4) | Phase 8 |
| Lebenslauf-Daten | Profil, Stationen, Abschlussarbeiten, Kompetenzen, Zertifikate mit Nachweis-Link, Sprachen; nur Stadt, keine Anschrift | offen (Platzhalter aus V4) | Phase 5 (Schema), Phase 6 (PDF) |
| Porträtfoto | Hochformat, mindestens 1200 px, liegt nur im Content-Repo | offen | Phase 8 |
| Englische Fassung | Alle Inhalte auf Englisch – von Max oder von Claude nach Freigabe der deutschen Fassung | offen | Phase 8 |
| Datenschutzhinweis | Rechtlicher Text DE/EN: Verantwortlicher, Hoster und Server-Logs, Session-, Sprach- und Theme-Cookie, keine Analytics, Rechte der Betroffenen | offen | Phase 8 |
| Freigabe der Anonymisierung | Pro Case Study durch Arbeitgeber bzw. Rechtsabteilung, inklusive Zahlen, Branche, Zeitraum, Märkten und Stack | offen, jetzt anstoßen | Phase 8 |

Keine Zuarbeit: Die ADRs und die arc42-Doku der Website entstehen während der Umsetzung mit Claude Code. Die ADRs in den Vorschauen des Design Systems sind Platzhalter.

## Arbeitsregeln für Claude Code

Diese Regeln gelten für jede Session und wandern später in die `AGENTS.md` / `CLAUDE.md`.

1. Vor jeder Aufgabe diesen Plan, die relevanten ADRs und die arc42-Kapitel lesen.
2. Immer nur eine Phase bzw. ein klar abgegrenztes Teilziel bearbeiten. Kein Vorgreifen auf spätere Phasen.
3. Offene Entscheidungen nicht selbst treffen. Stattdessen einen ADR-Entwurf mit Optionen und Trade-offs vorschlagen und auf Freigabe warten.
4. **Sprache im Code: Englisch.** Code, Bezeichner, Kommentare, JSDoc, Commit-Messages und PR-Beschreibungen sind auf Englisch. Deutsch nur in deutschen Inhalten und UI-Texten.
5. **Clean Code:**
   - Sprechende Namen, keine Abkürzungen außer etablierten (`id`, `url`).
   - Kleine Funktionen mit einer Verantwortung, frühe Returns statt tiefer Verschachtelung.
   - Reine Funktionen bevorzugen, Seiteneffekte an den Rändern bündeln (Middleware, CLI).
   - Keine Magic Numbers oder Strings, stattdessen benannte Konstanten.
   - Keine Duplikate, kein toter Code, keine auskommentierten Blöcke.
   - Kommentare erklären das Warum, nicht das Was.
   - JSDoc für jede exportierte Funktion, jeden Typ und jede Komponente der Packages.
   - Was sich automatisch prüfen lässt, wird über ESLint erzwungen (z. B. Komplexität, Funktionslänge, Pflicht-JSDoc für Exporte).
6. Keine neuen Dependencies ohne kurze Begründung im PR. Versionen pinnen.
7. Sicherheitskritischer Code (`packages/auth`, Middleware) wird test-first geschrieben.
8. Vor jedem Commit `pnpm verify` ausführen. Rote Checks werden behoben, nicht umgangen. Keine Schwellen senken, keine Tests deaktivieren, kein `eslint-disable` ohne Begründung.
9. Keine visuellen Designentscheidungen. Maßgeblich ist das Design System „Brinkema – Portfolio Design“ (siehe Abschnitt Design System): nur bestehende Tokens und Komponenten verwenden und die Seitenentwürfe umsetzen. Was dort fehlt (Token, Zustand, Seite), wird als Platzhalter markiert und angefragt, nicht erfunden.
10. Jeder neue Text und jede neue Seite entsteht in Deutsch und Englisch. Fehlende Übersetzungen als TODO markieren, nie still weglassen.
11. Keine Secrets, Kundennamen, NDA-Inhalte oder echten Inhalte (Profil, Projekte, CV-Daten) ins öffentliche Repo. Entwicklung und Tests laufen nur mit Beispielinhalten. Keine Artefakte, Screenshots oder Traces mit echten Inhalten hochladen. Vue-Islands importieren nie Inhalte, sondern erhalten sie als Props. Bilder aus dem Content-Repo nur über den geschützten Endpoint ausliefern, nie über die Asset-Pipeline.
12. Architekturänderungen aktualisieren ADRs und arc42 im selben PR.
13. Git-Workflow nach Abschnitt Git-Workflow: für jede Aufgabe ein Branch nach Namensmuster, atomare Commits nach den Commit-Konventionen, PR mit Vorlage. Nie mergen, nie direkt auf main pushen. Am Ende jeder Session kurz zusammenfassen: was erledigt ist, was offen ist, welche Entscheidungen anstehen.
