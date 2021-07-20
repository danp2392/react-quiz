import ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import App from "./App";
import { AuthProvider } from "./auth/auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
