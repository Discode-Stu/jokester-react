import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";      
import axios from 'axios';     
import { useAuth0 } from "@auth0/auth0-react";
import fire from './config/fire';
import Login from './firebase/firebaseLogin'

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

import Home from './home';

import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Cart from './pages/cart'

import history from '../history';
import LogoutButton from './pages/logout';
import Profile from './pages/profile';
import CheckLoginStatus from './checkLoginStatus';


//google client id:
//221077656939-lp4rchcgb374at8f5tale3er8ou9sq6c.apps.googleusercontent.com
//client secret:
//aSZyqHpk9TZIeEFPPqtSWCpN


class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: null
    }
    // this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    // this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
    this.authListener = this.authListener.bind(this)
  }

  authListener() {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ 
            user,
            loggedInStatus: "LOGGED_IN"
           })
          // this.setState({loggedInStatus: "LOGGED_IN"})
        } else {
          this.setState({ user: null,
            loggedInStatus: "NOT_LOGGED_IN"
           });
          // (this.setState({loggedInStatus: "NOT_LOGGED_IN"}))
        }
      })

  }
  handleLoginStatus() {
    if (this.state.user){
      (this.setState({loggedInStatus: "LOGGED_IN"}))
    } else {
      (this.setState({loggedInStatus: "NOT_LOGGED_IN"}))
    } 
  }
  

  // handleSuccessfulLogin() {
  //   this.setState({
  //     loggedInStatus: "LOGGED_IN"
  //   })
  // }

  // handleUnsuccessfulLogin() {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN"
  //   })
  // }

  //  checkLoginStatus() {
    // const { user, isAuthenticated, isLoading } = useAuth0();
    //  console.log(isAuthenticated)
  //   const config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET, POST"
  //     }
  //   }

  //   return axios.get("http://localhost:5000/login",
  //   config,
  //   { withCredentials: true })
  //   .then(response => {
  //     const loggedIn = response.data
  //     const loggedInStatus = this.state.loggedInStatus;
  //     console.log('login response', response);
  //   });
  //  }

  componentDidMount() {
    //  console.log('component did mount');
    //  this.checkLoginStatus();
    this.authListener()
    // this.handleLoginStatus()

  }

  authorizedRoutes() {
    return [
      <Route path="/cart" component={Cart} />
    ]
  }

  render() {
    
    
    return (
      <div className='container'>
        {/* <CheckLoginStatus /> */}
        <Router history={history}> 
        {this.props.children}
          <div className='layout'>
            <Header className='layout__header' />
            <Navbar className='layout__navbar' loggedInStatus={this.state.loggedInStatus}/>
            <h2>{this.state.loggedInStatus}</h2>
            {/* {this.state.user ? (<Home/>) : (<Login/>)} */}
            <Switch>
              <Route path="/home" component={Home} />
              
              {/* <Route path="/sign-in" component={SignIn} /> */}
              <Route path="/logout" component={LogoutButton} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              {this.authorizedRoutes}
              


              <Route 
                path="/sign-in" 
                render={props => (
                  <SignIn
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  // authListener={this.authListener}
                  />
                )}
              
              />
              {/* <Route path="/sign-in" component={SignIn} /> */}
              <Route path="/sign-up" component={SignUp} />
  
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default Layout;