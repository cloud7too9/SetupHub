import { Card } from '@/ui/data-display/Card';

interface FormSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)' }}>
      <div>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-1)' }}>{title}</h3>
        {description && <p style={{ fontSize: '13px', color: 'var(--text-3)', marginTop: '2px' }}>{description}</p>}
      </div>
      <Card variant="default" padding="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
          {children}
        </div>
      </Card>
    </div>
  );
}
