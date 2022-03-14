import * as type from "../actions/types";
import axios from "axios";

export const beginApiCall = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://api.quotable.io/random`);
    dispatch({
      type: type.API_CALL,
      payload: res.data.content,
    });
  } catch (e) {
    dispatch({
      type: type.API_CALL_ERROR,
      payload: console.log(e),
    });
  }
};
