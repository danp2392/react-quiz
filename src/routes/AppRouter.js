import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import { Quiz } from "../Components/Quiz";
import { Welcome } from "../Components/Welcome";
import { Login } from "../Components/Login";
import { HighScores } from "../Components/HighScores";

import { PrivateRoute } from "../routes/PrivateRoute";
import { createTheme, ThemeProvider } from "@material-ui/core";

import { Layout } from "../Components/Layout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#81d3f9",
      light: "#b5ffff",
      dark: "#4ba2c6",
    },
    secondary: {
      main: "#E0E0E0",
    },
  },
  typography: {
    fontWeightLight: 600,
  },
});

export const themeatic = createTheme();

export const history = createBrowserHistory();

export const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Login} />

            <PrivateRoute path="/welcome" exact component={Welcome} />
            <PrivateRoute path="/quiz" component={Quiz} />
            <PrivateRoute path="/highscores" component={HighScores} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};
