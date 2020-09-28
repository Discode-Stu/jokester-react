import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileIcon from "./profileIcon";




export default class NavigationComponent extends Component {
  constructor(props) {
    super(props);
  }

  dynamicLink = (route) => {
    return (
          <div className="nav-link-wrapper">
            <NavLink className='nav-link-wrapper__link' to="/cart" activeClassName="nav-link-active">
              <FontAwesomeIcon className='fas' title='cart' icon="cart-plus"/>
            </NavLink>
          </div>
    )
  }


  render() {
    const { className } = this.props;
    return (
        <div className={`${className} navbar`}>

          <div className="nav-link-wrapper">
            <NavLink  className='nav-link-wrapper__link' exact to="/home" activeClassName="nav-link-active">
              <FontAwesomeIcon className='fas' title='Home' icon="home"/>
            </NavLink>
          </div>
          <ProfileIcon />

          <div className="nav-link-wrapper">
            <NavLink className='nav-link-wrapper__link' to="/login" activeClassName="nav-link-active">
              <FontAwesomeIcon className='fas' title='Sign Up' icon="user-plus"/>
            </NavLink>
          </div>
          {/* <div className="nav-link-wrapper">
            <NavLink className='nav-link-wrapper__link' to="/login" activeClassName="nav-link-active">
              <FontAwesomeIcon className='fas' title='Login' icon="sign-in-alt"/>
            </NavLink>
          </div> */}
          <div className="nav-link-wrapper">
            <NavLink className='nav-link-wrapper__link' to="/logout" activeClassName="nav-link-active">
              <FontAwesomeIcon className='fas' title='Logout' icon="sign-out-alt"/>
            </NavLink>
          </div>
          {this.props.loggedInStatus === "LOGGED_IN" ? (this.dynamicLink("/cart")) : null}
        </div>
    //   </div>
    );
  }
}