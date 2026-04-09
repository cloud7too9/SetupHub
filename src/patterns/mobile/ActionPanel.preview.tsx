import { ActionPanel } from './ActionPanel';
import { Button } from '@/ui/actions/Button';
import { Check, X } from 'lucide-react';

export const actionPanelPreviews = {
  id: 'action-panel',
  name: 'Aktionsleiste',
  description: 'Sticky-Bereich am unteren Rand für Hauptaktionen',
  sections: [
    {
      title: 'Varianten',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <ActionPanel>
            <Button variant="primary" fullWidth icon={<Check size={16} />}>Speichern</Button>
          </ActionPanel>
          <ActionPanel>
            <Button variant="ghost" style={{ flex: 1 }} icon={<X size={16} />}>Abbrechen</Button>
            <Button variant="primary" style={{ flex: 2 }} icon={<Check size={16} />}>Bestätigen</Button>
          </ActionPanel>
        </div>
      ),
    },
  ],
};
