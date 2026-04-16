import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { kitRegistry } from '@/features/catalog/data/kit-registry';
import { ChevronRight, Palette } from 'lucide-react';

interface Props {
  onSelect?: (id: string) => void;
}

export function KitsScreen({ onSelect }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
        <Palette size={20} color="var(--accent)" />
        <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{kitRegistry.length} Kits</span>
      </div>
      {kitRegistry.map(k => (
        <Card key={k.id} variant="default" padding="md" onClick={() => onSelect?.(k.id)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: 'var(--radius-md)',
              background: `color-mix(in srgb, ${k.accent} 15%, transparent)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <div style={{ width: '12px', height: '12px', borderRadius: 'var(--radius-sm)', background: k.accent }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
                <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>{k.name}</span>
                <Badge color="accent">Kit</Badge>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{k.description}</span>
            </div>
            <ChevronRight size={18} color="var(--text-3)" />
          </div>
        </Card>
      ))}
    </div>
  );
}
