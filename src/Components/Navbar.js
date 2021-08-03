import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";

import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    navLink: {
      color: "white",
      fontWeight: 900,
      fontSize: "1.25rem",
      flex: 1,
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#8b9fa7",
      },
    },
    navStyling: {
      textAlign: "center",
      backgroundColor: theme.palette.primary.dark,
    },
  }));

  const { logOut } = useAuth();
  const classes = useStyles();
  return (
    <Toolbar className={classes.navStyling}>
      <Button className={classes.navLink} component={NavLink} to="/welcome">
        Home
      </Button>

      <Button className={classes.navLink} component={NavLink} to="/highscores">
        High Scores
      </Button>
      <Button
        className={classes.navLink}
        component={NavLink}
        to="/"
        onClick={logOut}
      >
        Logout
      </Button>
    </Toolbar>
  );
};
