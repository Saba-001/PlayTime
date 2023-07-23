import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LanguageProvider } from '$common/context';
import { useLanguage } from '$common/hooks';

import { Router } from './Router';

export default function App() {
  const language = useLanguage();

  return (
    <LanguageProvider value={language}>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </LanguageProvider>
  );
}
