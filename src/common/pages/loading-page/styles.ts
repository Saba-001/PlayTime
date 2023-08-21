import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { Img } from '$common/components/img';
import { Typography } from '$common/components/typography';

export const LoadingPageContainer = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Img)`
  position: absolute;

  bottom: ${Dimensions.get('screen').height / 2}px;
`;

export const AppName = styled(Typography)`
  position: absolute;

  top: ${Dimensions.get('screen').height / 2}px;
`;

export const Poem = styled(Typography)`
  text-align: center;
  position: absolute;

  top: 90%;
`;
