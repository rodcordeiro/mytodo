import React from 'react';
import { View, Image, Text } from 'react-native';

import Logo from '../../../assets/Logo.png';

import { Button } from '../../components/layout/button';

import { styles } from './styles';
const LoginScreen: React.FC<ScreenProps<'Login', false>> = ({ navigation }) => {
  return (
    <View>
      <Image source={Logo} alt="Logo" style={styles.image} />
      <View style={styles.form}>
        <Text>Login</Text>
        <Button onPress={() => navigation.push('Authenticated')} />
      </View>
    </View>
  );
};

export default LoginScreen;
