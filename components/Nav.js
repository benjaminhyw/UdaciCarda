import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import DeckList from "./DeckList";
import AddDeck from "./AddDeck";
import { Platform } from "expo-core";
import { purple, white } from "../utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import DeckDetail from "./DeckDetail";

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-albums" size={30} color={tintColor} />
        )
      }
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0,0,0,0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);
const Nav = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: "Home"
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple
      }
    }
  }

  // below will have to be when you click on a deck
  //   EntryDetail: {
  //     screen: EntryDetail,
  //     navigationOptions: {
  //       headerTintColor: white,
  //       headerStyle: {
  //         backgroundColor: purple
  //       }
  //     }
  //   }
});

export default Nav;
