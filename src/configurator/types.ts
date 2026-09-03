import type { PropSpec } from '@/catalog';

/** Ein einzelner Reglerwert. Alles bewusst flach, damit der Zustand teilbar bleibt. */
export type ConfigValue = string | number | boolean;
export type ConfigState = Record<string, ConfigValue>;

/**
 * Bindet einen Katalog-Eintrag an eine live konfigurierbare Vorschau.
 *
 * Die Props kommen aus dem Manifest — hier steht nur, was sich daraus nicht
 * ableiten lässt: wie der Inhalt (`children`) gefüllt wird und wie aus den
 * Werten echtes JSX wird.
 */
export interface Configurable {
  entryId: string;
  /** Zusätzliche Regler für den Inhalt. Nicht Teil der Props der Komponente. */
  content: PropSpec[];
  /** Die konfigurierte Komponente. */
  render: (values: ConfigState, onAction: () => void) => React.ReactNode;
  /** Der Code zwischen öffnendem und schließendem Tag. */
  childrenCode: (values: ConfigState) => string;
  /** Weitere Komponenten, die der erzeugte Code importieren muss. */
  extraImports?: (values: ConfigState) => string[];
}

export function initialState(specs: PropSpec[]): ConfigState {
  const state: ConfigState = {};
  for (const spec of specs) {
    if (spec.default !== undefined) state[spec.name] = spec.default;
    else if (spec.type === 'boolean') state[spec.name] = false;
    else if (spec.type === 'function') state[spec.name] = false;
    else if (spec.type === 'enum' && spec.options?.[0]) state[spec.name] = spec.options[0];
    else if (spec.type === 'string') state[spec.name] = '';
  }
  return state;
}

/** Props, für die ein Regler sinnvoll ist. `node` deckt der Inhalts-Bereich ab. */
export function controllableProps(specs: PropSpec[]): PropSpec[] {
  return specs.filter(spec => spec.type !== 'node' && spec.type !== 'array' && spec.type !== 'object');
}
