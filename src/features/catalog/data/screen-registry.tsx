import { DashboardScreen } from '@/patterns/mobile/DashboardScreen';
import { DetailViewScreen } from '@/patterns/mobile/DetailViewScreen';
import { FormPageScreen } from '@/patterns/mobile/FormPageScreen';
import { ListViewScreen } from '@/patterns/mobile/ListViewScreen';
import { ProfileScreen } from '@/patterns/mobile/ProfileScreen';
import { OnboardingScreen } from '@/patterns/mobile/OnboardingScreen';
import { SettingsDetailScreen } from '@/patterns/mobile/SettingsDetailScreen';

export interface ScreenEntry {
  id: string;
  name: string;
  description: string;
  render: () => React.ReactNode;
}

export const screenRegistry: ScreenEntry[] = [
  { id: 'dashboard', name: 'Dashboard', description: 'Statistiken, Trends und Aktivitätsverlauf', render: () => <DashboardScreen /> },
  { id: 'detail-view', name: 'Detailansicht', description: 'Auftrag mit Status, Daten und Anhängen', render: () => <DetailViewScreen /> },
  { id: 'form-page', name: 'Formular', description: 'Neuen Auftrag anlegen mit Sektionen', render: () => <FormPageScreen /> },
  { id: 'list-view', name: 'Listenansicht', description: 'Filterbarer Auftragsüberblick', render: () => <ListViewScreen /> },
  { id: 'profile', name: 'Profil', description: 'Benutzerprofil mit Statistiken und Qualifikationen', render: () => <ProfileScreen /> },
  { id: 'onboarding', name: 'Onboarding', description: 'Mehrstufiger Willkommens-Flow mit Fortschritt', render: () => <OnboardingScreen /> },
  { id: 'settings-detail', name: 'Einstellungen Detail', description: 'Benachrichtigungen mit Toggles und Dropdown', render: () => <SettingsDetailScreen /> },
];
