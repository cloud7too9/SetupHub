import { InfoPanel } from './InfoPanel';
import { Package, Clock, CheckCircle } from 'lucide-react';

export const infoPanelPreviews = {
  id: 'info-panel',
  name: 'Info-Panel',
  description: 'Kompakte Infokarte mit Icon, Wert und optionalem Badge',
  sections: [
    {
      title: 'Beispiele',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
          <InfoPanel icon={<Package size={20} color="var(--accent)" />} title="Aufträge gesamt" value="142" subtitle="Seit Januar 2026" badge={{ label: '+12%', color: 'success' }} />
          <InfoPanel icon={<Clock size={20} color="var(--warning)" />} title="Durchlaufzeit" value="4.2 Tage" variant="accent" />
          <InfoPanel icon={<CheckCircle size={20} color="var(--success)" />} title="Ausschussrate" value="1.3%" badge={{ label: 'Gut', color: 'success' }} />
        </div>
      ),
    },
  ],
};
