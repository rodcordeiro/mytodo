import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../components';

import { styles } from './styles';
const LoginScreen: React.FC<ScreenProps<'Login', false>> = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.form}>
          <Text>Login</Text>
          <Button onPress={() => navigation.push('Authenticated')} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
