import type { CSSProperties } from 'react';

interface Segment {
  value: number;
  color: string;
  label: string;
}

interface MiniDonutChartProps {
  segments: Segment[];
  size?: number;
  strokeWidth?: number;
  centerLabel?: string;
  centerSub?: string;
  showLegend?: boolean;
  style?: CSSProperties;
}

export function MiniDonutChart({
  segments,
  size = 120,
  strokeWidth = 16,
  centerLabel,
  centerSub,
  showLegend = false,
  style,
}: MiniDonutChartProps) {
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const center = size / 2;

  let offset = 0;
  const arcs = segments.map(seg => {
    const pct = seg.value / total;
    const dash = pct * circumference;
    const gap = circumference - dash;
    const rotation = (offset / total) * 360 - 90;
    offset += seg.value;
    return { ...seg, dash, gap, rotation };
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', ...style }}>
      <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
        <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
          <circle cx={center} cy={center} r={r} fill="none" stroke="var(--border-subtle)" strokeWidth={strokeWidth} />
          {arcs.map((a, i) => (
            <circle
              key={i}
              cx={center} cy={center} r={r}
              fill="none" stroke={a.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${a.dash} ${a.gap}`}
              transform={`rotate(${a.rotation} ${center} ${center})`}
              strokeLinecap="round"
            />
          ))}
        </svg>
        {(centerLabel || centerSub) && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            {centerLabel && <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-1)' }}>{centerLabel}</span>}
            {centerSub && <span style={{ fontSize: '10px', color: 'var(--text-3)' }}>{centerSub}</span>}
          </div>
        )}
      </div>
      {showLegend && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {segments.map((seg, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: seg.color, flexShrink: 0 }} />
              <span style={{ fontSize: '12px', color: 'var(--text-2)' }}>{seg.label}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-3)', marginLeft: 'auto' }}>
                {Math.round((seg.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
