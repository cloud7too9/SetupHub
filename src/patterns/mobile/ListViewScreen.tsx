import { ListFilterSearch } from './ListFilterSearch';
import { DetailHeader } from './DetailHeader';

const items = [
  { id: '1', title: 'Auftrag #1042', subtitle: 'Welle Ø25 — 120 Stück', badge: { label: 'Aktiv', color: 'success' as const } },
  { id: '2', title: 'Auftrag #1043', subtitle: 'Flansch M16 — 50 Stück', badge: { label: 'Wartend', color: 'warning' as const } },
  { id: '3', title: 'Auftrag #1044', subtitle: 'Buchse DIN 1850 — 200 Stück', badge: { label: 'Aktiv', color: 'success' as const } },
  { id: '4', title: 'Auftrag #1045', subtitle: 'Welle Ø30 — 80 Stück', badge: { label: 'Fertig', color: 'accent' as const } },
  { id: '5', title: 'Auftrag #1046', subtitle: 'Adapter DN50 — 30 Stück', badge: { label: 'Fehler', color: 'error' as const } },
  { id: '6', title: 'Auftrag #1047', subtitle: 'Hülse Ø18 — 300 Stück', badge: { label: 'Aktiv', color: 'success' as const } },
  { id: '7', title: 'Auftrag #1048', subtitle: 'Bolzen M12 — 150 Stück', badge: { label: 'Wartend', color: 'warning' as const } },
];

export function ListViewScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <DetailHeader title="Aufträge" subtitle={`${items.length} Einträge`} onBack={() => {}} />
      <ListFilterSearch items={items} />
    </div>
  );
}
