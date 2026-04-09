import { patternRegistry } from '@/features/catalog/data/pattern-registry';
import { Card } from '@/ui/data-display/Card';
import { IconButton } from '@/ui/actions/IconButton';
import { ArrowLeft } from 'lucide-react';

interface Props {
  patternId: string;
  onBack: () => void;
}

export function PatternDetailScreen({ patternId, onBack }: Props) {
  const pattern = patternRegistry.find(p => p.id === patternId);

  if (!pattern) {
    return <div style={{ padding: 'var(--sp-2xl)', color: 'var(--text-3)' }}>Pattern nicht gefunden.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
        <IconButton variant="surface" onClick={onBack}><ArrowLeft size={20} /></IconButton>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700 }}>{pattern.name}</h2>
          <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{pattern.description}</span>
        </div>
      </div>
      {pattern.sections.map((section, i) => (
        <div key={i}>
          <h3 style={{
            fontSize: '11px', fontWeight: 600, color: 'var(--text-3)',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--sp-sm)',
          }}>
            {section.title}
          </h3>
          <Card variant="default" padding="md">
            {section.render()}
          </Card>
        </div>
      ))}
    </div>
  );
}
