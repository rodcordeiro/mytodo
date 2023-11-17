import React from 'react';
import { View, Image } from 'react-native';

import Logo from '../../../assets/Logo.png';
import { Input, Button } from '../../components';

import { styles } from './styles';
const LoginScreen: React.FC<ScreenProps<'Login'>> = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={Logo} alt="Logo" style={styles.image} />
        <View style={styles.form}>
          <Input
            placeholder="Login"
            placeholderTextColor="#6f6f6f"
            style={styles.input}
          />
          <Button onPress={() => navigation.push('Home')} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
