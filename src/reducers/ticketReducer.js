import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ticketReducer(state = initialState.tickets, action) {
  switch(action.type) {
    case types.LOAD_TICKETS_SUCCESS:
      return action.tickets
    default: 
      return state;
  }
}