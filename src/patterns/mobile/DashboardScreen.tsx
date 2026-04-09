import { Card } from '@/ui/data-display/Card';
import { Badge } from '@/ui/data-display/Badge';
import { Divider } from '@/ui/data-display/Divider';
import { Package, AlertTriangle, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
}

function StatCard({ icon, label, value, trend, trendUp }: StatCardProps) {
  return (
    <Card variant="default" padding="md">
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {icon}
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-3)', fontWeight: 500 }}>{label}</span>
          <span style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-1)', lineHeight: 1 }}>{value}</span>
        </div>
        {trend && (
          <Badge color={trendUp ? 'success' : 'error'}>
            {trendUp ? '↑' : '↓'} {trend}
          </Badge>
        )}
      </div>
    </Card>
  );
}

export function DashboardScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-sm)' }}>
        <StatCard icon={<Package size={18} color="var(--accent)" />} label="Aufträge" value="47" trend="12%" trendUp />
        <StatCard icon={<CheckCircle size={18} color="var(--success)" />} label="Erledigt" value="38" trend="8%" trendUp />
        <StatCard icon={<Clock size={18} color="var(--warning)" />} label="Wartend" value="6" />
        <StatCard icon={<AlertTriangle size={18} color="var(--error)" />} label="Überfällig" value="3" trend="2" trendUp={false} />
      </div>

      <Divider label="Letzte Aktivität" />

      {/* Activity Feed */}
      {[
        { title: 'Auftrag #1042 abgeschlossen', time: 'Vor 12 Min', color: 'success' as const },
        { title: 'Werkzeug W-38 geprüft', time: 'Vor 1 Std', color: 'accent' as const },
        { title: 'Auftrag #1046 — Fehler gemeldet', time: 'Vor 2 Std', color: 'error' as const },
        { title: 'Lagerbestand Karton K3 aufgefüllt', time: 'Vor 3 Std', color: 'neutral' as const },
      ].map((item, i) => (
        <Card key={i} variant="default" padding="sm">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)', padding: '4px 0' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: item.color === 'success' ? 'var(--success)' : item.color === 'error' ? 'var(--error)' : item.color === 'accent' ? 'var(--accent)' : 'var(--text-3)',
            }} />
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-1)' }}>{item.title}</span>
              <span style={{ fontSize: '12px', color: 'var(--text-3)', display: 'block' }}>{item.time}</span>
            </div>
            <ArrowUpRight size={14} color="var(--text-3)" />
          </div>
        </Card>
      ))}
    </div>
  );
}
