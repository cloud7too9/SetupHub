import { Sparkles, Menu } from 'lucide-react';

interface TopbarProps {
  title: string;
  onMenuOpen: () => void;
}

export function Topbar({ title, onMenuOpen }: TopbarProps) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--sp-xl)',
      height: '56px',
      background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface) 85%, transparent 100%)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      backdropFilter: 'blur(12px)',
    }}>
      <button
        onClick={onMenuOpen}
        aria-label="Menü öffnen"
        style={{
          width: '40px', height: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: 'var(--radius-md)', border: 'none',
          background: 'transparent', cursor: 'pointer',
          color: 'var(--text-2)', transition: 'all 0.15s ease',
        }}
      >
        <Menu size={22} />
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
        <Sparkles size={18} color="var(--accent)" />
        <span style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-1)' }}>{title}</span>
      </div>
      <div style={{ width: '40px' }} />
    </header>
  );
}
