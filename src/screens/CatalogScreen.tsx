import { useMemo, useState } from 'react';
import { SearchField } from '@/ui/inputs/SearchField';
import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { EmptyState } from '@/ui/feedback/EmptyState';
import { entries, categories } from '@/catalog';
import type { CatalogEntry } from '@/catalog';
import { ChevronRight, Search } from 'lucide-react';

interface Props {
  onSelect: (id: string) => void;
}

const badgeColor: Record<string, 'accent' | 'success' | 'warning' | 'error' | 'neutral'> = {
  actions: 'accent',
  'data-display': 'success',
  inputs: 'warning',
  feedback: 'neutral',
  composite: 'error',
};

const categoryLabel = new Map(categories.map(c => [c.id, c.label]));

function matches(entry: CatalogEntry, query: string, category: string): boolean {
  if (category !== 'all' && entry.category !== category) return false;
  if (!query) return true;
  const q = query.toLowerCase();
  return entry.name.toLowerCase().includes(q)
    || entry.description.toLowerCase().includes(q)
    || entry.tags.some(tag => tag.includes(q));
}

export function CatalogScreen({ onSelect }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(
    () => entries.filter(entry => matches(entry, search, category)),
    [search, category],
  );

  const filters = [{ id: 'all', label: 'Alle' }, ...categories];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <SearchField value={search} onChange={setSearch} placeholder="Katalog durchsuchen…" />

      <div style={{ display: 'flex', gap: 'var(--sp-xs)', overflowX: 'auto', paddingBottom: 'var(--sp-xs)', scrollbarWidth: 'none' }}>
        {filters.map(f => {
          const isActive = f.id === category;
          return (
            <button
              key={f.id}
              onClick={() => setCategory(f.id)}
              style={{
                padding: 'var(--sp-sm) var(--sp-md)',
                fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-sans)',
                borderRadius: '9999px', border: 'none', cursor: 'pointer',
                whiteSpace: 'nowrap', transition: 'all 0.15s ease',
                background: isActive ? 'var(--accent)' : 'var(--surface)',
                color: isActive ? 'var(--bg)' : 'var(--text-3)',
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>
        {filtered.length} von {entries.length} Einträgen
      </span>

      {filtered.length === 0 ? (
        <EmptyState icon={<Search size={36} />} title="Nichts gefunden" description="Keine Ergebnisse für diesen Filter." />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
          {filtered.map(entry => (
            <Card key={entry.id} variant="default" padding="md" onClick={() => onSelect(entry.id)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>{entry.name}</span>
                    <Badge color={badgeColor[entry.category] ?? 'neutral'}>
                      {categoryLabel.get(entry.category) ?? entry.category}
                    </Badge>
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{entry.description}</span>
                </div>
                <ChevronRight size={18} color="var(--text-3)" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
