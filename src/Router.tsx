import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';

import { useRouter } from '$common/hooks/useRouter';

export const Router = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'Satoshi-Bold': require('$common/assets/fonts/Satoshi-Bold.ttf'),
        'Satoshi-Medium': require('$common/assets/fonts/Satoshi-Medium.ttf'),
        'Satoshi-Regular': require('$common/assets/fonts/Satoshi-Regular.ttf'),
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  const { Stack, routeList } = useRouter();

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeList[0].route}>
        {routeList.map((route, i) => (
          <Stack.Screen
            key={i}
            options={{ headerShown: false }}
            name={route.route}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
