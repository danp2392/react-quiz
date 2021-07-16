import { firebase, googleProvider } from "./firebase";
import { createContext, useContext, useEffect, useState } from "react";

//create createContext
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  //first set the user
  const [currentUser, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  function startLogin() {
    return firebase.auth().signInWithPopup(googleProvider);
  }

  function logOut() {
    firebase
      .auth()
      .signOut()

      .then(() => {
        setUser(null);
      });
  }

  //call on auth state chnaged (user)
  //set Current user (user)
  //return the auth state changed func

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }

      setIsAuthenticating(false);
      console.log("logged in");
      console.log(currentUser);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    isAuthenticating,

    startLogin,
    logOut,
  };
  //return
  //auth context.provider, pass in the values
  //then return the children .functions
  return (
    <AuthContext.Provider value={value}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
}
