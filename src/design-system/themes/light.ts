import type { ThemePalette } from './palette';

// Eigene Werte statt Ableitung aus tokens/colors.ts: Light braucht kräftigere
// Status-Farben, damit sie auf weißem Grund lesbar bleiben.
export const lightTheme: ThemePalette = {
  bg: '#f4f5f7',
  surface: '#ffffff',
  'surface-alt': '#ebedf0',
  border: '#d1d5db',
  'border-subtle': '#e5e7eb',
  'text-1': '#111827',
  'text-2': '#6b7280',
  'text-3': '#9ca3af',
  success: '#059669',
  warning: '#d97706',
  error: '#dc2626',
  'shadow-sm': '0 1px 3px rgba(0,0,0,0.08)',
  'shadow-md': '0 4px 12px rgba(0,0,0,0.1)',
  'shadow-lg': '0 8px 24px rgba(0,0,0,0.12)',
};
