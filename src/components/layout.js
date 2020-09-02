import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";           

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';

import Home from './home';

import SignUp from './pages/signUp';
import Login from './pages/singIn';

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
        <Router> 
        {this.props.children}
          <div >

            
            <Header />
            <Navbar />
  
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/login" component={Login} />
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default Layout;