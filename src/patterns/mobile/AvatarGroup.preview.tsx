import { AvatarGroup } from './AvatarGroup';

const team = [
  { name: 'Max R', status: 'online' as const },
  { name: 'Anna S', status: 'online' as const },
  { name: 'Bernd M', status: 'busy' as const },
  { name: 'Clara W', status: 'offline' as const },
  { name: 'David K', status: 'online' as const },
  { name: 'Eva L' },
  { name: 'Felix B' },
  { name: 'Greta H' },
];

export const avatarGroupPreviews = {
  id: 'avatar-group',
  name: 'Avatar-Gruppe',
  description: 'Überlappende Avatare mit Überlauf-Zähler',
  sections: [
    {
      title: 'Varianten',
      render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)' }}>
          <div>
            <span style={{ fontSize: '13px', color: 'var(--text-3)', display: 'block', marginBottom: 'var(--sp-sm)' }}>Team (max 5)</span>
            <AvatarGroup users={team} max={5} />
          </div>
          <div>
            <span style={{ fontSize: '13px', color: 'var(--text-3)', display: 'block', marginBottom: 'var(--sp-sm)' }}>Kompakt</span>
            <AvatarGroup users={team} max={4} size="sm" />
          </div>
          <div>
            <span style={{ fontSize: '13px', color: 'var(--text-3)', display: 'block', marginBottom: 'var(--sp-sm)' }}>Alle zeigen</span>
            <AvatarGroup users={team.slice(0, 4)} max={10} />
          </div>
        </div>
      ),
    },
  ],
};
