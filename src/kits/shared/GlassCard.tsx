import type { CSSProperties } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  blur?: number;
  opacity?: number;
  borderOpacity?: number;
  style?: CSSProperties;
}

export function GlassCard({ children, blur = 20, opacity = 0.12, borderOpacity = 0.15, style }: GlassCardProps) {
  return (
    <div style={{
      background: `rgba(255, 255, 255, ${opacity})`,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      borderRadius: 'var(--radius-lg)',
      border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
      padding: '16px',
      ...style,
    }}>
      {children}
    </div>
  );
}
