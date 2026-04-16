import { SavanceKit } from '@/kits/SavanceKit';
import { GrowthKit } from '@/kits/GrowthKit';
import { FinanceKit } from '@/kits/FinanceKit';
import { BlantedKit } from '@/kits/BlantedKit';
import { PortfolioKit } from '@/kits/PortfolioKit';
import { GlassmorphismNavKit } from '@/kits/GlassmorphismNavKit';
import { NeonLoginKit } from '@/kits/NeonLoginKit';
import { GamingPlatformKit } from '@/kits/GamingPlatformKit';
import { FeedAnalyticsKit } from '@/kits/FeedAnalyticsKit';
import { TimelineChartKit } from '@/kits/TimelineChartKit';

export interface KitEntry {
  id: string;
  name: string;
  description: string;
  accent: string;
  render: () => React.ReactNode;
}

export const kitRegistry: KitEntry[] = [
  { id: 'savance', name: 'Savance', description: 'Finance Savings Dashboard mit warmen Gradienten', accent: '#f97316', render: () => <SavanceKit /> },
  { id: 'growth', name: 'Growth', description: 'Project Management Dashboard mit Emerald-Theme', accent: '#34d399', render: () => <GrowthKit /> },
  { id: 'finance', name: 'Finance', description: 'Banking Dashboard mit Orange/Amber Akzenten', accent: '#f59e0b', render: () => <FinanceKit /> },
  { id: 'blanted', name: 'Blanted', description: 'Financial Management mit Purple/Blue Theme', accent: '#a78bfa', render: () => <BlantedKit /> },
  { id: 'portfolio', name: 'Portfolio', description: 'Stock Trading Dashboard mit Neon-Akzenten', accent: '#ec4899', render: () => <PortfolioKit /> },
  { id: 'glassmorphism-nav', name: 'Glassmorphism Nav', description: 'Sidebar Navigation mit Glassmorphism-Effekt', accent: '#d946ef', render: () => <GlassmorphismNavKit /> },
  { id: 'neon-login', name: 'Neon Login', description: 'Login-Formular mit Neon-Glow Effekten', accent: '#fb7185', render: () => <NeonLoginKit /> },
  { id: 'gaming-platform', name: 'Gaming Platform', description: 'Gaming Dashboard mit Bet-Rows und Chat', accent: '#f97316', render: () => <GamingPlatformKit /> },
  { id: 'feed-analytics', name: 'Feed Analytics', description: 'Feed Dashboard mit Wave-Charts', accent: '#6366f1', render: () => <FeedAnalyticsKit /> },
  { id: 'timeline-chart', name: 'Timeline Chart', description: 'Perioden-Analytics mit Multi-Line Charts', accent: '#f97316', render: () => <TimelineChartKit /> },
];
