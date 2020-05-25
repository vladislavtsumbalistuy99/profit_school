import React from 'react';
import { createStackNavigator } from 'react-navigation';

import login from '../../screens/auth/login';
import registration from '../../screens/auth/registration';
import preloader from '../../screens/auth/preloader';
import thanksForReg from '../../screens/auth/thanksForRegistration';

export default createStackNavigator(
  {
    AuthPreloader: {
      screen: preloader,
    },
    AuthLogin: {
      screen: login,
    },
    AuthRegistration: {
      screen: registration,
    },
    thanksForReg: {
      screen: thanksForReg,
    },
  },
  {
    initialRouteName: 'AuthLogin',
  }
);
