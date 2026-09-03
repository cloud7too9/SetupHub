# Design System

Diese TypeScript-Dateien dienen als **Single Source of Truth** und Referenz-Dokumentation für das Design System.

## Wie es funktioniert

Die Werte werden **nicht direkt** in Komponenten importiert. Stattdessen liest der
`ThemeProvider` die Paletten aus `themes/` und schreibt sie als CSS Custom Properties
auf `:root` — `themes/` ist damit die tatsächliche Laufzeit-Quelle, nicht nur Doku:

```
tokens/colors.ts    →  --bg, --surface, --accent, --text-1, etc.
tokens/spacing.ts   →  --sp-xs, --sp-sm, --sp-md, etc.
tokens/radius.ts    →  --radius-sm, --radius-md, etc.
tokens/shadows.ts   →  --shadow-sm, --shadow-md, etc.
tokens/typography.ts →  --font-sans, --font-mono
themes/dark.ts      →  Dark-Palette (aus tokens/colors.ts + tokens/shadows.ts)
themes/light.ts     →  Light-Palette (eigene Werte, damit Status-Farben auf Weiß lesbar bleiben)
```

Die Schlüssel in `themes/palette.ts` entsprechen 1:1 den CSS-Variablennamen, damit
zwischen Token und `var(--…)` keine Übersetzungstabelle nötig ist.
Die Akzent-Variablen (`--accent`, `--accent-muted`, `--shadow-glow`) stehen bewusst
nicht in den Paletten — die berechnet der ThemeProvider aus der gewählten Akzentfarbe.

`:root` in `styles/global.css` spiegelt die Dark-Palette als Fallback für den ersten
Paint, bevor React läuft.

Komponenten nutzen ausschließlich `var(--token-name)` in ihren Styles.

## Warum dieser Ansatz

- **Live Theming**: CSS Vars können zur Laufzeit geändert werden
- **Kein Re-Render**: Farbwechsel ohne React-Lifecycle
- **Portabilität**: Tokens als TS = typsicher, exportierbar, dokumentiert
- **Referenz**: Wer eine neue Komponente baut, sieht hier welche Werte existieren
