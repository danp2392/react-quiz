import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";
import "../App.css";
import "../styling/Navbar.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
export const Navbar = () => {
  const { logOut } = useAuth();
  return (
    <Container>
      <AppBar className="topnav">
        <Toolbar>
          <NavLink className="nav-link" to="/welcome">
            <Typography> Home</Typography>
          </NavLink>

          <NavLink className="nav-link" to="/highscores">
            <Typography> High Scores</Typography>
          </NavLink>
          <NavLink className="nav-link" to="/" onClick={logOut}>
            <Typography> Logout</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
