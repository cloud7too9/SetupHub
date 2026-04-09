import { useState } from 'react';
import { SearchField } from '@/ui/inputs/SearchField';
import { CategoryFilter } from '@/features/catalog/ui/CategoryFilter';
import { CatalogGrid } from '@/features/catalog/ui/CatalogGrid';
import { useCatalogFilters } from '@/features/catalog/hooks/useCatalogFilters';

interface Props {
  onSelect: (id: string) => void;
}

export function ComponentsScreen({ onSelect }: Props) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const filtered = useCatalogFilters(search, category);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)' }}>
      <SearchField value={search} onChange={setSearch} placeholder="Komponente suchen…" />
      <CategoryFilter active={category} onChange={setCategory} />
      <CatalogGrid items={filtered} onSelect={onSelect} />
    </div>
  );
}
