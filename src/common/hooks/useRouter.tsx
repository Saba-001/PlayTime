import { useState } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { USERTYPE } from '$common/types';
import { CustomerDashboard } from '$customer/pages';

type RouteList = {
  route: string;
  component: () => JSX.Element;
}[];

export const useRouter = () => {
  // temp should come from me query probably
  const [userType, setUserType] = useState<USERTYPE>(USERTYPE.CUSTOMER);

  const Stack = createStackNavigator<Record<string, undefined>>();

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
    route: 'discovery',
    component: CustomerDashboard,
  },
  {
    route: 'game-room',
    component: CustomerDashboard,
  },
  {
    route: 'categories',
    component: CustomerDashboard,
  },
  {
    route: 'settings',
    component: CustomerDashboard,
  },
];

const supplierRoutes = [
  {
    route: 'discovery',
    component: CustomerDashboard,
  },
  {
    route: 'game-room',
    component: CustomerDashboard,
  },
  {
    route: 'categories',
    component: CustomerDashboard,
  },
  {
    route: 'settings',
    component: CustomerDashboard,
  },
];
