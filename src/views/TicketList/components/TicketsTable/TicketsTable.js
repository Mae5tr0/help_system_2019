import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination
} from "@material-ui/core";
import { connect } from "react-redux";
import { setTicketPage, setTicketsPerPage } from "actions/ticketActions";

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: "flex-end"
  }
}));

const TicketsTable = props => {
  const {
    className,
    tickets,
    page,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickets.map(ticket => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={ticket.get("id")}
                  >
                    <TableCell>{ticket.get("user")}</TableCell>
                    <TableCell>{ticket.get("title")}</TableCell>
                    <TableCell>{ticket.get("status")}</TableCell>
                    <TableCell>
                      {moment(ticket.get("createdAt")).format("DD/MM/YYYY")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={tickets.size}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[1, 5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

TicketsTable.propTypes = {
  className: PropTypes.string,
  tickets: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    tickets: state.getIn(["tickets", "items"]),
    rowsPerPage: state.getIn(["tickets", "perPage"]),
    page: state.getIn(["tickets", "page"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePageChange: (_, page) => {
      dispatch(setTicketPage(page));
    },
    handleRowsPerPageChange: event => {
      dispatch(setTicketsPerPage(event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketsTable);
