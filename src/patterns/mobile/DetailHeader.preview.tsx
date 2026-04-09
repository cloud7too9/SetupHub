import { DetailHeader } from './DetailHeader';
import { IconButton } from '@/ui/actions/IconButton';
import { Share2, Heart } from 'lucide-react';

export const detailHeaderPreviews = {
  id: 'detail-header',
  name: 'Detailkopf',
  description: 'Kopfbereich mit Zurück-Button, Titel und Aktionen',
  sections: [
    {
      title: 'Varianten',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <DetailHeader title="Auftrag #1042" subtitle="CNC Drehteil — 120 Stück" onBack={() => {}} />
          <DetailHeader
            title="Werkzeug W-38"
            subtitle="Fräser 12mm"
            onBack={() => {}}
            actions={
              <>
                <IconButton variant="surface" size={36}><Share2 size={16} /></IconButton>
                <IconButton variant="surface" size={36}><Heart size={16} /></IconButton>
              </>
            }
          />
          <DetailHeader title="Ohne Zurück" subtitle="Kein Zurück-Button" />
        </div>
      ),
    },
  ],
};
