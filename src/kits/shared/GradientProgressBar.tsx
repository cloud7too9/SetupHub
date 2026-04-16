import type { CSSProperties } from 'react';

interface GradientProgressBarProps {
  value: number;
  max?: number;
  gradient: string;
  height?: number;
  trackColor?: string;
  style?: CSSProperties;
}

export function GradientProgressBar({
  value,
  max = 100,
  gradient,
  height = 8,
  trackColor = 'rgba(255,255,255,0.08)',
  style,
}: GradientProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100);

  return (
    <div style={{
      width: '100%', height,
      background: trackColor,
      borderRadius: height / 2,
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        width: `${pct}%`,
        height: '100%',
        background: gradient,
        borderRadius: height / 2,
        transition: 'width 0.3s ease',
      }} />
    </div>
  );
}
