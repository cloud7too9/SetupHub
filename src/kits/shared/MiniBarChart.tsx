import type { CSSProperties } from 'react';

interface BarData {
  label: string;
  value: number;
  color?: string;
}

interface MiniBarChartProps {
  data: BarData[];
  height?: number;
  barColor?: string;
  activeIndex?: number;
  showLabels?: boolean;
  showValues?: boolean;
  barRadius?: number;
  style?: CSSProperties;
}

export function MiniBarChart({
  data,
  height = 160,
  barColor = 'var(--accent)',
  activeIndex,
  showLabels = true,
  showValues = false,
  barRadius = 4,
  style,
}: MiniBarChartProps) {
  const max = Math.max(...data.map(d => d.value), 1);
  const barWidth = 100 / data.length;
  const padding = barWidth * 0.2;
  const labelSpace = showLabels ? 24 : 0;
  const valueSpace = showValues ? 16 : 0;
  const chartHeight = height - labelSpace - valueSpace;

  return (
    <svg
      viewBox={`0 0 ${data.length * 40} ${height}`}
      preserveAspectRatio="none"
      style={{ width: '100%', height, display: 'block', ...style }}
    >
      {data.map((d, i) => {
        const barH = (d.value / max) * (chartHeight - 4);
        const x = i * 40 + 4;
        const w = 32;
        const y = chartHeight - barH + valueSpace;
        const isActive = activeIndex === i;
        const fill = d.color ?? (isActive ? barColor : `color-mix(in srgb, ${barColor} ${isActive || activeIndex == null ? '100' : '50'}%, transparent)`);

        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={w}
              height={barH}
              rx={barRadius}
              fill={fill}
              opacity={activeIndex != null && !isActive ? 0.4 : 1}
            />
            {showValues && (
              <text
                x={x + w / 2}
                y={y - 4}
                textAnchor="middle"
                fill="var(--text-2)"
                fontSize="9"
                fontFamily="var(--font-sans)"
              >
                {d.value}
              </text>
            )}
            {showLabels && (
              <text
                x={x + w / 2}
                y={height - 4}
                textAnchor="middle"
                fill="var(--text-3)"
                fontSize="9"
                fontFamily="var(--font-sans)"
              >
                {d.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
