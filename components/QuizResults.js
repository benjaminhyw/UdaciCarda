import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class QuizResults extends Component {
  render() {
    let { deckInformation } = this.props;
    console.log(deckInformation);
    return (
      <View>
        {deckInformation && (
          <Text>
            SCORE:{" "}
            {deckInformation.quizScore && deckInformation.quizScore.toString()}{" "}
            / {deckInformation.questions && deckInformation.questions.length}
          </Text>
        )}
      </View>
    );
  }
}

export default connect()(QuizResults);
