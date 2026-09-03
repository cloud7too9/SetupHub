import type { PropSpec } from '@/catalog';
import { Input } from '@/ui/inputs/Input';
import { Toggle } from '@/ui/inputs/Toggle';
import type { ConfigState, ConfigValue } from './types';

interface Props {
  specs: PropSpec[];
  values: ConfigState;
  onChange: (name: string, value: ConfigValue) => void;
}

function OptionRow({ spec, value, onChange }: { spec: PropSpec; value: ConfigValue; onChange: (v: ConfigValue) => void }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--sp-xs)', flexWrap: 'wrap' }}>
      {spec.options?.map(option => {
        const isActive = option === value;
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            style={{
              padding: 'var(--sp-sm) var(--sp-md)',
              fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font-sans)',
              borderRadius: 'var(--radius-md)', cursor: 'pointer',
              border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
              background: isActive ? 'var(--accent-muted)' : 'var(--surface-alt)',
              color: isActive ? 'var(--accent)' : 'var(--text-3)',
              transition: 'all 0.15s ease',
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function Label({ spec }: { spec: PropSpec }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
      <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 600, color: 'var(--text-2)' }}>
        {spec.name}
      </code>
      {spec.description && (
        <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>{spec.description}</span>
      )}
    </div>
  );
}

/** Erzeugt die Regler aus den Prop-Beschreibungen — kein Wissen über die Komponente. */
export function Controls({ specs, values, onChange }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      {specs.map(spec => {
        const value = values[spec.name] ?? '';

        if (spec.type === 'boolean' || spec.type === 'function') {
          return (
            <div key={spec.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-md)' }}>
              <Label spec={spec} />
              <Toggle checked={Boolean(value)} onChange={v => onChange(spec.name, v)} />
            </div>
          );
        }

        if (spec.type === 'enum') {
          return (
            <div key={spec.name} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
              <Label spec={spec} />
              <OptionRow spec={spec} value={value} onChange={v => onChange(spec.name, v)} />
            </div>
          );
        }

        if (spec.type === 'number') {
          return (
            <div key={spec.name} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
              <Label spec={spec} />
              <Input
                type="number"
                value={String(value)}
                onChange={e => onChange(spec.name, Number(e.target.value))}
              />
            </div>
          );
        }

        return (
          <div key={spec.name} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
            <Label spec={spec} />
            <Input value={String(value)} onChange={e => onChange(spec.name, e.target.value)} />
          </div>
        );
      })}
    </div>
  );
}
