import { KitWrapper } from './shared/KitWrapper';
import { MiniLineChart } from './shared/MiniLineChart';

const theme = {
  bg: '#080812',
  surface: '#10101e',
  surfaceAlt: '#18182e',
  accent: '#6366f1',
  accentMuted: 'rgba(99,102,241,0.12)',
  text1: '#eeeef5',
  text2: '#9595a8',
  text3: '#585870',
  border: '#202038',
  borderSubtle: '#18182e',
};

const filters = ['Feed', 'Saved', 'Archived', 'Moody'];

const chartSeries = [
  { data: [20, 35, 25, 45, 38, 55, 42, 60, 48, 65, 52, 70], color: '#6366f1', fillOpacity: 0.15 },
  { data: [15, 25, 30, 28, 40, 35, 50, 38, 52, 45, 58, 50], color: '#ec4899', fillOpacity: 0.1 },
  { data: [10, 18, 15, 22, 20, 30, 25, 35, 28, 38, 32, 40], color: '#06b6d4', fillOpacity: 0.08 },
];

export function FeedAnalyticsKit() {
  return (
    <KitWrapper theme={theme}>
      <div style={{
        background: theme.surface,
        borderRadius: '20px',
        padding: '28px',
        border: `1px solid ${theme.borderSubtle}`,
        maxWidth: '560px',
        margin: '0 auto',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700 }}>Feed</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', color: theme.text2 }}>Senrseo Peal</span>
            <span style={{ fontSize: '16px', color: theme.text3 }}>🔍</span>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }} />
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {filters.map((f, i) => (
            <span key={f} style={{
              padding: '8px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: i === 0 ? 600 : 400,
              background: i === 0 ? '#34d399' : theme.surfaceAlt,
              color: i === 0 ? '#0a0a12' : theme.text2,
              cursor: 'pointer',
            }}>{f}</span>
          ))}
        </div>

        {/* User Card */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '14px', borderRadius: '14px',
          background: theme.surfaceAlt, marginBottom: '16px',
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          }} />
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600 }}>Fleicars</div>
            <div style={{ fontSize: '11px', color: theme.text3, lineHeight: 1.4 }}>
              Peonedomsirtem nerty txleterfie.
            </div>
          </div>
        </div>

        {/* Wave Chart */}
        <div style={{
          background: theme.surfaceAlt,
          borderRadius: '14px',
          padding: '16px',
        }}>
          <MiniLineChart
            series={chartSeries}
            height={180}
            curved
            showGrid
          />
        </div>
      </div>
    </KitWrapper>
  );
}
