import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { ChevronRight } from 'lucide-react';
import type { CatalogEntry } from '../data/component-registry';

interface Props {
  entry: CatalogEntry;
  onTap: (id: string) => void;
}

const categoryLabels: Record<string, string> = {
  actions: 'Aktionen',
  'data-display': 'Datenanzeige',
  inputs: 'Eingaben',
  feedback: 'Rückmeldung',
};

const categoryColors: Record<string, 'accent' | 'success' | 'warning' | 'error' | 'neutral'> = {
  actions: 'accent',
  'data-display': 'success',
  inputs: 'warning',
  feedback: 'neutral',
};

export function ComponentPreviewCard({ entry, onTap }: Props) {
  return (
    <Card variant="default" padding="md" onClick={() => onTap(entry.id)}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
            <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>{entry.name}</span>
            <Badge color={categoryColors[entry.category] ?? 'neutral'}>{categoryLabels[entry.category] ?? entry.category}</Badge>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{entry.description}</span>
        </div>
        <ChevronRight size={18} color="var(--text-3)" />
      </div>
    </Card>
  );
}
