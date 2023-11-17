import type { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  type PublicRoutesList = {
    Login: undefined;
    Register: undefined;
    Authenticated: undefined;
  };

  type AuthenticatedRoutesList = {
    Home: undefined;
  };

  type RootStackParamList = PublicRoutesList & AuthenticatedRoutesList;

  type ScreenProps<
    T extends keyof RootStackParamList,
    Authenticated = boolean,
  > = Authenticated extends false
    ? NativeStackScreenProps<PublicRoutesList, T>
    : NativeStackScreenProps<AuthenticatedRoutesList, T>;
}
