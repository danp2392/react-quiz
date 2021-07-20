import React from "react";
import { useAuth } from "../auth/auth";
import { history } from "../routes/AppRouter";
import "../App.css";
import "../styling/Login.css";
import logo192 from "../images/logo192.png";

export const Login = () => {
  const { startLogin } = useAuth();

  const login = async () => {
    try {
      await startLogin();

      history.push("/welcome");
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <>
      <div className="container">
        <img src={logo192} alt="react-logo" className="react-logo" />

        <div id="login-div">
          React Quiz App
          <h2 id="sub-heading">
            Take 10 random questions and find out how smart you really think you
            are
          </h2>
          <button id="login-button" onClick={login}>
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
};
