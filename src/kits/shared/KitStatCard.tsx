import type { CSSProperties } from 'react';

interface KitStatCardProps {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  accent?: string;
  style?: CSSProperties;
}

export function KitStatCard({ label, value, trend, trendUp, accent, style }: KitStatCardProps) {
  return (
    <div style={{
      background: 'var(--surface)',
      borderRadius: 'var(--radius-lg)',
      padding: '16px',
      border: '1px solid var(--border-subtle)',
      ...style,
    }}>
      <div style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 500, marginBottom: '4px' }}>{label}</div>
      <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.2 }}>{value}</div>
      {trend && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '4px',
          marginTop: '6px', fontSize: '11px', fontWeight: 600,
          padding: '2px 8px', borderRadius: 'var(--radius-sm)',
          background: trendUp
            ? 'color-mix(in srgb, #34d399 15%, transparent)'
            : 'color-mix(in srgb, #f87171 15%, transparent)',
          color: trendUp ? '#34d399' : '#f87171',
        }}>
          {trendUp ? '↑' : '↓'} {trend}
        </div>
      )}
    </div>
  );
}
