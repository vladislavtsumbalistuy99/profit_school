import React from 'react';
import { createStackNavigator } from 'react-navigation';
import FooterItem from './footerNavigation.js';

import Main from '../../screens/community';

export default createStackNavigator(
  {
    Main: {
      screen: Main,
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      header: null,
    },
    navigationOptions: {
      tabBarLabel: (
        <FooterItem
          sourse={require('../../assets/for_Footer/community.png')}
          label="community"
        />
      ),
    },
  }
);
