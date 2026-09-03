import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { darkTheme, lightTheme } from '@/design-system/themes';

export interface ThemeConfig {
  mode: 'dark' | 'light';
  accent: string;
  radius: number;
  spacing: number;
}

const defaultConfig: ThemeConfig = {
  mode: 'dark',
  accent: '#00e5ff',
  radius: 10,
  spacing: 1,
};

const STORAGE_KEY = 'setuphub.theme';

interface ThemeCtx {
  config: ThemeConfig;
  update: (partial: Partial<ThemeConfig>) => void;
  reset: () => void;
}

const Ctx = createContext<ThemeCtx>({
  config: defaultConfig,
  update: () => {},
  reset: () => {},
});

export const useTheme = () => useContext(Ctx);

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

// Der Speicher ist manipulierbar und kann aus einer älteren Version stammen —
// jedes Feld einzeln prüfen, sonst landen z.B. NaN-Werte in hexToRgb().
function loadConfig(): ThemeConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultConfig;
    const saved = JSON.parse(raw) as Partial<ThemeConfig>;
    return {
      mode: saved.mode === 'light' || saved.mode === 'dark' ? saved.mode : defaultConfig.mode,
      accent: typeof saved.accent === 'string' && /^#[0-9a-f]{6}$/i.test(saved.accent)
        ? saved.accent
        : defaultConfig.accent,
      radius: typeof saved.radius === 'number' && Number.isFinite(saved.radius)
        ? clamp(saved.radius, 0, 48)
        : defaultConfig.radius,
      spacing: typeof saved.spacing === 'number' && Number.isFinite(saved.spacing)
        ? clamp(saved.spacing, 0.5, 2)
        : defaultConfig.spacing,
    };
  } catch {
    return defaultConfig; // Speicher gesperrt (Private Mode) oder kaputtes JSON
  }
}

function saveConfig(config: ThemeConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch { /* Speicher nicht verfügbar — Theming funktioniert trotzdem */ }
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

function applyConfig(config: ThemeConfig) {
  const root = document.documentElement;
  const palette = config.mode === 'dark' ? darkTheme : lightTheme;

  for (const [key, val] of Object.entries(palette)) {
    root.style.setProperty(`--${key}`, val);
  }

  root.style.setProperty('--accent', config.accent);
  root.style.setProperty('--accent-muted', `rgba(${hexToRgb(config.accent)},${config.mode === 'dark' ? '0.12' : '0.08'})`);
  root.style.setProperty('--accent-hover', config.accent);
  root.style.setProperty('--shadow-glow', `0 0 20px rgba(${hexToRgb(config.accent)},${config.mode === 'dark' ? '0.15' : '0.1'})`);

  const r = config.radius;
  root.style.setProperty('--radius-sm', `${Math.round(r * 0.6)}px`);
  root.style.setProperty('--radius-md', `${r}px`);
  root.style.setProperty('--radius-lg', `${Math.round(r * 1.4)}px`);
  root.style.setProperty('--radius-xl', `${r * 2}px`);

  const s = config.spacing;
  root.style.setProperty('--sp-xs', `${Math.round(4 * s)}px`);
  root.style.setProperty('--sp-sm', `${Math.round(8 * s)}px`);
  root.style.setProperty('--sp-md', `${Math.round(12 * s)}px`);
  root.style.setProperty('--sp-lg', `${Math.round(16 * s)}px`);
  root.style.setProperty('--sp-xl', `${Math.round(20 * s)}px`);
  root.style.setProperty('--sp-2xl', `${Math.round(24 * s)}px`);
  root.style.setProperty('--sp-3xl', `${Math.round(32 * s)}px`);
  root.style.setProperty('--pad', `${Math.round(20 * s)}px`);

  // Sonst bleibt die Browser-/Statusleiste auf dem Handy im Light Mode dunkel.
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', palette.bg);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<ThemeConfig>(loadConfig);

  const update = useCallback((partial: Partial<ThemeConfig>) => {
    setConfig(prev => ({ ...prev, ...partial }));
  }, []);

  const reset = useCallback(() => setConfig(defaultConfig), []);

  useEffect(() => {
    applyConfig(config);
    saveConfig(config);
  }, [config]);

  return <Ctx.Provider value={{ config, update, reset }}>{children}</Ctx.Provider>;
}
