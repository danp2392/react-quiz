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

  const { currentUser, getUid } = useAuth();

  function getUserScoreData() {
    try {
      db.collection("users")
        .doc(currentUser.uid)
        .collection("scores")
        .onSnapshot((snapshot) => {
          const userData = [];
          snapshot.docs.forEach((doc) => {
            const data = doc.data();
            userData.push(data);
          });
          setUserData(userData);
          console.log(userData);
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    getUserScoreData();
  }, []);

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
