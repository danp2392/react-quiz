import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles/NavbarStyle";

export const Navbar = () => {
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
