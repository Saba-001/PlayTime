import { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components/native';

import { useRoute } from '@react-navigation/native';

import { Typography } from '../Typography/Typography';

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
            {route.name}
          </Typography>
        </PageHeader>
        <ContentWrapper>{children}</ContentWrapper>
      </PageFrameContainer>
    </CustomSafeView>
  );
};
