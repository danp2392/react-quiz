import React, { useEffect, useState } from "react";
import { db } from "../auth/firebase";
import { useAuth } from "../auth/auth";
import "../App.css";
import "../styling/HighScores.css";
import { Navbar } from "./Navbar";

export const HighScores = () => {
  const [getUserData, setUserData] = useState([]);
  //nned to get user
  //need tp get scoes from database
  const { currentUser } = useAuth();

  function getData() {
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
  }

  useEffect(() => {
    getData();
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
                <div id="high-scores-div">
                  <li key={item.date}>
                    {item.score} points -
                    {new Date(item.date.seconds * 1000).toLocaleDateString(
                      "en-UK"
                    )}
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};
