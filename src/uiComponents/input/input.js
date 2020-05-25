//libs
import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

//styles
import { styles } from './inputStyles';

export default function Input(props) {
  let {
    name,
    placeholder,
    imageSrc,
    imageSrcPass,
    secureTextEntry,
    changeSecure,
    keyboardType,
    placeholderColor,
    defaultValue,
    input,
    meta: { touched, visited, error },
    //Добавить opacity всем инпутам. При выборе, используя touched, убирать opacity
  } = props;
  const { onChange, value, ...inputOption } = input;
  let {
    inputStyle,
    inputImage,
    inputContainer,
    inputImagePass,
    securePass,
    inputContainerTouched,
    alert,
  } = styles;

  const [text, setText] = useState(value);

  useEffect(() => {
    onChange(text);
    return () => {};
  }, [text]);

  return (
    <View style={visited ? inputContainerTouched : inputContainer}>
      <Image source={imageSrc} style={inputImage} />
      <TextInput
        {...inputOption}
        value={text}
        onChangeText={(e) => setText(e)}
        placeholder={placeholder}
        // name={name}
        style={inputStyle}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor={placeholderColor || 'white'}
      />
      <TouchableOpacity
        style={securePass}
        onPress={() => {
          changeSecure();
        }}
      >
        <Image source={imageSrcPass} style={inputImagePass} />
      </TouchableOpacity>
      {touched && error && <Text style={alert}>{error}</Text>}
    </View>
  );
}
