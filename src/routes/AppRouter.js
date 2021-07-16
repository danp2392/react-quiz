import React from "react";
import {
  Router,
  Route,

  Switch,

 
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Quiz from "../Components/Quiz";
import Start from "../Components/StartScreen";
import Login from "../Components/Login";
import { HighScores } from "../Components/HighScores";

import { PrivateRoute } from "../routes/PrivateRoute";


export const history = createBrowserHistory();

export const Routes = () => {


  return (
    <Router history={history}>
  
        <Switch>
        
            <Route path="/" exact component={Login} />
          
            <PrivateRoute path="/welcome" exact component={Start} />
            <PrivateRoute path="/quiz"  component={Quiz} />
            <PrivateRoute path="/highscores"  component={HighScores} />
         
        </Switch>
      
    </Router>
  );
};
