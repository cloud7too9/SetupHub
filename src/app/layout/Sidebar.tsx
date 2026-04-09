import { Sheet } from '@/ui/feedback/Sheet';
import { routes } from '../routes/route-config';
import { Badge } from '@/ui/data-display/Badge';
import { componentRegistry } from '@/features/catalog/data/component-registry';
import { patternRegistry } from '@/features/catalog/data/pattern-registry';
import { screenRegistry } from '@/features/catalog/data/screen-registry';
import { Sparkles } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  active: string;
  onNavigate: (id: string) => void;
}

const counts: Record<string, number> = {
  components: componentRegistry.length,
  patterns: patternRegistry.length,
  screens: screenRegistry.length,
};

export function Sidebar({ open, onClose, active, onNavigate }: SidebarProps) {
  const handleNav = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <Sheet open={open} onClose={onClose} title="SetupHub" side="left">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
        {routes.map(r => {
          const isActive = r.id === active;
          const Icon = r.icon;
          const count = counts[r.id];
          return (
            <button
              key={r.id}
              onClick={() => handleNav(r.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--sp-md)',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: isActive ? 600 : 400,
                background: isActive ? 'var(--accent-muted)' : 'transparent',
                color: isActive ? 'var(--accent)' : 'var(--text-2)',
                transition: 'all 0.15s ease',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <Icon size={20} strokeWidth={isActive ? 2.2 : 1.6} />
              <span style={{ flex: 1 }}>{r.label}</span>
              {count != null && <Badge color={isActive ? 'accent' : 'neutral'}>{count}</Badge>}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{
        marginTop: 'auto',
        paddingTop: '24px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-md)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
          <Sparkles size={16} color="var(--accent)" />
          <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>SetupHub v0.2</span>
        </div>
        <span style={{ fontSize: '12px', color: 'var(--text-3)', lineHeight: 1.5 }}>
          Mobiler UI-Baukasten für strukturierte Setups..
        </span>
      </div>
    </Sheet>
  );
}
