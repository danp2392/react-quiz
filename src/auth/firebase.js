import firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import { firebaseConfig } from "../config";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export { firebase, googleProvider, db };
