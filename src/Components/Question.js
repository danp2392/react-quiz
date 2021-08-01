import React from "react";
import { decodeHTML } from "../functions/decodeHTML";
import "../App.css";
import "../styling/Question.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
const useStyles = makeStyles({});

export const Question = ({ question }) => {
  const classes = useStyles();

  return (
    <Container>
      <div id="question-div">{question}</div>
    </Container>
  );
};

const Answer = ({ answer, id, checkAnswer }) => {
  return (
    <Container>
      <div id="answer-div">
        <div onClick={checkAnswer} id={id} className="answer">
          <ListItem key={answer}>
            <ListItemText>{decodeHTML(answer)}</ListItemText>
          </ListItem>
        </div>
      </div>
    </Container>
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
