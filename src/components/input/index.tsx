import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

type Props = {} & TextInputProps;
export function Input(props: Props) {
  return <TextInput {...props} />;
}
