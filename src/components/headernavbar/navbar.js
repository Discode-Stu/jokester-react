import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileIcon from "./profileIcon";




export default class NavigationComponent extends Component {
  constructor(props) {
    super(props);
  }

  // dynamicLink = (route, name) => {
  //   return (
      
  //         <div className="nav-link-wrapper">
  //           <NavLink className='nav-link-wrapper__link' to="/cart" activeClassName="nav-link-active">
  //             <FontAwesomeIcon className='fas' title='cart' icon="cart-plus"/>
  //           </NavLink>
  //         </div>,
      
  //         <div className="nav-link-wrapper">
  //           <NavLink className='nav-link-wrapper__link' to="/logout" activeClassName="nav-link-active">
  //             <FontAwesomeIcon className='fas' title='Logout' icon="sign-out-alt"/>
  //           </NavLink>
  //         </div>
  //   )
  // }
  dynamicLink = (route, title, icon) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink className='nav-link-wrapper__link' to={route} activeClassName="nav-link-active">
        <FontAwesomeIcon className='fas' title={title} icon={icon}/>
        </NavLink>
      </div>
    );
  };


  render() {
    const { className, loggedInStatus } = this.props;
    return (
        <div className={`${className} navbar`}>

          <div className="nav-link-wrapper">
            <NavLink  className='nav-link-wrapper__link' exact to="/" activeClassName="nav-link-active">
              <FontAwesomeIcon className='fas' title='Home' icon="home"/>
            </NavLink>
          </div>
          {/* <ProfileIcon /> */}
{/* 
          {this.props.loggedInStatus === "NOT_LOGGED_IN" ? (
            <div className="nav-link-wrapper">
              <NavLink className='nav-link-wrapper__link' to="/login" activeClassName="nav-link-active">
                <FontAwesomeIcon className='fas' title='Sign Up' icon="user-plus"/>
              </NavLink>
            </div>) : null}
          */}
          {/* <div className="nav-link-wrapper">
            <NavLink className='nav-link-wrapper__link' to="/login" activeClassName="nav-link-active">
              <FontAwesomeIcon className='fas' title='Login' icon="sign-in-alt"/>
            </NavLink>
          </div> */}
                    {/* <NavLink  className='nav-link-wrapper__link' exact to="/profile" activeClassName="nav-link-active">
            <FontAwesomeIcon className='fas' title='Profile' icon="address-card"/>
          </NavLink> */}
          {loggedInStatus === "NOT_LOGGED_IN" ? (this.dynamicLink("/login", "Login", "user-plus")) : null}
          {loggedInStatus === "LOGGED_IN" ? (this.dynamicLink("/profile", "Profile", "address-card")) : null}
          {/* {this.props.loggedInStatus === "LOGGED_IN" ? (this.dynamicLink("/cart", "Cart", "cart-plus")) : null} */}
          {loggedInStatus === "LOGGED_IN" ? (this.dynamicLink("/logout", "Logout", "sign-out-alt")) : null}
           
        </div>
    //   </div>
    );
  }
}