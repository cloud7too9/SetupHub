import { useState, useEffect } from 'react';
import { Topbar } from './Topbar';
import { BottomNav } from './BottomNav';
import { Sidebar } from './Sidebar';
import { DesktopSidebar } from './DesktopSidebar';
import { ScreenContainer } from './ScreenContainer';

interface AppLayoutProps {
  activeRoute: string;
  onNavigate: (id: string) => void;
  children: React.ReactNode;
}

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= breakpoint);
  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [breakpoint]);
  return isDesktop;
}

export function AppLayout({ activeRoute, onNavigate, children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useIsDesktop();

  const labels: Record<string, string> = {
    home: 'SetupHub',
    components: 'Components',
    patterns: 'Patterns',
    screens: 'Screens',
    settings: 'Settings',
  };

  if (isDesktop) {
    return (
      <div style={{ display: 'flex', minHeight: '100dvh', background: 'var(--bg)' }}>
        <DesktopSidebar active={activeRoute} onNavigate={onNavigate} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <header style={{
            height: '56px', display: 'flex', alignItems: 'center',
            padding: '0 var(--sp-2xl)',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'var(--surface)',
          }}>
            <span style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-1)' }}>
              {labels[activeRoute] ?? 'SetupHub'}
            </span>
          </header>
          <main id="main-content" style={{
            flex: 1, padding: 'var(--sp-2xl)',
            maxWidth: '640px', width: '100%',
            margin: '0 auto',
            overflowY: 'auto',
          }}>
            {children}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--bg)' }}>
      <Topbar title={labels[activeRoute] ?? 'SetupHub'} onMenuOpen={() => setSidebarOpen(true)} />
      <ScreenContainer>{children}</ScreenContainer>
      <BottomNav active={activeRoute} onChange={onNavigate} />
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        active={activeRoute}
        onNavigate={onNavigate}
      />
    </div>
  );
}
