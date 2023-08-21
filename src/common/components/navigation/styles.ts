import styled from 'styled-components/native';

import { DiscoveryIcon } from '$common/assets/icons';

export const NavigationFooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  height: 70px;

  padding: 0 20px;

  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

export const NavigationItemContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 25%;
  height: 50px;
`;

export const CustomDiscoveryIcon = styled(DiscoveryIcon)`
  width: 30px;
  height: 30px;
`;
