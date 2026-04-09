import { ListFilterSearch } from './ListFilterSearch';

const demoItems = [
  { id: '1', title: 'Auftrag #1042', subtitle: 'CNC Drehteil — 120 Stück', badge: { label: 'Aktiv', color: 'success' as const } },
  { id: '2', title: 'Auftrag #1043', subtitle: 'Flansch M16 — 50 Stück', badge: { label: 'Wartend', color: 'warning' as const } },
  { id: '3', title: 'Auftrag #1044', subtitle: 'Buchse DIN 1850 — 200 Stück' },
  { id: '4', title: 'Auftrag #1045', subtitle: 'Welle Ø25 — 80 Stück', badge: { label: 'Fertig', color: 'accent' as const } },
  { id: '5', title: 'Auftrag #1046', subtitle: 'Adapter DN50 — 30 Stück', badge: { label: 'Fehler', color: 'error' as const } },
];

export const listFilterSearchPreviews = {
  id: 'list-filter-search',
  name: 'Liste + Filter + Suche',
  description: 'Durchsuchbare Liste mit Badges und Navigation',
  sections: [
    { title: 'Mit Daten', render: () => <ListFilterSearch items={demoItems} /> },
    { title: 'Leer', render: () => <ListFilterSearch items={[]} /> },
  ],
};
