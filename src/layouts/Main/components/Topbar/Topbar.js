import React from "react";
// import { Link as RouterLink } from 'react-router-dom';
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Hidden, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputIcon from "@material-ui/icons/Input";
import { logout } from "actions/authActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, history, dispatch, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const handleLogout = event => {
    event.preventDefault();

    dispatch(logout());
    history.push("/");
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        {/* <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/logo--white.svg"
          />
        </RouterLink> */}
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default withRouter(connect()(Topbar));
