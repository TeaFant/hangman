import * as type from "../actions/types";
import initialState from "./initialState";
import regexArray from "../../regex";

function quote(data) {
  const singleLetter = Array.from(data, (x) => ({
    letter: x,
    isVisible: regexArray.some((regex) => regex === x),
  }));
  return singleLetter;
}

export default function quoteReducer(state = initialState.quote, action) {
  switch (action.type) {
    case type.API_CALL:
      return [...state, ...quote(action.payload)];
    case type.GAME_ACTION:
      // find matches and map them visible
      const stateWithDifferentLetterVisible = state.map(stateItem => {
        if(stateItem.letter === action.payload) {
          return {...stateItem, isVisible:true}
        };
        return stateItem;
      });
      return stateWithDifferentLetterVisible;
    default:
      return state;
  }
}

export const getQuote = (state) => state.quote;
