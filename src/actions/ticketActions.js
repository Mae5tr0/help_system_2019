import * as types from './actionTypes';
import ticketApi from 'api/ticketApi';
import { fromJS } from 'immutable';

export function loadTickets() {
  return function(dispatch, getState) {
    let page = getState().getIn(['tickets', 'page']);
    let per_page = getState().getIn(['tickets', 'perPage']);
    
    return ticketApi.getTickets(page, per_page).then(({ data }) => {
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