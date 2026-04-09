import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { componentRegistry } from '@/features/catalog/data/component-registry';
import { patternRegistry } from '@/features/catalog/data/pattern-registry';
import { screenRegistry } from '@/features/catalog/data/screen-registry';
import { Sparkles, LayoutGrid, Layers, Monitor } from 'lucide-react';
import { useNav } from '@/app/providers/NavigationProvider';

export function HomeScreen() {
  const { navigate } = useNav();

  const quickItems = [
    { icon: LayoutGrid, label: 'Components', count: componentRegistry.length, color: 'accent' as const, route: 'components' },
    { icon: Layers, label: 'Patterns', count: patternRegistry.length, color: 'success' as const, route: 'patterns' },
    { icon: Monitor, label: 'Screens', count: screenRegistry.length, color: 'warning' as const, route: 'screens' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-2xl)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)', paddingTop: 'var(--sp-sm)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
          <Sparkles size={24} color="var(--accent)" />
          <h1 style={{ fontSize: '24px', fontWeight: 700 }}>SetupHub</h1>
        </div>
        <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.6 }}>
          Dein mobiler UI-Baukasten — Komponenten, Patterns und Screen-Layouts an einem Ort.
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--sp-md)' }}>Schnellzugriff</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
          {quickItems.map(q => (
            <Card key={q.label} variant="default" padding="md" onClick={() => navigate(q.route)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <q.icon size={20} color="var(--accent)" />
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>{q.label}</span>
                </div>
                <Badge color={q.color}>{q.count}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Card variant="accent" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>v0.3</span>
          <span style={{ fontSize: '14px', color: 'var(--text-2)' }}>Katalog, Patterns, Screens und Live-Theming.</span>
        </div>
      </Card>
    </div>
  );
}
