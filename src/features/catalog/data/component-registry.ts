export interface CatalogEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
}

export const componentRegistry: CatalogEntry[] = [
  { id: 'button', name: 'Button', category: 'actions', description: 'Hauptbaustein für Aktionen und Interaktionen', tags: ['aktion', 'klick'] },
  { id: 'icon-button', name: 'IconButton', category: 'actions', description: 'Kompakter Button nur mit Icon', tags: ['aktion', 'icon'] },
  { id: 'tabs', name: 'Tabs', category: 'actions', description: 'Umschalter zwischen Ansichten', tags: ['navigation', 'umschalten'] },
  { id: 'chips', name: 'Chips', category: 'actions', description: 'Auswahl- und Filter-Chips mit Tags', tags: ['filter', 'tag', 'auswahl'] },
  { id: 'dropdown', name: 'Dropdown', category: 'actions', description: 'Auswahlfeld mit aufklappbarer Liste', tags: ['auswahl', 'formular', 'menü'] },
  { id: 'card', name: 'Card', category: 'data-display', description: 'Inhaltsfläche mit verschiedenen Stilen', tags: ['fläche', 'container'] },
  { id: 'badge', name: 'Badge', category: 'data-display', description: 'Kleine Status- oder Kategoriemarkierung', tags: ['status', 'kennzeichnung'] },
  { id: 'divider', name: 'Divider', category: 'data-display', description: 'Visueller Trenner zwischen Bereichen', tags: ['trenner'] },
  { id: 'list-item', name: 'ListItem', category: 'data-display', description: 'Listenzeile mit Icon, Text und Aktion', tags: ['liste', 'zeile', 'navigation'] },
  { id: 'avatar', name: 'Avatar', category: 'data-display', description: 'Profilbild mit Initialen, Farbe und Status', tags: ['profil', 'benutzer', 'bild'] },
  { id: 'input', name: 'Input', category: 'inputs', description: 'Texteingabefeld mit Label und Fehlermeldung', tags: ['formular', 'eingabe'] },
  { id: 'search-field', name: 'SearchField', category: 'inputs', description: 'Suchfeld mit Icon und Löschen-Funktion', tags: ['suche', 'filter'] },
  { id: 'toggle', name: 'Toggle', category: 'inputs', description: 'Ein/Aus-Schalter für Einstellungen', tags: ['schalter', 'ja/nein'] },
  { id: 'loading-state', name: 'LoadingState', category: 'feedback', description: 'Ladeanzeige mit Spinner und Text', tags: ['laden', 'spinner', 'warten'] },
  { id: 'error-state', name: 'ErrorState', category: 'feedback', description: 'Fehlermeldung mit Icon und Text', tags: ['fehler', 'meldung'] },
  { id: 'empty-state', name: 'EmptyState', category: 'feedback', description: 'Platzhalter wenn keine Inhalte vorhanden sind', tags: ['leer', 'platzhalter'] },
  { id: 'sheet', name: 'Sheet', category: 'feedback', description: 'Einschiebbares Overlay als Sidebar oder von unten', tags: ['overlay', 'sidebar', 'navigation'] },
  { id: 'progress', name: 'Progress', category: 'feedback', description: 'Fortschrittsbalken mit Farben und Label', tags: ['fortschritt', 'status', 'balken'] },
  { id: 'skeleton', name: 'Skeleton', category: 'feedback', description: 'Shimmer-Platzhalter während Inhalte laden', tags: ['laden', 'platzhalter', 'shimmer'] },
  { id: 'modal', name: 'Modal', category: 'feedback', description: 'Zentrierter Dialog für Bestätigungen und Hinweise', tags: ['dialog', 'overlay', 'bestätigung'] },
  { id: 'toast', name: 'Toast', category: 'feedback', description: 'Kurze Rückmeldung als temporäre Benachrichtigung', tags: ['benachrichtigung', 'meldung', 'feedback'] },
];
