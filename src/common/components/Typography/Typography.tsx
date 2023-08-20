import { PropsWithChildren } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { CustomText } from './styles';

type TypographyProps = PropsWithChildren & {
  style?: StyleProp<TextStyle>;
};

export const Typography: React.FC<TypographyProps> = ({ children, style }) => {
  return <CustomText style={style}>{children}</CustomText>;
};
