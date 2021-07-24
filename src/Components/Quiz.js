import React, { useEffect, useState } from "react";
import { LoadData } from "../api/api_connection";
import { decodeHTML } from "../functions/decodeHTML";
import { Question, ListAnswer } from "./Question";
import { useAuth } from "../auth/auth";
import { SaveScore } from "./SaveScore";
import { RandomiseAnswers } from "../functions/randomizeFunction";
import { Navbar } from "../Components/Navbar";

export const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [getQuestion, setQuestion] = useState([]);
  const [getCorrect, setCorrect] = useState("");
  const [getAnswers, setAnswers] = useState([]);
  const [getScore, setScore] = useState(0);
  const [currentQuestionId, setQuestionId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingData = async () => {
      const data = await LoadData();
      try {
        setQuizData(data);
        setIsLoading(false);
      } catch (e) {
        throw new Error(e);
      }
    };
    loadingData();
  }, []);

  const { currentUser } = useAuth();

  useEffect(() => {
    const runData = () => {
      setQuestion(quizData.map((item) => item.question));

      setAnswers(quizData.map((item) => RandomiseAnswers(item.answers)));

      setCorrect(quizData.map((item) => item.answer));
    };
    runData();
  }, [quizData]);

  function checkAnswer(e) {
    const getValue = e.target.innerHTML;
    setQuestionId(currentQuestionId + 1);
    if (getValue === getCorrect[currentQuestionId]) {
      setScore(getScore + 1);
    }
  }

  return isLoading ? (
    <div id="loading-div">LOADING...</div>
  ) : currentQuestionId < quizData.length ? (
    <>
      <Navbar />

      <Question
        id={currentQuestionId}
        question={decodeHTML(getQuestion[currentQuestionId])}
      />

      <ListAnswer
        id={currentQuestionId}
        answers={getAnswers[currentQuestionId]}
        checkAnswer={(answer) => checkAnswer(answer)}
      />
    </>
  ) : (
    <SaveScore score={getScore} name={currentUser.displayName} />
  );
};
