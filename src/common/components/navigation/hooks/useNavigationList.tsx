import { useState } from 'react';
import { useTheme } from 'styled-components/native';

import { useTranslation } from '$common/hooks/useTranslation';
import { NavigationList, ROUTES, USERTYPE } from '$common/types';

import { CustomDiscoveryIcon } from '../styles';

export const useNavigationList = () => {
  // temp should come from me query probably
  const [userType, setUserType] = useState<USERTYPE>(USERTYPE.CUSTOMER);

  const { t } = useTranslation();
  const { colors } = useTheme();

  const navigationList: NavigationList[] = [];

  const customerNavigationList: NavigationList[] = [
    {
      route: ROUTES.DISCOVERY,
      name: t('common_discovery'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
    {
      route: ROUTES.GAMEROOMS,
      name: t('common_game_rooms'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
    {
      route: ROUTES.CATEGORIES,
      name: t('common_categories'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
    {
      route: ROUTES.SETTINGS,
      name: t('common_settings'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
  ];

  const supplierNavigationList: NavigationList[] = [
    {
      route: ROUTES.DISCOVERY,
      name: t('common_discovery'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
    {
      route: ROUTES.GAMEROOMS,
      name: t('common_game_rooms'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
    {
      route: ROUTES.CATEGORIES,
      name: t('common_categories'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
    {
      route: ROUTES.SETTINGS,
      name: t('common_settings'),
      icon: <CustomDiscoveryIcon />,
      activeIcon: <CustomDiscoveryIcon color={colors.text.active} />,
    },
  ];

  if (userType === USERTYPE.CUSTOMER) {
    navigationList.push(...customerNavigationList);
  }
  if (userType === USERTYPE.SUPPLIER) {
    navigationList.push(...supplierNavigationList);
  }

  return { navigationList, setUserType };
};
