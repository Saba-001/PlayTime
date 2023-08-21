import { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components/native';

import { useRoute } from '@react-navigation/native';

import { useNavigationList } from '../navigation/Navigation';
import { Typography } from '../typography/Typography';

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
            {navigationList.find((item) => item.route === route.name)?.name}
          </Typography>
        </PageHeader>
        <ContentWrapper>{children}</ContentWrapper>
      </PageFrameContainer>
    </CustomSafeView>
  );
};
