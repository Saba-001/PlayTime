import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { LanguageProvider } from '$common/context';
import { useLanguage } from '$common/hooks/useLanguage';
import { useTheme } from '$common/theme';

import { Router } from './Router';

export default function App() {
  const language = useLanguage();
  const theme = useTheme();

  return (
    <LanguageProvider value={language}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
