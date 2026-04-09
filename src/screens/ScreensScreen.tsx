import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { screenRegistry } from '@/features/catalog/data/screen-registry';
import { ChevronRight, Monitor } from 'lucide-react';

interface Props {
  onSelect?: (id: string) => void;
}

export function ScreensScreen({ onSelect }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
        <Monitor size={20} color="var(--accent)" />
        <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{screenRegistry.length} Screens</span>
      </div>
      {screenRegistry.map(s => (
        <Card key={s.id} variant="default" padding="md" onClick={() => onSelect?.(s.id)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>{s.name}</span>
                <Badge color="warning">Screen</Badge>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{s.description}</span>
            </div>
            <ChevronRight size={18} color="var(--text-3)" />
          </div>
        </Card>
      ))}
    </div>
  );
}
