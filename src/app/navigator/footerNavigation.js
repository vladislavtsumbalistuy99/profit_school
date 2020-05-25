/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default BarLabel = (props) => {
  return (
    <View style={style.container}>
      <View style={style.imageWrap}>
        <Image
          style={style.image}
          resizeMode={'contain'}
          source={props.sourse}
        />
      </View>
      <Text style={style.text}>{props.label}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor:'red',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
    paddingVertical: 5,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  imageWrap: { height: 25, width: 25 },
  text: { color: '#fff', fontSize: 14 },
});
