import { Card } from '@/ui/data-display/Card';
import { Avatar } from '@/ui/data-display/Avatar';
import { Badge } from '@/ui/data-display/Badge';
import { ListItem } from '@/ui/data-display/ListItem';
import { Divider } from '@/ui/data-display/Divider';
import { Progress } from '@/ui/feedback/Progress';
import { Mail, Phone, MapPin, Award, LogOut, Shield } from 'lucide-react';

export function ProfileScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      {/* Header */}
      <Card variant="default" padding="lg">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-md)', textAlign: 'center' }}>
          <Avatar name="Max Recknagel" size="lg" status="online" />
          <div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-1)' }}>Max Recknagel</div>
            <div style={{ fontSize: '14px', color: 'var(--text-3)', marginTop: '2px' }}>CNC-Bediener · Schicht A</div>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-xs)' }}>
            <Badge color="accent">Aktiv</Badge>
            <Badge color="success">Verifiziert</Badge>
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--sp-sm)' }}>
        {[
          { label: 'Aufträge', value: '142' },
          { label: 'Dieses Monat', value: '18' },
          { label: 'Quote', value: '96%' },
        ].map(s => (
          <Card key={s.label} variant="default" padding="sm">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--accent)' }}>{s.value}</div>
              <div style={{ fontSize: '11px', color: 'var(--text-3)', marginTop: '2px' }}>{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Skill Progress */}
      <Card variant="default" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-sm)' }}>
            <Award size={18} color="var(--accent)" />
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-1)' }}>Qualifikationen</span>
          </div>
          <Progress value={92} label="CNC Drehen" color="accent" />
          <Progress value={78} label="CNC Fräsen" color="success" />
          <Progress value={45} label="CAM Programmierung" color="warning" />
        </div>
      </Card>

      <Divider label="Kontakt" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
        <ListItem title="max@recknagel-cnc.de" leading={<Mail size={18} color="var(--accent)" />} showArrow={false} />
        <ListItem title="+49 176 1234567" leading={<Phone size={18} color="var(--accent)" />} showArrow={false} />
        <ListItem title="Viernau, Thüringen" leading={<MapPin size={18} color="var(--accent)" />} showArrow={false} />
      </div>

      <Divider label="Konto" />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xs)' }}>
        <ListItem title="Sicherheit" subtitle="Passwort und 2FA" leading={<Shield size={18} color="var(--accent)" />} onClick={() => {}} />
        <ListItem title="Abmelden" leading={<LogOut size={18} color="var(--error)" />} onClick={() => {}} showArrow={false} />
      </div>
    </div>
  );
}
