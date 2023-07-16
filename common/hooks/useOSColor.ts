import { useMemo } from "react";
import { useColorScheme } from "react-native";

export const useOSColor = () => {
  const osColor = useColorScheme();

  const isDark = useMemo(() => {
    if (osColor === "light") {
      return false;
    }
    return true;
  }, []);

  return useMemo(() => ({ isDark }), []);
};
