import { KitWrapper } from './shared/KitWrapper';
import { CircularGauge } from './shared/CircularGauge';

const theme = {
  bg: '#0a1410',
  surface: '#0f1f17',
  surfaceAlt: '#142a1f',
  accent: '#34d399',
  accentMuted: 'rgba(52,211,153,0.12)',
  text1: '#e8f5ee',
  text2: '#8baa98',
  text3: '#4d7260',
  border: '#1a3528',
  borderSubtle: '#142a1f',
};

const weekDays = [
  { day: 'Mon', date: 22 },
  { day: 'Tue', date: 23, active: true },
  { day: 'Wed', date: 24 },
  { day: 'Thu', date: 25 },
  { day: 'Fri', date: 26 },
  { day: 'Sat', date: 27 },
];

const events = [
  { time: '10:00 am', title: 'Design Sync', sub: 'Design workshop', color: '#34d399' },
  { time: '11:00 am', title: 'Team Building', sub: 'Project update', color: '#6366f1' },
];

const goals = [
  { label: 'Primary goal', value: 'Scalable Design Ops', status: 'done', color: '#34d399' },
  { label: 'Goal 2', value: 'Streamline Delivery', status: 'in progress', color: '#f59e0b' },
  { label: 'Goal 3', value: 'Cross-team Alignment', status: 'closed', color: '#6b7280' },
];

export function GrowthKit() {
  return (
    <KitWrapper theme={theme}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>▲</div>
          <span style={{ fontSize: '13px', color: theme.text3 }}>☾ ⚙</span>
        </div>
        <div style={{
          padding: '8px 20px', borderRadius: '20px', fontSize: '13px',
          background: theme.surface, border: `1px solid ${theme.border}`, color: theme.text3,
        }}>🔍 Enter your search request</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px', marginBottom: '16px' }}>
        {/* Calendar */}
        <div style={{ background: theme.surface, borderRadius: '14px', padding: '16px', border: `1px solid ${theme.borderSubtle}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <span style={{ fontSize: '11px', color: theme.text3 }}>‹ Last Week</span>
            <span style={{ fontSize: '15px', fontWeight: 700 }}>December 23</span>
            <span style={{ fontSize: '11px', color: theme.text3 }}>Next Week ›</span>
          </div>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
            {weekDays.map(d => (
              <div key={d.day} style={{
                flex: 1, textAlign: 'center', padding: '8px 0', borderRadius: '10px',
                background: d.active ? theme.accent : 'transparent',
                color: d.active ? theme.bg : theme.text2,
              }}>
                <div style={{ fontSize: '11px', fontWeight: 500 }}>{d.day}</div>
                <div style={{ fontSize: '16px', fontWeight: d.active ? 700 : 500 }}>{d.date}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['9:00 am', '10:00 am', '11:00 am', '12:00 am'].map((time, i) => {
              const event = events.find(e => e.time === time);
              return (
                <div key={time} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '11px', color: theme.text3, width: '60px' }}>{time}</span>
                  {event ? (
                    <div style={{
                      flex: 1, padding: '8px 12px', borderRadius: '8px',
                      background: `${event.color}15`, borderLeft: `3px solid ${event.color}`,
                    }}>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: event.color }}>{event.title}</div>
                      <div style={{ fontSize: '11px', color: theme.text3 }}>{event.sub}</div>
                    </div>
                  ) : (
                    <div style={{ flex: 1, borderBottom: `1px solid ${theme.borderSubtle}` }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Growth Points */}
        <div style={{
          background: theme.surface, borderRadius: '14px', padding: '16px',
          border: `1px solid ${theme.borderSubtle}`,
          backgroundImage: 'linear-gradient(180deg, rgba(52,211,153,0.06) 0%, transparent 60%)',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: theme.accent, marginBottom: '16px' }}>Growth points</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['Strategy', 'Leadership', 'Efficiency'].map(tag => (
              <span key={tag} style={{
                padding: '8px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 500,
                border: `1px solid ${theme.accent}40`, color: theme.accent, textAlign: 'center',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
        {/* Team / Documents */}
        <div style={{ background: theme.surface, borderRadius: '14px', padding: '16px', border: `1px solid ${theme.borderSubtle}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>Team</span>
            <span style={{ fontSize: '11px', color: theme.text3 }}>•••</span>
          </div>
          <div style={{ display: 'flex', gap: '-4px', marginBottom: '16px' }}>
            {['#34d399', '#6366f1', '#f59e0b', '#ec4899'].map((c, i) => (
              <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: c, border: `2px solid ${theme.surface}`, marginLeft: i > 0 ? '-6px' : 0 }} />
            ))}
          </div>
          <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Documents <span style={{ fontSize: '11px', color: theme.text3, fontWeight: 400 }}>More</span></div>
          <div style={{ display: 'flex', gap: '6px' }}>
            {[1, 2].map(i => (
              <div key={i} style={{ flex: 1, height: '50px', borderRadius: '8px', background: theme.surfaceAlt }} />
            ))}
          </div>
          <div style={{ marginTop: '12px' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>Goal</div>
            <p style={{ fontSize: '11px', color: theme.text2, lineHeight: 1.5 }}>
              I am driving a <strong style={{ color: theme.text1 }}>50% revenue surge</strong> and securing <strong style={{ color: theme.text1 }}>10+ high-impact partnerships</strong> through sustainable scaling.
            </p>
            <button style={{
              marginTop: '10px', padding: '8px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: 600,
              background: theme.accent, color: theme.bg, border: 'none', cursor: 'pointer',
            }}>Details</button>
          </div>
        </div>

        {/* Score */}
        <div style={{ background: theme.surface, borderRadius: '14px', padding: '16px', border: `1px solid ${theme.borderSubtle}`, textAlign: 'center' }}>
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Current Score</div>
          <div style={{ fontSize: '36px', fontWeight: 700, marginBottom: '12px' }}>1820</div>
          <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Main task</div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularGauge value={440} max={500} size={100} strokeWidth={8} color={theme.accent} label="Excellent" />
          </div>
        </div>

        {/* AI Co-pilot */}
        <div style={{ background: theme.surface, borderRadius: '14px', padding: '16px', border: `1px solid ${theme.borderSubtle}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>AI Co-pilot</span>
            <span style={{ fontSize: '11px', color: theme.text3 }}>•••</span>
          </div>
          <p style={{ fontSize: '11px', color: theme.text2, marginBottom: '12px', lineHeight: 1.4 }}>
            A strategic review of your performance metrics and milestones is ready.
          </p>
          <div style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '11px', color: theme.text3 }}>Active goals</span>
              <span style={{ fontSize: '28px', fontWeight: 700 }}>84<span style={{ fontSize: '14px' }}>%</span></span>
              <span style={{ fontSize: '10px', color: theme.text3 }}>this week</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {goals.map((g, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px' }}>
                <span style={{ color: theme.text3 }}>{g.label}</span>
                <span style={{ color: theme.text2 }}>{g.value}</span>
                <span style={{
                  padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: 600,
                  background: `${g.color}20`, color: g.color,
                }}>{g.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </KitWrapper>
  );
}
