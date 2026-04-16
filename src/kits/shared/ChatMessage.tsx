import type { CSSProperties } from 'react';

interface ChatMessageProps {
  username: string;
  message: string;
  color?: string;
  isOwn?: boolean;
  time?: string;
  style?: CSSProperties;
}

export function ChatMessage({ username, message, color = 'var(--text-2)', isOwn, time, style }: ChatMessageProps) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '2px',
      padding: isOwn ? '8px 12px' : '4px 0',
      background: isOwn ? 'var(--accent-muted)' : 'transparent',
      borderRadius: isOwn ? 'var(--radius-md)' : undefined,
      ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span style={{ fontSize: '11px', fontWeight: 600, color }}>{username}</span>
        {time && <span style={{ fontSize: '9px', color: 'var(--text-3)' }}>{time}</span>}
      </div>
      <span style={{ fontSize: '12px', color: 'var(--text-2)', lineHeight: 1.4 }}>{message}</span>
    </div>
  );
}
