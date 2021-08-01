import React from "react";
import { useAuth } from "../auth/auth";
import { history } from "../routes/AppRouter";
import "../App.css";
import "../styling/Login.css";
import logo192 from "../images/logo192.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
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
      <Container>
        <img src={logo192} alt="react-logo" className="react-logo" />

        <div id="login-div">
          <Typography>React Quiz App</Typography>
          <Typography id="sub-heading">
            Take 10 random questions and find out how smart you really think you
            are
          </Typography>
          <Button id="login-button" onClick={login}>
            LOGIN
          </Button>
        </div>
      </Container>
    </>
  );
};
