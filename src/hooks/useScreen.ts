import { Dimensions } from 'react-native';

export const useScreen = () => {
  const { width, height } = Dimensions.get('window');
  return { width, height };
};
