import { KitWrapper } from './shared/KitWrapper';
import { MiniLineChart } from './shared/MiniLineChart';
import { MiniDonutChart } from './shared/MiniDonutChart';
import { KitStatCard } from './shared/KitStatCard';

const theme = {
  bg: '#0a0a12',
  surface: '#12121e',
  surfaceAlt: '#1a1a2e',
  accent: '#ec4899',
  accentMuted: 'rgba(236,72,153,0.12)',
  text1: '#f0eef5',
  text2: '#9895a8',
  text3: '#5a5670',
  border: '#222238',
  borderSubtle: '#1a1a2e',
};

const chartData1 = [20, 35, 28, 42, 38, 50, 45, 55, 48, 60, 52, 65, 58, 70, 55, 62];
const chartData2 = [15, 22, 30, 25, 35, 28, 40, 32, 38, 30, 42, 35, 45, 38, 48, 40];

const stats = [
  { label: 'My Balance', value: '$ 42,069.00', trend: '+24%', trendUp: true },
  { label: 'Investment', value: '$ 20,619.00', trend: '+28%', trendUp: true },
  { label: 'Total Gain', value: '$ 8,664.00', trend: '+22%', trendUp: true },
  { label: 'Total Loss', value: '$ 1,212.00', trend: '-20%', trendUp: false },
];

const detailStats = [
  { label: 'Prev Close', value: '$17,112.00' },
  { label: '% Change', value: '+26%', color: '#34d399' },
  { label: 'Market Cap', value: '$28 M USD' },
  { label: 'PE Ratio', value: '14.28%' },
];

export function PortfolioKit() {
  return (
    <KitWrapper theme={theme}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ec4899', boxShadow: '0 0 8px #ec4899' }} />
          <span style={{ fontSize: '13px', color: theme.text2 }}>Friday, 4 Nov 2022</span>
        </div>
        <div style={{
          padding: '8px 16px', borderRadius: '20px', fontSize: '12px',
          background: theme.surface, border: `1px solid ${theme.border}`, color: theme.text3,
        }}>🔍 Search</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600 }}>Dennis Steven Denji</span>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ec4899' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
        {/* Left: Portfolio Overview */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700 }}>Overall Portfolio</h2>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 500, background: theme.surface, color: theme.text2, border: `1px solid ${theme.border}`, cursor: 'pointer' }}>Withdraw</button>
              <button style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, background: '#34d399', color: '#0a0a12', border: 'none', cursor: 'pointer' }}>Deposit +</button>
            </div>
          </div>

          {/* Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '16px' }}>
            {stats.map((s, i) => (
              <KitStatCard key={i} label={s.label} value={s.value} trend={s.trend} trendUp={s.trendUp} />
            ))}
          </div>

          {/* Chart */}
          <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme.surfaceAlt }} />
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>Origin Game EA Inc. (OREA)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '4px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 700 }}>$ 28,089.00</span>
                  <span style={{ fontSize: '11px', color: '#34d399' }}>▲ +26%</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '4px' }}>
                {['1D', '1W', '5M', '1Y', 'MAX'].map((t, i) => (
                  <span key={t} style={{
                    padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 500,
                    background: i === 2 ? '#ec4899' : 'transparent',
                    color: i === 2 ? '#fff' : theme.text3,
                  }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '12px' }}>
              <MiniLineChart
                series={[
                  { data: chartData1, color: '#ec4899', fillOpacity: 0.08 },
                  { data: chartData2, color: '#06b6d4', fillOpacity: 0.05 },
                ]}
                height={180}
                showGrid
                curved
              />
            </div>
          </div>
        </div>

        {/* Right: Stock Detail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '2px' }}>Origin Game Inc.</div>
            <div style={{ fontSize: '11px', color: theme.text3, marginBottom: '8px' }}>(OREA)</div>
            <div style={{ fontSize: '11px', color: theme.text3, marginBottom: '4px' }}>My Portfolio</div>
            <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>8,089.00</div>
            <span style={{ fontSize: '11px', color: theme.accent }}>Official Website ↗</span>
          </div>

          <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}`, textAlign: 'center' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px' }}>Share Holder</div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <MiniDonutChart
                segments={[
                  { label: 'Holder', value: 50, color: '#ec4899' },
                  { label: 'Promoter', value: 50, color: '#6366f1' },
                ]}
                size={90}
                strokeWidth={10}
                centerLabel="50%"
                centerSub="Promoter"
              />
            </div>
          </div>

          <div style={{ background: theme.surface, borderRadius: '14px', padding: '16px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '11px', color: theme.text3, marginBottom: '10px' }}>08 Nov – 17 Nov</div>
            {detailStats.map((s, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', padding: '6px 0',
                borderTop: i > 0 ? `1px solid ${theme.borderSubtle}` : undefined, fontSize: '12px',
              }}>
                <span style={{ color: theme.text3 }}>{s.label}</span>
                <span style={{ fontWeight: 600, color: s.color ?? theme.text1 }}>{s.value}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ flex: 1, padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: theme.surface, color: '#34d399', border: `1px solid #34d39940`, cursor: 'pointer' }}>Sell Stock</button>
            <button style={{ flex: 1, padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, background: '#ec4899', color: '#fff', border: 'none', cursor: 'pointer' }}>Buy Stock</button>
          </div>
        </div>
      </div>
    </KitWrapper>
  );
}
