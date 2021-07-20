import { firebase, googleProvider } from "./firebase";
import { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }

      setIsAuthenticating(false);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    isAuthenticating,

    startLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
}
