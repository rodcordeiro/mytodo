import React from 'react';
import { Pressable, Text } from 'react-native';

type ButtonProps = {
  onPress?: () => void;
};
export function Button({ onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <Text>BUTTON</Text>
    </Pressable>
  );
}
