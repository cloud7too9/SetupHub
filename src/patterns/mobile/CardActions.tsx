import { Card } from '@/ui/data-display/Card';
import { Button } from '@/ui/actions/Button';
import { IconButton } from '@/ui/actions/IconButton';
import { Badge } from '@/ui/data-display/Badge';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';

interface CardActionsProps {
  title: string;
  subtitle?: string;
  badge?: { label: string; color: 'accent' | 'success' | 'warning' | 'error' | 'neutral' };
  onEdit?: () => void;
  onDelete?: () => void;
}

export function CardActions({ title, subtitle, badge, onEdit, onDelete }: CardActionsProps) {
  return (
    <Card variant="default" padding="md">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
              <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-1)' }}>{title}</span>
              {badge && <Badge color={badge.color}>{badge.label}</Badge>}
            </div>
            {subtitle && <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{subtitle}</span>}
          </div>
          <IconButton variant="ghost" size={36}><MoreVertical size={18} /></IconButton>
        </div>
        <div style={{ display: 'flex', gap: 'var(--sp-sm)' }}>
          <Button variant="secondary" size="sm" icon={<Edit size={14} />} onClick={onEdit} style={{ flex: 1 }}>Bearbeiten</Button>
          <Button variant="danger" size="sm" icon={<Trash2 size={14} />} onClick={onDelete} style={{ flex: 1 }}>Löschen</Button>
        </div>
      </div>
    </Card>
  );
}
