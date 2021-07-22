import { render } from "@testing-library/react";
import Enzyme from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { Welcome } from "../Components/Welcome";
import { NavLink } from "react-router-dom";
import { shallow } from "enzyme";

Enzyme.configure({
  adapter: new Adapter(),
});

describe("welcome page", () => {
  const wrapper = shallow(<Welcome />);

  it("should render the welcome page", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain two nav links", () => {
    //find menu
    const navLink = wrapper.find("NavLink");
    expect(navLink).toHaveLength(2);
  });

  it("should contain a nav link called start quiz", () => {
    const navLinkDiv = wrapper.find("div");
    expect(
      navLinkDiv.containsMatchingElement(
        <NavLink to="/quiz">Start Quiz</NavLink>
      )
    ).toBe(true);
  });
  it("should contain a nav link called high scores", () => {
    const navLinkDiv = wrapper.find("div");
    expect(
      navLinkDiv.containsMatchingElement(
        <NavLink to="/highscores">High Scores</NavLink>
      )
    ).toBe(true);
  });
});
