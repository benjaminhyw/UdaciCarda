import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class DeckListView extends Component {
  render() {
    let { deckIds, decks } = this.props;
    return (
      <View>
        <Text>DECK LIST VIEW</Text>
        {deckIds &&
          deckIds.map(deckId => {
            return (
              <View key={deckId}>
                <Text>{decks[deckId].title}</Text>
              </View>
            );
          })}
      </View>
    );
  }
}

function mapStateToProps(decks) {
  console.log(decks);
  return {
    decks,
    deckIds: Object.keys(decks)
  };
}

export default connect(mapStateToProps)(DeckListView);
