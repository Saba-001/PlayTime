import { PropsWithChildren } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { CustomText, TextProps } from './styles';

type TypographyProps = PropsWithChildren &
  Partial<TextProps> & {
    style?: StyleProp<TextStyle>;
  };

export const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  type = 'primary',
  fontFamily = 'primaryMedium',
  color = '#0000000',
}) => (
  <CustomText style={style} type={type} fontFamily={fontFamily} color={color}>
    {children}
  </CustomText>
);
