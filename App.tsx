import React, { useEffect } from 'react';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import TodoApp from './src';
import { promiseWithTimeout } from '@/utils/promise.util';

export default function App() {
  useEffect(() => {
    async function updateApp() {
      if (process.env.NODE_ENV === 'development') {
        return;
      }
      SplashScreen.preventAutoHideAsync();
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
      SplashScreen.hideAsync();
    }

    promiseWithTimeout(updateApp(), 10000);
  }, []);
  return <TodoApp />;
}
