import React, { Fragment } from "react";
import { Provider } from "react-redux";

import store from "../redux/configureStore";

import Navigator from "./navigator";

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
