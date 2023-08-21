import { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES, USERTYPE } from '$common/types';
import { CustomerDashboard } from '$customer/pages';

type RouteList = {
  route: ROUTES;
  component: () => JSX.Element;
}[];

export const useRouter = () => {
  // temp should come from me query probably
  const [userType, setUserType] = useState<USERTYPE>(USERTYPE.CUSTOMER);

  const Stack = createStackNavigator<Record<ROUTES, undefined>>();

  const routeList: RouteList = [];
  if (userType === USERTYPE.CUSTOMER) {
    routeList.push(...customerRoutes);
  }
  if (userType === USERTYPE.SUPPLIER) {
    routeList.push(...supplierRoutes);
  }

  return { Stack, routeList, setUserType };
};

const customerRoutes = [
  {
    route: ROUTES.DISCOVERY,

    component: CustomerDashboard,
  },
  {
    route: ROUTES.GAMEROOMS,
    component: CustomerDashboard,
  },
  {
    route: ROUTES.CATEGORIES,
    component: CustomerDashboard,
  },
  {
    route: ROUTES.SETTINGS,
    component: CustomerDashboard,
  },
];

const supplierRoutes = [
  {
    route: ROUTES.DISCOVERY,

    component: CustomerDashboard,
  },
  {
    route: ROUTES.GAMEROOMS,
    component: CustomerDashboard,
  },
  {
    route: ROUTES.CATEGORIES,
    component: CustomerDashboard,
  },
  {
    route: ROUTES.SETTINGS,
    component: CustomerDashboard,
  },
];
