import React from "react";
import { decodeHTML } from "../functions/decodeHTML";
import "../App.css";
import "../styling/quiz.css";

export const Question = ({ id, question }) => {
  return (
    <div class="container">
      <div id="question-div">{question}</div>
    </div>
  );
};

export const Answer = ({ answer, id, checkAnswer }) => {
  return (
    <div class="container">
      <div id="answer-div">
        <div onClick={checkAnswer} id={id} class="answer">
          <li>{decodeHTML(answer)}</li>
        </div>
      </div>
    </div>
  );
};

export const ListAnswer = ({ answers, checkAnswer }) => {
  //to stop array from been empty, do some error checking
  //must have answers and must have a length and then map it
  //then it won't error out on click
 

  const answersList =
    answers &&
    answers.length &&
    answers.map((answer) => (
      <div>
        <Answer key={answer} answer={answer} checkAnswer={checkAnswer} />
      </div>
    ));

  return <ul id="list-div">{answersList}</ul>

};
