import { entries, previews } from '@/catalog';
import type { PropSpec } from '@/catalog';
import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { DetailHeader } from '@/patterns/mobile/DetailHeader';
import { CodeBlock } from '@/patterns/preview/CodeBlock';
import { ConfiguratorPanel } from '@/configurator/ConfiguratorPanel';
import { configurableFor } from '@/configurator/registry';
import { Code2, SlidersHorizontal } from 'lucide-react';

interface Props {
  entryId: string;
  onBack: () => void;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{
      fontSize: '11px', fontWeight: 600, color: 'var(--text-3)',
      textTransform: 'uppercase', letterSpacing: '0.06em',
      marginBottom: 'var(--sp-sm)', display: 'flex', alignItems: 'center', gap: 'var(--sp-xs)',
    }}>
      {children}
    </h3>
  );
}

function typeLabel(prop: PropSpec): string {
  if (prop.type === 'enum' && prop.options) return prop.options.join(' | ');
  return prop.type;
}

function PropsTable({ props: specs }: { props: PropSpec[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
      {specs.map(spec => (
        <div key={spec.name} style={{
          display: 'flex', flexDirection: 'column', gap: '2px',
          paddingBottom: 'var(--sp-sm)', borderBottom: '1px solid var(--border-subtle)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', flexWrap: 'wrap' }}>
            <code style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-1)', fontWeight: 600 }}>
              {spec.name}
            </code>
            {spec.required && <Badge color="error">Pflicht</Badge>}
            {spec.default !== undefined && (
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-3)' }}>
                = {String(spec.default)}
              </span>
            )}
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', overflowWrap: 'anywhere' }}>
            {typeLabel(spec)}
          </span>
          {spec.description && (
            <span style={{ fontSize: '12px', color: 'var(--text-3)' }}>{spec.description}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export function EntryDetailScreen({ entryId, onBack }: Props) {
  const entry = entries.find(e => e.id === entryId);

  if (!entry) {
    return <div style={{ padding: 'var(--sp-2xl)', color: 'var(--text-3)' }}>Eintrag nicht gefunden.</div>;
  }

  const preview = previews.get(entry.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)' }}>
      <DetailHeader title={entry.name} subtitle={entry.description} onBack={onBack} />

      <div style={{ display: 'flex', gap: 'var(--sp-xs)', flexWrap: 'wrap' }}>
        {entry.tags.map(tag => <Badge key={tag} color="neutral">{tag}</Badge>)}
      </div>

      {configurableFor(entry.id) && (
        <div>
          <SectionTitle><SlidersHorizontal size={14} />Konfigurator</SectionTitle>
          <ConfiguratorPanel entry={entry} />
        </div>
      )}

      {preview?.sections.map((section, i) => (
        <div key={i}>
          <SectionTitle>{section.title}</SectionTitle>
          <Card variant="default" padding="md">{section.render()}</Card>
        </div>
      ))}

      <div>
        <SectionTitle>Props</SectionTitle>
        <Card variant="default" padding="md">
          {entry.props.length > 0
            ? <PropsTable props={entry.props} />
            : <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>Keine Props.</span>}
        </Card>
      </div>

      <div>
        <SectionTitle><Code2 size={14} />Nutzung</SectionTitle>
        <CodeBlock code={`import { ${entry.source.named} } from '${entry.source.from}';\n\n${entry.snippet}`} />
      </div>

      <div>
        <SectionTitle>Quelle</SectionTitle>
        <CodeBlock code={entry.source.path} language="pfad" />
      </div>
    </div>
  );
}
