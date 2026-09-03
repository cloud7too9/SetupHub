import { useMemo, useState } from 'react';
import type { CatalogEntry } from '@/catalog';
import { Card } from '@/ui/data-display/Card';
import { Button } from '@/ui/actions/Button';
import { Divider } from '@/ui/data-display/Divider';
import { useToast } from '@/ui/feedback/Toast';
import { CodeBlock } from '@/patterns/preview/CodeBlock';
import { Controls } from './Controls';
import { buildSnippet } from './codegen';
import { configurableFor } from './registry';
import { controllableProps, initialState } from './types';
import type { ConfigState, ConfigValue } from './types';
import { RotateCcw } from 'lucide-react';

interface Props {
  entry: CatalogEntry;
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
      <span style={{
        fontSize: '11px', fontWeight: 600, color: 'var(--text-3)',
        textTransform: 'uppercase', letterSpacing: '0.06em',
      }}>
        {title}
      </span>
      {children}
    </div>
  );
}

export function ConfiguratorPanel({ entry }: Props) {
  const configurable = configurableFor(entry.id);
  const { toast } = useToast();

  const specs = useMemo(
    () => (configurable ? [...controllableProps(entry.props), ...configurable.content] : []),
    [entry.props, configurable],
  );

  const [values, setValues] = useState<ConfigState>(() => initialState(specs));

  if (!configurable) return null;

  const set = (name: string, value: ConfigValue) =>
    setValues(prev => ({ ...prev, [name]: value }));

  const snippet = buildSnippet(
    entry,
    values,
    configurable.childrenCode(values),
    configurable.extraImports?.(values) ?? [],
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <div style={{ padding: 'var(--sp-lg)', background: 'var(--surface-alt)', borderRadius: 'var(--radius-lg)' }}>
        {configurable.render(values, () => toast('onClick ausgelöst', 'success'))}
      </div>

      <Card variant="default" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
          <Group title="Props">
            <Controls specs={controllableProps(entry.props)} values={values} onChange={set} />
          </Group>

          <Divider spacing={0} />

          <Group title="Inhalt">
            <Controls specs={configurable.content} values={values} onChange={set} />
          </Group>

          <Button
            variant="ghost"
            size="sm"
            fullWidth
            icon={<RotateCcw size={14} />}
            onClick={() => setValues(initialState(specs))}
          >
            Zurücksetzen
          </Button>
        </div>
      </Card>

      <CodeBlock code={snippet} />
    </div>
  );
}
