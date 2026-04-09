import { routes } from '../routes/route-config';
import { Badge } from '@/ui/data-display/Badge';
import { componentRegistry } from '@/features/catalog/data/component-registry';
import { patternRegistry } from '@/features/catalog/data/pattern-registry';
import { screenRegistry } from '@/features/catalog/data/screen-registry';
import { Sparkles } from 'lucide-react';

interface Props {
  active: string;
  onNavigate: (id: string) => void;
}

const counts: Record<string, number> = {
  components: componentRegistry.length,
  patterns: patternRegistry.length,
  screens: screenRegistry.length,
};

export function DesktopSidebar({ active, onNavigate }: Props) {
  return (
    <aside style={{
      width: '260px', flexShrink: 0,
      background: 'var(--surface)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex', flexDirection: 'column',
      height: '100dvh', position: 'sticky', top: 0,
    }}>
      {/* Logo */}
      <div style={{
        height: '56px', display: 'flex', alignItems: 'center',
        gap: 'var(--sp-sm)', padding: '0 var(--sp-xl)',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <Sparkles size={20} color="var(--accent)" />
        <span style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-1)' }}>SetupHub</span>
      </div>

      {/* Nav */}
      <nav aria-label="Hauptnavigation" style={{ flex: 1, padding: 'var(--sp-md)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
        {routes.map(r => {
          const isActive = r.id === active;
          const Icon = r.icon;
          const count = counts[r.id];
          return (
            <button
              key={r.id}
              onClick={() => onNavigate(r.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 'var(--sp-md)',
                padding: 'var(--sp-md) var(--sp-lg)',
                borderRadius: 'var(--radius-md)',
                border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: '14px',
                fontWeight: isActive ? 600 : 400,
                background: isActive ? 'var(--accent-muted)' : 'transparent',
                color: isActive ? 'var(--accent)' : 'var(--text-2)',
                transition: 'all 0.15s ease',
                width: '100%', textAlign: 'left',
              }}
            >
              <Icon size={18} strokeWidth={isActive ? 2.2 : 1.6} />
              <span style={{ flex: 1 }}>{r.label}</span>
              {count != null && (
                <Badge color={isActive ? 'accent' : 'neutral'}>{count}</Badge>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{
        padding: 'var(--sp-lg) var(--sp-xl)',
        borderTop: '1px solid var(--border-subtle)',
      }}>
        <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>SetupHub v0.3 — Mobiler UI-Baukasten</span>
      </div>
    </aside>
  );
}
