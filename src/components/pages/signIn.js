import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SignInForm from "./signInForm";
import PageTitle from "../pageTitle/pageTitle";

export default class SignIn extends Component {
  onSubmit = (fields) => {
    console.log(fields);
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in__page-title" title="Login" />
        <NavLink
          className="sign-in__sign-up-link"
          to="/sign-up"
          activeClassName="nav-link-active"
        >
          <div className="sign-in__sign-up-link__text">
            New to Jokester? Click here!{" "}
          </div>
          <FontAwesomeIcon className="fas" title="Sign Up" icon="user-plus" />
        </NavLink>
        <SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
        <img
          className="sign-in__jester"
          src={require("./../../../src/images/jesterGirl.png")}
        />
      </div>
    );
  }
}
