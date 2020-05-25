import React from "react";
import { createStackNavigator } from "react-navigation";

import initScreen from "../../screens/home";

export default createStackNavigator(
  {
    Main: {
      screen: initScreen
    }
  },
  {
    initialRouteName: "Main",
  }
);
