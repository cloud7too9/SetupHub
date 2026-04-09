import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';

interface StatItem {
  label: string;
  value: string;
  trend?: { direction: 'up' | 'down'; label: string };
  icon?: React.ReactNode;
}

interface StatCardsProps {
  items: StatItem[];
  columns?: 2 | 3;
}

export function StatCards({ items, columns = 2 }: StatCardsProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 'var(--sp-sm)' }}>
      {items.map((item, i) => (
        <Card key={i} variant="default" padding="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
            {item.icon && <div style={{ color: 'var(--accent)' }}>{item.icon}</div>}
            <div>
              <div style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1.2 }}>{item.value}</div>
            </div>
            {item.trend && (
              <Badge color={item.trend.direction === 'up' ? 'success' : 'error'}>
                {item.trend.direction === 'up' ? '↑' : '↓'} {item.trend.label}
              </Badge>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}
