import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import SignUpForm from "./signUpForm";
import PageTitle from "../pageTitle/pageTitle";
export default class SignUp extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-up">
        <PageTitle className="sign-up__page-title" title="Register" />
        <NavLink
          className="sign-up__sign-in-link"
          to="/sign-in"
          activeClassName="nav-link-active"
        >
          <div className="sign-up__sign-in-link__text">Already a member? Login here!</div>
          <FontAwesomeIcon className="fas" title="Login" icon="sign-in-alt" />
        </NavLink>
        <SignUpForm onSubmit={this.onSubmit} className="sign-up__form" />
        <img
          className="sign-up__jester"
          src={require("./../../../src/images/jesterGirl.png")}
        />
      </div>
    );
  }
}
