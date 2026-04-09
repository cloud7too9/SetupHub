import { NotificationList } from './NotificationList';

const notifications = [
  { id: '1', title: 'Auftrag #1042 abgeschlossen', message: 'Alle 120 Teile wurden erfolgreich gefertigt.', time: 'Vor 12 Min', read: false, type: 'success' as const },
  { id: '2', title: 'Werkzeug W-38 prüfen', message: 'Standzeit erreicht — Wechsel empfohlen.', time: 'Vor 1 Std', read: false, type: 'warning' as const },
  { id: '3', title: 'Maschinenausfall CTX 310', message: 'Spindeltemperatur zu hoch. Techniker informiert.', time: 'Vor 2 Std', read: true, type: 'error' as const },
  { id: '4', title: 'Schichtübergabe', message: 'Schicht B hat übernommen. 3 offene Aufträge.', time: 'Vor 4 Std', read: true, type: 'info' as const },
];

export const notificationListPreviews = {
  id: 'notification-list',
  name: 'Benachrichtigungen',
  description: 'Liste mit Avataren, Status-Badges und Gelesen-Markierung',
  sections: [
    { title: 'Beispiele', render: () => <NotificationList items={notifications} /> },
  ],
};
