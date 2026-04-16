import type { LucideIcon } from 'lucide-react';
import { Home, LayoutGrid, Layers, Monitor, Palette, Settings } from 'lucide-react';

export interface RouteItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const routes: RouteItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'components', label: 'Components', icon: LayoutGrid },
  { id: 'patterns', label: 'Patterns', icon: Layers },
  { id: 'screens', label: 'Screens', icon: Monitor },
  { id: 'kits', label: 'Kits', icon: Palette },
  { id: 'settings', label: 'Settings', icon: Settings },
];
