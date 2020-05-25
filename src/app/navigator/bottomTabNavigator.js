import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";

import chat from "./chatNavigation";
import community from "./communityNavigation";
import forum from "./forumNavigation";
import home from "./homeNavigation";

const TabBarComponent = props => <BottomTabBar {...props} />;

export default createBottomTabNavigator(
  {
    home,
    community,
    forum,
    chat
  },
  {
    initialRouteName: "home",
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: "#605F60" }} />
    )
  }
);
