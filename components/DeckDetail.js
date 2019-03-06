import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white } from "../utils/colors";
import { connect } from "react-redux";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;

    return {
      title: deckId
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Deck ID: {this.props.navigation.state.params.deckId}</Text>
        <Text>RESET</Text> {/*Used to be TextButton component, check this */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15
  }
});

export default connect()(DeckDetail);
