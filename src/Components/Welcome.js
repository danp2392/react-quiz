import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useStyles } from "../styles/WelcomeStyle";

export const Welcome = () => {
  const classes = useStyles();
  return (
    <Box className={classes.menu}>
      <Button
        variant="contained"
        size="large"
        component={NavLink}
        to="/quiz"
        className={classes.option}
      >
        Start Quiz
      </Button>

      <Box className={classes.menu}>
        <Button
          variant="contained"
          size="large"
          component={NavLink}
          to="/highscores"
          className={classes.option}
        >
          High Scores
        </Button>
      </Box>
    </Box>
  );
};
