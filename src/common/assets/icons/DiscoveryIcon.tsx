import { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import { CustomSvg, SvgIconDefaultProps } from './BaseIcon';

export const DiscoveryIcon: React.FC<SvgIconDefaultProps> = ({
  color,
  style,
}) => {
  const { colors } = useTheme();

  const iconColor = color || colors.text.secondary;

  return (
    <CustomSvg viewBox="0 0 24 24" fill="none" style={style}>
      <Path
        d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z"
        stroke={iconColor}
        strokeWidth="1.5"
      />
      <Path
        d="M10.1818 11.2959C10.3851 10.7877 10.7878 10.385 11.296 10.1817L13.3337 9.3666C14.15 9.04008 14.9601 9.85016 14.6336 10.6665L13.8185 12.7042C13.6152 13.2124 13.2125 13.6151 12.7043 13.8184L10.6666 14.6334C9.85028 14.96 9.0402 14.1499 9.36673 13.3336L10.1818 11.2959Z"
        stroke={iconColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </CustomSvg>
  );
};
