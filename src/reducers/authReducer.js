import * as types from "actions/actionTypes";
import initialState from "./initialState";

export default function authReducer(
  state = initialState.get("authToken"),
  action
) {
  switch (action.type) {
    case types.SIGN_IN_SUCCESS:
      return action.authToken;
    case types.SIGN_UP_SUCCESS:
      return action.authToken;
    case types.LOGOUT:
      return null;
    default:
      return state;
  }
}
