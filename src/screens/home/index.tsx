import React from 'react';
import { View, Image } from 'react-native';

import Logo from '../../../assets/Logo.png';
import { Input, Button } from '../../components';

import { styles } from './styles';
const HomeScreen: React.FC<ScreenProps<'Home', true>> = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={Logo} alt="Logo" style={styles.image} />
        <View style={styles.form}>
          <Input
            placeholder="Insira a tarefa"
            placeholderTextColor="#6f6f6f"
            style={styles.input}
          />
          <Button />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
