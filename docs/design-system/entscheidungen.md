# Entscheidungen und Annahmen

## Gestaltungsentscheidungen

| # | Entscheidung | Begründung |
| --- | --- | --- |
| 01 | Optionsvergleich an Case Study 01 im Projekte-Abschnitt | Die Entscheidung steht dort im Zusammenhang; oben bleibt Platz für den Menschen (Begrüßung und Porträt). Im Hero wirkte sie ohne Kontext zu schwer und schob mobil alles nach unten. |
| 02 | Dark und Light gleichwertig, Theme nach System | Die Seite folgt `prefers-color-scheme`, der Umschalter hat Vorrang; Dark ist nur Fallback ohne Systemvorgabe. Seit dem 20.10.2026 heißt das System „Brinkema – Portfolio Design“; „Dark first“ war der Arbeitsname der Richtung. |
| 03 | Newsreader (Serif) für Lesen, Geist Mono für Bedienen | Der Wechsel trennt Inhalt und Steuerung; Serif liest sich auf Dunkel ruhiger als eine Grotesk. |
| 04 | Kupfer als einziger Akzent, flächig nur im Werdegang-Band | Ein warmer Akzent gegen das kühle Anthrazit, einmal pro Seite als Fläche. |
| 05 | Optionen als Karten statt Tabelle | Jede Option ist eine eigene Einheit; die gewählte trägt Rahmen, Wort und Häkchen. |
| 06 | Bänder im Wechsel mit dem Grund | Rhythmus ohne Kästen um jeden Abschnitt; im Light-Theme `surface-strong`, damit die Bänder sichtbar bleiben. |
| 07 | Zuletzt getroffene ADRs auf der Startseite | „Entscheidungen sichtbar machen“ gilt auch für die Seite selbst. |
| 08 | Kursive Kupfer-Nummern an Case-Teasern | Ein redaktionelles Detail statt Plakat-Zahlen – deutlich anders als Signal. |
| 09 | Wortmarke in Geist Mono | Nah am früheren Zeichen „brinkema▍“ mit Cursor. |
| 10 | Zahlen als Beleg: kräftige Serif-Zahlen mit Kupferlinie, Ergebniszahlen direkt unter der Entscheidung | Übernimmt die Stärke von Signal, ohne es zu kopieren: Die Zahlen zeigen, wozu eine Entscheidung geführt hat. |
| 11 | Porträt im Hero, „Kurz über mich“ mit Überschrift allein links | Wie in Signal; die mitlaufende Überschrift schiebt sich nicht mehr über das Porträt. |
| 12 | Bewegung nur mit Erklärwert: Diagramm-Aufbau, Auflösen der Entscheidung, Seitenübergang, Hover | Das Briefing erlaubt Abläufe, die sich Schritt für Schritt aufbauen; die Choreografie erzählt Frage → Abwägung → Entscheidung → Beleg. Hochzählende Zahlen und Einblenden ganzer Sektionen wirken wie ein Template und bremsen das Lesen. |
| 13 | Dark first wird V5 (19.10.2026) | Entschieden nach dem Vergleich mit Signal: Die Entscheidungen als inhaltlicher Anker passen zum Architekten-Profil, die ruhige Anthrazit-Kupfer-Stimmung trägt lange Texte. |
| 14 | Optionen auch im ADR als Karten (`DecisionCompare`) | Einheitlich mit der Case Study: Wer eine Entscheidung liest, sieht überall dieselbe Form – Optionen, Kriterien, gewählt. |
| 15 | Pager und Konsequenzen als Karten, Nummern kursiv in Kupfer | Dieselbe Sprache wie die Case-Teaser und der Callout; keine Signal-Linien mehr in Dark first. |
| 16 | Syntax-Highlighting mit fünf ruhigen Rollen | Code liest sich schneller, wenn Schlüsselwörter, Strings und Kommentare unterscheidbar sind. Die Farben kommen aus der bestehenden Palette (Kupfer, Grün, Blau, gedämpft) plus einem Sand-Ton – kein Regenbogen. |
| 17 | Kein Hinweis „abgelaufen“ bei Zertifikaten | Die Gültigkeit zeigt der Nachweis-Link; wer sich auskennt, weiß, dass Zertifikate ablaufen. Der Hinweis lenkte nur ab. |
| 18 | „How this site was built“ ist der Tab „Überblick“ der Architektur-Doku | Ein Einstieg vor arc42 und ADRs: das Wichtigste in Kürze, wer was macht (Harness mit Agent und Prüfungen), Leitplanken, ein echtes Beispiel und die Qualitätsziele. Die arc42-Seite heißt seitdem „Architektur nach arc42“, damit die beiden Tabs nicht denselben Titel tragen. |

## Annahmen, die nicht im Briefing standen

Bitte prüfen – jede davon lässt sich ändern.

- **Schriften:** Newsreader und Geist Mono sind meine Wahl; das Briefing nennt nur „max. zwei Familien, frei lizenziert“.
- **Farbwerte:** Das Briefing sagt „Anthrazit als Grundstimmung, Kupfer als Akzent“; die konkreten Werte sind von mir.
- **Neue Beschriftungen ohne V4-Vorlage:** „Betrachtete Optionen“ und „Ergebnis · <gewählte Option>“ am Optionsvergleich, „Zuletzt entschieden“ über den ADRs, die Karten-Labels „Option 01–03“ und „gewählt“ (aus V4 „gewählt“ übernommen).
- **Case Study 01 (Entwurf, wird noch überarbeitet):** Fakten, Optionen und Zahlen stammen von Max (Kurzübersicht und anonymisiertes ADR). Formulierungen, Titel, Diagramm-Aufbau und die Kriterien-Namen im Optionsvergleich (Vorschau, Wartung, Risiko, Aufwand) sind von mir. Bewusst nicht als Ergebnis gezeigt: die Call-Reduktion (keine Zahlen) und die Marktzahl (nur geschätzt); die −30–40 % Übersetzungsaufwand stehen als Kontext, nicht als eigene Kennzahl.
- **Umfang:** komplett ausgebaut nach der Entscheidung für Dark first; die Seiteninhalte sind dieselben wie in Signal (vorläufig, aus V4).
- **Bewegung:** Dauern, Versatz und Reihenfolge der Choreografien sind von mir; das Briefing sagt nur „zurückhaltend“ und erlaubt den schrittweisen Aufbau von Abläufen.
- **Überblick-Tab:** Inhalte stammen aus dem Umsetzungsplan (Zugang, Repos, Leitplanken, Qualitätsziele). Formulierungen, Abschnittstitel und das Harness-Diagramm sind von mir. Das Beispiel „Wenn eine Prüfung anschlägt“ ist ein Platzhalter, bis es aus der Umsetzung kommt; „Stand“, „Doku“ und die ADR-Liste sind ebenfalls Platzhalter.
