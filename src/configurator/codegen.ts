import type { CatalogEntry, PropSpec } from '@/catalog';
import type { ConfigState, ConfigValue } from './types';

function attribute(spec: PropSpec, value: ConfigValue): string | null {
  // Vorgaben weglassen — der erzeugte Code soll so knapp sein wie handgeschriebener.
  if (spec.default !== undefined && value === spec.default) return null;

  if (spec.type === 'function') return value ? `${spec.name}={handleClick}` : null;
  if (spec.type === 'boolean') return value ? spec.name : null;
  if (spec.type === 'number') return `${spec.name}={${value}}`;
  if (value === '') return null;
  return `${spec.name}="${value}"`;
}

/** Baut aus Katalog-Eintrag und Reglerwerten den Aufruf, den man kopieren kann. */
export function buildSnippet(
  entry: CatalogEntry,
  values: ConfigState,
  childrenCode: string,
  extraImports: string[] = [],
): string {
  const attributes = entry.props
    .map(spec => {
      const value = values[spec.name];
      return value === undefined ? null : attribute(spec, value);
    })
    .filter((attr): attr is string => attr !== null);

  const tag = entry.source.named;
  const open = attributes.length > 0 ? `<${tag} ${attributes.join(' ')}>` : `<${tag}>`;
  const body = childrenCode
    .split('\n')
    .map(line => (line ? '  ' + line : line))
    .join('\n');

  const imported = [tag, ...extraImports].join(', ');
  return `import { ${imported} } from '${entry.source.from}';\n\n${open}\n${body}\n</${tag}>`;
}
