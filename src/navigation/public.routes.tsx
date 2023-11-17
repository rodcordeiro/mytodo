import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '@/screens/login';

import { AuthenticatedNavigation } from './authenticated.routes';

const Stack = createNativeStackNavigator<PublicRoutesList>();

export const PublicNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Authenticated" component={AuthenticatedNavigation} />
    </Stack.Navigator>
  );
};
