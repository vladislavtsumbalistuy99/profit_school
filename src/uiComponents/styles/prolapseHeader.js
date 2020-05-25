import { Platform } from 'react-native';
import { hasNotch } from 'react-native-device-info';

export const heightProlapse = Platform.select({
  ios: hasNotch ? 0 : 20,
});
