import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeckListView from "./components/DeckListView";
import UdaciStatusBar from "./components/UdaciStatusBar";
import { purple } from "./utils/colors";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        <DeckListView />
      </View>
    );
  }
}
