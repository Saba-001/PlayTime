import { useState } from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoadingPage } from '$common/pages';
import { useCustomerDashboard } from '$customer/hooks';

export const Router = () => {
  const Stack = createStackNavigator();
  const [isSupplierView, setIsSupplierView] = useState<boolean>();

  if (isSupplierView === undefined) {
    return <LoadingPage />; // should become error open app again
  }

  if (isSupplierView) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={() => <Text>none</Text>} />
          <Stack.Screen
            name="Something"
            component={() => (
              <View>
                <Text>123</Text>
              </View>
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={useCustomerDashboard} />
        <Stack.Screen
          name="Something"
          component={() => (
            <View>
              <Text>123</Text>
            </View>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
