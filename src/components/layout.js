import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";      
import axios from 'axios';     

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

import Home from './home';

import SignUp from './pages/signUp';
import SignIn from './pages/signIn';

import history from '../history';
import LogoutButton from './pages/logout';
import Profile from './pages/profile';

// let audioContext = () => {
//   new AudioContext();
//   return audioContext;
// }



// window.onload=function(){
   
  
//   document.addEventListener("click", () =>  {
//     const ctx = new (window.AudioContext || window.webkitAudioContext)();

//     ctx.resume().then(() => console.log(ctx.state))
    
//   })
// }

class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"

    })
  }
  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"

    })
  }

  // checkLoginStatus() {
  //   const config = {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
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
  // }

  // componentDidMount() {
  //   console.log('component did mount');
  //   this.checkLoginStatus();
  // }

  render() {
    
    return (
      <div className='container'>
        <Router history={history}> 
        {this.props.children}
          <div className='layout'>
            <Header className='layout__header' />
            <Navbar className='layout__navbar' />
            <h2>{this.state.loggedInStatus}</h2>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/v2/logout" component={LogoutButton} />
              <Route path="/profile" component={Profile} />

              {/* <Route 
                path="/sign-in" 
                render={props => (
                  <SignIn
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              
              /> */}
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