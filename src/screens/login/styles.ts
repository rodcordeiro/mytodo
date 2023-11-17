import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export const styles = StyleSheet.create({
  header: {
    width,
    height: 200,
    backgroundColor: '#181818',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
  },
  form: {
    width: width * 0.8,
  },
  input: {},
});
