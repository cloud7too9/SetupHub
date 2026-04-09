import { Component } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props { children: React.ReactNode; }
interface State { hasError: boolean; error?: Error; }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100dvh', background: 'var(--bg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 'var(--sp-2xl)',
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 'var(--sp-lg)', textAlign: 'center', maxWidth: '360px',
          }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: 'var(--radius-xl)',
              background: 'color-mix(in srgb, var(--error) 12%, transparent)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <AlertCircle size={28} color="var(--error)" />
            </div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-1)' }}>
              Etwas ist schiefgelaufen
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--text-3)', lineHeight: 1.6 }}>
              Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.
            </p>
            {this.state.error && (
              <pre style={{
                fontSize: '12px', fontFamily: 'var(--font-mono)',
                color: 'var(--error)', background: 'var(--surface)',
                padding: 'var(--sp-md)', borderRadius: 'var(--radius-md)',
                width: '100%', textAlign: 'left', overflow: 'auto',
                border: '1px solid var(--border-subtle)',
                maxHeight: '120px',
              }}>
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReset}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-sm)',
                padding: 'var(--sp-md) var(--sp-xl)',
                fontSize: '15px', fontWeight: 600, fontFamily: 'var(--font-sans)',
                background: 'var(--accent)', color: 'var(--bg)',
                border: 'none', borderRadius: 'var(--radius-md)',
                cursor: 'pointer', minHeight: '48px',
              }}
            >
              <RotateCcw size={16} />
              Erneut versuchen
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
