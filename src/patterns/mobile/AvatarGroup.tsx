import { Avatar } from '@/ui/data-display/Avatar';

interface AvatarGroupProps {
  users: { name: string; status?: 'online' | 'offline' | 'busy' }[];
  max?: number;
  size?: 'sm' | 'md';
}

export function AvatarGroup({ users, max = 5, size = 'md' }: AvatarGroupProps) {
  const visible = users.slice(0, max);
  const remaining = users.length - max;
  const overlap = size === 'sm' ? -8 : -10;

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {visible.map((u, i) => (
        <div key={i} style={{ marginLeft: i === 0 ? 0 : overlap, position: 'relative', zIndex: visible.length - i }}>
          <div style={{ border: '2px solid var(--bg)', borderRadius: '50%' }}>
            <Avatar name={u.name} size={size} status={u.status} />
          </div>
        </div>
      ))}
      {remaining > 0 && (
        <div style={{
          marginLeft: overlap,
          width: size === 'sm' ? '32px' : '40px',
          height: size === 'sm' ? '32px' : '40px',
          borderRadius: '50%',
          background: 'var(--surface-alt)',
          border: '2px solid var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: size === 'sm' ? '11px' : '13px',
          fontWeight: 700, color: 'var(--text-2)',
        }}>
          +{remaining}
        </div>
      )}
    </div>
  );
}
