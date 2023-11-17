import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import { useRedux } from '@/hooks';

import { AuthenticatedNavigation } from './authenticated.routes';
import { PublicNavigation } from './public.routes';

export const Navigator = () => {
  const authenticated = false;
  //   const authenticated = useRedux().useAppSelector(
  //     ({ auth }) =>
  //       !!auth.access_token &&
  //       !!auth.expiration &&
  //       auth.expiration.toString() > Date.now().toString(),
  //   );

  return (
    <NavigationContainer>
      {!authenticated ? <PublicNavigation /> : <AuthenticatedNavigation />}
    </NavigationContainer>
  );
};
