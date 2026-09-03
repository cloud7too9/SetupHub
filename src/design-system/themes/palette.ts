/**
 * Laufzeit-Palette eines Themes.
 * Die Schlüssel entsprechen 1:1 den CSS Custom Properties, die der ThemeProvider
 * auf `:root` schreibt (`bg` → `--bg`, `surface-alt` → `--surface-alt` …).
 *
 * Nicht enthalten sind die Akzent-Variablen (`--accent`, `--accent-muted`,
 * `--shadow-glow`): die berechnet der ThemeProvider aus der vom Nutzer
 * gewählten Akzentfarbe.
 */
export interface ThemePalette {
  bg: string;
  surface: string;
  'surface-alt': string;
  border: string;
  'border-subtle': string;
  'text-1': string;
  'text-2': string;
  'text-3': string;
  success: string;
  warning: string;
  error: string;
  'shadow-sm': string;
  'shadow-md': string;
  'shadow-lg': string;
}
