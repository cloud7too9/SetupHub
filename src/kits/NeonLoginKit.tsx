import { KitWrapper } from './shared/KitWrapper';
import { GlowInput } from './shared/GlowInput';

const theme = {
  bg: '#08080e',
  surface: '#0e0e18',
  surfaceAlt: '#14142a',
  accent: '#fb7185',
  accentMuted: 'rgba(251,113,133,0.12)',
  text1: '#f0eef5',
  text2: '#9895a8',
  text3: '#5a5670',
  border: '#1a1a30',
  borderSubtle: '#12122a',
};

const strengthDots = ['#ec4899', '#ec4899', '#d946ef', '#a855f7', '#6366f1', '#6366f1', '#3b82f6', '#3b82f6'];

export function NeonLoginKit() {
  return (
    <KitWrapper theme={theme} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '380px',
        background: '#0a0a14',
        borderRadius: '20px',
        padding: '40px 32px',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <GlowInput
            label="Email"
            glowColor="#fb7185"
            value="Email oee"
            icon={<span style={{ fontSize: '16px' }}>👤</span>}
          />

          <GlowInput
            label="Username"
            glowColor="#d946ef"
            value="Username"
          />

          <GlowInput
            label="Password"
            glowColor="#6366f1"
            value="Password"
            type="password"
            icon={<span style={{ fontSize: '16px' }}>👤</span>}
          />

          {/* Password strength dots */}
          <div style={{ display: 'flex', gap: '6px', paddingLeft: '4px' }}>
            {strengthDots.map((color, i) => (
              <div key={i} style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: color,
                boxShadow: `0 0 6px ${color}60`,
              }} />
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '16px', color: '#f97316' }}>👤</span>
              <span style={{ fontSize: '13px', color: theme.text2 }}>Cealnter</span>
            </div>
            <button style={{
              padding: '10px 24px', borderRadius: '20px', fontSize: '13px', fontWeight: 600,
              background: 'transparent', color: theme.text1,
              border: '1px solid rgba(251,113,133,0.4)',
              boxShadow: '0 0 12px rgba(251,113,133,0.15), inset 0 0 12px rgba(251,113,133,0.05)',
              cursor: 'pointer',
            }}>Sefarct</button>
          </div>
        </div>
      </div>
    </KitWrapper>
  );
}
