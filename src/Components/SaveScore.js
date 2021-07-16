
import { db } from "../auth/firebase";
import React from 'react'
import firebase from "firebase";
import { history } from "../routes/AppRouter";
import "../App.css";
import "../styling/savescore.css"

export function SaveScore({ score, name }) {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  
  const Save = () => {
    try {
      db.collection("scores").add({
        name,
        score,
        date: timestamp,
      });
      history.push("/welcome");
      console.log("yeah score is" + score);
    } catch (error) {
      console.log(error);
    }
  };
  return (

    <div class="container">
      <div class="score-div">
        Score: {score}
        <form onSubmit={Save}>
          <button id="save-button">SAVE SCORE</button>
        </form>
      </div>
    </div>
  );
}
