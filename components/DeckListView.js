import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { white } from "../utils/colors";
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
              <View key={deckId} style={styles.item}>
                <Text>{decks[deckId].title}</Text>
                <Text>{`${decks[deckId].questions.length} Questions`}</Text>
              </View>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
});

function mapStateToProps(decks) {
  console.log(decks);
  return {
    decks,
    deckIds: Object.keys(decks)
  };
}

export default connect(mapStateToProps)(DeckListView);
