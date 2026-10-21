# StatusBadge

ADR-Status als Pille in Mono: Glyphe + englisches Statuswort + Rahmen – proposed (gestrichelt, Info), accepted (Erfolg), superseded (ohne Fläche, gedämpft), deprecated (Warnung).

**Consumer liefert:** `status`, optional `prefix` („ADR-004“ oder eine Anzahl).

- Die Statuswörter bleiben in beiden Sprachen englisch, weil sie Fachbegriffe aus MADR sind und in Repository und Seite gleich heißen.
- Status nie nur über Farbe: Glyphe, Rahmenart und Wort unterscheiden ihn.
- Bei `superseded` gehört ein Link auf den Nachfolger in die Nähe (ADR-Liste: Bezugsspalte).
