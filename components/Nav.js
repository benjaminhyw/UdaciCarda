import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import DeckListView from "./DeckListView";
import AddDeckView from "./AddDeckView";
import { Platform } from "expo-core";
import { purple, white } from "../utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator(
  {
    DeckListView: {
      screen: DeckListView,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-albums" size={30} color={tintColor} />
        )
      }
    },
    AddDeckView: {
      screen: AddDeckView,
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
    screen: Tabs
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
