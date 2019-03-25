import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import TextButton from "./TextButton";
import { resetQuiz } from "../actions/quiz";

class QuizResults extends Component {
  constructor(props) {
    super(props);

    this.resetQuiz = this.resetQuiz.bind(this);
    this.deckView = this.deckView.bind(this);
  }

  resetQuiz() {
    let deck = Object.assign({}, this.props.deckInformation);
    deck.quizTaken = false;
    deck.quizScore = 0;
    this.props.dispatch(resetQuiz(deck));
  }

  deckView() {
    this.props.navigation.navigate("DeckDetail", {
      deckInformation: this.props.deckInformation
    });
  }
  render() {
    let { deckInformation } = this.props;
    return (
      <View>
        {deckInformation && (
          <Text>
            SCORE:{" "}
            {deckInformation.quizScore && deckInformation.quizScore.toString()}{" "}
            / {deckInformation.questions && deckInformation.questions.length}
          </Text>
        )}
        <TextButton onPress={this.resetQuiz} style={{ margin: 20 }}>
          RESET
        </TextButton>
        <TextButton onPress={this.deckView} style={{ margin: 20 }}>
          DECK VIEW
        </TextButton>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  null,
  mapDispatchToProps
)(QuizResults);
