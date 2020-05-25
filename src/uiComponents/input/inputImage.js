/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { styles } from './imputImageStyles';

let {
  photoWraper,
  photoInput,
  photoInputText,
  validateText,
  inputImage,
} = styles;

const handleChoosePhoto = (input) => {
  return () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (responce) => {
      input.onChange(responce);
    });
  };
};

export default renderField = ({
  input,
  myTitle,
  imageSrc,
  defaultValue,
  meta: { touched, visited, error, valid },
}) => (
  <>
    <TouchableOpacity
      {...input}
      style={photoWraper}
      onPress={handleChoosePhoto(input)}
    >
      {input.value !== '' && !input.value.didCancel ? (
        <View>
          <Image style={photoInput} source={input.value} resizeMode={'cover'} />
        </View>
      ) : (
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <Image source={imageSrc || defaultValue} style={inputImage} />
          <Text style={photoInputText}>Carica imagine</Text>
        </View>
      )}
    </TouchableOpacity>
    {!valid && <Text style={validateText}>{error}</Text>}
  </>
);
