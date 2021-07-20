import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";
import "../App.css";
import "../styling/Navbar.css";

export const Navbar = () => {
  const { logOut } = useAuth();
  return (
    <div className="container">
      <div className="topnav">
        <NavLink className="nav-link" to="/welcome">
          Home
        </NavLink>

        <NavLink className="nav-link" to="/highscores">
          High Scores
        </NavLink>
        <NavLink className="nav-link" to="/" onClick={logOut}>
          Logout
        </NavLink>
      </div>
    </div>
  );
};
