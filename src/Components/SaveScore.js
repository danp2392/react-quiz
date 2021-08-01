import { db } from "../auth/firebase";
import React from "react";
import firebase from "firebase";
import { history } from "../routes/AppRouter";
import "../App.css";
import "../styling/SaveScore.css";
import { useAuth } from "../auth/auth";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const SaveScore = ({ score, name }) => {
  const timestamp = firebase.firestore.FieldValue.serverTimestamp();

  const { currentUser } = useAuth();
  const Save = () => {
    try {
      db.collection("users").doc(currentUser.uid).collection("scores").add({
        name,
        score,
        date: timestamp,
      });

      console.log("saved");
      history.push("/welcome");
    } catch (error) {
      console.log("not saved");
      throw new Error(error);
    }
  };
  return (
    <div className="container">
      <div id="score-div">
        <Typography variant="h3" color="textSecondary">
          Score : {score}
        </Typography>

        <Button
          id="save-button"
          type="submit"
          color="primary"
          variant="contained"
          onClick={Save}
        >
          SAVE SCORE
        </Button>
      </div>
    </div>
  );
};
