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
  text1: '#f5f0ea',
  text2: '#a89888',
  text3: '#6b5c4f',
  border: '#2a2435',
  borderSubtle: '#1f1a28',
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ fontSize: '11px', fontWeight: 600, color: theme.text3, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>{title}</h3>
      {children}
    </div>
  );
}

export function GradientDarkKit() {
  return (
    <KitWrapper theme={theme}>
      <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '6px' }}>Gradient Dark</h2>
      <p style={{ fontSize: '13px', color: theme.text2, marginBottom: '28px' }}>Warme Farbverläufe auf Cards, Buttons und Charts — Orange, Amber, Purple und Pink.</p>

      {/* Buttons */}
      <Section title="Buttons">
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { label: 'Primary', bg: 'linear-gradient(135deg, #f97316, #ec4899)', color: '#fff' },
            { label: 'Secondary', bg: 'linear-gradient(135deg, #a78bfa, #6366f1)', color: '#fff' },
            { label: 'Ghost', bg: 'transparent', color: theme.text2, border: `1px solid ${theme.border}` },
            { label: 'Danger', bg: 'linear-gradient(135deg, #ef4444, #dc2626)', color: '#fff' },
          ].map(b => (
            <button key={b.label} style={{
              padding: '10px 22px', borderRadius: '12px', fontSize: '13px', fontWeight: 600,
              background: b.bg, color: b.color,
              border: (b as { border?: string }).border ?? 'none',
              cursor: 'pointer', fontFamily: 'var(--font-sans)',
            }}>{b.label}</button>
          ))}
        </div>
      </Section>

      {/* Cards */}
      <Section title="Cards">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: `linear-gradient(135deg, #f9731618, #f9731608)`,
            border: '1px solid #f9731625',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Default</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Subtiler Gradient-Hintergrund mit farbiger Border.</p>
          </div>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #6366f115, #a78bfa10)',
            border: '1px solid #a78bfa30',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Outlined</div>
            <p style={{ fontSize: '12px', color: theme.text2, lineHeight: 1.5 }}>Stärkere farbige Border mit leichtem Gradient-Fill.</p>
          </div>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: 'linear-gradient(135deg, #f97316, #c2410c)',
            color: '#fff',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>Accent</div>
            <p style={{ fontSize: '12px', opacity: 0.85, lineHeight: 1.5 }}>Voller Gradient-Hintergrund als CTA oder Promo-Card.</p>
          </div>
        </div>
      </Section>

      {/* Inputs */}
      <Section title="Inputs">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
          {[
            { label: 'Name', placeholder: 'Max Mustermann', color: '#f97316' },
            { label: 'Email', placeholder: 'max@example.com', color: '#a78bfa' },
            { label: 'Passwort', placeholder: '••••••••', color: '#ec4899' },
          ].map(inp => (
            <div key={inp.label}>
              <div style={{ fontSize: '11px', fontWeight: 500, color: theme.text3, marginBottom: '4px' }}>{inp.label}</div>
              <div style={{
                padding: '10px 14px', borderRadius: '10px', fontSize: '13px', color: theme.text2,
                background: `linear-gradient(135deg, ${inp.color}08, transparent)`,
                border: `1px solid ${inp.color}25`,
              }}>{inp.placeholder}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Charts */}
      <Section title="Charts">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: `linear-gradient(135deg, #f9731610, transparent)`,
            border: '1px solid #f9731620',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Bar Chart</div>
            <MiniBarChart
              data={[
                { label: 'Jan', value: 40, color: '#f97316' }, { label: 'Feb', value: 65, color: '#d946ef' },
                { label: 'Mar', value: 55, color: '#f97316' }, { label: 'Apr', value: 80, color: '#a78bfa' },
                { label: 'May', value: 45, color: '#6366f1' }, { label: 'Jun', value: 70, color: '#d946ef' },
              ]}
              height={120}
              showLabels
            />
          </div>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: `linear-gradient(135deg, #a78bfa10, transparent)`,
            border: '1px solid #a78bfa20',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Line Chart</div>
            <MiniLineChart
              series={[
                { data: [30, 45, 42, 60, 55, 80, 75, 90], color: '#f97316', fillOpacity: 0.15 },
                { data: [20, 35, 50, 40, 65, 55, 70, 60], color: '#a78bfa', fillOpacity: 0.08 },
              ]}
              height={120}
              curved
              showGrid
            />
          </div>
          <div style={{
            padding: '16px', borderRadius: '14px',
            background: `linear-gradient(135deg, #ec489910, transparent)`,
            border: '1px solid #ec489920',
          }}>
            <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '10px' }}>Donut Chart</div>
            <MiniDonutChart
              segments={[
                { label: 'Subscriptions', value: 45, color: '#f97316' },
                { label: 'Grocery', value: 30, color: '#a78bfa' },
                { label: 'Savings', value: 25, color: '#ec4899' },
              ]}
              size={80}
              strokeWidth={12}
              showLegend
            />
          </div>
        </div>
      </Section>
    </KitWrapper>
  );
}
