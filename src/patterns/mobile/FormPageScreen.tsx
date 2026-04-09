import { useState } from 'react';
import { FormSection } from './FormSection';
import { ActionPanel } from './ActionPanel';
import { DetailHeader } from './DetailHeader';
import { Input } from '@/ui/inputs/Input';
import { Toggle } from '@/ui/inputs/Toggle';
import { Button } from '@/ui/actions/Button';
import { Check, X } from 'lucide-react';

export function FormPageScreen() {
  const [urgent, setUrgent] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)' }}>
      <DetailHeader title="Neuer Auftrag" subtitle="Alle Pflichtfelder ausfüllen" onBack={() => {}} />

      <FormSection title="Auftragsdaten" description="Grundlegende Informationen">
        <Input label="Artikelnummer" placeholder="ART-2024-XXXX" />
        <Input label="Bezeichnung" placeholder="z.B. Welle Ø25" />
        <Input label="Material" placeholder="z.B. 42CrMo4" />
      </FormSection>

      <FormSection title="Produktion">
        <Input label="Stückzahl" placeholder="0" type="number" />
        <Input label="Liefertermin" placeholder="TT.MM.JJJJ" />
        <Toggle checked={urgent} onChange={setUrgent} label="Eilauftrag" />
      </FormSection>

      <FormSection title="Anmerkungen">
        <Input label="Notiz" placeholder="Optionale Hinweise…" />
      </FormSection>

      <ActionPanel>
        <Button variant="ghost" style={{ flex: 1 }} icon={<X size={16} />}>Abbrechen</Button>
        <Button variant="primary" style={{ flex: 2 }} icon={<Check size={16} />}>Erstellen</Button>
      </ActionPanel>
    </div>
  );
}
