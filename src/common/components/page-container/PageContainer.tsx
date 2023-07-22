import { PropsWithChildren } from "react";

import { ContentWrapper, CustomSafeView } from "./styles";
import { useOSColor } from "@common/hooks";

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDark } = useOSColor();

  return (
    <CustomSafeView isDark={isDark}>
      <ContentWrapper>{children}</ContentWrapper>
    </CustomSafeView>
  );
};
