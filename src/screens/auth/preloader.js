import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet } from 'react-native';
//import { loginAutoSubmitted } from '../../redux/auth/authActions';

const backgroundIcon = require('../../assets/registration/reference.jpg');

class Preloader extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { navigation } = this.props;
   // this.props.loginAutoSubmitted({ navigation });
  }

  render() {
    return (
      <ImageBackground
        source={backgroundIcon}
        style={styles.preloaderImage}
      ></ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stateAuth: state.auth,
  };
};

// Preloader = connect(
//   mapStateToProps,
//   { loginAutoSubmitted }
// )(Preloader);

export default Preloader;

const styles = StyleSheet.create({
  preloaderImage: { height: '100%', resizeMode: 'contain', width: '100%' },
});
