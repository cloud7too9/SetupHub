# SetupHub

UI-Katalog als Datenquelle für einen Editor: 21 Komponenten, 9 Patterns und die
Design-Tokens — beschrieben in einem maschinenlesbaren Manifest, vorgeführt in
einer schlanken Browser-App.

**[→ Live Demo](https://DEIN-SITE-NAME.netlify.app)**

## Was das hier ist

Der Katalog ist die Schnittstelle. Ein Editor liest `catalog.json` (oder
importiert `@/catalog` typisiert) und weiß dann für jeden Eintrag: wie er heißt,
wo der Quellcode liegt, welche Props er hat, welche Werte erlaubt sind, was die
Vorgaben sind und wie ein Aufruf aussieht. Die App daneben ist nur die Sicht auf
dieselben Daten — kein zweiter Datenbestand.

```jsonc
{
  "id": "button",
  "name": "Button",
  "kind": "component",              // component | pattern
  "category": "actions",
  "source": { "named": "Button", "from": "@/ui", "path": "src/ui/actions/Button/Button.tsx" },
  "props": [
    { "name": "children", "type": "node", "required": true },
    { "name": "variant", "type": "enum", "options": ["primary", "secondary", "ghost", "danger"], "default": "primary" }
  ],
  "snippet": "<Button variant=\"primary\">Erstellen</Button>"
}
```

Dazu im selben Dokument die Tokens — Farben, Abstände, Radien, Schatten,
Typografie und beide Themes —, damit der Editor den Gestaltungsspielraum kennt,
statt ihn zu erraten.

## Konfigurator

Einträge mit Konfigurator-Bindung (aktuell `Card`) haben in der Detailansicht
Regler für ihre Props und den Inhalt, eine Live-Vorschau und den passenden Code
zum Kopieren. Die Regler kommen aus dem Manifest — dieselbe Mechanik, die auch
ein externer Editor nutzen würde.

## Nutzung

```bash
npm install
npm run dev       # App auf localhost:5173
npm run catalog   # schreibt public/catalog.json
npm run check     # prüft Katalog gegen Quellen und Vorschauen
npm run build     # check + Typprüfung + Bundle
```

Als JSON: `GET /catalog.json` auf der deployten Seite.
Als TypeScript: `import { manifest, entries } from '@/catalog'` — voll typisiert.

## Struktur

```
src/
  design-system/  Tokens und Themes — das visuelle Fundament
  ui/             21 atomare Komponenten
  patterns/       9 zusammengesetzte Muster
  catalog/        Manifest: Metadaten, Props, Snippets, Vorschau-Zuordnung
  configurator/   Regler aus PropSpecs, Live-Vorschau, Code-Erzeugung
  app/            Layout, Routing, Provider
  screens/        Katalogliste und Detailansicht
scripts/          Generator und Konsistenztest
```

`design-system/`, `ui/` und `patterns/` sind projektunabhängig und lassen sich
1:1 übernehmen.

## Einen Eintrag hinzufügen

Zwei Stellen, mehr nicht:

1. Komponente bauen (`ui/<kategorie>/<Name>/`) und im Barrel `ui/index.ts` exportieren
2. Eintrag in `catalog/entries.ts` ergänzen und eine `<Name>.preview.tsx` daneben legen

Die Vorschau wird automatisch über ihre `id` zugeordnet — keine Registry, in die
man sie zusätzlich eintragen muss. `npm run check` meldet, wenn etwas fehlt.

## Stack

React 18, TypeScript (strict), Vite, Lucide Icons. Keine UI-Bibliothek,
kein Router, kein State-Manager.

## Dokumentation

- [Architektur](docs/architecture.md) — Schichten, Katalog, Theming
- [Design System](src/design-system/README.md) — Tokens und ihre CSS-Variablen
