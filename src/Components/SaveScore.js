import { db } from "../auth/firebase";
import React from "react";
import firebase from "firebase";
import { history } from "../routes/AppRouter";
import { useAuth } from "../auth/auth";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useStyles } from "../styles/SaveScoreStyle";

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

      history.push("/welcome");
    } catch (error) {
      throw new Error(error);
    }
  };

  const classes = useStyles();

  return (
    <>
      <Typography variant="h3" className={classes.scoreText}>
        You scored {score}!
      </Typography>

      <Button
        type="submit"
        color="primary"
        size="large"
        variant="contained"
        onClick={Save}
        className={classes.saveButton}
      >
        SAVE SCORE
      </Button>
    </>
  );
};
