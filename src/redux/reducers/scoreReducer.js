import * as type from "../actions/types";
import initialState from "./initialState";

export default function scoreReducer(state = initialState.score, action) {
  switch (action.type) {
    case type.RESET_SCORE:
        return action.payload;
    default:
      return state;
  }
}

export const getScore = (state) => state.score;

