import {
  RECEIVE_DECKS,
  ADD_DECK,
  DELETE_DECK,
  UPDATE_DECK
} from "../actions/decks";
import { ADD_CARD } from "../actions/cards";

function decks(state = {}, action) {
  let newState;
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.deck.key]: action.deck
      };
    case ADD_CARD:
      newState = Object.assign({}, state);
      newState[action.deckId].questions.push(action.card);
      return {
        ...newState
      };
    case DELETE_DECK:
      newState = Object.assign({}, state);
      delete newState[action.deckId];
      return {
        ...newState
      };
    case UPDATE_DECK:
      newState = Object.assign({}, state);
      newState[action.deck.key] = action.deck;
      return {
        ...newState
      };
    default:
      return state;
  }
}

export default decks;
