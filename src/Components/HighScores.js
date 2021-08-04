import React, { useEffect, useState } from "react";
import { db } from "../auth/firebase";
import { useAuth } from "../auth/auth";
import { Navbar } from "./Navbar";
import "firebase/auth";
import "firebase/database";
import { useStyles } from "../styles/HighScoresStyle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

export const HighScores = () => {
  const [getUserData, setUserData] = useState([]);

  const { currentUser } = useAuth();

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

  const classes = useStyles();

  return (
    <>
      <Navbar />

      <Typography variant="h6" className={classes.text}>
        Hello {currentUser.displayName}
      </Typography>

      <Typography className={classes.text}>See your last 10 results</Typography>
      <List>
        {getUserData &&
          getUserData.map((item) => (
            <ListItem className={classes.score} key={item.date}>
              <ListItemText className={classes.scores}>
                <Typography variant="body2" className={classes.score}>
                  {item.score} points{" "}
                </Typography>
              </ListItemText>
              <ListItemText className={classes.scores}>
                <Typography variant="body2" className={classes.score}>
                  {" "}
                  {new Date(item.date.seconds * 1000).toLocaleDateString(
                    "en-UK"
                  )}{" "}
                </Typography>
              </ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  );
};
