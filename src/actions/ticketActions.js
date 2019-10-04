import * as types from './actionTypes';
import ticketApi from '../api/ticketApi';

export function loadTickets() {
  return function(dispatch) {
    return ticketApi.getTickets().then(tickets => {
      dispatch(loadTicketsSuccess(tickets));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadTicketsSuccess(tickets) {
  return {type: types.LOAD_TICKETS_SUCCESS, tickets};
}