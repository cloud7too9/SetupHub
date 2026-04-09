import { FormSection } from './FormSection';
import { Input } from '@/ui/inputs/Input';
import { Toggle } from '@/ui/inputs/Toggle';
import { useState } from 'react';

function FormDemo() {
  const [notify, setNotify] = useState(true);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <FormSection title="Persönliche Daten" description="Name und Kontakt">
        <Input label="Vorname" placeholder="Max" />
        <Input label="Nachname" placeholder="Mustermann" />
        <Input label="E-Mail" placeholder="max@firma.de" />
      </FormSection>
      <FormSection title="Benachrichtigungen">
        <Toggle checked={notify} onChange={setNotify} label="Push-Nachrichten" />
      </FormSection>
    </div>
  );
}

export const formSectionPreviews = {
  id: 'form-section',
  name: 'Formularbereich',
  description: 'Gruppierte Eingabefelder mit Titel und Beschreibung',
  sections: [
    { title: 'Beispiel-Formular', render: () => <FormDemo /> },
  ],
};
