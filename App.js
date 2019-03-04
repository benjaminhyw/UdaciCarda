import React from "react";
import { View } from "react-native";
import UdaciStatusBar from "./components/UdaciStatusBar";
import Nav from "./components/Nav";
import { createAppContainer } from "react-navigation";
import { purple } from "./utils/colors";

const AppContainer = createAppContainer(Nav);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        <AppContainer />
      </View>
    );
  }
}
