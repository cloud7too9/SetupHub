import { KitWrapper } from './shared/KitWrapper';
import { MiniLineChart } from './shared/MiniLineChart';
import { MiniBarChart } from './shared/MiniBarChart';
import { KitStatCard } from './shared/KitStatCard';

const theme = {
  bg: '#0d0b0a',
  surface: '#1a1614',
  surfaceAlt: '#241e1a',
  accent: '#f59e0b',
  accentMuted: 'rgba(245,158,11,0.12)',
  text1: '#f5f0ea',
  text2: '#a89888',
  text3: '#6b5c4f',
  border: '#2a2320',
  borderSubtle: '#1f1a17',
};

const balanceData = [35, 40, 38, 42, 50, 48, 55, 52, 60, 65, 58, 70, 68, 75, 72, 80];
const balanceLabels = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

const investData = [
  { label: 'Sep', value: 300 },
  { label: 'Oct', value: 350 },
  { label: 'Nov', value: 400 },
  { label: 'Dec', value: 420 },
  { label: 'Jan', value: 380 },
  { label: 'Feb', value: 500 },
];

const transactions = [
  { name: 'Lucas Bennett', date: '20 Jan, 02:00 PM', amount: '' },
  { name: 'Google Drive', date: '20 Jan, 02:00 PM', amount: '-$5.00' },
  { name: 'Nike Store', date: '19 Jan, 02:00 PM', amount: '-$55.00' },
];

export function FinanceKit() {
  return (
    <KitWrapper theme={theme}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✦</div>
          <span style={{ fontSize: '13px', color: theme.text3 }}>🔍 Search</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: theme.text2, background: theme.surface, padding: '6px 12px', borderRadius: '8px' }}>⌘ + Space</span>
          <span style={{ fontSize: '13px', fontWeight: 600 }}>Ethan Reynolds</span>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: theme.accent }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
        {/* Balance Chart */}
        <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
            <span style={{ fontSize: '13px', color: theme.text3 }}>Total Balance</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['1 year', '6 month', '3 month', '1 month'].map((t, i) => (
                <span key={t} style={{
                  padding: '4px 10px', borderRadius: '8px', fontSize: '11px', fontWeight: 500,
                  background: i === 0 ? theme.accent : 'transparent',
                  color: i === 0 ? theme.bg : theme.text3,
                }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '28px', fontWeight: 700 }}>$10,120.50</span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#34d399' }}>↑ 2.92%</span>
          </div>
          <MiniLineChart
            series={[{ data: balanceData, color: theme.accent, fillOpacity: 0.15 }]}
            labels={balanceLabels}
            height={140}
            showLabels
            showGrid
          />
          <div style={{ display: 'flex', gap: '16px', marginTop: '8px', fontSize: '11px', color: theme.text3 }}>
            <span>Average annual rate: <strong style={{ color: theme.text1 }}>$84,000</strong></span>
            <span>● Actual balance</span>
            <span>● Total monthly balance</span>
          </div>
        </div>

        {/* My Cards */}
        <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '15px', fontWeight: 600 }}>My cards</span>
            <span style={{ fontSize: '11px', color: theme.accent }}>+ Add new</span>
          </div>
          {/* Card visual */}
          <div style={{
            background: 'linear-gradient(135deg, #1a2a3a, #0a1a2a)',
            borderRadius: '12px', padding: '16px', marginBottom: '12px',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>VISA</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginBottom: '6px', letterSpacing: '2px' }}>•••• •••• •••• 4829</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>Balance</div>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>$12,850.00</div>
              </div>
              <span style={{ fontSize: '11px', color: '#34d399' }}>↑ 3.52%</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <button style={{ flex: 1, padding: '8px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, background: theme.surfaceAlt, color: theme.accent, border: `1px solid ${theme.border}`, cursor: 'pointer' }}>↕ Request</button>
            <button style={{ flex: 1, padding: '8px', borderRadius: '8px', fontSize: '12px', fontWeight: 600, background: theme.accent, color: theme.bg, border: 'none', cursor: 'pointer' }}>↗ Transfer</button>
          </div>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>
            Recent Transactions <span style={{ float: 'right', fontSize: '11px', color: theme.accent, fontWeight: 500 }}>View All</span>
          </div>
          {transactions.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderTop: i > 0 ? `1px solid ${theme.borderSubtle}` : undefined }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: theme.surfaceAlt }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 500 }}>{t.name}</div>
                <div style={{ fontSize: '10px', color: theme.text3 }}>{t.date}</div>
              </div>
              {t.amount && <span style={{ fontSize: '13px', fontWeight: 600, color: t.amount.startsWith('-') ? '#f87171' : '#34d399' }}>{t.amount}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {/* Promo */}
        <div style={{
          background: 'linear-gradient(135deg, #f97316, #c2410c)',
          borderRadius: '14px', padding: '20px', color: '#fff',
        }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>Trusted by Thousands</h3>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Join Us Today!</h3>
          <p style={{ fontSize: '12px', opacity: 0.8, marginBottom: '16px', lineHeight: 1.5 }}>
            Secure, reliable, and trusted by customers worldwide.
          </p>
          <div style={{ display: 'flex', marginBottom: '16px' }}>
            {['#ec4899', '#6366f1', '#34d399', '#f59e0b'].map((c, i) => (
              <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: c, border: '2px solid #fff', marginLeft: i > 0 ? '-8px' : 0 }} />
            ))}
          </div>
          <button style={{
            padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600,
            background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', cursor: 'pointer',
          }}>Request</button>
        </div>

        {/* Investments */}
        <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Investments</span>
            <div style={{ display: 'flex', gap: '8px', fontSize: '11px', color: theme.text3 }}>
              <span>Sort ↕</span><span>Month ∨</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '20px', fontWeight: 700 }}>$3,200.00</span>
            <span style={{ fontSize: '11px', color: '#34d399' }}>↑ 1.52%</span>
          </div>
          <MiniBarChart data={investData} height={140} barColor="#34d399" showLabels showValues />
        </div>
      </div>
    </KitWrapper>
  );
}
