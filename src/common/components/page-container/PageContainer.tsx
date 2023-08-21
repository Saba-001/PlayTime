import { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components/native';

import { useRoute } from '@react-navigation/native';

import { Navigation, useNavigationList } from '../navigation/Navigation';
import { Typography } from '../typography';

import {
  ContentWrapper,
  CustomPlayTimeTitle,
  CustomSafeView,
  PageFrameContainer,
  PageHeader,
} from './styles';

export const PageContainer: React.FC<PropsWithChildren> = ({ children }) => {
  const route = useRoute();

  const { colors } = useTheme();
  const { navigationList } = useNavigationList();
  const activeRoute = navigationList.find((item) => item.route === route.name);

  if (!activeRoute) {
    return null;
  }

  return (
    <CustomSafeView>
      <PageFrameContainer>
        <PageHeader>
          <CustomPlayTimeTitle />
          <Typography
            type="headline"
            fontFamily="primaryMedium"
            color={colors.text.secondary}
          >
            {activeRoute.name}
          </Typography>
        </PageHeader>
        <ContentWrapper>{children}</ContentWrapper>
        <Navigation
          navigationList={navigationList}
          activeRoute={activeRoute.route}
        />
      </PageFrameContainer>
    </CustomSafeView>
  );
};
