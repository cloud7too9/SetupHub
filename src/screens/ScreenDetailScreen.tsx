import { screenRegistry } from '@/features/catalog/data/screen-registry';
import { IconButton } from '@/ui/actions/IconButton';
import { ArrowLeft } from 'lucide-react';

interface Props {
  screenId: string;
  onBack: () => void;
}

export function ScreenDetailScreen({ screenId, onBack }: Props) {
  const entry = screenRegistry.find(s => s.id === screenId);

  if (!entry) {
    return <div style={{ padding: 'var(--sp-2xl)', color: 'var(--text-3)' }}>Screen nicht gefunden.</div>;
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
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--sp-lg)',
        background: 'var(--bg)',
      }}>
        {entry.render()}
      </div>
    </div>
  );
}
