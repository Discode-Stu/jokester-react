import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
  }

  dynamicLink = (route, title, icon) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink
          className="nav-link-wrapper__link"
          to={route}
          activeClassName="nav-link-active"
        >
          <FontAwesomeIcon className="fas" title={title} icon={icon} />
        </NavLink>
      </div>
    );
  };

  render() {
    const { className, loggedInStatus } = this.props;
    return (
      <div className={`${className} navbar`}>
        <div className="nav-link-wrapper">
          <NavLink
            className="nav-link-wrapper__link"
            exact
            to="/"
            activeClassName="nav-link-active"
          >
            <FontAwesomeIcon className="fas" title="Home" icon="home" />
          </NavLink>
        </div>
        {loggedInStatus === "NOT_LOGGED_IN"
          ? this.dynamicLink("/sign-in", "Login", "sign-in-alt")
          : null}
        {loggedInStatus === "NOT_LOGGED_IN"
          ? this.dynamicLink("/sign-up", "Login", "user-plus")
          : null}
        {loggedInStatus === "LOGGED_IN"
          ? this.dynamicLink("/profile", "Profile", "address-card")
          : null}
        {loggedInStatus === "LOGGED_IN"
          ? this.dynamicLink("/logout", "Logout", "sign-out-alt")
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(NavigationComponent);
