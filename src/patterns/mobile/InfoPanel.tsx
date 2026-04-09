import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';

interface InfoPanelProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
  badge?: { label: string; color: 'accent' | 'success' | 'warning' | 'error' | 'neutral' };
  variant?: 'default' | 'accent';
}

export function InfoPanel({ icon, title, value, subtitle, badge, variant = 'default' }: InfoPanelProps) {
  return (
    <Card variant={variant} padding="md">
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
        <div style={{
          width: '44px', height: '44px', borderRadius: 'var(--radius-md)', flexShrink: 0,
          background: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 500 }}>{title}</div>
          <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-1)' }}>{value}</div>
          {subtitle && <div style={{ fontSize: '12px', color: 'var(--text-3)', marginTop: '2px' }}>{subtitle}</div>}
        </div>
        {badge && <Badge color={badge.color}>{badge.label}</Badge>}
      </div>
    </Card>
  );
}
