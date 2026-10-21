# ADRList

Die Liste der Architecture Decision Records mit Statusfilter: Nummer, Titel, Zusammenfassung, Bereich, Bezug, Status und Datum; die ganze Zeile ist klickbar.

**Consumer liefert:** `items` (`{ id, title, summary, area, relation?, status, date, href }`), `filters` (`{ key, label, count }`), `activeFilter`, `onFilter`, `summary`.

- Hover legt eine Fläche (`color-surface`) unter die Zeile statt sie anzuheben, und unter dem Titel läuft der Unterstrich ein – eine dichte Liste bleibt ruhig.
- Ersetzte und veraltete ADRs bleiben sichtbar, Titel und Text gedämpft.
- Der Filter ist eine Insel; ohne JavaScript erscheint die vollständige Liste.
