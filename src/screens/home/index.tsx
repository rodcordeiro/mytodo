import React from 'react';
import { View, Image } from 'react-native';

import Logo from '../../../assets/Logo.png';

import { styles } from './styles';
const HomeScreen: React.FC<ScreenProps<'Home', true>> = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image source={Logo} alt="Logo" style={styles.image} />
        <View style={styles.form}></View>
      </View>
    </View>
  );
};

export default HomeScreen;
