import type { CatalogEntry } from '../data/component-registry';

export function filterComponents(entries: CatalogEntry[], search: string, category: string): CatalogEntry[] {
  return entries.filter(e => {
    if (category !== 'all' && e.category !== category) return false;
    if (search) {
      const q = search.toLowerCase();
      return e.name.toLowerCase().includes(q) || e.tags.some(t => t.includes(q));
    }
    return true;
  });
}
