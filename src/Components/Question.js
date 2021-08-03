import React from "react";
import { decodeHTML } from "../functions/decodeHTML";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  questionBox: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: theme.palette.primary.main,
    border: "5px inset",
  },
  answerDiv: {
    textAlign: "center",
    margin: 0,

    backgroundColor: theme.palette.secondary,

    "&:hover": {
      backgroundColor: "#8b9fa7",
    },
  },
}));

export const Question = ({ question }) => {
  const classes = useStyles();

  return (
    <Box className={classes.questionBox}>
      <Typography variant="h6">{question}</Typography>
    </Box>
  );
};

const Answer = ({ answer, checkAnswer }) => {
  const classes = useStyles();
  return (
    <Box onClick={checkAnswer} className={classes.answerDiv}>
      <ListItem className={classes.answerDiv} key={answer}>
        <ListItemText>{decodeHTML(answer)}</ListItemText>
      </ListItem>
    </Box>
  );
};

export const ListAnswer = ({ answers, checkAnswer }) => {
  const answersList =
    answers &&
    answers.length &&
    answers.map((answer) => (
      <div key={answer}>
        <Answer key={answer} answer={answer} checkAnswer={checkAnswer} />
      </div>
    ));

  return <List id="list-div">{answersList}</List>;
};
