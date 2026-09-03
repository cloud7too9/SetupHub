import type { LucideIcon } from 'lucide-react';
import { LayoutGrid, Settings } from 'lucide-react';

export interface RouteItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const routes: RouteItem[] = [
  { id: 'catalog', label: 'Katalog', icon: LayoutGrid },
  { id: 'settings', label: 'Einstellungen', icon: Settings },
];

export const defaultRoute = 'catalog';
