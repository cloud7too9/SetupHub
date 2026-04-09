export function ScreenContainer({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" style={{
      padding: 'var(--pad)',
      paddingBottom: 'calc(64px + var(--pad) + env(safe-area-inset-bottom))',
      maxWidth: '480px',
      margin: '0 auto',
      minHeight: 'calc(100dvh - 56px)',
    }}>
      {children}
    </main>
  );
}
