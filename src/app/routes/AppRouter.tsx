import { HomeScreen } from '@/screens/HomeScreen';
import { ComponentsScreen } from '@/screens/ComponentsScreen';
import { ComponentDetailScreen } from '@/screens/ComponentDetailScreen';
import { PatternsScreen } from '@/screens/PatternsScreen';
import { PatternDetailScreen } from '@/screens/PatternDetailScreen';
import { ScreensScreen } from '@/screens/ScreensScreen';
import { ScreenDetailScreen } from '@/screens/ScreenDetailScreen';
import { KitsScreen } from '@/screens/KitsScreen';
import { KitDetailScreen } from '@/screens/KitDetailScreen';
import { SettingsScreen } from '@/screens/SettingsScreen';
import { AnimatedScreen } from '../layout/AnimatedScreen';
import { useNav } from '../providers/NavigationProvider';

export function AppRouter() {
  const { state, openDetail, goBack } = useNav();

  const key = state.detail
    ? `${state.screen}:${state.detail}`
    : state.screen;

  let content: React.ReactNode;

  if (state.detail) {
    if (state.screen === 'components') {
      content = <ComponentDetailScreen componentId={state.detail} onBack={goBack} />;
    } else if (state.screen === 'patterns') {
      content = <PatternDetailScreen patternId={state.detail} onBack={goBack} />;
    } else if (state.screen === 'screens') {
      content = <ScreenDetailScreen screenId={state.detail} onBack={goBack} />;
    } else if (state.screen === 'kits') {
      content = <KitDetailScreen kitId={state.detail} onBack={goBack} />;
    }
  }

  if (!content) {
    switch (state.screen) {
      case 'components': content = <ComponentsScreen onSelect={openDetail} />; break;
      case 'patterns': content = <PatternsScreen onSelect={openDetail} />; break;
      case 'screens': content = <ScreensScreen onSelect={openDetail} />; break;
      case 'kits': content = <KitsScreen onSelect={openDetail} />; break;
      case 'settings': content = <SettingsScreen />; break;
      default: content = <HomeScreen />; break;
    }
  }

  return <AnimatedScreen screenKey={key}>{content}</AnimatedScreen>;
}
