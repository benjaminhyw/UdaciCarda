import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

class Quiz extends Component {
  render() {
    const { deckInformation } = this.props.navigation.state.params;
    console.log(deckInformation);
    return (
      <View>
        <Text>
          Sorry, you can't take this quiz because there aren't any cards in this
          deck yet.
        </Text>
      </View>
    );
  }
}

export default connect()(Quiz);
