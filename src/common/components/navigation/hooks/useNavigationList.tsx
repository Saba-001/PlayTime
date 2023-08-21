import { useState } from 'react';

import { PlayTimeTitleIcon } from '$common/assets/icons';
import { useTranslation } from '$common/hooks/useTranslation';
import { ROUTES, USERTYPE } from '$common/types';

type NavigationList = {
  route: ROUTES;
  name: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
}[];

export const useNavigationList = () => {
  // temp should come from me query probably
  const [userType, setUserType] = useState<USERTYPE>(USERTYPE.CUSTOMER);

  const { t } = useTranslation();

  const navigationList: NavigationList = [];

  const customerNavigationList: NavigationList = [
    {
      route: ROUTES.DISCOVERY,
      name: t('common_discovery'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
    },
    {
      route: ROUTES.GAMEROOMS,
      name: t('common_game_rooms'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
    },
    {
      route: ROUTES.CATEGORIES,
      name: t('common_categories'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
    },
    {
      route: ROUTES.SETTINGS,
      name: t('common_settings'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
    },
  ];

  const supplierNavigationList: NavigationList = [
    {
      route: ROUTES.DISCOVERY,
      name: t('common_discovery'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
    },
    {
      route: ROUTES.GAMEROOMS,
      name: t('common_game_rooms'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
    },
    {
      route: ROUTES.CATEGORIES,
      name: t('common_categories'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
    },
    {
      route: ROUTES.SETTINGS,
      name: t('common_settings'),
      icon: <PlayTimeTitleIcon />,
      activeIcon: <PlayTimeTitleIcon />,
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
