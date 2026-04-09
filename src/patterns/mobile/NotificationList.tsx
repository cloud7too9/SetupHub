import { Card } from '@/ui/data-display/Card';
import { Avatar } from '@/ui/data-display/Avatar';
import { Badge } from '@/ui/data-display/Badge';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  avatar?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

interface NotificationListProps {
  items: Notification[];
  onTap?: (id: string) => void;
}

const typeBadge: Record<string, { label: string; color: 'accent' | 'success' | 'warning' | 'error' }> = {
  info: { label: 'Info', color: 'accent' },
  success: { label: 'Erledigt', color: 'success' },
  warning: { label: 'Warnung', color: 'warning' },
  error: { label: 'Fehler', color: 'error' },
};

export function NotificationList({ items, onTap }: NotificationListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
      {items.map(item => {
        const badge = item.type ? typeBadge[item.type] : undefined;
        return (
          <Card key={item.id} variant="default" padding="md" onClick={onTap ? () => onTap(item.id) : undefined}>
            <div style={{ display: 'flex', gap: 'var(--sp-md)' }}>
              <Avatar name={item.avatar ?? item.title} size="sm" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', marginBottom: '2px' }}>
                  <span style={{
                    fontSize: '14px', fontWeight: item.read ? 400 : 600,
                    color: 'var(--text-1)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                  }}>{item.title}</span>
                  {!item.read && <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-3)', lineHeight: 1.4, margin: 0 }}>{item.message}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)', marginTop: 'var(--sp-xs)' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-3)' }}>{item.time}</span>
                  {badge && <Badge color={badge.color}>{badge.label}</Badge>}
                </div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
