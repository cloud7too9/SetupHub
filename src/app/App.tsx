import { ThemeProvider } from './providers/ThemeProvider';
import { CatalogProvider } from './providers/CatalogProvider';
import { NavigationProvider, useNav } from './providers/NavigationProvider';
import { ErrorBoundary } from './providers/ErrorBoundary';
import { ToastProvider } from '@/ui/feedback/Toast';
import { AppLayout } from './layout/AppLayout';
import { AppRouter } from './routes/AppRouter';

function AppInner() {
  const { state, navigate } = useNav();
  return (
    <AppLayout activeRoute={state.screen} onNavigate={navigate}>
      <AppRouter />
    </AppLayout>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <CatalogProvider>
          <NavigationProvider>
            <ToastProvider>
              <AppInner />
            </ToastProvider>
          </NavigationProvider>
        </CatalogProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
