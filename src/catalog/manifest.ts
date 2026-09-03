import { colors } from '@/design-system/tokens/colors';
import { spacing } from '@/design-system/tokens/spacing';
import { radius } from '@/design-system/tokens/radius';
import { shadows } from '@/design-system/tokens/shadows';
import { fontFamily, fontSize, fontWeight, lineHeight } from '@/design-system/tokens/typography';
import { darkTheme, lightTheme } from '@/design-system/themes';
import { entries } from './entries';
import type { CatalogManifest, CategoryInfo } from './types';

export const categories: CategoryInfo[] = [
  { id: 'actions', label: 'Aktionen' },
  { id: 'data-display', label: 'Datenanzeige' },
  { id: 'inputs', label: 'Eingaben' },
  { id: 'feedback', label: 'Rückmeldung' },
  { id: 'composite', label: 'Patterns' },
];

/** Vollständiger Katalog — das ist, was ein Editor liest. */
export const manifest: CatalogManifest = {
  name: 'SetupHub',
  version: '1.0.0',
  categories,
  tokens: {
    colors,
    spacing,
    radius,
    shadows,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    themes: { dark: darkTheme, light: lightTheme },
  },
  entries,
};
