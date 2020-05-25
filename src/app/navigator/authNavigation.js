import React from "react";
import { createStackNavigator } from "react-navigation";

import login from "../../screens/auth/login";
import registration from "../../screens/auth/registration";

export default createStackNavigator(
  {
    Login: {
      screen: login
    },
    Registration: {
      screen: registration
    }
  },
  {
    initialRouteName: "Login"
  }
);
