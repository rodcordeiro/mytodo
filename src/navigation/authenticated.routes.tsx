import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { View, Dimensions } from 'react-native';

//   import { store } from '@/redux/store.redux';
//   import { logOut, resetUser } from '@/redux/actions.redux';

import HomeScreen from '@/features/home';

const Drawer = createDrawerNavigator<RootStackParamList>();

export const AuthenticatedNavigation = () => {
  //   const dispatch = store.dispatch;
  const { height } = Dimensions.get('window');
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
