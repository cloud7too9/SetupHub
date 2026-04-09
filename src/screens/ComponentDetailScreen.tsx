import { previewRegistry } from '@/features/catalog/data/preview-registry';
import { componentRegistry } from '@/features/catalog/data/component-registry';
import { codeSnippets } from '@/features/catalog/data/code-snippets';
import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { IconButton } from '@/ui/actions/IconButton';
import { CodeBlock } from '@/patterns/preview/CodeBlock';
import { SourceView } from '@/patterns/preview/SourceView';
import { ArrowLeft, Code2 } from 'lucide-react';

interface Props {
  componentId: string;
  onBack: () => void;
}

export function ComponentDetailScreen({ componentId, onBack }: Props) {
  const preview = previewRegistry.get(componentId);
  const entry = componentRegistry.find(e => e.id === componentId);
  const code = codeSnippets[componentId];

  if (!preview || !entry) {
    return <div style={{ padding: 'var(--sp-2xl)', color: 'var(--text-3)' }}>Komponente nicht gefunden.</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
        <IconButton variant="surface" onClick={onBack} aria-label="Zurück"><ArrowLeft size={20} /></IconButton>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700 }}>{entry.name}</h2>
          <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{entry.description}</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--sp-xs)', flexWrap: 'wrap' }}>
        {entry.tags.map(t => <Badge key={t} color="neutral">{t}</Badge>)}
      </div>

      {preview.sections.map((section, i) => (
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

      {code && (
        <div>
          <h3 style={{
            fontSize: '11px', fontWeight: 600, color: 'var(--text-3)',
            textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--sp-sm)',
            display: 'flex', alignItems: 'center', gap: 'var(--sp-xs)',
          }}>
            <Code2 size={14} />
            Nutzung
          </h3>
          <CodeBlock code={code} />
        </div>
      )}

      <SourceView componentId={componentId} componentName={entry.name} />
    </div>
  );
}
