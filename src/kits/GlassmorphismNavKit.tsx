import type { CSSProperties } from 'react';
import { KitWrapper } from './shared/KitWrapper';
import { GlassCard } from './shared/GlassCard';

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

interface NavItemProps {
  icon: string;
  label?: string;
  active?: boolean;
  showLabel?: boolean;
  items?: { dot: string; label: string; value: number }[];
  expanded?: boolean;
}

function NavItem({ icon, label, active, showLabel = true, items, expanded }: NavItemProps) {
  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: showLabel ? '10px 14px' : '10px',
        borderRadius: '10px', cursor: 'pointer',
        background: active ? 'linear-gradient(135deg, #ec4899, #d946ef)' : 'transparent',
        color: active ? '#fff' : theme.text2,
        justifyContent: showLabel ? 'flex-start' : 'center',
      }}>
        <span style={{ fontSize: '16px' }}>{icon}</span>
        {showLabel && label && <span style={{ fontSize: '13px', fontWeight: active ? 600 : 400 }}>{label}</span>}
        {showLabel && items && <span style={{ marginLeft: 'auto', fontSize: '11px' }}>{expanded ? '∧' : '∨'}</span>}
      </div>
      {expanded && items && (
        <div style={{ padding: '4px 0 0 24px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: theme.text2 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: it.dot }} />
              <span>{it.value}</span>
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const navData = {
  orders: [
    { dot: '#ec4899', label: 'Active', value: 2 },
    { dot: '#ec4899', label: 'Pending', value: 4 },
  ],
  history: [
    { dot: '#6366f1', label: 'Cancelled', value: 3 },
    { dot: '#6366f1', label: 'Finished', value: 24 },
  ],
};

export function GlassmorphismNavKit() {
  return (
    <KitWrapper theme={theme} style={{
      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(217,70,239,0.15), transparent 40%),
        radial-gradient(circle at 80% 70%, rgba(99,102,241,0.12), transparent 40%),
        radial-gradient(circle at 50% 90%, rgba(236,72,153,0.08), transparent 30%)
      `,
    }}>
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', alignItems: 'flex-start', padding: '20px 0' }}>
        {/* Expanded Sidebar */}
        <GlassCard opacity={0.08} borderOpacity={0.1} style={{ width: '200px', padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <NavItem icon="🏠" label="Dashboard" active showLabel />
            <NavItem icon="📦" label="Orders" showLabel items={navData.orders} expanded />
            <NavItem icon="📋" label="History" showLabel items={navData.history} expanded />
            <NavItem icon="⚙" label="Settings" showLabel />
          </div>
        </GlassCard>

        {/* Medium Sidebar */}
        <GlassCard opacity={0.08} borderOpacity={0.1} style={{ width: '200px', padding: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <NavItem icon="📦" label="Orders" showLabel items={navData.orders} expanded />
            <NavItem icon="📋" label="History" showLabel items={navData.history} expanded />
            <NavItem icon="⚙" label="Settings" showLabel />
          </div>
        </GlassCard>

        {/* Collapsed Sidebar */}
        <GlassCard opacity={0.08} borderOpacity={0.1} style={{ width: '60px', padding: '12px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
            {/* Indicator dots */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '8px' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: i === 1 ? '#ec4899' : theme.text3 + '40' }} />
              ))}
            </div>
            {/* Vertical pill indicator */}
            <div style={{
              width: '32px', height: '80px', borderRadius: '16px',
              background: 'linear-gradient(180deg, #ec4899, #d946ef)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '8px',
            }}>
              <span style={{ fontSize: '14px' }}>📋</span>
            </div>
            <NavItem icon="⚙" showLabel={false} />
          </div>
        </GlassCard>
      </div>

      {/* Decorative orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '80px', height: '80px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217,70,239,0.2), transparent)',
        filter: 'blur(20px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '15%',
        width: '60px', height: '60px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent)',
        filter: 'blur(15px)', pointerEvents: 'none',
      }} />
    </KitWrapper>
  );
}
