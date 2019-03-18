import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import QuizCard from "./QuizCard";
import QuizResults from "./QuizResults";

class Quiz extends Component {
  render() {
    const { deckInformation } = this.props.navigation.state.params;
    const { decks } = this.props;
    console.log(deckInformation);
    return (
      <View>
        {deckInformation.questions.length === 0 ? (
          <Text>
            Sorry, you can't take this quiz because there aren't any cards in
            this deck yet.
          </Text>
        ) : !this.props.decks[deckInformation.key].quizTaken ? (
          <QuizCard deckInformation={deckInformation && deckInformation} />
        ) : (
          <QuizResults />
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks,
    deckIds: Object.keys(state.decks)
  };
}

export default connect(mapStateToProps)(Quiz);
