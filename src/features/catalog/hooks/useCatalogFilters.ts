import { useMemo } from 'react';
import { componentRegistry } from '../data/component-registry';
import { filterComponents } from '../model/catalog.helpers';

export function useCatalogFilters(search: string, category: string) {
  return useMemo(() => filterComponents(componentRegistry, search, category), [search, category]);
}
