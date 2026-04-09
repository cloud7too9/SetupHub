interface ActionPanelProps {
  children: React.ReactNode;
}

export function ActionPanel({ children }: ActionPanelProps) {
  return (
    <div style={{
      position: 'sticky',
      bottom: '0',
      padding: 'var(--sp-lg) 0',
      background: 'linear-gradient(transparent, var(--bg) 20%)',
      display: 'flex',
      gap: 'var(--sp-sm)',
    }}>
      {children}
    </div>
  );
}
