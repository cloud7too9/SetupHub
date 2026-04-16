import type { CSSProperties } from 'react';

interface GlowInputProps {
  label: string;
  glowColor: string;
  icon?: React.ReactNode;
  type?: string;
  value?: string;
  style?: CSSProperties;
}

export function GlowInput({ label, glowColor, icon, type = 'text', value, style }: GlowInputProps) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <div style={{
        display: 'flex', alignItems: 'center',
        background: 'rgba(255,255,255,0.04)',
        borderRadius: '12px',
        padding: '14px 16px',
        border: `1px solid ${glowColor}30`,
        boxShadow: `0 0 12px ${glowColor}25, inset 0 0 12px ${glowColor}08`,
        gap: '12px',
      }}>
        <span style={{ flex: 1, fontSize: '15px', color: value ? '#fff' : 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-sans)' }}>
          {value ?? label}
        </span>
        {icon && <div style={{ color: glowColor, flexShrink: 0 }}>{icon}</div>}
      </div>
      <div style={{
        position: 'absolute', bottom: 0, left: '10%', right: '10%', height: '2px',
        background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
        borderRadius: '1px',
      }} />
    </div>
  );
}
