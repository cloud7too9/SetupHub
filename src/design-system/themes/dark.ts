import { colors } from '../tokens/colors';
import { shadows } from '../tokens/shadows';
import type { ThemePalette } from './palette';

export const darkTheme: ThemePalette = {
  bg: colors.background,
  surface: colors.surface,
  'surface-alt': colors.surfaceAlt,
  border: colors.border,
  'border-subtle': colors.borderSubtle,
  'text-1': colors.textPrimary,
  'text-2': colors.textSecondary,
  'text-3': colors.textTertiary,
  success: colors.success,
  warning: colors.warning,
  error: colors.error,
  'shadow-sm': shadows.sm,
  'shadow-md': shadows.md,
  'shadow-lg': shadows.lg,
};
