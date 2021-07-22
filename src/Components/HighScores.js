import React, { useEffect, useState } from "react";
import { db, scores } from "../auth/firebase";
import { useAuth } from "../auth/auth";
import "../App.css";
import "../styling/HighScores.css";
import { Navbar } from "./Navbar";
import firebase from "firebase";
import "firebase/auth";
import "firebase/database";

export const HighScores = () => {
  const [getUserData, setUserData] = useState([]);
  //nned to get user
  //need tp get scoes from database
  const { currentUser } = useAuth();

  /**function getData() {
    try {
      db.collection("scores")
        .where("name", "==", currentUser.displayName)
        .orderBy("date", "desc")
        .limit(10)
        .get()
        .then((snapshot) => {
          const userScoreData = [];
          snapshot.docs.forEach((doc) => {
            const data = doc.data();
            userScoreData.push(data);
          });

          setUserData(userScoreData);
        });
    } catch (e) {
      console.log(e);
    }
  } */

  const scoreDb = firebase.database();
  function dbListener() {
    db.collection("scores").onSnapshot((snap) => {
      const userScoreData = [];
      snap.docs.forEach((doc) => {
        const data = doc.data();
        userScoreData.push(data);
      });
      console.log(userScoreData);
    });
  }

  useEffect(() => {
    dbListener();
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div id="scores-div">
          <div id="user-div">Hello... {currentUser.displayName}</div>
          Your last 10 scores...
          <ul>
            {getUserData &&
              getUserData.map((item) => (
                <li key={item.date}>
                  <div className="score">{item.score} points</div>
                  <div id="seperator">-</div>
                  <div className="score">
                    {
                      //new Date(item.date.seconds * 1000).toLocaleDateString(
                      //"en-UK")
                    }
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
