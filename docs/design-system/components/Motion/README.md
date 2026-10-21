# Motion

Keine eigene Komponente, sondern die Bewegungsregeln des Systems an echten Komponenten – mit „Nochmal abspielen“ zum Ausprobieren.

1. **Diagramm baut sich auf** – `Figure`, Teaser-Visual.
2. **Entscheidung löst sich auf** – `DecisionCompare` (und `Table` mit `highlight`).
3. **Seitenwechsel** – `CaseTeaser` → `PageHeader` mit gleichem `view-transition-name`. In der Karte per `document.startViewTransition` simuliert, auf der Website per Cross-Document View Transitions (`@view-transition { navigation: auto; }` steckt in `bundle.css`).
4. **Hover** – das Vokabular A–E (Richtungs-Icons, einlaufender Unterstrich, dicker werdender Unterstrich, Navigation, Bedienelemente) an Links, Buttons, Case Study, ADR, Zertifikat und Pager; je Paar links Ruhe, rechts Hover.

- Ohne JavaScript, ohne IntersectionObserver oder bei „Bewegung reduzieren“ ist alles sofort vollständig da.
- Jede Choreografie läuft einmal; danach bleiben keine Hilfsklassen zurück.
