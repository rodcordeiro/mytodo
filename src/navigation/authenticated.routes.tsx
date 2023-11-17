import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

//   import { store } from '@/redux/store.redux';
//   import { logOut, resetUser } from '@/redux/actions.redux';

import HomeScreen from '@/screens/home';

const Drawer = createDrawerNavigator<RootStackParamList>();

export const AuthenticatedNavigation = () => {
  //   const dispatch = store.dispatch;
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStatusBarAnimation: 'slide',
        drawerActiveBackgroundColor: '#09f1',
        headerBackgroundContainerStyle: {
          backgroundColor: 'transparent',
        },

        drawerType: 'slide',
        swipeEnabled: true,
        swipeEdgeWidth: 50,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: '',

          drawerIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size * 0.8} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
