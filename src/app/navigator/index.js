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
  }
);

export default createAppContainer(switchNavigator);
