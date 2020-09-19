import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";           

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

import Home from './home';

import SignUp from './pages/signUp';
import SignIn from './pages/signIn';

import history from '../history';

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
    this.handleUnSuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
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
              <Route 
                exact path="/shop"
                render={props => (
                  <Shop
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}
              
              />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/sign-up" component={SignUp} />
  
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default Layout;