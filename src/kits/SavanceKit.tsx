import { KitWrapper } from './shared/KitWrapper';
import { MiniBarChart } from './shared/MiniBarChart';
import { MiniLineChart } from './shared/MiniLineChart';
import { MiniDonutChart } from './shared/MiniDonutChart';

const theme = {
  bg: '#0f0d13',
  surface: '#1a1520',
  surfaceAlt: '#221c2a',
  accent: '#f97316',
  accentMuted: 'rgba(249,115,22,0.12)',
  text1: '#f5f5f5',
  text2: '#a8a0b0',
  text3: '#6b6275',
  border: '#2a2435',
  borderSubtle: '#1f1a28',
};

const accounts = [
  { name: 'Financial', amount: '$2,000,000', sub: '$78 App Dunith', color: '#f97316' },
  { name: 'Plsert', amount: '$150,000', sub: 'Denity Hipola', color: '#d946ef' },
  { name: 'Vlearn', amount: '$1,000,000', sub: '$22 Dirly Darch', color: '#a78bfa' },
  { name: 'Xearn', amount: '$100,000', sub: 'Savary that Full', color: '#6366f1' },
];

const barData = [
  { label: 'On', value: 65, color: '#f97316' },
  { label: 'Alor', value: 80, color: '#d946ef' },
  { label: 'Min', value: 55, color: '#f97316' },
  { label: 'Nam', value: 90, color: '#a78bfa' },
  { label: '2 mh', value: 45, color: '#6366f1' },
  { label: 'Zny', value: 70, color: '#d946ef' },
];

const lineData = [30, 45, 42, 60, 55, 80, 75, 90, 85, 95];
const lineLabels = ['Can', 'Aon', 'Zm', 'Em', 'Ds', 'Fn', 'Aug', ''];

const donutSegments = [
  { label: 'Avinisce', value: 45, color: '#f97316' },
  { label: 'Automated', value: 10, color: '#d946ef' },
  { label: 'Prioritaires', value: 40, color: '#a78bfa' },
  { label: 'Newslided', value: 5, color: '#6366f1' },
];

export function SavanceKit() {
  return (
    <KitWrapper theme={theme}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700 }}>Dashboard</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['Incarn Taying', 'Automated Team Savings'].map(t => (
            <span key={t} style={{
              padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 500,
              background: theme.surface, border: `1px solid ${theme.border}`, color: theme.text2,
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Account Cards */}
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '20px' }}>
        {accounts.map((a, i) => (
          <div key={i} style={{
            minWidth: '180px', padding: '14px', borderRadius: '14px',
            background: `linear-gradient(135deg, ${a.color}18, ${a.color}08)`,
            border: `1px solid ${a.color}25`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `${a.color}30` }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: theme.text1 }}>{a.name}</span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: theme.text1 }}>{a.amount}</div>
            <div style={{ fontSize: '11px', color: theme.text3, marginTop: '4px' }}>{a.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{
          background: theme.surface, borderRadius: '14px', padding: '20px',
          border: `1px solid ${theme.borderSubtle}`,
        }}>
          <div style={{ fontSize: '11px', color: theme.text3, marginBottom: '4px' }}>Key savings</div>
          <div style={{ fontSize: '28px', fontWeight: 700 }}>$7,800<span style={{ fontSize: '14px', color: theme.text3 }}>.00L</span></div>
          <div style={{ fontSize: '11px', color: theme.text3, marginTop: '2px' }}>(Carsano)</div>
          <div style={{ marginTop: '16px' }}>
            <MiniBarChart data={barData} height={120} showLabels />
          </div>
        </div>

        <div style={{
          background: theme.surface, borderRadius: '14px', padding: '20px',
          border: `1px solid ${theme.borderSubtle}`,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600 }}>Eanculations</span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#f97316' }}>$450.0%</span>
          </div>
          <div style={{ fontSize: '11px', color: theme.text3, marginBottom: '12px' }}>Cuntonty saving</div>
          <MiniLineChart
            series={[{ data: lineData, color: '#f97316', fillOpacity: 0.15 }]}
            labels={lineLabels}
            height={120}
            showLabels
            showGrid
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{
          background: theme.surface, borderRadius: '14px', padding: '16px',
          border: `1px solid ${theme.borderSubtle}`,
        }}>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '12px' }}>Autumed Burning Saves</div>
          <MiniDonutChart segments={donutSegments} size={100} strokeWidth={14} showLegend />
        </div>

        <div style={{
          background: theme.surface, borderRadius: '14px', padding: '16px',
          border: `1px solid ${theme.borderSubtle}`,
        }}>
          <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Mim freature saving</div>
          <div style={{ fontSize: '11px', color: theme.text3, marginBottom: '12px' }}>
            <span style={{ color: '#f97316', fontWeight: 600 }}>▸ 60.0%</span>
          </div>
          <MiniLineChart
            series={[
              { data: [20, 35, 30, 50, 45, 60], color: '#f97316', fillOpacity: 0.1 },
              { data: [10, 20, 25, 30, 35, 40], color: '#a78bfa', fillOpacity: 0.05 },
            ]}
            height={100}
            showGrid
          />
        </div>
      </div>
    </KitWrapper>
  );
}
