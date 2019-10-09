import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TicketsTable } from './components';
import { loadTickets } from 'actions/ticketActions';
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TicketList = ({ dispatch }) => {
  const classes = useStyles();

  //temporary
  dispatch(loadTickets());

  return (
    <div className={classes.root}>
      {/* <UsersToolbar /> */}
      <div className={classes.content}>
        <TicketsTable />
      </div>
    </div>
  );
};

export default connect()(TicketList);
