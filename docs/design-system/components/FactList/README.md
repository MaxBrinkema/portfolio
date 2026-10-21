# FactList

Rahmendaten als Leiste mit Mono-Label und Wert, z. B. Rolle, Zeitraum, Ergebnis, Stack.

**Consumer liefert:** `items` (`{ label, value }`); `value` darf Tags, Links oder ein `StatusBadge` enthalten.

- Höchstens fünf Einträge; die Leiste bricht automatisch um.
- Verwendet in `PageHeader`, im arc42-Glossar, für Bezüge eines ADR und für Sprachen im Lebenslauf.
