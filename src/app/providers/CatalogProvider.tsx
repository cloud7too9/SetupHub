import { createContext, useContext, useState } from 'react';

interface CatalogCtx {
  search: string;
  setSearch: (s: string) => void;
  category: string;
  setCategory: (c: string) => void;
}

const Ctx = createContext<CatalogCtx>({ search: '', setSearch: () => {}, category: 'all', setCategory: () => {} });
export const useCatalog = () => useContext(Ctx);

export function CatalogProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  return <Ctx.Provider value={{ search, setSearch, category, setCategory }}>{children}</Ctx.Provider>;
}
