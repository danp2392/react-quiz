import { Login } from "../Components/Login";
import React from "react";
import { AuthContext } from "../auth/auth";

import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom";

describe("Login page", () => {
  //need to wrap login inside auth provider to render snapshot

  const container = document.createElement("div");
  document.body.appendChild(container);

  ReactDOM.render(
    <AuthContext.Provider value={{}}>
      <Login />
    </AuthContext.Provider>,
    container
  );

  it("should have a header 3 that says React Quiz App", () => {
    const header = container.querySelector("h3");
    expect(header.textContent).toBe("React Quiz App");
  });
  it("should have a header 5 that says 'TAKE 10 RANDOM QUESTIONS AND FIND OUT HOW SMART YOU ARE'", () => {
    const subHeading = container.querySelector("h5");
    expect(subHeading.textContent).toBe(
      "Take 10 random questions and find out how smart you are"
    );
  });
  it("should render a login button with the label 'LOGIN'", () => {
    const loginButton = container.querySelector("button");
    expect(loginButton.textContent).toBe("LOGIN");
  });

  it("should render a react logo image", () => {
    const reactLogo = container.querySelector("img[src='logo192.png']");
    expect(reactLogo).toBeTruthy();
  });
});
