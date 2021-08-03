import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  menu: {
    paddingTop: "20px",
    paddingBottom: "20px",
    backgroundColor: theme.palette.secondary,
  },
  option: {
    lineHeight: "6rem",
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    fontSize: "2rem",
    "&:hover": {
      backgroundColor: "#8b9fa7",
    },
  },
}));

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
