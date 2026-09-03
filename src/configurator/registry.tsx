import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import type { Configurable, ConfigState } from './types';

type BadgeColor = 'accent' | 'success' | 'warning' | 'error' | 'neutral';

const badgeColors: BadgeColor[] = ['accent', 'success', 'warning', 'error', 'neutral'];

function asBadgeColor(value: unknown): BadgeColor {
  return badgeColors.includes(value as BadgeColor) ? (value as BadgeColor) : 'accent';
}

const cardConfigurable: Configurable = {
  entryId: 'card',
  content: [
    { name: 'title', type: 'string', default: 'Auftrag #1042', description: 'Überschrift in der Karte' },
    { name: 'text', type: 'string', default: 'Welle Ø25 — 120 Stück' },
    { name: 'badge', type: 'string', default: 'Aktiv', description: 'Leer lassen für kein Badge' },
    { name: 'badgeColor', type: 'enum', options: badgeColors, default: 'success' },
  ],

  render: (values: ConfigState, onAction) => {
    const badge = String(values.badge ?? '');
    return (
      <Card
        variant={String(values.variant ?? 'default') as 'default' | 'outlined' | 'elevated' | 'accent'}
        padding={String(values.padding ?? 'md') as 'sm' | 'md' | 'lg'}
        onClick={values.onClick ? onAction : undefined}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>
              {String(values.title ?? '')}
            </span>
            {badge && <Badge color={asBadgeColor(values.badgeColor)}>{badge}</Badge>}
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{String(values.text ?? '')}</span>
        </div>
      </Card>
    );
  },

  childrenCode: (values: ConfigState) => {
    const badge = String(values.badge ?? '');
    // Bewusst dieselben Inline-Styles wie in render(): das Projekt nutzt keine
    // CSS-Klassen, kopierter Code muss ohne weitere Dateien funktionieren.
    const badgeLine = badge
      ? `\n    <Badge color="${values.badgeColor}">${badge}</Badge>`
      : '';
    return `<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', flexWrap: 'wrap' }}>
    <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>${values.title}</span>${badgeLine}
  </div>
  <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>${values.text}</span>
</div>`;
  },

  extraImports: (values: ConfigState) => (String(values.badge ?? '') ? ['Badge'] : []),
};

const configurables: Configurable[] = [cardConfigurable];

export const configurableFor = (entryId: string): Configurable | undefined =>
  configurables.find(c => c.entryId === entryId);
