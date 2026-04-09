import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { patternRegistry } from '@/features/catalog/data/pattern-registry';
import { ChevronRight, Layers } from 'lucide-react';

interface Props {
  onSelect?: (id: string) => void;
}

export function PatternsScreen({ onSelect }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
        <Layers size={20} color="var(--accent)" />
        <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{patternRegistry.length} Patterns</span>
      </div>
      {patternRegistry.map(p => (
        <Card key={p.id} variant="default" padding="md" onClick={() => onSelect?.(p.id)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>{p.name}</span>
                <Badge color="success">Pattern</Badge>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{p.description}</span>
            </div>
            <ChevronRight size={18} color="var(--text-3)" />
          </div>
        </Card>
      ))}
    </div>
  );
}
