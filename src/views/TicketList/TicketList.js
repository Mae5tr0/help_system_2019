import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { TicketsTable } from './components';
import { connect } from 'react-redux';
import { setTicketPage, setTicketsPerPage, loadTickets } from 'actions/ticketActions';
import { parse } from 'query-string';

// console.log(qs);

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const TicketList = ({ dispatch, location }) => {
  const classes = useStyles();
  let { page = 0, per_page = 15 } = parse(location.search, { parseNumbers: true });

  dispatch(setTicketPage(page));
  dispatch(setTicketsPerPage(per_page));
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
