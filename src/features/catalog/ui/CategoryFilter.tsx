import { categories } from '../data/categories';

interface Props {
  active: string;
  onChange: (id: string) => void;
}

export function CategoryFilter({ active, onChange }: Props) {
  return (
    <div style={{
      display: 'flex',
      gap: 'var(--sp-xs)',
      overflowX: 'auto',
      paddingBottom: 'var(--sp-xs)',
      scrollbarWidth: 'none',
    }}>
      {categories.map(c => {
        const isActive = c.id === active;
        return (
          <button
            key={c.id}
            onClick={() => onChange(c.id)}
            style={{
              padding: 'var(--sp-sm) var(--sp-md)',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: 'var(--font-sans)',
              borderRadius: 'var(--radius-full, 9999px)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
              background: isActive ? 'var(--accent)' : 'var(--surface)',
              color: isActive ? 'var(--bg)' : 'var(--text-3)',
            }}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}
