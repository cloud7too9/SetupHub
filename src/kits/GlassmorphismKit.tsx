import { KitWrapper } from './shared/KitWrapper';
import { GlassCard } from './shared/GlassCard';
import { MiniBarChart } from './shared/MiniBarChart';
import { MiniLineChart } from './shared/MiniLineChart';
import { MiniDonutChart } from './shared/MiniDonutChart';

const theme = {
  bg: '#0c0820',
  surface: '#140e30',
  surfaceAlt: '#1c1445',
  accent: '#d946ef',
  accentMuted: 'rgba(217,70,239,0.12)',
  text1: '#f0e8ff',
  text2: '#a898c8',
  text3: '#6b5a90',
  border: '#2a1e55',
  borderSubtle: '#1e1540',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ fontSize: '11px', fontWeight: 600, color: theme.text3, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>{title}</h3>
      {children}
    </div>
  );
}

export function GlassmorphismKit() {
  return (
    <KitWrapper theme={theme} style={{
      backgroundImage: `
        radial-gradient(circle at 20% 20%, rgba(217,70,239,0.15), transparent 40%),
        radial-gradient(circle at 80% 60%, rgba(99,102,241,0.12), transparent 40%),
        radial-gradient(circle at 50% 90%, rgba(236,72,153,0.08), transparent 30%)
      `,
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>Glassmorphism</h2>
      <p style={{ fontSize: '13px', color: theme.text2, marginBottom: '28px' }}>Backdrop-blur, semi-transparente Flächen, weiche Kanten und Glas-Effekte.</p>

      {/* Buttons */}
      <Section title="Buttons">
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { label: 'Primary', bg: 'rgba(217,70,239,0.25)', border: 'rgba(217,70,239,0.4)', color: '#f0e8ff' },
            { label: 'Secondary', bg: 'rgba(255,255,255,0.08)', border: 'rgba(255,255,255,0.12)', color: '#a898c8' },
            { label: 'Ghost', bg: 'transparent', border: 'rgba(255,255,255,0.06)', color: '#a898c8' },
            { label: 'Danger', bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)', color: '#fca5a5' },
          ].map(b => (
            <button key={b.label} style={{
              padding: '10px 22px', borderRadius: '12px', fontSize: '13px', fontWeight: 600,
              background: b.bg, border: `1px solid ${b.border}`, color: b.color,
              backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}>{b.label}</button>
          ))}
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <GlassCard opacity={0.08} borderOpacity={0.1}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Default</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Semi-transparenter Hintergrund mit Blur-Effekt und subtiler Border.</p>
          </GlassCard>
          <GlassCard opacity={0.04} borderOpacity={0.2} blur={24}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Outlined</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Stärkere Border, weniger Hintergrund-Opazität, mehr Blur.</p>
          </GlassCard>
          <GlassCard opacity={0.12} borderOpacity={0.08} style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Elevated</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Erhöhter Shadow für tiefere Ebene, mehr Hintergrund.</p>
          </GlassCard>
        </div>
      </Section>

      {/* Inputs */}
      <Section title="Inputs">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
          {[
            { label: 'Name', placeholder: 'Max Mustermann' },
            { label: 'Email', placeholder: 'max@example.com' },
            { label: 'Passwort', placeholder: '••••••••' },
          ].map(inp => (
            <div key={inp.label}>
              <div style={{ fontSize: '11px', fontWeight: 500, color: theme.text3, marginBottom: '4px' }}>{inp.label}</div>
              <div style={{
                padding: '10px 14px', borderRadius: '10px', fontSize: '13px', color: theme.text2,
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>{inp.placeholder}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Charts */}
      <Section title="Charts">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <GlassCard opacity={0.06} borderOpacity={0.08}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Bar Chart</div>
            <MiniBarChart
              data={[
                { label: 'Mo', value: 40 }, { label: 'Di', value: 65 }, { label: 'Mi', value: 55 },
                { label: 'Do', value: 80 }, { label: 'Fr', value: 45 }, { label: 'Sa', value: 70 },
              ]}
              height={120}
              barColor="rgba(217,70,239,0.5)"
              showLabels
            />
          </GlassCard>
          <GlassCard opacity={0.06} borderOpacity={0.08}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Line Chart</div>
            <MiniLineChart
              series={[
                { data: [20, 45, 35, 60, 50, 75, 55, 80], color: '#d946ef', fillOpacity: 0.1 },
                { data: [15, 30, 40, 35, 55, 45, 65, 50], color: '#6366f1', fillOpacity: 0.05 },
              ]}
              height={120}
              curved
            />
          </GlassCard>
          <GlassCard opacity={0.06} borderOpacity={0.08}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Donut Chart</div>
            <MiniDonutChart
              segments={[
                { label: 'Design', value: 40, color: '#d946ef' },
                { label: 'Dev', value: 35, color: '#6366f1' },
                { label: 'Marketing', value: 25, color: '#ec4899' },
              ]}
              size={80}
              strokeWidth={12}
              showLegend
            />
          </GlassCard>
        </div>
      </Section>
    </KitWrapper>
  );
}
