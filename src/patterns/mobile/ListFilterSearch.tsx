import { useState } from 'react';
import { SearchField } from '@/ui/inputs/SearchField';
import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { EmptyState } from '@/ui/feedback/EmptyState';
import { Search, ChevronRight } from 'lucide-react';

interface ListItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: { label: string; color: 'accent' | 'success' | 'warning' | 'error' | 'neutral' };
}

interface ListFilterSearchProps {
  items: ListItem[];
  onSelect?: (id: string) => void;
}

export function ListFilterSearch({ items, onSelect }: ListFilterSearchProps) {
  const [search, setSearch] = useState('');
  const filtered = items.filter(i =>
    i.title.toLowerCase().includes(search.toLowerCase()) ||
    i.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
      <SearchField value={search} onChange={setSearch} placeholder="Liste durchsuchen…" />
      {filtered.length === 0 ? (
        <EmptyState icon={<Search size={32} />} title="Kein Treffer" description="Versuch einen anderen Begriff." />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
          {filtered.map(item => (
            <Card key={item.id} variant="default" padding="sm" onClick={() => onSelect?.(item.id)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)', padding: 'var(--sp-xs) 0' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
                    <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text-1)' }}>{item.title}</span>
                    {item.badge && <Badge color={item.badge.color}>{item.badge.label}</Badge>}
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{item.subtitle}</span>
                </div>
                <ChevronRight size={16} color="var(--text-3)" />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
