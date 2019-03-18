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
    deck.quizScore = false;
    this.props.dispatch(resetQuiz(deck));
  }

  updateDeck() {
    if (this.state.quizIndex === this.props.deckInformation.questions.length) {
      let deck = Object.assign({}, this.props.deckInformation);
      deck.quizTaken = true;
      deck.quizScore = this.state.quizScore;
      this.props.dispatch(updateDeck(deck));
    }
  }

  deckView() {
    this.props.navigation.navigate("DeckDetail", {
      deckInformation: this.props.deckInformation
    });
  }
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
