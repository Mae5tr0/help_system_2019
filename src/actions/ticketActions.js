import * as types from './actionTypes';
import ticketApi from 'api/ticketApi';
import { fromJS } from 'immutable';

export function loadTickets() {
  return function(dispatch) {
    return ticketApi.getTickets().then(({ data }) => {
      dispatch(loadTicketsSuccess(data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function setTicketPage(ticketsPage) {
  return {
    type: types.SET_TICKETS_PAGE,
    ticketsPage
  };
}

export function setTicketsPerPage(perPage) {
  return {
    type: types.SET_TICKETS_PER_PAGE,
    ticketsPerPage: perPage
  };
}

export function loadTicketsSuccess(tickets) {
  return {
    type: types.LOAD_TICKETS_SUCCESS, 
    tickets: fromJS(tickets)
  };
}