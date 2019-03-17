import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";
import { timeToString } from "../utils/helpers";
import { purple, white } from "../utils/colors";
import { connect } from "react-redux";
import { addCard } from "../actions/cards";
import { submitCard } from "../utils/api";
import { NavigationActions } from "react-navigation";

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === "ios" ? styles.iosSubmitBtn : styles.androidSubmitbtn
      }
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
    const key = timeToString(); // this should be d${deckId}q${questionId}
    const { question, answer } = this.state;
    const { deckInformation } = this.props.navigation.state.params;

    let card = {
      key: key,
      question,
      answer
    };
    this.props.dispatch(addCard(deckInformation.key, card));
    this.setState({
      question: "",
      answer: ""
    });
    this.props.navigation.navigate("DeckDetail", {
      deckInformation: this.props.deckInformation
    });
    // submitCard(card);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <TextInput
            style={styles.textInput}
            placeholder="Question"
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Answer"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
          <SubmitBtn onPress={this.submit} />
        </View>
      </View>
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
