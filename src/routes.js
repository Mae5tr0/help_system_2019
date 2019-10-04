import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tickets from './components/tickets/tickets';

function Routes() {
  return (
    <Switch>            
      <Route path="/tickets" component={Tickets} />    
    </Switch> 
  );
}

export default Routes;