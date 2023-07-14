import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { useLanguage, useTranslation } from "./common/hooks";
import { LanguageProvider } from "./common/context";
import { Some } from "./common/components";

export default function App() {
  const language = useLanguage();

  return (
    <LanguageProvider value={language}>
      <View style={styles.container}>
        <Some />
      </View>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
