import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { Button } from '@/ui/actions/Button';
import { Divider } from '@/ui/data-display/Divider';
import { DetailHeader } from './DetailHeader';
import { ActionPanel } from './ActionPanel';
import { IconButton } from '@/ui/actions/IconButton';
import { Share2, Edit, Check, FileText } from 'lucide-react';

export function DetailViewScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <DetailHeader
        title="Auftrag #1042"
        subtitle="CNC Drehteil — Welle Ø25"
        onBack={() => {}}
        actions={
          <IconButton variant="surface" size={36}><Share2 size={16} /></IconButton>
        }
      />

      {/* Status */}
      <Card variant="accent" padding="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Status</span>
            <div style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-1)', marginTop: '2px' }}>In Bearbeitung</div>
          </div>
          <Badge color="success">Aktiv</Badge>
        </div>
      </Card>

      {/* Details */}
      <Card variant="default" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
          {[
            { label: 'Artikelnummer', value: 'ART-2024-1042' },
            { label: 'Material', value: '42CrMo4' },
            { label: 'Stückzahl', value: '120' },
            { label: 'Liefertermin', value: '15.04.2026' },
            { label: 'Maschine', value: 'DMG CTX 510' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{row.label}</span>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-1)' }}>{row.value}</span>
            </div>
          ))}
        </div>
      </Card>

      <Divider label="Anhänge" />

      <Card variant="default" padding="sm" onClick={() => {}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)', padding: '4px 0' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileText size={18} color="var(--text-3)" />
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-1)' }}>Zeichnung_1042.pdf</span>
            <span style={{ fontSize: '12px', color: 'var(--text-3)', display: 'block' }}>2.4 MB — Hochgeladen vor 3 Tagen</span>
          </div>
        </div>
      </Card>

      <ActionPanel>
        <Button variant="secondary" style={{ flex: 1 }} icon={<Edit size={16} />}>Bearbeiten</Button>
        <Button variant="primary" style={{ flex: 1 }} icon={<Check size={16} />}>Abschließen</Button>
      </ActionPanel>
    </div>
  );
}
