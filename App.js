import React from "react";
import { View } from "react-native";
import UdaciStatusBar from "./components/UdaciStatusBar";
import Nav from "./components/Nav";
import { createAppContainer } from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { purple } from "./utils/colors";
import reducer from "./reducers";
import middleware from "./middleware";

const AppContainer = createAppContainer(Nav);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}
