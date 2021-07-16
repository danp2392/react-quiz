import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "../styling/welcome.css"
const Start = () => {
  return (
    <div class="container" id="welcome-screen">
      <div id="link-one">
        <NavLink to="/quiz" className="nav-link">
        Start Quiz
        </NavLink>
      </div>
      <div id="link-two">
        <NavLink to="/highscores" className="nav-link">
          High Scores
        </NavLink>
      </div>
    </div>
  );
};

export default Start;
