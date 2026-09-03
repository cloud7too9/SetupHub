# Architektur

## Übersicht

SetupHub beschreibt einen UI-Baukasten so, dass ein Editor damit arbeiten kann.
Der Katalog ist die Datenquelle, die App darin nur eine von mehreren möglichen
Sichten.

## Schichten

```
design-system/    Tokens und Themes — das visuelle Fundament
ui/               Atomare Komponenten (Button, Card, Input …)
patterns/         Zusammengesetzte Muster (Card+Aktionen, FormSection …)
catalog/          Beschreibung der beiden Ebenen darüber
app/ + screens/   Die Browser-Sicht auf den Katalog
```

Die Abhängigkeiten laufen strikt nach unten: `ui/` kennt weder `catalog/` noch
`app/`. Deshalb lassen sich `design-system/`, `ui/` und `patterns/` unverändert
in ein anderes Projekt übernehmen.

## Katalog

`catalog/entries.ts` beschreibt jeden Eintrag serialisierbar — ohne JSX, ohne
Funktionen. Das ist die Bedingung dafür, dass `scripts/emit-catalog.mjs` daraus
`public/catalog.json` erzeugen kann.

Ein Eintrag trägt: `id`, `name`, `kind` (`component` oder `pattern`),
`category`, `description`, `tags`, `source` (Import-Name, Modul, Dateipfad),
`props` und `snippet`. Die Props sind kein Freitext, sondern typisiert: bei
`enum` stehen die erlaubten Werte in `options`, Vorgaben in `default`. Ein
Editor kann daraus direkt ein Eigenschaften-Panel bauen.

Die Live-Vorschauen liegen bewusst daneben und nicht im Manifest — sie
enthalten JSX. `catalog/previews.ts` sammelt alle `*.preview.tsx` per
`import.meta.glob` ein und ordnet sie über ihre `id` zu. Eine Vorschau
registriert sich damit selbst.

### Einen Eintrag hinzufügen

1. Komponente unter `ui/<kategorie>/<Name>/` anlegen, in `ui/index.ts` exportieren
2. Eintrag in `catalog/entries.ts` ergänzen, `<Name>.preview.tsx` daneben legen

`npm run check` vergleicht Manifest, Dateisystem, Barrel-Exporte und Vorschauen
und bricht den Build ab, wenn eine Stelle fehlt. Vorher waren dafür vier
Registries von Hand zu pflegen — der Kategoriefehler in der alten Export-Ansicht
kam genau daher.

## Konfigurator

`configurator/` macht aus einem Katalog-Eintrag eine live einstellbare Vorschau
mit kopierbarem Code. Die Regler entstehen aus den `PropSpec`s des Manifests,
nicht aus handgeschriebenem Wissen über die Komponente: `enum` wird zur
Auswahlreihe, `boolean` und `function` zum Schalter, `string` und `number` zum
Eingabefeld. `node`, `array` und `object` haben keinen sinnvollen Regler und
werden übersprungen.

Was sich aus dem Manifest nicht ableiten lässt, steht in `registry.tsx`: wie der
Inhalt (`children`) gefüllt wird und wie daraus JSX entsteht. Ein Eintrag ohne
diese Bindung zeigt schlicht keinen Konfigurator.

Der erzeugte Code lässt Werte weg, die ohnehin die Vorgabe sind, ergänzt nötige
Imports und benutzt dieselben Inline-Styles wie die Vorschau — er ist ohne
Nacharbeit lauffähig.

Weitere Einträge anbinden: ein `Configurable` in `configurator/registry.tsx`
ergänzen, mehr braucht es nicht.

## Komponenten-Regeln

- **Eigenständig.** Props rein, UI raus, kein externer State.
- **Tokens statt Werte.** `var(--accent)`, `var(--sp-md)`, `var(--radius-md)` —
  keine festen Pixel für strukturelle Abstände, keine festen Farben.
- **Touch-tauglich.** Mindestens 44px Tap-Target, Buttons 48px (`size="sm"`: 36px).
- **Eine Vorschau.** Mindestens ein Abschnitt mit Varianten; interaktive
  Komponenten brauchen einen Wrapper mit eigenem State.

Kategorien: `actions`, `data-display`, `inputs`, `feedback` für Komponenten,
`composite` für Patterns.

## Theming

Die Paletten liegen in `design-system/themes/` und werden vom ThemeProvider zur
Laufzeit als CSS Custom Properties auf `:root` gesetzt. Gesteuert werden Modus
(Dark/Light), Akzentfarbe, Radius und Spacing; Radius und Spacing skalieren die
jeweiligen Variablen aus einem Faktor. Die Auswahl liegt unter `setuphub.theme`
in `localStorage` und wird beim Start validiert eingelesen.

`:root` in `styles/global.css` spiegelt die Dark-Palette als Fallback für den
ersten Paint, bevor React läuft.

Dieselben Tokens stehen im Manifest unter `tokens` — inklusive beider Themes.

## Navigation

Hash-basiert, ohne Bibliothek: `NavigationProvider` hält `{ screen, detail }`
synchron mit `window.location.hash`, `AppRouter` rendert daraus. Zwei Routen
(`catalog`, `settings`), Detailansichten über `#/catalog/<id>`.
