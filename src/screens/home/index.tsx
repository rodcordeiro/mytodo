import React from "react";
import { View, Image } from "react-native";

import Logo from "../../../assets/Logo.png";
import { Input, Button } from "../../components";
import { styles } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <View>
      <View>
        <Image source={Logo} alt="Logo" />
        <View>
          <Input />
          <Button />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
