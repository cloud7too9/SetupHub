import { KitWrapper } from './shared/KitWrapper';
import { GradientProgressBar } from './shared/GradientProgressBar';
import { ChatMessage } from './shared/ChatMessage';

const theme = {
  bg: '#0c0a0f',
  surface: '#161218',
  surfaceAlt: '#201a22',
  accent: '#f97316',
  accentMuted: 'rgba(249,115,22,0.12)',
  text1: '#f5f0ea',
  text2: '#a89888',
  text3: '#6b5c4f',
  border: '#2a2025',
  borderSubtle: '#1f181d',
};

const betRows = [
  { price: '$3', winPrice: '$4.5', mult: '1.5x', pct: 75, gradient: 'linear-gradient(90deg, #f97316, #d946ef, #6366f1)', status: 'win' },
  { price: '$19.44', winPrice: '$23.32', mult: '1.2x', pct: 60, gradient: 'linear-gradient(90deg, #ec4899, #a855f7)', status: 'win' },
  { price: '$15.04', winPrice: '$18.65', mult: '1.23x', pct: 55, gradient: 'linear-gradient(90deg, #34d399, #6366f1)', status: 'win' },
  { price: '$11.09', winPrice: '$14.28', mult: '1.2x', pct: 50, gradient: 'linear-gradient(90deg, #f59e0b, #34d399)', status: 'win' },
  { price: '$15.04', winPrice: '', mult: '1.75x', pct: 85, gradient: 'linear-gradient(90deg, #ef4444, #ec4899)', status: 'LOST' },
  { price: '$19.44', winPrice: '', mult: '1.75x', pct: 70, gradient: 'linear-gradient(90deg, #6366f1, #06b6d4)', status: '' },
];

const chatMessages = [
  { username: 'RYLAN0', message: 'With so hard fake price', color: '#a855f7', time: '2 min' },
  { username: 'S4MPLING', message: 'hi everybody', color: '#34d399', time: '2 min' },
  { username: 'CraftedSonic', message: 'does someone need a promo?', color: '#f59e0b', time: '1 min' },
  { username: 'WildAxell', message: 'withdrawal works?', color: '#6b7280', time: '1 min' },
  { username: 'vino_costa', message: 'yes it works, just wait dude', color: '#34d399', time: 'now', isOwn: true },
  { username: 'Rylanö', message: 'ok thx m8', color: '#a855f7', time: 'now' },
];

export function GamingPlatformKit() {
  return (
    <KitWrapper theme={theme}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '18px', fontWeight: 700, color: theme.accent }}>CSGOstar</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['♪', '📷', '🐦'].map((icon, i) => (
              <span key={i} style={{ fontSize: '12px', color: theme.text3, cursor: 'pointer' }}>{icon}</span>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {['Drop', '🔥 Crash'].map((t, i) => (
            <span key={t} style={{
              padding: '6px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: i === 1 ? 600 : 400,
              background: i === 1 ? theme.accent : 'transparent',
              color: i === 1 ? '#fff' : theme.text3,
            }}>{t}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: theme.accent }} />
          <div>
            <div style={{ fontSize: '12px', fontWeight: 600 }}>vino_costa</div>
            <div style={{ fontSize: '10px', color: theme.accent }}>Balance: $49,700</div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        {[
          { icon: '🔊', label: '#1095319', sub: 'round statistics', color: '#34d399' },
          { icon: '👥', label: '183', sub: 'players', color: '#a855f7' },
          { icon: '💰', label: '$384.93', sub: 'bank', color: '#f59e0b' },
          { icon: '🎯', label: '144', sub: 'skins', color: '#ec4899' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, display: 'flex', alignItems: 'center', gap: '8px',
            padding: '8px 12px', borderRadius: '10px',
            background: `${s.color}10`, border: `1px solid ${s.color}20`,
          }}>
            <span style={{ fontSize: '14px' }}>{s.icon}</span>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: s.color }}>{s.label}</div>
              <div style={{ fontSize: '9px', color: theme.text3 }}>{s.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '16px' }}>
        {/* Bet Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {betRows.map((row, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 14px', borderRadius: '10px',
              background: theme.surface, border: `1px solid ${theme.borderSubtle}`,
            }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: theme.text1, minWidth: '55px' }}>{row.price}</span>
              <div style={{ display: 'flex', gap: '4px' }}>
                {['🔫', '🗡', '🎯', '💣'].map((icon, j) => (
                  <span key={j} style={{ fontSize: '10px', opacity: 0.5 }}>{icon}</span>
                ))}
              </div>
              <div style={{ flex: 1 }}>
                <GradientProgressBar value={row.pct} gradient={row.gradient} height={6} />
              </div>
              {row.winPrice && <span style={{ fontSize: '12px', color: theme.text2, minWidth: '45px' }}>{row.winPrice}</span>}
              <span style={{
                padding: '3px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 600,
                background: row.status === 'LOST' ? '#ef444420' : '#34d39920',
                color: row.status === 'LOST' ? '#ef4444' : '#34d399',
              }}>{row.mult}</span>
              <span style={{ fontSize: '10px', cursor: 'pointer' }}>→</span>
            </div>
          ))}
        </div>

        {/* Chat */}
        <div style={{
          background: theme.surface, borderRadius: '14px', padding: '14px',
          border: `1px solid ${theme.borderSubtle}`,
          display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>128</span>
            <div style={{ display: 'flex', gap: '6px' }}>
              {['💬', '📋', '≡'].map((icon, i) => (
                <span key={i} style={{ fontSize: '12px', color: theme.text3, cursor: 'pointer' }}>{icon}</span>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', overflow: 'auto' }}>
            {chatMessages.map((msg, i) => (
              <ChatMessage key={i} username={msg.username} message={msg.message} color={msg.color} isOwn={msg.isOwn} time={msg.time} />
            ))}
          </div>
          <div style={{
            marginTop: '12px', padding: '8px 12px', borderRadius: '10px',
            background: theme.surfaceAlt, border: `1px solid ${theme.borderSubtle}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <span style={{ fontSize: '12px', color: theme.text3 }}>Write your message...</span>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: theme.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>↑</div>
          </div>
        </div>
      </div>
    </KitWrapper>
  );
}
