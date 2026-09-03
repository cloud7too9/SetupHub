import { CatalogScreen } from '@/screens/CatalogScreen';
import { EntryDetailScreen } from '@/screens/EntryDetailScreen';
import { SettingsScreen } from '@/screens/SettingsScreen';
import { AnimatedScreen } from '../layout/AnimatedScreen';
import { useNav } from '../providers/NavigationProvider';

export function AppRouter() {
  const { state, openDetail, goBack } = useNav();
  const key = state.detail ? `${state.screen}:${state.detail}` : state.screen;

  let content: React.ReactNode;
  if (state.screen === 'catalog' && state.detail) {
    content = <EntryDetailScreen entryId={state.detail} onBack={goBack} />;
  } else if (state.screen === 'settings') {
    content = <SettingsScreen />;
  } else {
    content = <CatalogScreen onSelect={openDetail} />;
  }

  return <AnimatedScreen screenKey={key}>{content}</AnimatedScreen>;
}
