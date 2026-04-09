import { useState, useEffect } from 'react';

export function useStagger(count: number, delayMs = 50) {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    setRevealed(0);
    let i = 0;
    const step = () => {
      if (i < count) {
        i++;
        setRevealed(i);
        setTimeout(step, delayMs);
      }
    };
    const id = setTimeout(step, 60);
    return () => clearTimeout(id);
  }, [count, delayMs]);

  return revealed;
}
