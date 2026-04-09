# Architektur

## Übersicht

SetupHub ist ein mobiler UI-Baukasten — eine eigenständige Demo-App, die wiederverwendbare Komponenten, zusammengesetzte Patterns und fertige Screen-Layouts an einem Ort zeigt.

## Schichtentrennung

```
design-system/    Tokens, Themes, Icons — das visuelle Fundament
ui/               Atomare Bausteine (Button, Card, Input …)
patterns/         Zusammengesetzte Muster (Card+Actions, FormSection …)
features/         App-spezifische Logik (Katalog, Settings)
screens/          Fertige Seiten der Demo-App
app/              Layout, Routing, Provider
```

### Wiederverwendbarkeit

`design-system/` + `ui/` + `patterns/` sind projektunabhängig und können 1:1 in andere Apps kopiert werden. `features/` und `screens/` sind SetupHub-spezifisch.

## Spacing-System

Alle Abstände nutzen CSS Custom Properties (`--sp-xs` bis `--sp-3xl`). Der ThemeProvider berechnet diese aus einem Faktor (0.75 = Kompakt, 1.0 = Normal, 1.25 = Locker) und schreibt sie live auf `:root`.

## Theming

Der ThemeProvider verwaltet:
- **Modus:** Dark / Light (Farbpalette per CSS-Variablen)
- **Akzentfarbe:** 8 Optionen, live umschaltbar
- **Radius:** 5 Stufen, skaliert alle `--radius-*` Variablen
- **Spacing:** 3 Stufen, skaliert alle `--sp-*` Variablen

## Navigation

Hash-basiertes Routing ohne externe Bibliothek:
- `NavigationProvider` synchronisiert `{ screen, detail }` mit `window.location.hash`
- `AppRouter` rendert basierend auf State
- `BottomNav` + `Sidebar` setzen den Screen
- Detail-Ansichten über `openDetail(id)` / `goBack()` — Browser-History wird unterstützt

## Katalog-System

Jede Komponente registriert sich über:
1. `component-registry.ts` — Metadaten (Name, Kategorie, Tags)
2. `preview-registry.ts` — Live-Demos mit Sections
3. `code-snippets.ts` — Nutzungsbeispiele mit Copy-to-Clipboard

## Stack

- React 18 + TypeScript (strict mode)
- Vite (Build + Dev-Server)
- Lucide Icons
- Inline Styles mit CSS Custom Properties
- Keine externen UI-Bibliotheken
