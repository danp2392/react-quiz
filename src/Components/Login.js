import React from "react";
import { useAuth } from "../auth/auth";
import { history } from "../routes/AppRouter";
import logo192 from "../images/logo192.png";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../styles/LoginStyle";

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

  const classes = useStyles();

  return (
    <Box className={classes.loginDiv}>
      <img src={logo192} alt="react-logo" className={classes.reactLogo} />

      <Box className={classes.welcomeText}>
        <Typography variant="h3">React Quiz App</Typography>
        <Typography variant="h5">
          Take 10 random questions and find out how smart you are
        </Typography>
      </Box>
      <Button className={classes.login} onClick={login}>
        LOGIN
      </Button>
    </Box>
  );
};
