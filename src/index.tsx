import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Navigator } from './navigation';

const TodoApp = () => {
  return (
    <Fragment>
      <Navigator />
      <StatusBar style="dark" />
    </Fragment>
  );
};
export default TodoApp;
