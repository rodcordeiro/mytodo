import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './screens/home';

const TodoApp = () => {
  return (
    <Fragment>
      <HomeScreen />
      <StatusBar style="auto" />
    </Fragment>
  );
};
export default TodoApp;
