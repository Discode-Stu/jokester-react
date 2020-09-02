import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-wrapper">
        {/* <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div> */}

          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/sign-up" activeClassName="nav-link-active">
              Sign Up
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/login" activeClassName="nav-link-active">
              Sign In
            </NavLink>
          </div>
        </div>
    //   </div>
    );
  }
}