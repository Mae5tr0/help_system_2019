class TicketApi {
  static getTickets(page, per_page) {
    return fetch(`http://localhost:3000/api/tickets.json?per_page=${per_page}&page=${page}`).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default TicketApi;