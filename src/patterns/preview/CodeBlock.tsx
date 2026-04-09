import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };

  return (
    <div style={{
      position: 'relative',
      background: 'var(--bg)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 12px',
        borderBottom: '1px solid var(--border-subtle)',
      }}>
        <span style={{ fontSize: '11px', color: 'var(--text-3)', fontFamily: 'var(--font-mono)', fontWeight: 500, textTransform: 'uppercase' }}>{language}</span>
        <button
          onClick={handleCopy}
          style={{
            display: 'flex', alignItems: 'center', gap: '4px',
            border: 'none', background: 'none', cursor: 'pointer',
            fontSize: '11px', fontFamily: 'var(--font-mono)', color: copied ? 'var(--success)' : 'var(--text-3)',
            transition: 'color 0.15s ease',
          }}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'Kopiert' : 'Kopieren'}
        </button>
      </div>
      <pre style={{
        padding: '14px',
        margin: 0,
        fontSize: '12px',
        lineHeight: 1.6,
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-2)',
        overflowX: 'auto',
        whiteSpace: 'pre',
      }}>
        {code}
      </pre>
    </div>
  );
}
