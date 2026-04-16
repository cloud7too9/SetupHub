import { kitRegistry } from '@/features/catalog/data/kit-registry';
import { IconButton } from '@/ui/actions/IconButton';
import { ArrowLeft } from 'lucide-react';

interface Props {
  kitId: string;
  onBack: () => void;
}

export function KitDetailScreen({ kitId, onBack }: Props) {
  const entry = kitRegistry.find(k => k.id === kitId);

  if (!entry) {
    return <div style={{ padding: 'var(--sp-2xl)', color: 'var(--text-3)' }}>Kit nicht gefunden.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
        <IconButton variant="surface" onClick={onBack}><ArrowLeft size={20} /></IconButton>
        <div>
          <h2 style={{ fontSize: '20px', fontWeight: 700 }}>{entry.name}</h2>
          <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{entry.description}</span>
        </div>
      </div>
      <div style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'auto',
      }}>
        {entry.render()}
      </div>
    </div>
  );
}
