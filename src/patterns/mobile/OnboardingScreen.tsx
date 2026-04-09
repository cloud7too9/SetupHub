import { useState } from 'react';
import { Button } from '@/ui/actions/Button';
import { Card } from '@/ui/data-display/Card';
import { Progress } from '@/ui/feedback/Progress';
import { Sparkles, LayoutGrid, Palette, Rocket, ChevronRight, ChevronLeft } from 'lucide-react';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  { icon: <Sparkles size={32} color="var(--accent)" />, title: 'Willkommen bei SetupHub', description: 'Dein mobiler UI-Baukasten für strukturierte Setups. Entdecke Komponenten, Patterns und fertige Screens.' },
  { icon: <LayoutGrid size={32} color="var(--accent)" />, title: 'Komponenten entdecken', description: '19 wiederverwendbare Bausteine — von Buttons über Cards bis hin zu Modals und Toasts.' },
  { icon: <Palette size={32} color="var(--accent)" />, title: 'Alles anpassbar', description: 'Wechsle Farben, Rundungen und Abstände live in den Einstellungen. Dark und Light Mode inklusive.' },
  { icon: <Rocket size={32} color="var(--accent)" />, title: 'Bereit zum Starten', description: 'Nutze die Patterns als Vorlage für deine eigenen Apps. Alles ist modular und kopierbar.' },
];

export function OnboardingScreen() {
  const [current, setCurrent] = useState(0);
  const step = steps[current]!;
  const isLast = current === steps.length - 1;
  const isFirst = current === 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)', minHeight: '70vh', justifyContent: 'center' }}>
      <Progress value={((current + 1) / steps.length) * 100} size="sm" />

      <Card variant="default" padding="lg">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sp-lg)', textAlign: 'center', padding: 'var(--sp-xl) 0' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: 'var(--radius-xl)',
            background: 'var(--accent-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {step.icon}
          </div>
          <div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-1)', marginBottom: 'var(--sp-sm)' }}>{step.title}</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '300px', margin: '0 auto' }}>{step.description}</p>
          </div>
        </div>
      </Card>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--sp-sm)' }}>
        {steps.map((_, i) => (
          <div key={i} style={{
            width: i === current ? '24px' : '8px', height: '8px',
            borderRadius: '4px', transition: 'all 0.3s ease',
            background: i === current ? 'var(--accent)' : 'var(--border)',
          }} />
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', gap: 'var(--sp-sm)' }}>
        {!isFirst && (
          <Button variant="ghost" icon={<ChevronLeft size={16} />} onClick={() => setCurrent(c => c - 1)} style={{ flex: 1 }}>
            Zurück
          </Button>
        )}
        <Button
          variant="primary"
          iconRight={!isLast ? <ChevronRight size={16} /> : undefined}
          onClick={() => !isLast && setCurrent(c => c + 1)}
          style={{ flex: isFirst ? undefined : 2 }}
          fullWidth={isFirst}
        >
          {isLast ? 'Los geht\'s' : 'Weiter'}
        </Button>
      </div>
    </div>
  );
}
