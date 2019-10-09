class TicketApi {
  static getTickets() {
    return fetch('http://localhost:3000/api/tickets.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default TicketApi;