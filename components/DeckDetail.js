import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white } from "../utils/colors";
import { connect } from "react-redux";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId, decks } = navigation.state.params;
    return {
      title: decks[deckId].title
    };
  };

  render() {
    const { deckInformation } = this.props;
    console.log(deckInformation);
    return (
      <View style={styles.container}>
        <Text>Deck ID: {this.props.navigation.state.params.deckId}</Text>
        <Text>{this.props.deckInformation.title}</Text>
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

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deckId,
    deckInformation: state[deckId]
  };
}

export default connect(mapStateToProps)(DeckDetail);
