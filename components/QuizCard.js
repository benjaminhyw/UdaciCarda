import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import TextButton from "./TextButton";

class QuizCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAnswer: false,
      quizIndex: 0
    };

    this.onAnswerPress = this.onAnswerPress.bind(this);
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this);
  }

  toggleShowAnswer() {
    console.log("toggleShowAnswer was fired");
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  }

  onAnswerPress(answer) {
    console.log(`${answer} was pressed`);
    this.setState({
      quizIndex: this.state.quizIndex + 1
    });
  }

  render() {
    const { deckInformation } = this.props;
    console.log(deckInformation);
    return (
      <View>
        <Text>
          You have {deckInformation.questions.length - this.state.quizIndex}{" "}
          questions to answer
        </Text>

        <Text>
          {deckInformation.questions[this.state.quizIndex]
            ? this.state.showAnswer
              ? deckInformation.questions[
                  this.state.quizIndex
                ].answer.toString()
              : deckInformation.questions[this.state.quizIndex].question
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

export default connect()(QuizCard);
