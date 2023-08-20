import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CustomerDashboard } from '$customer/pages';

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

  const Stack = createStackNavigator();
  const [isSupplierView, setIsSupplierView] = useState<boolean>();

  // if (isSupplierView === undefined) {
  //   return <LoadingPage />; // should become error open app again
  // }

  if (!fontLoaded) {
    return null;
  }

  if (isSupplierView) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={CustomerDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={CustomerDashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
