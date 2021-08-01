import React, { useEffect, useState } from "react";
import { db } from "../auth/firebase";
import { useAuth } from "../auth/auth";
import "../App.css";
import "../styling/HighScores.css";
import { Navbar } from "./Navbar";
import "firebase/auth";
import "firebase/database";
import { Container } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

export const HighScores = () => {
  const [getUserData, setUserData] = useState([]);

  const { currentUser, getUid } = useAuth();

  function getUserScoreData() {
    try {
      db.collection("users")
        .doc(currentUser.uid)
        .collection("scores")
        .orderBy("date", "desc")
        .limit(10)
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
      <Container>
        <div id="scores-div">
          <div id="user-div">
            <Typography>Hello... {currentUser.displayName}</Typography>
          </div>
          <Typography>Your last 10 scores...</Typography>
          <List>
            {getUserData &&
              getUserData.map((item) => (
                <ListItem key={item.date}>
                  <ListItemText>{item.score} points -</ListItemText>
                  <ListItemText>
                    {" "}
                    {new Date(item.date.seconds * 1000).toLocaleDateString(
                      "en-UK"
                    )}
                  </ListItemText>
                </ListItem>
              ))}
          </List>
        </div>
      </Container>
    </>
  );
};
