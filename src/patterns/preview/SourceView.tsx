import { useState } from 'react';
import { Card } from '@/ui/data-display/Card';
import { Button } from '@/ui/actions/Button';
import { CodeBlock } from './CodeBlock';
import { FolderOpen } from 'lucide-react';

interface SourceViewProps {
  componentName: string;
  /** Kategorie aus dem component-registry — bestimmt den Zielordner unter src/ui/. */
  category: string;
}

const structureTemplate = (name: string, category: string) => `${category}/${name}/
  ${name}.tsx          — Komponente
  ${name}.types.ts     — Props (optional)
  ${name}.preview.tsx  — Live-Demo
  index.ts             — Re-Export`;

const importTemplate = (name: string, category: string) =>
`// 1. Ordner kopieren nach: src/ui/${category}/${name}/

// 2. In ui/index.ts registrieren:
export { ${name} } from './${category}/${name}';

// 3. Nutzen:
import { ${name} } from '@/ui';`;

export function SourceView({ componentName, category }: SourceViewProps) {
  const [expanded, setExpanded] = useState(false);

  if (!expanded) {
    return (
      <Button
        variant="secondary"
        size="sm"
        icon={<FolderOpen size={14} />}
        onClick={() => setExpanded(true)}
        fullWidth
      >
        Exportieren — so nutzt du {componentName}
      </Button>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
      <Card variant="accent" padding="md">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', marginBottom: 'var(--sp-sm)' }}>
          <FolderOpen size={16} color="var(--accent)" />
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)' }}>Dateistruktur</span>
        </div>
        <pre style={{
          fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-2)',
          lineHeight: 1.6, margin: 0, whiteSpace: 'pre',
        }}>
          {structureTemplate(componentName, category)}
        </pre>
      </Card>
      <CodeBlock code={importTemplate(componentName, category)} language="tsx" />
      <Button variant="ghost" size="sm" onClick={() => setExpanded(false)} fullWidth>
        Einklappen
      </Button>
    </div>
  );
}
