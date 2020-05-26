import React from "react";
import { createStackNavigator } from "react-navigation";
import ChatFooterItem from './footerNavigation.js';
import initScreen from "../../screens/chat";

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
        <ChatFooterItem
          sourse={require('../../assets/for_Footer/profile.png')}
          label="profile"
        />
      ),
    },
  }
);
