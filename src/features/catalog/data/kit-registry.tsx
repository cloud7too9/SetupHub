import { GlassmorphismKit } from '@/kits/GlassmorphismKit';
import { NeonGlowKit } from '@/kits/NeonGlowKit';
import { GradientDarkKit } from '@/kits/GradientDarkKit';
import { MinimalDarkKit } from '@/kits/MinimalDarkKit';

export interface KitEntry {
  id: string;
  name: string;
  description: string;
  accent: string;
  render: () => React.ReactNode;
}

export const kitRegistry: KitEntry[] = [
  { id: 'glassmorphism', name: 'Glassmorphism', description: 'Backdrop-blur, semi-transparente Flächen und Glas-Effekte', accent: '#d946ef', render: () => <GlassmorphismKit /> },
  { id: 'neon-glow', name: 'Neon / Glow', description: 'Leuchtende Borders, Glow-Schatten und Neon-Farben', accent: '#fb7185', render: () => <NeonGlowKit /> },
  { id: 'gradient-dark', name: 'Gradient Dark', description: 'Warme Farbverläufe mit Orange, Amber und Purple', accent: '#f97316', render: () => <GradientDarkKit /> },
  { id: 'minimal-dark', name: 'Minimal Dark', description: 'Schlichte, saubere Linien mit subtilen Akzentfarben', accent: '#34d399', render: () => <MinimalDarkKit /> },
];
