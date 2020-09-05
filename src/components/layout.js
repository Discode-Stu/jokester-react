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

class Layout extends Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div className='container'>
        <Router history={history}> 
        {this.props.children}
          <div className='layout'>
            <Header className='layout__header' />
            <Navbar className='layout__navbar' />
            <Switch>
              <Route exact path="/" component={Home} />
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