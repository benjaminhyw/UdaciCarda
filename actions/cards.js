export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const ADD_CARD = "ADD_CARD";

export function receiveCards(cards) {
  return {
    type: RECEIVE_CARDS,
    cards
  };
}

export function addCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card
  };
}
