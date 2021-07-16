import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "../config";

//create a class to call firebase db

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
const scores = () => this.db.ref("scores");

export { firebase, googleProvider, scores, db };
