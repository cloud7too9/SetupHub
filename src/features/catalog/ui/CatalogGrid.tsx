import type { CatalogEntry } from '../data/component-registry';
import { ComponentPreviewCard } from './ComponentPreviewCard';
import { EmptyState } from '@/ui/feedback/EmptyState';
import { useStagger } from '@/shared/hooks/useStagger';
import { Search } from 'lucide-react';

interface Props {
  items: CatalogEntry[];
  onSelect: (id: string) => void;
}

export function CatalogGrid({ items, onSelect }: Props) {
  const revealed = useStagger(items.length);

  if (items.length === 0) {
    return <EmptyState icon={<Search size={36} />} title="Nichts gefunden" description="Keine Ergebnisse für diesen Filter." />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
      {items.map((entry, i) => (
        <div
          key={entry.id}
          style={{
            opacity: i < revealed ? 1 : 0,
            transform: i < revealed ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          <ComponentPreviewCard entry={entry} onTap={onSelect} />
        </div>
      ))}
    </div>
  );
}
