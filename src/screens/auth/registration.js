//libs
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  View,
  ImageBackground,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
//components
import CustomInput from '../../uiComponents/input/input';
import CustomButton from '../../uiComponents/button/button';
import FileInput from '../../uiComponents/input/inputImage';
import { required, minLength6, isValidEmail } from '../../validate/validate';
//styles
import { styles } from './registrationStyles';
import { buttonStyles } from '../../uiComponents/button/buttonStyles';
//assets
const topLogo = require('../../assets/registration/Top_Logo.png');
const backgroundIcon = require('../../assets/registration/background.jpg');
const emailIcon = require('../../assets/registration/email_icon_active.png');
const passwordIcon = require('../../assets/registration/password_icon_active.png');
const eyeIcon = require('../../assets/registration/eye_icon_active.png');
const nomeCognomeIcon = require('../../assets/registration/nome-cognome_icon_active.png');
const nomeUtenteIcon = require('../../assets/registration/nomeutente_icon_active.png');
const cittaIcon = require('../../assets/registration/citta_icon_active.png');
const paeseIcon = require('../../assets/registration/paese_icon_active.png');
const descrizioneIcon = require('../../assets/registration/descrizione_icon_active.png');
const profiloIcon = require('../../assets/registration/profilo_icon_active.png');
const goBackButton = require('../../assets/registration/back_arrow.png');
//actions
//import { registrationSubmitted } from '../../redux/auth/authActions';

registration = (props) => {
  //Destructuring
  let { container, logoImg, imageBack, backButton, backButtonImg } = styles;
  let { buttonContainer } = buttonStyles;

  //Functions
  const [securePass, setSecurePass] = useState(true);

  let sendForm = () => {
    props.navigation.navigate('thanksForReg');
    if (!!props.form.values) {
      const {
        email = null,
        password = null,
        photo = null,
        name,
        surname,
        login,
        city,
        country,
        description,
      } = props.form.values;
      const { navigation } = props;
      // if (email && password && photo) {
      //   props.registrationSubmitted({
      //     email,
      //     name,
      //     surname,
      //     login,
      //     city,
      //     country,
      //     description,
      //     photo,
      //     password,
      //     navigation,
      //   });
      // }
    }
  };
  let changeSecure = () => {
    setSecurePass(!securePass);
  };
  return (
    <ImageBackground source={backgroundIcon} style={imageBack}>
      <ScrollView>
        <TouchableOpacity
          style={backButton}
          onPress={() => props.navigation.goBack()}
        >
          <Image source={goBackButton} style={backButtonImg} />
        </TouchableOpacity>
        <Image source={topLogo} style={logoImg} />
        <View style={container}>
          <Field
            name="email"
            placeholder="E-mail"
            imageSrc={emailIcon}
            keyboardType="email-address"
            component={CustomInput}
            validate={[required, isValidEmail]}
          />
          <Field
            changeSecure={(changeSecure = changeSecure.bind(this))}
            secureTextEntry={securePass}
            name="password"
            placeholder="Password"
            imageSrc={passwordIcon}
            imageSrcPass={eyeIcon}
            component={CustomInput}
            validate={[required, minLength6]}
          />
          <Field
            name="name"
            placeholder="Name"
            imageSrc={nomeCognomeIcon}
            component={CustomInput}
            validate={required}
          />
          <Field
            name="surname"
            placeholder="Surname"
            imageSrc={nomeCognomeIcon}
            component={CustomInput}
            validate={required}
          />
          <Field
            name="login"
            placeholder="Login"
            imageSrc={nomeUtenteIcon}
            component={CustomInput}
            validate={required}
          />
          <Field
            name="city"
            placeholder="City"
            imageSrc={cittaIcon}
            component={CustomInput}
            validate={required}
          />
          <Field
            name="country"
            placeholder="Country"
            imageSrc={paeseIcon}
            component={CustomInput}
            validate={required}
          />
          <Field
            name="description"
            placeholder="Description"
            imageSrc={descrizioneIcon}
            component={CustomInput}
            validate={[required, minLength6]}
          />
          <Field
            name="photo"
            placeholder="Photo"
            imageSrc={profiloIcon}
            component={FileInput}
          />
          <CustomButton
            buttonName="Registration"
            onPress={sendForm}
            buttonContainer={[
              buttonContainer,
              { borderWidth: 0, backgroundColor: '#ada9a8', marginTop: 10 },
            ]}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

registration.navigationOptions = {
  header: null,
};

mapStateToProps = (state) => {
  return {
    auth: state.auth,
    form: state.form.registration,
  };
};

// registration = connect(
//   mapStateToProps,
//   { registrationSubmitted }
// )(registration);

export default reduxForm({ form: 'registration' })(registration);
