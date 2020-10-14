import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import fire from "./config/fire";

import Header from "./headernavbar/header";
import Navbar from "./headernavbar/navbar";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import NoMatch from "./pages/noMatch";
import Logout from "./pages/logout";
import Profile from "./pages/profile";

import history from "../history";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: null,
    };
    this.authListener = this.authListener.bind(this);
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
          loggedInStatus: "LOGGED_IN",
        });
      } else {
        this.setState({ user: null, loggedInStatus: "NOT_LOGGED_IN" });
      }
    });
  }
  handleLoginStatus() {
    if (this.state.user) {
      this.setState({ loggedInStatus: "LOGGED_IN" });
    } else {
      this.setState({ loggedInStatus: "NOT_LOGGED_IN" });
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authorizedRoutes() {
    return [
      <Route key="profile" path="/profile" component={Profile} />,
      <Route key="logout" path="/logout" component={Logout} />,
    ];
  }

  render() {
    return (
      <div className="container">
        <Router history={history}>
          {this.props.children}
          <ToastContainer />
          <div className="layout">
            <Header className="layout__header" />
            <Navbar
              className="layout__navbar"
              loggedInStatus={this.state.loggedInStatus}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              {this.state.loggedInStatus === "LOGGED_IN"
                ? this.authorizedRoutes()
                : null}
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default Layout;
