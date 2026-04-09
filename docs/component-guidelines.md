# Komponenten-Richtlinien

## Ordnerstruktur

```
ui/category/ComponentName/
  ComponentName.tsx        Implementierung
  ComponentName.types.ts   Props und Typen (optional)
  ComponentName.preview.tsx Live-Demo für den Katalog
  index.ts                 Re-Export
```

## Regeln

### 1. Eigenständig
Jede Komponente funktioniert ohne externen State. Props rein, UI raus.

### 2. Design Tokens verwenden
Farben: `var(--accent)`, `var(--text-1)`, etc.
Abstände: `var(--sp-sm)`, `var(--sp-md)`, etc.
Rundungen: `var(--radius-md)`, `var(--radius-lg)`, etc.

Keine hardcoded Pixel-Werte für strukturelle Abstände.

### 3. Touch-optimiert
Minimale Tap-Targets: 44px Höhe.
Buttons: min-height 48px (außer size="sm" mit 36px).

### 4. Registrierung
Neue Komponenten müssen in drei Dateien registriert werden:
- `features/catalog/data/component-registry.ts`
- `features/catalog/data/preview-registry.ts`
- `features/catalog/data/code-snippets.ts`

### 5. Export
Jede Komponente wird im Barrel-Export `ui/index.ts` aufgeführt.

### 6. Preview
Jede Preview hat mindestens eine Section mit Varianten.
Interaktive Previews (z.B. Toggle, Dropdown) brauchen eine Wrapper-Komponente mit eigenem State.

## Kategorien

| Kategorie     | Zweck                           |
|---------------|--------------------------------|
| actions       | Interaktive Elemente            |
| data-display  | Darstellung von Informationen   |
| inputs        | Formulareingaben                |
| feedback      | Status und Rückmeldung          |
