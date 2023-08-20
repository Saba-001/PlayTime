import { StyleProp, ViewStyle } from 'react-native';
import Svg from 'react-native-svg';
import styled from 'styled-components/native';

export const CustomSvg = styled(Svg)``;
export type SvgIconDefaultProps = {
  style?: StyleProp<ViewStyle>;
  color?: string;
};
