import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { white } from "../utils/colors";
import { connect } from "react-redux";
import TextButton from "./TextButton";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId, decks } = navigation.state.params;
    return {
      title: decks[deckId].title
    };
  };

  constructor(props) {
    super(props);

    this.addCard = this.addCard.bind(this);
    this.startQuiz = this.startQuiz.bind(this);
    this.deleteDeck = this.deleteDeck.bind(this);
  }

  addCard() {
    console.log("Add Card was pressed");
    this.props.goBack();
  }

  startQuiz() {
    console.log("Start Quiz was pressed");
    this.props.goBack();
  }

  deleteDeck() {
    console.log("Delete Deck was pressed");
    this.props.goBack();
  }

  render() {
    const { deckInformation } = this.props;
    console.log(deckInformation);
    return (
      <View style={styles.container}>
        <Text>Deck ID: {this.props.navigation.state.params.deckId}</Text>
        <Text>{this.props.deckInformation.title}</Text>
        <Text>{this.props.deckInformation.questions.length} cards</Text>
        <TextButton onPress={this.addCard} style={{ margin: 20 }}>
          ADD CARD
        </TextButton>
        <TextButton onPress={this.startQuiz} style={{ margin: 20 }}>
          START QUIZ
        </TextButton>
        <TextButton onPress={this.deleteDeck} style={{ margin: 20 }}>
          Delete
        </TextButton>
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

function mapDispatchToProps(dispatch, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    // remove: () =>
    //   dispatch(
    //     addEntry({
    //       [deckId]: timeToString() === deckId ? getDailyReminderValue() : null
    //     })
    //   ),
    goBack: () => navigation.goBack()
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetail);
