import { useState } from 'react';
import { Card } from '@/ui/data-display/Card';
import { Button } from '@/ui/actions/Button';
import { CodeBlock } from './CodeBlock';
import { FolderOpen } from 'lucide-react';

interface SourceViewProps {
  componentId: string;
  componentName: string;
}

const structureTemplate = (name: string, category: string) => `${category}/${name}/
  ${name}.tsx          — Komponente
  ${name}.types.ts     — Props (optional)
  ${name}.preview.tsx  — Live-Demo
  index.ts             — Re-Export`;

const importTemplate = (name: string) =>
`// 1. Ordner kopieren nach: src/ui/<kategorie>/${name}/

// 2. In ui/index.ts registrieren:
export { ${name} } from './<kategorie>/${name}';

// 3. Nutzen:
import { ${name} } from '@/ui';`;

const categoryMap: Record<string, string> = {
  actions: 'actions',
  'data-display': 'data-display',
  inputs: 'inputs',
  feedback: 'feedback',
};

export function SourceView({ componentId, componentName }: SourceViewProps) {
  const [expanded, setExpanded] = useState(false);

  // Derive category from registry
  const category = categoryMap[
    Object.keys(categoryMap).find(c =>
      ['button', 'icon-button', 'tabs', 'chips', 'dropdown'].includes(componentId) ? c === 'actions' :
      ['card', 'badge', 'divider', 'list-item', 'avatar'].includes(componentId) ? c === 'data-display' :
      ['input', 'search-field', 'toggle'].includes(componentId) ? c === 'inputs' :
      c === 'feedback'
    ) ?? 'feedback'
  ] ?? 'feedback';

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
      <CodeBlock code={importTemplate(componentName)} language="tsx" />
      <Button variant="ghost" size="sm" onClick={() => setExpanded(false)} fullWidth>
        Einklappen
      </Button>
    </div>
  );
}
