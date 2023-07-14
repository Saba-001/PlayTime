import { Text } from "react-native";
import { useTranslation } from "../hooks";

export const Some = () => {
  const { t } = useTranslation();

  return <Text>{t("hello_world")}</Text>;
};
