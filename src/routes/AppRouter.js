import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Quiz } from "../Components/Quiz";
import { Welcome } from "../Components/Welcome";
import { Login } from "../Components/Login";
import { HighScores } from "../Components/HighScores";
import { PrivateRoute } from "../routes/PrivateRoute";
import { ThemeProvider } from "@material-ui/core";
import { Layout } from "../styles/Layout";
import { theme } from "../styles/Theme";

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
