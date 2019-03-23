import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import TextButton from "./TextButton";
import { updateDeck } from "../actions/decks";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class QuizCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
      quizIndex: 0,
      quizScore: 0
    };

    this.onAnswerPress = this.onAnswerPress.bind(this);
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this);
    this.updateDeck = this.updateDeck.bind(this);
  }

  toggleShowAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  }

  onAnswerPress(answer) {
    console.log(`${answer} was pressed`);
    console.log(
      this.props.deckInformation.questions[this.state.quizIndex].answer
    );

    if (
      answer ===
      this.props.deckInformation.questions[this.state.quizIndex].answer
    ) {
      this.setState(
        {
          quizScore: this.state.quizScore + 1
        },
        () => this.updateDeck()
      );
    }
    this.setState(
      {
        quizIndex: this.state.quizIndex + 1
      },
      () => this.updateDeck()
    );
  }

  updateDeck() {
    if (this.state.quizIndex === this.props.deckInformation.questions.length) {
      let deck = Object.assign({}, this.props.deckInformation);
      deck.quizTaken = true;
      deck.quizScore = this.state.quizScore;
      this.props.dispatch(updateDeck(deck));

      clearLocalNotification().then(setLocalNotification());
    }
  }

  render() {
    const { deckInformation } = this.props;
    const { quizIndex } = this.state;
    console.log(deckInformation);
    return (
      <View>
        <Text>
          You have {deckInformation.questions.length - quizIndex} questions left
          to answer!
        </Text>

        <Text>
          {deckInformation.questions[quizIndex]
            ? this.state.showAnswer
              ? deckInformation.questions[quizIndex] &&
                deckInformation.questions[quizIndex].answer.toString()
              : deckInformation.questions[quizIndex] &&
                deckInformation.questions[quizIndex].question
            : "NO MORE CARDS!"}
        </Text>

        <TextButton onPress={this.toggleShowAnswer} style={{ margin: 20 }}>
          {this.state.showAnswer ? "Show Question" : "Show Answer"}
        </TextButton>

        <TextButton
          onPress={() => this.onAnswerPress(true)}
          style={{ margin: 20 }}
        >
          CORRECT
        </TextButton>
        <TextButton
          onPress={() => this.onAnswerPress(false)}
          style={{ margin: 20 }}
        >
          INCORRECT
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
)(QuizCard);
