import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { PlayTimeTitleIcon } from '$common/assets/icons';

export const CustomSafeView = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const PageFrameContainer = styled.View`
  position: relative;

  flex: 1;

  background-color: #ee632c;

  overflow: hidden;
`;

export const PageHeader = styled.View`
  position: absolute;
  top: 0;
  left: 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 40px;

  padding: 5px 40px 0 20px;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const CustomPlayTimeTitle = styled(PlayTimeTitleIcon)`
  height: 35px;
  width: 140px;
`;

export const ContentWrapper = styled.View`
  flex: 1;

  margin-top: 40px;

  overflow: hidden;

  background-color: blue;
`;
