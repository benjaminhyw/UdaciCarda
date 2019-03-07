export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const ADD_CARDS = "ADD_CARDS";

export function receiveCards(cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  };
}

export function addCard(card) {
  return {
    type: ADD_CARDS,
    card
  };
}
