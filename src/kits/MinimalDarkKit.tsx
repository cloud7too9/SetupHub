import { KitWrapper } from './shared/KitWrapper';
import { MiniBarChart } from './shared/MiniBarChart';
import { MiniLineChart } from './shared/MiniLineChart';
import { MiniDonutChart } from './shared/MiniDonutChart';

const theme = {
  bg: '#0a0a12',
  surface: '#12121e',
  surfaceAlt: '#1a1a2e',
  accent: '#34d399',
  accentMuted: 'rgba(52,211,153,0.12)',
  text1: '#e8f0ee',
  text2: '#8a9a95',
  text3: '#4d6058',
  border: '#1e2e28',
  borderSubtle: '#162420',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ fontSize: '11px', fontWeight: 600, color: theme.text3, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>{title}</h3>
      {children}
    </div>
  );
}

export function MinimalDarkKit() {
  return (
    <KitWrapper theme={theme}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>Minimal Dark</h2>
      <p style={{ fontSize: '13px', color: theme.text2, marginBottom: '28px' }}>Schlichte, saubere Linien mit subtilen Akzentfarben — weniger ist mehr.</p>

      {/* Buttons */}
      <Section title="Buttons">
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { label: 'Primary', bg: theme.accent, color: theme.bg, border: 'none' },
            { label: 'Secondary', bg: theme.surfaceAlt, color: theme.text1, border: `1px solid ${theme.border}` },
            { label: 'Ghost', bg: 'transparent', color: theme.text2, border: `1px solid ${theme.borderSubtle}` },
            { label: 'Danger', bg: '#ef444418', color: '#f87171', border: '1px solid #ef444430' },
          ].map(b => (
            <button key={b.label} style={{
              padding: '10px 22px', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
              background: b.bg, color: b.color, border: b.border,
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}>{b.label}</button>
          ))}
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <div style={{
            padding: '16px', borderRadius: '12px',
            background: theme.surface, border: `1px solid ${theme.borderSubtle}`,
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Default</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Flacher Hintergrund mit subtiler Border. Kein visuelles Rauschen.</p>
          </div>
          <div style={{
            padding: '16px', borderRadius: '12px',
            background: 'transparent', border: `1px solid ${theme.border}`,
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Outlined</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Transparenter Hintergrund, nur Border als Begrenzung.</p>
          </div>
          <div style={{
            padding: '16px', borderRadius: '12px',
            background: theme.surface, boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Elevated</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Dezenter Shadow für Tiefe, ohne Border-Ablenkung.</p>
          </div>
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
                padding: '10px 14px', borderRadius: '8px', fontSize: '13px', color: theme.text2,
                background: theme.surface, border: `1px solid ${theme.borderSubtle}`,
              }}>{inp.placeholder}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Charts */}
      <Section title="Charts">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <div style={{ padding: '16px', borderRadius: '12px', background: theme.surface, border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Bar Chart</div>
            <MiniBarChart
              data={[
                { label: 'Mo', value: 55 }, { label: 'Di', value: 70 }, { label: 'Mi', value: 45 },
                { label: 'Do', value: 85 }, { label: 'Fr', value: 60 }, { label: 'Sa', value: 75 },
              ]}
              height={120}
              barColor={theme.accent}
              showLabels
            />
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: theme.surface, border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Line Chart</div>
            <MiniLineChart
              series={[{ data: [25, 40, 35, 55, 50, 65, 60, 80], color: theme.accent, fillOpacity: 0.1 }]}
              height={120}
              curved
              showGrid
            />
          </div>
          <div style={{ padding: '16px', borderRadius: '12px', background: theme.surface, border: `1px solid ${theme.borderSubtle}` }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Donut Chart</div>
            <MiniDonutChart
              segments={[
                { label: 'Completed', value: 60, color: theme.accent },
                { label: 'In Progress', value: 25, color: '#6366f1' },
                { label: 'Open', value: 15, color: theme.text3 },
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
