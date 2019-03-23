import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = "UdaciCards:deck";

export function submitDeck(deck) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck.key]: deck.key,
      [deck.title]: deck.title,
      [deck.questions]: deck.questions
    })
  ).then(console.log("saved deck"));
}

export function removeTitle(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });
}
