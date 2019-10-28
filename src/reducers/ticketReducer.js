import * as types from "actions/actionTypes";
import initialState from "./initialState";

export default function ticketReducer(
  state = initialState.get("tickets"),
  action
) {
  switch (action.type) {
    case types.LOAD_TICKETS_SUCCESS:
      return state.set("items", action.tickets);
    case types.SET_TICKETS_PAGE:
      return state.set("page", action.ticketsPage);
    case types.SET_TICKETS_PER_PAGE:
      return state.set("perPage", action.ticketsPerPage);
    default:
      return state;
  }
}
