import { Card } from '@/ui/data-display/Card';
import { Toggle } from '@/ui/inputs/Toggle';
import { Button } from '@/ui/actions/Button';
import { Divider } from '@/ui/data-display/Divider';
import { Badge } from '@/ui/data-display/Badge';
import { useTheme } from '@/app/providers/ThemeProvider';
import { Moon, Sun, Palette, Maximize2, Circle, RotateCcw } from 'lucide-react';

const accentOptions = [
  { color: '#00e5ff', label: 'Cyan' },
  { color: '#a78bfa', label: 'Violet' },
  { color: '#f472b6', label: 'Pink' },
  { color: '#34d399', label: 'Mint' },
  { color: '#fbbf24', label: 'Gold' },
  { color: '#fb923c', label: 'Orange' },
  { color: '#60a5fa', label: 'Blau' },
  { color: '#f87171', label: 'Rot' },
];

const radiusOptions = [0, 6, 10, 16, 24];
const spacingOptions = [
  { value: 0.75, label: 'Kompakt' },
  { value: 1, label: 'Normal' },
  { value: 1.25, label: 'Locker' },
];

export function SettingsScreen() {
  const { config, update, reset } = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>

      <Card variant="default" padding="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            {config.mode === 'dark' ? <Moon size={20} color="var(--accent)" /> : <Sun size={20} color="var(--accent)" />}
            <div>
              <span style={{ fontSize: '15px', fontWeight: 500, display: 'block' }}>
                {config.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>Farbschema wechseln</span>
            </div>
          </div>
          <Toggle checked={config.mode === 'dark'} onChange={(v) => update({ mode: v ? 'dark' : 'light' })} />
        </div>
      </Card>

      <Card variant="default" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
            <Palette size={20} color="var(--accent)" />
            <span style={{ fontSize: '15px', fontWeight: 500 }}>Akzentfarbe</span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-sm)', flexWrap: 'wrap' }}>
            {accentOptions.map(opt => {
              const isActive = config.accent === opt.color;
              return (
                <button
                  key={opt.color}
                  onClick={() => update({ accent: opt.color })}
                  title={opt.label}
                  style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: isActive ? `2px solid ${opt.color}` : '2px solid transparent',
                    padding: '3px', background: 'transparent', cursor: 'pointer', transition: 'all 0.15s ease',
                  }}
                >
                  <div style={{
                    width: '100%', height: '100%', borderRadius: '50%', background: opt.color,
                    boxShadow: isActive ? `0 0 12px ${opt.color}40` : 'none',
                  }} />
                </button>
              );
            })}
          </div>
        </div>
      </Card>

      <Card variant="default" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
            <Circle size={20} color="var(--accent)" />
            <span style={{ fontSize: '15px', fontWeight: 500 }}>Radius</span>
            <Badge color="accent">{config.radius}px</Badge>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-sm)' }}>
            {radiusOptions.map(r => {
              const isActive = config.radius === r;
              return (
                <button key={r} onClick={() => update({ radius: r })} style={{
                  flex: 1, height: '44px', borderRadius: `${r}px`,
                  border: isActive ? '2px solid var(--accent)' : '1px solid var(--border)',
                  background: isActive ? 'var(--accent-muted)' : 'var(--surface-alt)',
                  color: isActive ? 'var(--accent)' : 'var(--text-3)',
                  fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-sans)', cursor: 'pointer', transition: 'all 0.15s ease',
                }}>{r}</button>
              );
            })}
          </div>
        </div>
      </Card>

      <Card variant="default" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
            <Maximize2 size={20} color="var(--accent)" />
            <span style={{ fontSize: '15px', fontWeight: 500 }}>Spacing</span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-sm)' }}>
            {spacingOptions.map(opt => {
              const isActive = config.spacing === opt.value;
              return (
                <button key={opt.value} onClick={() => update({ spacing: opt.value })} style={{
                  flex: 1, padding: '10px 4px', borderRadius: 'var(--radius-md)',
                  border: isActive ? '2px solid var(--accent)' : '1px solid var(--border)',
                  background: isActive ? 'var(--accent-muted)' : 'var(--surface-alt)',
                  color: isActive ? 'var(--accent)' : 'var(--text-3)',
                  fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-sans)', cursor: 'pointer', transition: 'all 0.15s ease',
                }}>{opt.label}</button>
              );
            })}
          </div>
        </div>
      </Card>

      <Divider spacing={8} />

      <Button variant="ghost" fullWidth icon={<RotateCcw size={16} />} onClick={reset}>
        Zurücksetzen
      </Button>
    </div>
  );
}
