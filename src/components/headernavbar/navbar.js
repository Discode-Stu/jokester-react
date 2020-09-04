import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`${className} navbar`}>
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
            <NavLink to="/sign-in" activeClassName="nav-link-active">
              Sign In
            </NavLink>
          </div>
        </div>
    //   </div>
    );
  }
}