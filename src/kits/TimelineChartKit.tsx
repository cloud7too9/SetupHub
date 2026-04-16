import { KitWrapper } from './shared/KitWrapper';
import { MiniLineChart } from './shared/MiniLineChart';

const theme = {
  bg: '#0a0a14',
  surface: '#12121e',
  surfaceAlt: '#1a1a2e',
  accent: '#f97316',
  accentMuted: 'rgba(249,115,22,0.12)',
  text1: '#f0eef5',
  text2: '#9895a8',
  text3: '#5a5670',
  border: '#222238',
  borderSubtle: '#1a1a2e',
};

const periods = ['Today', 'Week', 'Month', 'Quarter', 'Year'];

const chartSeries = [
  { data: [50, 80, 60, 120, 90, 200, 150, 250, 180, 300], color: '#f97316', fillOpacity: 0.08 },
  { data: [30, 50, 70, 45, 80, 60, 100, 80, 120, 90], color: '#a855f7', fillOpacity: 0.06 },
];

const labels = ['Suite', 'NoXTe', 'MocTo', 'Net In', 'IoJMo', 'Not In', 'oTome', 'SMol In', 'Ghosty'];

export function TimelineChartKit() {
  return (
    <KitWrapper theme={theme} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '560px' }}>
        {/* Title */}
        <h2 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Today</h2>

        {/* Chart Card */}
        <div style={{
          background: theme.surface,
          borderRadius: '20px',
          padding: '24px',
          border: `1px solid ${theme.borderSubtle}`,
        }}>
          {/* Period Tabs */}
          <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
            {periods.map((p, i) => (
              <span key={p} style={{
                padding: '8px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: i === 0 ? 600 : 400,
                background: i === 0 ? 'linear-gradient(135deg, #f97316, #ec4899)' : theme.surfaceAlt,
                color: i === 0 ? '#fff' : theme.text3,
                cursor: 'pointer',
              }}>{p}</span>
            ))}
          </div>

          {/* Y-axis labels + Chart */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '24px' }}>
              {['600%', '200%', '000%'].map(l => (
                <span key={l} style={{ fontSize: '10px', color: theme.text3 }}>{l}</span>
              ))}
            </div>
            <div style={{ flex: 1 }}>
              <MiniLineChart
                series={chartSeries}
                labels={labels}
                height={200}
                curved
                showGrid
                showLabels
              />
            </div>
          </div>
        </div>
      </div>
    </KitWrapper>
  );
}
