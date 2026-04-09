import { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface NavState {
  screen: string;
  detail: string | null;
}

interface NavCtx {
  state: NavState;
  navigate: (screen: string) => void;
  openDetail: (id: string) => void;
  goBack: () => void;
}

const Ctx = createContext<NavCtx>({
  state: { screen: 'home', detail: null },
  navigate: () => {},
  openDetail: () => {},
  goBack: () => {},
});

export const useNav = () => useContext(Ctx);

function parseHash(): NavState {
  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (!hash) return { screen: 'home', detail: null };
  const parts = hash.split('/');
  return {
    screen: parts[0] ?? 'home',
    detail: parts[1] ?? null,
  };
}

function writeHash(state: NavState) {
  const path = state.detail
    ? `#/${state.screen}/${state.detail}`
    : `#/${state.screen}`;
  if (window.location.hash !== path) {
    window.history.pushState(null, '', path);
  }
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<NavState>(parseHash);

  useEffect(() => {
    const handler = () => setState(parseHash());
    window.addEventListener('hashchange', handler);
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('hashchange', handler);
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = useCallback((screen: string) => {
    const next = { screen, detail: null };
    setState(next);
    writeHash(next);
  }, []);

  const openDetail = useCallback((id: string) => {
    setState(prev => {
      const next = { ...prev, detail: id };
      writeHash(next);
      return next;
    });
  }, []);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  return <Ctx.Provider value={{ state, navigate, openDetail, goBack }}>{children}</Ctx.Provider>;
}
