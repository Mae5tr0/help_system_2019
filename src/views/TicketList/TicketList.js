import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TicketsTable } from './components';
import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TicketList = () => {
  const classes = useStyles();

  const [tickets] = useState(mockData);

  return (
    <div className={classes.root}>
      {/* <UsersToolbar /> */}
      <div className={classes.content}>
        <TicketsTable tickets={tickets} />
      </div>
    </div>
  );
};

export default TicketList;
