import React from "react";
import { decodeHTML } from "../functions/decodeHTML";
import "../App.css";
import "../styling/Question.css";

export const Question = ({ question }) => {
  return (
    <div className="container">
      <div id="question-div">{question}</div>
    </div>
  );
};

const Answer = ({ answer, id, checkAnswer }) => {
  return (
    <div className="container">
      <div id="answer-div">
        <div onClick={checkAnswer} id={id} className="answer">
          <li key={answer}>{decodeHTML(answer)}</li>
        </div>
      </div>
    </div>
  );
};

export const ListAnswer = ({ answers, checkAnswer }) => {
  const answersList =
    answers &&
    answers.length &&
    answers.map((answer) => (
      <div>
        <Answer key={answer} answer={answer} checkAnswer={checkAnswer} />
      </div>
    ));

  return <ul id="list-div">{answersList}</ul>;
};
