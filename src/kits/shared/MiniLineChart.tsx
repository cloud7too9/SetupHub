import type { CSSProperties } from 'react';

interface Series {
  data: number[];
  color: string;
  fillOpacity?: number;
}

interface MiniLineChartProps {
  series: Series[];
  labels?: string[];
  height?: number;
  showDots?: boolean;
  showGrid?: boolean;
  showLabels?: boolean;
  curved?: boolean;
  style?: CSSProperties;
}

function buildPath(points: [number, number][], curved: boolean): string {
  if (points.length < 2) return '';
  let d = `M ${points[0][0]} ${points[0][1]}`;
  if (!curved) {
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i][0]} ${points[i][1]}`;
    }
  } else {
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cpx1 = prev[0] + (curr[0] - prev[0]) * 0.4;
      const cpx2 = prev[0] + (curr[0] - prev[0]) * 0.6;
      d += ` C ${cpx1} ${prev[1]}, ${cpx2} ${curr[1]}, ${curr[0]} ${curr[1]}`;
    }
  }
  return d;
}

export function MiniLineChart({
  series,
  labels,
  height = 160,
  showDots = false,
  showGrid = false,
  showLabels = false,
  curved = true,
  style,
}: MiniLineChartProps) {
  const labelSpace = showLabels && labels ? 24 : 0;
  const chartH = height - labelSpace;
  const allValues = series.flatMap(s => s.data);
  const max = Math.max(...allValues, 1);
  const min = Math.min(...allValues, 0);
  const range = max - min || 1;

  const maxLen = Math.max(...series.map(s => s.data.length));
  const viewW = 400;

  function toPoints(data: number[]): [number, number][] {
    return data.map((v, i) => [
      (i / (data.length - 1 || 1)) * viewW,
      chartH - ((v - min) / range) * (chartH - 8) - 4,
    ]);
  }

  return (
    <svg viewBox={`0 0 ${viewW} ${height}`} preserveAspectRatio="none" style={{ width: '100%', height, display: 'block', ...style }}>
      <defs>
        {series.map((s, idx) => (
          <linearGradient key={idx} id={`lcg-${idx}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={s.color} stopOpacity={s.fillOpacity ?? 0.3} />
            <stop offset="100%" stopColor={s.color} stopOpacity={0} />
          </linearGradient>
        ))}
      </defs>

      {showGrid && [0.25, 0.5, 0.75].map(pct => (
        <line
          key={pct}
          x1={0} y1={chartH * pct}
          x2={viewW} y2={chartH * pct}
          stroke="var(--border-subtle)" strokeWidth="0.5" strokeDasharray="4 4"
        />
      ))}

      {series.map((s, idx) => {
        const pts = toPoints(s.data);
        const linePath = buildPath(pts, curved);
        const areaPath = linePath + ` L ${pts[pts.length - 1][0]} ${chartH} L ${pts[0][0]} ${chartH} Z`;

        return (
          <g key={idx}>
            {(s.fillOpacity ?? 0.3) > 0 && (
              <path d={areaPath} fill={`url(#lcg-${idx})`} />
            )}
            <path d={linePath} fill="none" stroke={s.color} strokeWidth="2.5" strokeLinecap="round" />
            {showDots && pts.map((p, pi) => (
              <circle key={pi} cx={p[0]} cy={p[1]} r="3" fill={s.color} />
            ))}
          </g>
        );
      })}

      {showLabels && labels?.map((l, i) => (
        <text
          key={i}
          x={(i / (labels.length - 1 || 1)) * viewW}
          y={height - 4}
          textAnchor="middle"
          fill="var(--text-3)"
          fontSize="10"
          fontFamily="var(--font-sans)"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}
