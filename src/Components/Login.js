import React from "react";
import { useAuth } from "../auth/auth";
import { history } from "../routes/AppRouter";
import { withRouter } from "react-router-dom";
import "../App.css";
import "../styling/login.css";

const Login = () => {
  const { startLogin } = useAuth();

  const login = async () => {
    try {
      await startLogin();

      history.push("/welcome");
    } catch (e) {
      console.log("erroe" + e);
    }
  };

  return (
    <>
      <div class="container">
        <div id="login-div">
          DANIELS REACT QUIZ APP
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

export default withRouter(Login);
