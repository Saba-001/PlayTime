import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Router } from "./Router";
import { useLanguage, useTranslation } from "./common/hooks";
import { LanguageProvider } from "./common/context";

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
