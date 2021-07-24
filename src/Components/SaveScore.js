import { db } from "../auth/firebase";
import React from "react";
import firebase from "firebase";
import { history } from "../routes/AppRouter";
import "../App.css";
import "../styling/SaveScore.css";

export const SaveScore = ({ score, name }) => {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  const Save = () => {
    try {
      db.collection("scores").add({
        name,
        score,
        date: timestamp,
      });
      history.push("/welcome");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="container">
      <div id="score-div">
        Score: {score}
        <form onSubmit={Save}>
          <button id="save-button">SAVE SCORE</button>
        </form>
      </div>
    </div>
  );
};
