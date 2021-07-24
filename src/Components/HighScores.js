import React, { useEffect, useState } from "react";
import { db } from "../auth/firebase";
import { useAuth } from "../auth/auth";
import "../App.css";
import "../styling/HighScores.css";
import { Navbar } from "./Navbar";

import "firebase/auth";
import "firebase/database";

export const HighScores = () => {
  const [getUserData, setUserData] = useState([]);

  const { currentUser } = useAuth();

  function getUserScoreData() {
    try {
      db.collection("scores")
        .where("name", "==", currentUser.displayName)
        .orderBy("date", "desc")
        .limit(10)
        .onSnapshot((snap) => {
          const userScoreData = [];
          snap.docs.forEach((doc) => {
            const data = doc.data();
            userScoreData.push(data);
          });

          setUserData(userScoreData);
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getUserScoreData();
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
                    {new Date(item.date.seconds * 1000).toLocaleDateString(
                      "en-UK"
                    )}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
