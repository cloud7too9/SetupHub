import type { CSSProperties } from 'react';

export interface KitTheme {
  bg: string;
  surface: string;
  surfaceAlt: string;
  accent: string;
  accentMuted: string;
  text1: string;
  text2: string;
  text3: string;
  border: string;
  borderSubtle: string;
}

interface KitWrapperProps {
  theme: KitTheme;
  children: React.ReactNode;
  style?: CSSProperties;
}

export function KitWrapper({ theme, children, style }: KitWrapperProps) {
  return (
    <div style={{
      '--bg': theme.bg,
      '--surface': theme.surface,
      '--surface-alt': theme.surfaceAlt,
      '--accent': theme.accent,
      '--accent-muted': theme.accentMuted,
      '--text-1': theme.text1,
      '--text-2': theme.text2,
      '--text-3': theme.text3,
      '--border': theme.border,
      '--border-subtle': theme.borderSubtle,
      background: theme.bg,
      color: theme.text1,
      padding: '20px',
      borderRadius: 'var(--radius-xl)',
      minHeight: '500px',
      fontFamily: 'var(--font-sans)',
      ...style,
    } as CSSProperties}>
      {children}
    </div>
  );
}
