# Token-Übergabe

Übergabe an `packages/tokens` für Brinkema – Portfolio Design. `tokens.json` ist die einzige Quelle; die Namen folgen dem Muster des Briefings mit Bindestrich: `color.text.muted` ↔ `--color-text-muted`.

Beide Themes sind gleichwertig. Die Seite folgt `prefers-color-scheme`, eine Wahl über den Umschalter hat Vorrang. Erstes Theme in tokens.json (Fallback ohne Systemvorgabe): **dark**. Im CSS: Fallback-Werte auf `:root`, das andere Theme unter `[data-theme]` und `@media (prefers-color-scheme: …)` für `:root:not([data-theme])`.

## Farbrollen und Kontraste

| Rolle | Token | Dark | Light | Grund | Kontrast Dark | Kontrast Light | Minimum |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hintergrund | `color-bg` | `#1b1c1e` | `#f2f0eb` | — | — | — | — |
| Fläche | `color-surface` | `#232427` | `#fbfaf7` | `color-bg` | 1,10:1 | 1,09:1 | — |
| Starke Fläche | `color-surface-strong` | `#33353a` | `#e3dfd6` | `color-bg` | 1,39:1 | 1,17:1 | — |
| Text | `color-text` | `#eceae4` | `#1b1c1e` | `color-bg` | 14,18:1 | 14,97:1 | 4,5:1 |
| Text auf starker Fläche | `color-text` | `#eceae4` | `#1b1c1e` | `color-surface-strong` | 10,20:1 | 12,82:1 | 4,5:1 |
| Text gedämpft | `color-text-muted` | `#a9a59c` | `#58554f` | `color-bg` | 6,94:1 | 6,52:1 | 4,5:1 |
| Text gedämpft auf starker Fläche | `color-text-muted` | `#a9a59c` | `#58554f` | `color-surface-strong` | 5,00:1 | 5,59:1 | 4,5:1 |
| Rahmen (dekorativ) | `color-border` | `#3a3c40` | `#d3cec4` | `color-bg` | 1,54:1 | 1,38:1 | — |
| Rahmen (Bedienelement) | `color-border-strong` | `#8a867f` | `#7f7a71` | `color-bg` | 4,71:1 | 3,74:1 | 3:1 |
| Akzent (Fläche) | `color-accent` | `#d38a50` | `#a55a26` | `color-bg` | 6,11:1 | 4,51:1 | 3:1 |
| Text auf Akzent | `color-on-accent` | `#1b1c1e` | `#ffffff` | `color-accent` | 6,11:1 | 5,13:1 | 4,5:1 |
| Akzent-Text / Link | `color-accent-text` | `#e2a06c` | `#8e4a1b` | `color-bg` | 7,70:1 | 5,86:1 | 4,5:1 |
| Akzent-Text auf Akzent-Soft | `color-accent-text` | `#e2a06c` | `#8e4a1b` | `color-accent-soft` | 6,00:1 | 5,15:1 | 4,5:1 |
| Fokus-Ring | `color-focus` | `#e2a06c` | `#8e4a1b` | `color-bg` | 7,70:1 | 5,86:1 | 3:1 |
| Erfolg | `color-success` | `#86c29c` | `#2b673b` | `color-success-soft` | 6,84:1 | 5,39:1 | 4,5:1 |
| Warnung | `color-warning` | `#e4b05a` | `#7a4a00` | `color-warning-soft` | 7,20:1 | 5,88:1 | 4,5:1 |
| Fehler | `color-error` | `#ff909c` | `#a0172f` | `color-error-soft` | 7,11:1 | 5,93:1 | 4,5:1 |
| Info | `color-info` | `#92b9ee` | `#1d559e` | `color-info-soft` | 7,46:1 | 5,80:1 | 4,5:1 |
| Code: Schlüsselwort | `color-code-keyword` | `#e2a06c` | `#8e4a1b` | `color-surface` | 7,01:1 | 6,40:1 | 4,5:1 |
| Code: String | `color-code-string` | `#86c29c` | `#2b673b` | `color-surface` | 7,55:1 | 6,48:1 | 4,5:1 |
| Code: Zahl, Literal | `color-code-number` | `#92b9ee` | `#1d559e` | `color-surface` | 7,68:1 | 7,07:1 | 4,5:1 |
| Code: Funktion | `color-code-function` | `#e8d29e` | `#6a5212` | `color-surface` | 10,45:1 | 7,11:1 | 4,5:1 |
| Code: Kommentar | `color-code-comment` | `#a9a59c` | `#58554f` | `color-surface` | 6,32:1 | 7,12:1 | 4,5:1 |

## Typografie

| Token | Min → Max | Zeilenhöhe | Schnitt | Laufweite | Familie |
| --- | --- | --- | --- | --- | --- |
| `font-size-numeral-xl` | 72–152 px · `clamp(4.5rem, 2.739rem + 7.512vw, 9.5rem)` | 0.88 | 500 | -0.03em | serif |
| `font-size-numeral` | 52–92 px · `clamp(3.25rem, 2.370rem + 3.756vw, 5.75rem)` | 0.92 | 500 | -0.025em | serif |
| `font-size-numeral-sm` | 34–52 px · `clamp(2.125rem, 1.729rem + 1.690vw, 3.25rem)` | 0.95 | 500 | -0.02em | serif |
| `font-size-display` | 46–84 px · `clamp(2.875rem, 2.039rem + 3.568vw, 5.25rem)` | 1.0 | 500 | -0.025em | serif |
| `font-size-h1` | 36–60 px · `clamp(2.25rem, 1.722rem + 2.254vw, 3.75rem)` | 1.05 | 500 | -0.02em | serif |
| `font-size-h2` | 28–40 px · `clamp(1.75rem, 1.486rem + 1.127vw, 2.5rem)` | 1.12 | 500 | -0.015em | serif |
| `font-size-h3` | 22–28 px · `clamp(1.375rem, 1.243rem + 0.563vw, 1.75rem)` | 1.25 | 560 | -0.01em | serif |
| `font-size-h4` | 19–21 px · `clamp(1.1875rem, 1.143rem + 0.188vw, 1.3125rem)` | 1.35 | 600 | 0em | serif |
| `font-size-lead` | 20–24 px · `clamp(1.25rem, 1.162rem + 0.376vw, 1.5rem)` | 1.5 | 400 | 0em | serif |
| `font-size-body` | 18–19 px · `clamp(1.125rem, 1.103rem + 0.094vw, 1.1875rem)` | 1.62 | 400 | 0em | serif |
| `font-size-body-strong` | 18–19 px · `clamp(1.125rem, 1.103rem + 0.094vw, 1.1875rem)` | 1.62 | 620 | 0em | serif |
| `font-size-small` | 15–16 px · `clamp(0.9375rem, 0.915rem + 0.094vw, 1rem)` | 1.5 | 400 | 0em | serif |
| `font-size-label` | 12.5–12.5 px · `0.78125rem` | 1.4 | 500 | 0.1em | mono |
| `font-size-ui` | 14–15 px · `clamp(0.875rem, 0.853rem + 0.094vw, 0.9375rem)` | 1.3 | 500 | 0em | mono |
| `font-size-code` | 15–15 px · `0.9375rem` | 1.6 | 400 | 0em | mono |

- `--font-serif`: `Newsreader, ui-serif, Georgia, "Times New Roman", serif`
- `--font-mono`: `"Geist Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace`

Schriftdateien (selbst gehostet, OFL 1.1): `fonts/GeistMono-Variable.woff2`, `fonts/Newsreader-Italic-Variable.woff2`, `fonts/Newsreader-Variable.woff2`.

## Abstände, Layout, Form, Bewegung

| Token | Wert |
| --- | --- |
| `space-1` | `4px` |
| `space-2` | `8px` |
| `space-3` | `12px` |
| `space-4` | `16px` |
| `space-5` | `20px` |
| `space-6` | `24px` |
| `space-8` | `32px` |
| `space-10` | `40px` |
| `space-12` | `48px` |
| `space-16` | `64px` |
| `space-20` | `80px` |
| `space-24` | `96px` |
| `space-32` | `128px` |
| `space-40` | `160px` |
| `layout-measure` | `66ch` |
| `layout-wide` | `56rem` |
| `layout-container` | `76rem` |
| `layout-gutter` | `clamp(1.25rem, 0.282rem + 4.131vw, 4rem)` |
| `layout-section-gap` | `clamp(4rem, 2.239rem + 7.512vw, 9rem)` |
| `layout-header-height` | `64px` |
| `layout-toc-width` | `15rem` |
| `layout-target-min` | `44px` |
| `radius-none` | `0px` |
| `radius-sm` | `4px` |
| `radius-md` | `8px` |
| `radius-pill` | `999px` |
| `border-hairline` | `1px` |
| `border-strong` | `2px` |
| `border-rule` | `4px` |
| `duration-instant` | `80ms` |
| `duration-fast` | `140ms` |
| `duration-base` | `220ms` |
| `duration-slow` | `360ms` |
| `duration-draw` | `520ms` |
| `duration-stagger` | `70ms` |
| `ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` |
| `ease-enter` | `cubic-bezier(0, 0, 0.2, 1)` |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` |
| `bp-sm` | `30rem` |
| `bp-md` | `48rem` |
| `bp-lg` | `64rem` |
| `bp-xl` | `90rem` |
| `z-header` | `100` |
| `z-overlay` | `200` |
| `z-skiplink` | `300` |
| `shadow-raised` | dark `0 18px 40px -14px rgba(0,0,0,0.75)` · light `0 14px 30px -14px rgba(27,28,30,0.28)` |

Bei `prefers-reduced-motion: reduce` gelten alle Dauern als `0ms`.
