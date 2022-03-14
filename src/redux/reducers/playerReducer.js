import * as type from "../actions/types";
import initialState from "./initialState";

export default function playerReducer(state = initialState.playerName, action) {
  switch (action.type) {
    case type.SUBMIT_PLAYER:
      return action.payload;
    default:
      return state;
  }
}

export const getPlayer = (state) => state.playerName;
