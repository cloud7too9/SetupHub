import { CardActions } from './CardActions';

export const cardActionsPreviews = {
  id: 'card-actions',
  name: 'Card + Aktionen',
  description: 'Karte mit Titel, Badge und Aktions-Buttons',
  sections: [
    {
      title: 'Beispiele',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <CardActions
            title="Auftrag #1042"
            subtitle="CNC Drehteil — Lieferung 15.04."
            badge={{ label: 'Aktiv', color: 'success' }}
          />
          <CardActions
            title="Werkzeug W-38"
            subtitle="Fräser 12mm — Lager B3"
            badge={{ label: 'Prüfen', color: 'warning' }}
          />
        </div>
      ),
    },
  ],
};
