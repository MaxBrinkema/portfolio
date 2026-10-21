# NoticePage

Hinweis- und Fehlerseiten: große kursive Serif-Zahl in Kupfer (wie die Case-Nummern) mit dem echten HTTP-Status, darunter Code und Klartext in Mono, eine Display-Überschrift, ein Absatz und höchstens zwei Wege weiter.

**Consumer liefert:** `variant` und `lang`, bei `expired` die `email`.

| Variante | HTTP-Status | Aktion |
| --- | --- | --- |
| `expired` | 410 Link abgelaufen | „Neuen Link anfragen“ (Mail) |
| `invalid` | 403 Link ungültig | keine |
| `invite` | kein Code, „Nur per Einladung“ | keine |
| `404` | 404 Not Found | Zur Startseite · Alle Projekte |
| `500` | 500 Internal Server Error | Seite neu laden · Zur Startseite |

- Hinweisseiten (`expired`, `invalid`, `invite`) laufen ohne Session: Header ohne Navigation, keine persönlichen Inhalte.
- Die Seite antwortet mit genau dem gezeigten Status. `invite` zeigt keinen Code, weil die Seite dort regulär ausgeliefert wird.
- Texte übernommen aus Werkstatt+ (V4) – vorläufig.
