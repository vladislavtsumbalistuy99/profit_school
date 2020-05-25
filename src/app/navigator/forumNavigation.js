import React from "react";
import { createStackNavigator } from "react-navigation";
import FooterItem from './footerNavigation.js';
import initScreen from "../../screens/forum";

export default createStackNavigator(
  {
    Main: {
      screen: initScreen
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      header: null,
    },
    navigationOptions: {
      tabBarLabel: (
        <FooterItem
          sourse={require('../../assets/for_Footer/forum.png')}
          label="forum"
        />
      ),
    },
  }
);
