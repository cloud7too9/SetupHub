import { useEffect, useState, useRef } from 'react';

interface AnimatedScreenProps {
  screenKey: string;
  children: React.ReactNode;
}

export function AnimatedScreen({ screenKey, children }: AnimatedScreenProps) {
  const [visible, setVisible] = useState(false);
  const prevKey = useRef(screenKey);

  useEffect(() => {
    if (screenKey !== prevKey.current) {
      setVisible(false);
      prevKey.current = screenKey;
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    } else {
      setVisible(true);
    }
  }, [screenKey]);

  return (
    <div
      style={{
        animation: visible ? 'slideUp 0.3s cubic-bezier(0.32, 0.72, 0, 1) both' : 'none',
        opacity: visible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
}
