import React from 'react';
import TicketShow from './ticketShowPage'
import TicketIndex from './ticketIndexPage'
import TicketNew from './newTicketPage'
import { Route, Switch } from 'react-router-dom';

const Tickets = ({ match }) => (
  <div>
    <Switch>
      <Route path={match.url + '/new'} component={TicketNew} />
      <Route path={match.url + '/:id'} component={TicketShow} />      

      <Route path={match.url} component={TicketIndex} />
    </Switch>
  </div>
)

export default Tickets;