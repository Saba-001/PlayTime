import { NavigationProp } from '@react-navigation/native';

export enum ROUTES {
  DISCOVERY = 'discovery',
  GAMEROOMS = 'game-rooms',
  CATEGORIES = 'categories',
  SETTINGS = 'settings',
}

export type NavigationList = {
  route: ROUTES;
  name: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
};

export type RootStackParamList = Record<ROUTES, undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
