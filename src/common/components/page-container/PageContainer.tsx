import { PropsWithChildren } from 'react';

import { useOSColor } from '$common/hooks';

import { ContentWrapper, CustomSafeView } from './styles';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDark } = useOSColor();

  return (
    <CustomSafeView isDark={isDark}>
      <ContentWrapper>{children}</ContentWrapper>
    </CustomSafeView>
  );
};
