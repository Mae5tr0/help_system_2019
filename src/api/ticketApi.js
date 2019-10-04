class TicketApi {
  static getTickets() {
    return fetch('http://localhost:3000/%PUBLIC_URL%/dev_api/tickets.json').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default TicketApi;