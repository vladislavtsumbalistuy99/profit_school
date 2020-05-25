import React from "react";
import { createStackNavigator } from "react-navigation";

import initScreen from "../../screens/chat";

export default createStackNavigator(
  {
    Main: {
      screen: initScreen
    }
  },
  {
    initialRouteName: "Main"
  }
);
