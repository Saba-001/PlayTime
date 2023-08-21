import { useNavigation } from '@react-navigation/native';

import { NavigationList, StackNavigation } from '$common/types';

import { NavigationItem } from './components/NavigationItem';

import { NavigationFooterContainer } from './styles';

export { useNavigationList } from './hooks/useNavigationList';

type NavigationProps = {
  navigationList: NavigationList[];
  activeRoute: string;
};

export const Navigation: React.FC<NavigationProps> = ({
  activeRoute,
  navigationList,
}) => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <NavigationFooterContainer>
      {navigationList.map((item, i) => {
        const handleClick = () => {
          navigation.navigate(item.route);
        };

        return (
          <NavigationItem
            key={i}
            isActive={activeRoute === item.route}
            onClick={handleClick}
            {...item}
          />
        );
      })}
    </NavigationFooterContainer>
  );
};
