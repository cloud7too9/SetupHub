import { IconButton } from '@/ui/actions/IconButton';
import { ArrowLeft } from 'lucide-react';

interface DetailHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  actions?: React.ReactNode;
}

export function DetailHeader({ title, subtitle, onBack, actions }: DetailHeaderProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
      {onBack && <IconButton variant="surface" onClick={onBack}><ArrowLeft size={20} /></IconButton>}
      <div style={{ flex: 1 }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-1)' }}>{title}</h2>
        {subtitle && <span style={{ fontSize: '13px', color: 'var(--text-3)' }}>{subtitle}</span>}
      </div>
      {actions && <div style={{ display: 'flex', gap: 'var(--sp-xs)' }}>{actions}</div>}
    </div>
  );
}
