---
number: 2
title: Astro nutzen und alle Inhaltsseiten on-demand rendern
summary: Astro als Framework; in Lieferstufe 1 wird jede Inhaltsseite pro Anfrage hinter der Auth-Middleware gerendert.
area: Framework
status: accepted
date: 2026-10-21
decision-makers: Max Brinkema
---

# Astro nutzen und alle Inhaltsseiten on-demand rendern

## Kontext und Problemstellung

Die Seite besteht überwiegend aus statischem Text, der sich selten ändert. In Lieferstufe 1 darf aber jede Inhaltsseite nur mit gültiger Einladung erreichbar sein. Beim vorgesehenen Hoster werden vorgerenderte Seiten als Static Assets ausgeliefert, ohne dass die Middleware läuft. Welches Framework und welcher Rendering-Modus liefern wenig JavaScript im Client und eine serverseitige Zugriffsprüfung bei jeder Anfrage auf Inhalte?

## Entscheidungstreiber

- Sicherheit zuerst: keine Inhalte ohne gültige Session (deny by default)
- Wenig JavaScript im Client, Interaktivität nur, wo sie etwas bringt
- Inhalte als typisierte, validierte Collections ohne CMS
- Lieferstufe 2 (Teile werden öffentlich) muss eine Konfigurationsänderung sein, kein Umbau
- Läuft am Edge im Free Tier

## Betrachtete Optionen

- Astro mit On-demand-Rendering als Standard
- Next.js
- SvelteKit
- Ein Static Site Generator (z. B. Eleventy) mit einer separaten Edge Function davor

## Entscheidung

Gewählte Option: „Astro mit On-demand-Rendering als Standard“, weil Astro kein Client-JavaScript ausliefert, solange keine Island es braucht, Content Collections mit Schema-Validierung mitbringt und jede Route zwischen Rendering pro Anfrage und Vorrendern wählen lässt.

In Stufe 1 gilt `prerender = false` für alle Seiten, damit die Middleware jede Anfrage auf Inhalte prüft. Öffentliche Seiten aus Stufe 2 dürfen später vorgerendert werden.

### Konsequenzen

- Gut, weil Seiten als reines HTML vom Server kommen; Islands sind die ausdrückliche Ausnahme.
- Gut, weil das Öffnen einer Seite in Stufe 2 eine Änderung der Route-Policy und optional das Vorrendern bedeutet.
- Schlecht, weil jeder Seitenaufruf CPU-Zeit im Worker kostet. CPU- und Antwortzeit pro Anfrage werden in Phase 2 gemessen.
- Schlecht, weil statische Assets einschließlich des Build-Outputs unter `/_astro/` öffentlich sind. Inhalte dürfen deshalb nie in `public/` liegen oder durch die Asset-Pipeline laufen; Content-Bilder kommen über einen geschützten Endpoint.

### Bestätigung

- Route-Policy-Test: Jede gebaute Route ohne Session leitet auf die Hinweisseite um, außer sie steht in der Allowlist (Phase 2).
- Ein Test durchsucht `dist/` nach dem Build nach echten Inhalten und Content-Bildern (Phase 5).

## Vor- und Nachteile der Optionen

### Astro mit On-demand-Rendering als Standard

- Gut, weil die Island-Architektur standardmäßig null JavaScript ausliefert.
- Gut, weil Content Collections mit Zod-Schemas eingebaut sind.
- Gut, weil sich der Rendering-Modus pro Route festlegen lässt.
- Schlecht, weil der günstigste Modus, das Vorrendern, für geschützte Seiten ausscheidet.

### Next.js

- Gut, weil das Ökosystem groß ist.
- Schlecht, weil Seiten standardmäßig mit der React-Runtime hydrieren. Das ist mehr Client-JavaScript, als diese Seite braucht.
- Schlecht, weil viele Features (Client-Routing, Data Fetching) Probleme lösen, die diese Seite nicht hat.

### SvelteKit

- Gut, weil es kleine Bundles erzeugt und Rendering pro Route unterstützt.
- Schlecht, weil es Seiten standardmäßig hydriert und einen Client-Router nutzt; Islands sind nicht das Standardmodell.
- Schlecht, weil eingebaute typisierte Content Collections fehlen.

### Static Site Generator mit separater Edge Function

- Gut, weil der Build einfach und schnell ist.
- Schlecht, weil die Auth-Logik außerhalb der Seite läge und trotzdem jede Seite eine statische Datei wäre, die abgeschirmt werden muss.
- Schlecht, weil Stufe 2 Änderungen an zwei Systemen bedeuten würde.

## Weitere Informationen

- Details zum Rendering-Modus und zur Härtung öffentlicher Build-Assets: `docs/plan.md`, Abschnitte „Wichtiges Detail zum Hosting“ und „Härtung“.
- Die Hosting-Entscheidung (Cloudflare Workers mit Static Assets) ist noch ein Vorschlag und bekommt in Phase 2 ein eigenes ADR.
