import { RECEIVE_DECKS, ADD_DECK } from "../actions/decks";
import { ADD_CARD } from "../actions/cards";

function decks(state = {}, action) {
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
      let newState = Object.assign({}, state);

      console.log("Your state is:");
      console.log(newState);
      newState[action.deckId].questions.push(action.card);
      return {
        ...state
      };
    default:
      return state;
  }
}

export default decks;
