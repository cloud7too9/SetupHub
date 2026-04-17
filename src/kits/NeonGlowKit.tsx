import { KitWrapper } from './shared/KitWrapper';
import { GlowInput } from './shared/GlowInput';
import { MiniBarChart } from './shared/MiniBarChart';
import { MiniLineChart } from './shared/MiniLineChart';
import { MiniDonutChart } from './shared/MiniDonutChart';

const theme = {
  bg: '#08080e',
  surface: '#0e0e18',
  surfaceAlt: '#14142a',
  accent: '#fb7185',
  accentMuted: 'rgba(251,113,133,0.12)',
  text1: '#f0eef5',
  text2: '#9895a8',
  text3: '#5a5670',
  border: '#1a1a30',
  borderSubtle: '#12122a',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ fontSize: '11px', fontWeight: 600, color: theme.text3, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>{title}</h3>
      {children}
    </div>
  );
}

function NeonButton({ label, glowColor, variant }: { label: string; glowColor: string; variant: 'primary' | 'secondary' | 'ghost' | 'danger' }) {
  const styles: Record<string, React.CSSProperties> = {
    primary: {
      background: `${glowColor}20`, border: `1px solid ${glowColor}60`,
      boxShadow: `0 0 16px ${glowColor}30, inset 0 0 16px ${glowColor}08`,
    },
    secondary: {
      background: 'rgba(255,255,255,0.04)', border: `1px solid ${glowColor}30`,
      boxShadow: `0 0 8px ${glowColor}15`,
    },
    ghost: {
      background: 'transparent', border: `1px solid ${glowColor}15`,
    },
    danger: {
      background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.4)',
      boxShadow: '0 0 16px rgba(239,68,68,0.2), inset 0 0 12px rgba(239,68,68,0.05)',
    },
  };

  return (
    <button style={{
      padding: '10px 22px', borderRadius: '12px', fontSize: '13px', fontWeight: 600,
      color: variant === 'danger' ? '#fca5a5' : theme.text1,
      cursor: 'pointer', fontFamily: 'var(--font-sans)',
      ...styles[variant],
    }}>{label}</button>
  );
}

export function NeonGlowKit() {
  return (
    <KitWrapper theme={theme}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>Neon / Glow</h2>
      <p style={{ fontSize: '13px', color: theme.text2, marginBottom: '28px' }}>Leuchtende Borders, Glow-Schatten und vibrierende Neon-Farben auf dunklem Hintergrund.</p>

      {/* Buttons */}
      <Section title="Buttons">
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <NeonButton label="Primary" glowColor="#fb7185" variant="primary" />
          <NeonButton label="Secondary" glowColor="#a855f7" variant="secondary" />
          <NeonButton label="Ghost" glowColor="#6366f1" variant="ghost" />
          <NeonButton label="Danger" glowColor="#ef4444" variant="danger" />
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          {[
            { title: 'Default', glow: '#fb7185', desc: 'Subtiler Neon-Glow auf der Border, dunkler Hintergrund.' },
            { title: 'Outlined', glow: '#a855f7', desc: 'Stärkerer Glow-Effekt, transparenter Hintergrund.' },
            { title: 'Elevated', glow: '#6366f1', desc: 'Intensiver Glow-Shadow für schwebenden Effekt.' },
          ].map((c, i) => (
            <div key={i} style={{
              padding: '16px', borderRadius: '14px',
              background: i === 1 ? 'transparent' : `${c.glow}08`,
              border: `1px solid ${c.glow}${i === 1 ? '40' : '25'}`,
              boxShadow: i === 2 ? `0 0 24px ${c.glow}20, 0 0 48px ${c.glow}08` : `0 0 12px ${c.glow}10`,
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px', color: c.glow }}>{c.title}</div>
              <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Inputs */}
      <Section title="Inputs">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '400px' }}>
          <GlowInput label="Email" glowColor="#fb7185" value="max@example.com" icon={<span style={{ fontSize: '14px' }}>✉</span>} />
          <GlowInput label="Username" glowColor="#a855f7" value="max_design" />
          <GlowInput label="Passwort" glowColor="#6366f1" value="••••••••" icon={<span style={{ fontSize: '14px' }}>🔒</span>} />
          {/* Strength dots */}
          <div style={{ display: 'flex', gap: '5px', paddingLeft: '4px' }}>
            {['#fb7185', '#fb7185', '#a855f7', '#a855f7', '#6366f1', '#6366f1', '#3b82f6', '#3b82f6'].map((color, i) => (
              <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}60` }} />
            ))}
          </div>
        </div>
      </Section>

      {/* Charts */}
      <Section title="Charts">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: '#fb718508', border: '1px solid #fb718520',
            boxShadow: '0 0 12px #fb718510',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#fb7185', marginBottom: '10px' }}>Bar Chart</div>
            <MiniBarChart
              data={[
                { label: 'Mo', value: 50, color: '#fb7185' }, { label: 'Di', value: 75, color: '#a855f7' },
                { label: 'Mi', value: 60, color: '#6366f1' }, { label: 'Do', value: 90, color: '#fb7185' },
                { label: 'Fr', value: 40, color: '#a855f7' }, { label: 'Sa', value: 70, color: '#6366f1' },
              ]}
              height={120}
              showLabels
            />
          </div>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: '#a855f708', border: '1px solid #a855f720',
            boxShadow: '0 0 12px #a855f710',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#a855f7', marginBottom: '10px' }}>Line Chart</div>
            <MiniLineChart
              series={[
                { data: [10, 40, 25, 60, 35, 80, 50, 90], color: '#fb7185', fillOpacity: 0.08 },
                { data: [20, 30, 45, 35, 55, 40, 70, 55], color: '#a855f7', fillOpacity: 0.05 },
              ]}
              height={120}
              curved
            />
          </div>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: '#6366f108', border: '1px solid #6366f120',
            boxShadow: '0 0 12px #6366f110',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#6366f1', marginBottom: '10px' }}>Donut Chart</div>
            <MiniDonutChart
              segments={[
                { label: 'Active', value: 45, color: '#fb7185' },
                { label: 'Pending', value: 30, color: '#a855f7' },
                { label: 'Done', value: 25, color: '#6366f1' },
              ]}
              size={80}
              strokeWidth={10}
              showLegend
            />
          </div>
        </div>
      </Section>
    </KitWrapper>
  );
}
