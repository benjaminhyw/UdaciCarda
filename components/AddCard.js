import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { timeToString } from "../utils/helpers";
import { purple, white, gray } from "../utils/colors";
import { connect } from "react-redux";
import { addCard } from "../actions/cards";
import { submitCard } from "../utils/api";
import { NavigationActions } from "react-navigation";

function SubmitBtn({ onPress, disabled }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios"
          ? disabled
            ? styles.disabledIosSubmitBtn
            : styles.iosSubmitBtn
          : disabled
          ? styles.disabledAndroidSubmitbtn
          : styles.androidSubmitbtn
      }
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>Submit</Text>
    </TouchableOpacity>
  );
}

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: ""
    };
  }

  submit = () => {
    const { question, answer } = this.state;
    const { deckInformation } = this.props.navigation.state.params;
    const key = deckInformation.questions.length;

    let card = {
      key,
      question,
      answer: JSON.parse(answer.toLowerCase().trim()),
      hasBeenAnswered: false,
      hasBeenAnsweredCorrectly: false
    };
    this.props.dispatch(addCard(deckInformation.key, card));
    this.setState({
      question: "",
      answer: ""
    });
    this.props.navigation.navigate("DeckDetail", {
      deckInformation: this.props.deckInformation
    });
    1;
    // submitCard(card);
  };

  render() {
    let isDisabled =
      this.state.answer.toLowerCase().trim().length > 0 &&
      (this.state.answer.toLowerCase().trim() === "true" ||
        this.state.answer.toLowerCase().trim() === "false");
    console.log(isDisabled);
    console.log(this.state.answer);
    console.log("$$$!");
    console.log(!this.state.answer.toLowerCase().trim());
    console.log(!this.state.answer.toLowerCase().trim());
    console.log("$$$");

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.center}>
          <TextInput
            style={styles.textInput}
            placeholder="Question"
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Answer (enter true or false)"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <SubmitBtn onPress={this.submit} disabled={!isDisabled} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  androidSubmitbtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  disabledIosSubmitBtn: {
    backgroundColor: gray,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  disabledAndroidSubmitbtn: {
    backgroundColor: gray,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    marginLeft: 30
  }
});

function mapDispatchToProps(dispatch, { navigation }) {
  return {
    goBack: () => navigation.goBack()
  };
}

export default connect(mapDispatchToProps)(AddCard);
