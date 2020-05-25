//libs
import React from 'react';
import { TouchableOpacity } from 'react-native';
//components
import { TextToUpper } from '../styles/fontsCONST';

export default Button = (props) => {
  let { buttonName, onPress, buttonContainer, textStyle } = props;
  return (
    <TouchableOpacity style={buttonContainer} onPress={onPress}>
      <TextToUpper text={buttonName} styles={textStyle} />
    </TouchableOpacity>
  );
};
