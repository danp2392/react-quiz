import React, { useEffect, useState } from "react";
import { db } from "../auth/firebase";
import { useAuth } from "../auth/auth";
import "../App.css";
import "../styling/scores.css";
import { Navbar } from "./Navbar";

export const HighScores = () => {
  const [getUserScores, setUserScores] = useState([]);
  //nned to get user
  //need tp get scoes from database
  const { currentUser } = useAuth();

  //ref=db.collection("scores")

  //ref.where("name"==currentUser)
  function getData() {
    try {
      db.collection("scores")
        .where("name", "==", currentUser.displayName)
        .orderBy("date", "desc")
        .limit(10)
        .get()
        .then((snapshot) => {
          const scores = [];
          snapshot.docs.forEach((doc) => {
            const data = doc.data();
            scores.push(data);
          });

          setUserScores(scores);
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div class="container">
        <div className="scores-div">
          <div id="user-div">Hello... {currentUser.displayName}</div>
          Your last 10 scores...
          <ul>
            {getUserScores &&
              getUserScores.map((item) => (
                //the date is unique so this can be the key

                <li key={item.date}>
                  {item.score} points -{" "}
                  {new Date(item.date.seconds * 1000).toLocaleDateString(
                    "en-UK"
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
