import { StatCards } from './StatCards';
import { Package, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const statCardsPreviews = {
  id: 'stat-cards',
  name: 'Statistik-Cards',
  description: 'Kompaktes Statistik-Grid mit Trends',
  sections: [
    {
      title: '2 Spalten',
      render: () => (
        <StatCards items={[
          { label: 'Aufträge', value: '47', icon: <Package size={18} />, trend: { direction: 'up', label: '12%' } },
          { label: 'Erledigt', value: '38', icon: <CheckCircle size={18} />, trend: { direction: 'up', label: '8%' } },
          { label: 'Wartend', value: '6', icon: <Clock size={18} /> },
          { label: 'Überfällig', value: '3', icon: <AlertTriangle size={18} />, trend: { direction: 'down', label: '2' } },
        ]} />
      ),
    },
    {
      title: '3 Spalten',
      render: () => (
        <StatCards columns={3} items={[
          { label: 'Heute', value: '12' },
          { label: 'Woche', value: '47' },
          { label: 'Monat', value: '186' },
        ]} />
      ),
    },
  ],
};
