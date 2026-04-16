import type { CSSProperties } from 'react';

interface CircularGaugeProps {
  value: number;
  max?: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  trackColor?: string;
  label?: string;
  centerContent?: React.ReactNode;
  style?: CSSProperties;
}

export function CircularGauge({
  value,
  max = 100,
  size = 120,
  strokeWidth = 10,
  color = 'var(--accent)',
  trackColor = 'var(--border-subtle)',
  label,
  centerContent,
  style,
}: CircularGaugeProps) {
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const dashLen = pct * circumference;
  const center = size / 2;

  return (
    <div style={{ position: 'relative', width: size, height: size, ...style }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size, transform: 'rotate(-90deg)' }}>
        <circle cx={center} cy={center} r={r} fill="none" stroke={trackColor} strokeWidth={strokeWidth} />
        <circle
          cx={center} cy={center} r={r}
          fill="none" stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dashLen} ${circumference - dashLen}`}
          strokeLinecap="round"
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {centerContent ?? (
          <>
            <span style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-1)' }}>{value}</span>
            {label && <span style={{ fontSize: '10px', color: 'var(--text-3)' }}>{label}</span>}
          </>
        )}
      </div>
    </div>
  );
}
