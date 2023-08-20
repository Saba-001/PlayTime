import { ImageStyle, StyleProp } from 'react-native';

import { CustomImage } from './styles';

type ImgProps = {
  src: string;
  style?: StyleProp<ImageStyle>;
};

export const Img: React.FC<ImgProps> = ({ src, style }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <CustomImage source={src as any} style={style} />;
};
