/* eslint-disable react-native/no-inline-styles */
//libs
import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';
//components
import CustomInput from '../../uiComponents/input/input';
import CustomButton from '../../uiComponents/button/button';
import { TextMedium } from '../../uiComponents/styles/fontsCONST';
import { required, minLength6, isValidEmail } from '../../validate/validate';
//styles
import { styles } from './loginStyles';
import { buttonStyles } from '../../uiComponents/button/buttonStyles';
//assets
const backgroundIcon = require('../../assets/background.jpg');
const emailIcon = require('../../assets/registration/email_icon_active.png');
const passwordIcon = require('../../assets/registration/password_icon_active.png');
const eyeIcon = require('../../assets/registration/eye_icon_active.png');
const topLogo = require('../../assets/registration/Top_Logo.png');
//redux-actions
//import { loginSubmitted } from '../../redux/auth/authActions';
class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      securePass: true,
    };
    this.changeSecure = this.changeSecure.bind(this);
  }
  //Functions
  sendForm = async (values) => {
    try {
      if (!values) return;

      const { email, password } = values;
      const { navigation } = this.props;
      // if (email && password) {
      //   this.props.loginSubmitted({ email, password, navigation });
      // }
    } catch (error) {}
  };

  changeSecure = () => {
    this.setState({ securePass: !this.state.securePass });
  };

  forgotPassword = () => {};
  render() {
    //Destructuring
    let {
      logoImg,
      container,
      imageBack,
      containerForButtons,
      forgotPassTouch,
      forgotPass,
    } = styles;
    let { buttonContainer } = buttonStyles;
    let { securePass } = this.state;
    let { isLoading } = true;
    return (
      <ImageBackground source={backgroundIcon} style={imageBack}>
        <Image source={topLogo} style={logoImg} />
        <View style={container}>
          <View>
            <Field
              name="email"
              placeholder="E-mail"
              keyboardType="email-address"
              imageSrc={emailIcon}
              component={CustomInput}
              validate={[required, isValidEmail]}
            />
            <Field
              changeSecure={this.changeSecure}
              secureTextEntry={securePass}
              name="password"
              placeholder="Password"
              imageSrc={passwordIcon}
              imageSrcPass={eyeIcon}
              component={CustomInput}
              validate={[required, minLength6]}
            />
          </View>
          <View style={containerForButtons}>
            <CustomButton
              buttonName="Login"
              //onPress={this.props.handleSubmit(this.sendForm)}
              onPress={() => this.props.navigation.navigate('Main')}
              buttonContainer={[
                buttonContainer,
                {
                  borderWidth: 0,
                  backgroundColor: '#ada9a8',
                  marginBottom: 20,
                  marginTop: 25,
                },
              ]}
            />
            {/* <CustomButton
              buttonName="Login Demo"
              onPress={() => this.props.navigation.navigate('HomeNews')}
              buttonContainer={[
                buttonContainer,
                {
                  borderWidth: 0,
                  backgroundColor: '#ada9a8',
                  marginBottom: 20,
                },
              ]}
            /> */}
            <CustomButton
              buttonName="Create new account"
              buttonContainer={buttonContainer}
              onPress={() => this.props.navigation.push('AuthRegistration')}
            />
            <TouchableOpacity
              onPress={this.forgotPassword}
              style={forgotPassTouch}
            >
              <TextMedium text="Forgot password?" />
            </TouchableOpacity>
          </View>
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="#00a8b0"
              style={{
                position: 'absolute',
                top: '50%',
              }}
            />
          ) : null}
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,

    // form: state.form.login,
  };
};

const LoginForm = reduxForm({
  form: 'login',
  initialValues: {
    // devTest
    email: '', //'Develop@gmail.com',
    password: '', //'develop',
    // email: null,
    // password: null,
  },
})(Login);

export default connect(
  mapStateToProps,
  // (dispatch) => bindActionCreators({ loginSubmitted }, dispatch)
)(LoginForm);
