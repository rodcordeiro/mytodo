import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';

type Props = {} & TextInputProps;
export function Input(props: Props) {
  return <TextInput {...props} style={[styles.input, props.style]} />;
}
