import { KitWrapper } from './shared/KitWrapper';
import { MiniBarChart } from './shared/MiniBarChart';
import { MiniDonutChart } from './shared/MiniDonutChart';

const theme = {
  bg: '#0d0a14',
  surface: '#16102a',
  surfaceAlt: '#1e1638',
  accent: '#a78bfa',
  accentMuted: 'rgba(167,139,250,0.12)',
  text1: '#f0ecf8',
  text2: '#9a8eb8',
  text3: '#5c4f78',
  border: '#251e42',
  borderSubtle: '#1c1535',
};

const monthData = [
  { label: 'Jan', value: 40 }, { label: 'Feb', value: 55 }, { label: 'Mar', value: 45 },
  { label: 'Apr', value: 65 }, { label: 'May', value: 50 }, { label: 'Jun', value: 70 },
  { label: 'Jul', value: 60 }, { label: 'Aug', value: 55 }, { label: 'Sep', value: 75 },
  { label: 'Oct', value: 90, color: '#a78bfa' }, { label: 'Nov', value: 65 }, { label: 'Dec', value: 50 },
];

const expenseSegments = [
  { label: 'Monthly Subscriptions', value: 45, color: '#6366f1' },
  { label: 'Grocery', value: 35, color: '#a78bfa' },
  { label: 'Remaining Budget', value: 20, color: '#2a2045' },
];

const contacts = [
  { name: 'Add', initials: '+', color: '#a78bfa' },
  { name: 'Gilbert', initials: 'GA', color: '#6366f1' },
  { name: 'Steph', initials: 'SC', color: '#34d399' },
  { name: 'Harris', initials: 'HW', color: '#f59e0b' },
  { name: 'Gary', initials: 'GA', color: '#ec4899' },
];

const transactions = [
  { name: 'Amazon', sub: 'Purchase', amount: '-$824.50', icon: 'a', color: '#f97316' },
  { name: 'Spotify', sub: 'Subscription', amount: '-$15.00', icon: '♪', color: '#34d399' },
];

export function BlantedKit() {
  return (
    <KitWrapper theme={theme}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 700 }}>Blanted.</h2>
          <span style={{ fontSize: '11px', color: theme.text3 }}>Financial Management</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            padding: '8px 20px', borderRadius: '20px', fontSize: '12px',
            background: theme.surface, border: `1px solid ${theme.border}`, color: theme.text3,
          }}>🔍 Search something here...</div>
          <span style={{ fontSize: '16px' }}>🔔</span>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#a78bfa', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>NP</div>
        </div>
      </div>

      {/* Sidebar + Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 280px', gap: '16px' }}>
        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {[
            { icon: '🏠', label: 'Dashboard', active: true },
            { icon: '💳', label: 'Cards' },
            { icon: '📈', label: 'Invest' },
            { icon: '📊', label: 'Stats' },
            { icon: '📄', label: 'Documents' },
            { icon: '⚙', label: 'Settings' },
            { icon: '❓', label: 'Help' },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 14px', borderRadius: '10px', fontSize: '13px',
              background: item.active ? theme.accent : 'transparent',
              color: item.active ? theme.bg : theme.text2,
              fontWeight: item.active ? 600 : 400,
            }}>
              <span>{item.icon}</span>{item.label}
            </div>
          ))}
          <div style={{ marginTop: 'auto', padding: '14px', background: `linear-gradient(135deg, ${theme.accent}20, ${theme.accent}08)`, borderRadius: '12px', border: `1px solid ${theme.accent}25` }}>
            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '4px' }}>Upgrade to Pro</div>
            <div style={{ fontSize: '10px', color: theme.text3, marginBottom: '10px', lineHeight: 1.4 }}>Be more efficient by unlocking premium features.</div>
            <button style={{ padding: '6px 14px', borderRadius: '8px', fontSize: '11px', fontWeight: 600, background: theme.accent, color: theme.bg, border: 'none', cursor: 'pointer' }}>Choose Plans</button>
          </div>
        </div>

        {/* Center */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Balance */}
          <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '13px', color: theme.text3, marginBottom: '4px' }}>Total Balance</div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginBottom: '4px' }}>$24.194,00</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', color: theme.text3 }}>October's gain from investment</span>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#34d399' }}>+$750,00</span>
              <span style={{ marginLeft: 'auto', padding: '4px 10px', borderRadius: '8px', fontSize: '11px', background: theme.surfaceAlt, color: theme.accent }}>Monthly ∨</span>
            </div>
            <MiniBarChart data={monthData} height={120} barColor="#a78bfa55" activeIndex={9} showLabels />
          </div>

          {/* Expenses */}
          <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '13px', color: theme.text3, marginBottom: '4px' }}>October's Expense</div>
            <div style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>$5.774,00</div>
            <MiniDonutChart segments={expenseSegments} size={100} strokeWidth={16} showLegend />
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Card */}
          <div style={{ background: theme.surface, borderRadius: '14px', padding: '20px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '12px' }}>My Cards</div>
            <div style={{
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              borderRadius: '12px', padding: '16px', marginBottom: '12px', color: '#fff',
            }}>
              <div style={{ width: '30px', height: '20px', borderRadius: '4px', background: 'rgba(255,255,255,0.3)', marginBottom: '14px' }} />
              <div style={{ fontSize: '12px', letterSpacing: '2px', marginBottom: '4px' }}>MasterCard</div>
              <div style={{ fontSize: '13px', letterSpacing: '1.5px' }}>3482 8384 8283 ****</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '4px' }}>
              {[1, 2, 3].map(i => <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === 1 ? theme.accent : theme.text3 + '40' }} />)}
            </div>
          </div>

          {/* Send Money */}
          <div style={{ background: theme.surface, borderRadius: '14px', padding: '16px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Send Money</div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {contacts.map((c, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: i === 0 ? 'transparent' : c.color + '30',
                    border: i === 0 ? `2px dashed ${theme.text3}` : 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '13px', fontWeight: 600, color: c.color, marginBottom: '4px',
                  }}>{c.initials}</div>
                  <span style={{ fontSize: '10px', color: theme.text3 }}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transactions */}
          <div style={{ background: theme.surface, borderRadius: '14px', padding: '16px', border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Transactions</div>
            {transactions.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderTop: i > 0 ? `1px solid ${theme.borderSubtle}` : undefined }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: `${t.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: t.color,
                }}>{t.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: '10px', color: theme.text3 }}>{t.sub}</div>
                </div>
                <span style={{ fontSize: '13px', fontWeight: 600 }}>{t.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </KitWrapper>
  );
}
