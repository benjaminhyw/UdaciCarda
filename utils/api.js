import { AsyncStorage } from "react-native";
// import { formatCalendarResults } from "./_calendar";

export const DECK_STORAGE_KEY = "UdaciCards:deck";

// export function fetchCalendarResults() {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then(formatCalendarResults);
// } // this will be like getDeckListResults or something, maybe

export function submitDeck(deck) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [deck.key]: deck.key,
      [deck.title]: deck.title,
      [deck.questions]: deck.questions
    })
  );
}

export function removeTitle(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });
}
