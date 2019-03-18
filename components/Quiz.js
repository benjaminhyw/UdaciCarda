import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import QuizCard from "./QuizCard";

class Quiz extends Component {
  render() {
    const { deckInformation } = this.props.navigation.state.params;
    console.log(deckInformation);
    return (
      <View>
        {deckInformation.questions.length === 0 ? (
          <Text>
            Sorry, you can't take this quiz because there aren't any cards in
            this deck yet.
          </Text>
        ) : (
          <QuizCard deckInformation={deckInformation && deckInformation} />
        )}
      </View>
    );
  }
}

export default connect()(Quiz);
