import { useState } from 'react';
import { DetailHeader } from './DetailHeader';
import { FormSection } from './FormSection';
import { Toggle } from '@/ui/inputs/Toggle';
import { Dropdown } from '@/ui/actions/Dropdown';
import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { Bell, Mail, Smartphone, Volume2 } from 'lucide-react';

export function SettingsDetailScreen() {
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState(false);
  const [sound, setSound] = useState(true);
  const [frequency, setFrequency] = useState('instant');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)' }}>
      <DetailHeader title="Benachrichtigungen" subtitle="Wie und wann du informiert wirst" onBack={() => {}} />

      <FormSection title="Kanäle" description="Aktiviere die gewünschten Benachrichtigungswege">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            <Smartphone size={18} color="var(--accent)" />
            <span style={{ fontSize: '15px' }}>Push-Nachrichten</span>
          </div>
          <Toggle checked={push} onChange={setPush} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            <Mail size={18} color="var(--accent)" />
            <span style={{ fontSize: '15px' }}>E-Mail</span>
          </div>
          <Toggle checked={email} onChange={setEmail} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            <Volume2 size={18} color="var(--accent)" />
            <span style={{ fontSize: '15px' }}>Ton</span>
          </div>
          <Toggle checked={sound} onChange={setSound} />
        </div>
      </FormSection>

      <FormSection title="Häufigkeit">
        <Dropdown
          label="Zusammenfassung"
          value={frequency}
          onChange={setFrequency}
          options={[
            { id: 'instant', label: 'Sofort' },
            { id: 'hourly', label: 'Stündlich' },
            { id: 'daily', label: 'Täglich' },
            { id: 'weekly', label: 'Wöchentlich' },
          ]}
        />
      </FormSection>

      <Card variant="accent" padding="md">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
          <Bell size={18} color="var(--accent)" />
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '14px', fontWeight: 500 }}>Letzte Benachrichtigung</span>
            <span style={{ fontSize: '12px', color: 'var(--text-3)', display: 'block' }}>Auftrag #1042 abgeschlossen — vor 12 Min</span>
          </div>
          <Badge color="success">Gelesen</Badge>
        </div>
      </Card>
    </div>
  );
}
