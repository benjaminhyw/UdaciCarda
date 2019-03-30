import { AsyncStorage } from "react-native";

export const DECK_STORAGE_KEY = "UdaciCards:deck";

export function submitDeck(deck) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck.key]: deck
    })
  );
}

export async function removeDeck(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });
}

export async function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    return data;
  });
}

export async function addCardToDeck(key, card) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    const asyncDeck = data[key];
    asyncDeck.questions.push(card);
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });
}

export function removeAll() {
  return AsyncStorage.clear();
}
