/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

import { windowHeight } from '../../dimensions';

export default style = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    height: windowHeight * 0.1,
    justifyContent: 'center',
    width: '100%',
  },
  headerLogo:{
    height:70,
    width:90,
  }
});
