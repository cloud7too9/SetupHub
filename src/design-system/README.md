# Design System

Diese TypeScript-Dateien dienen als **Single Source of Truth** und Referenz-Dokumentation für das Design System.

## Wie es funktioniert

Die Werte aus `tokens/` und `themes/` werden **nicht direkt** in Komponenten importiert.
Stattdessen setzt der `ThemeProvider` die entsprechenden CSS Custom Properties auf `:root`:

```
tokens/colors.ts    →  --bg, --surface, --accent, --text-1, etc.
tokens/spacing.ts   →  --sp-xs, --sp-sm, --sp-md, etc.
tokens/radius.ts    →  --radius-sm, --radius-md, etc.
tokens/shadows.ts   →  --shadow-sm, --shadow-md, etc.
tokens/typography.ts →  --font-sans, --font-mono
themes/dark.ts      →  Dark-Farbpalette
themes/light.ts     →  Light-Farbpalette
```

Komponenten nutzen ausschließlich `var(--token-name)` in ihren Styles.

## Warum dieser Ansatz

- **Live Theming**: CSS Vars können zur Laufzeit geändert werden
- **Kein Re-Render**: Farbwechsel ohne React-Lifecycle
- **Portabilität**: Tokens als TS = typsicher, exportierbar, dokumentiert
- **Referenz**: Wer eine neue Komponente baut, sieht hier welche Werte existieren
