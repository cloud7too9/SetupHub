import type { ThemePalette } from '@/design-system/themes';

/**
 * Datenmodell des Katalogs.
 *
 * Alles hier ist bewusst serialisierbar (kein JSX, keine Funktionen), damit
 * `npm run catalog` daraus ein `catalog.json` schreiben kann, das ein externer
 * Editor liest. Die Live-Vorschauen liegen getrennt in den `*.preview.tsx`
 * und werden nur in dieser App zugeordnet.
 */

export type PropType = 'string' | 'number' | 'boolean' | 'enum' | 'node' | 'function' | 'object' | 'array';

export interface PropSpec {
  name: string;
  type: PropType;
  /** Fehlt der Wert, ist die Prop optional. */
  required?: boolean;
  /** Nur bei type: 'enum' — die erlaubten Werte. */
  options?: string[];
  /** Vorgabe der Komponente, falls die Prop weggelassen wird. */
  default?: string | number | boolean;
  description?: string;
}

export type EntryKind = 'component' | 'pattern';

export type CategoryId = 'actions' | 'data-display' | 'inputs' | 'feedback' | 'composite';

export interface CatalogEntry {
  id: string;
  name: string;
  kind: EntryKind;
  category: CategoryId;
  description: string;
  tags: string[];
  /** Woher der Editor die Komponente bezieht. */
  source: { named: string; from: string; path: string };
  props: PropSpec[];
  /** Nutzungsbeispiel für Copy-to-Clipboard. */
  snippet: string;
}

export interface CategoryInfo {
  id: CategoryId;
  label: string;
}

/** Gestaltungsspielraum, den der Editor anbieten kann. */
export interface TokenManifest {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  radius: Record<string, string>;
  shadows: Record<string, string>;
  fontFamily: Record<string, string>;
  fontSize: Record<string, string>;
  fontWeight: Record<string, string>;
  lineHeight: Record<string, string>;
  themes: Record<string, ThemePalette>;
}

export interface CatalogManifest {
  name: string;
  version: string;
  categories: CategoryInfo[];
  tokens: TokenManifest;
  entries: CatalogEntry[];
}
