import React from 'react';
import { View, Modal, TouchableOpacity, Image, Text } from 'react-native';
import style from './headerStyle';

export default Header = (props) => {
  return (
    <View style={style.header}>
      <Image source={require('../../assets/registration/Top_Logo.png')} style={style.headerLogo}/>
    </View>
  );
};
