import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "../styling/Welcome.css";

export const Welcome = () => {
  return (
    <div className="container">
      <div className="background-img"></div>
      <div className="background">
        <NavLink to="/quiz" className="menu">
          Start Quiz
        </NavLink>
      </div>
      <div className="background">
        <NavLink to="/highscores" className="menu">
          High Scores
        </NavLink>
      </div>
    </div>
  );
};
