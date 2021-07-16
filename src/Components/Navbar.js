import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/auth";
export const Navbar = () => {
  const { logOut } = useAuth();
  return (
    <div class="container">
      <div class="topnav">
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
