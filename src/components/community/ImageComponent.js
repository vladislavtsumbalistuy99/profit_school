import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import style from './style';

export default ImageComponent = (props) => {
  return (
    <View style={props.style}>
      <Image style={style.image} resizeMode={'center'} source={props.source} />
    </View>
  );
};
