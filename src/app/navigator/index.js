import { createSwitchNavigator, createAppContainer } from "react-navigation";

import auth from "./authNavigation";
import bottomTabs from "./bottomTabNavigator";

const switchNavigator = createSwitchNavigator(
  {
    auth,
    bottomTabs
  },
  {
    initialRouteName: "bottomTabs"
    //initialRouteName: "auth"
  }
);

export default createAppContainer(switchNavigator);
