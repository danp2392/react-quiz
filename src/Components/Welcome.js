import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "../styling/Welcome.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

export const Welcome = () => {
  return (
    <Container>
      <Card>
        <CardActions>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component={NavLink}
            to="/quiz"
            className="menu"
          >
            Start Quiz
          </Button>
        </CardActions>

        <CardActions>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component={NavLink}
            to="/highscores"
            className="menu"
          >
            High Scores
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
