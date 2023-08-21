import { useTheme } from 'styled-components/native';

import { Typography } from '$common/components/typography';
import { NavigationList } from '$common/types';

import { NavigationItemContainer } from '../styles';

type NavigationItemProps = NavigationList & {
  isActive: boolean;
  onClick: () => void;
};

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon,
  activeIcon,
  name,
  isActive,
  onClick,
}) => {
  const { colors } = useTheme();

  return (
    <NavigationItemContainer onPress={onClick}>
      {isActive ? activeIcon : icon}
      <Typography
        type="primary"
        color={isActive ? colors.text.active : colors.text.primary}
      >
        {name}
      </Typography>
    </NavigationItemContainer>
  );
};
