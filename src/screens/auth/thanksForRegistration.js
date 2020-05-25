import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { styles } from './registrationStyles';
const backgroundIcon = require('../../assets/registration/background.jpg');
const goBackButton = require('../../assets/registration/back_arrow.png');
const topLogo = require('../../assets/registration/Top_Logo.png');

const ThanksForRegistration = (props) => {
  let {
    container,
    logoImg,
    imageBack,
    backButton,
    backButtonImg,
    textStyle,
    textContainer,
  } = styles;

  return (
    <ImageBackground source={backgroundIcon} style={imageBack}>
      <TouchableOpacity
        style={backButton}
        onPress={() => props.navigation.goBack()}
      >
        <Image source={goBackButton} style={backButtonImg} />
      </TouchableOpacity>
      <Image source={topLogo} style={logoImg} />
      <View style={textContainer}>
        <Text style={textStyle}>
          Grazie per esserti registrato! Attendi la conferma
          dall'amministratore.
        </Text>
      </View>
    </ImageBackground>
  );
};

ThanksForRegistration.navigationOptions = {
  header: null,
};
export default ThanksForRegistration;
