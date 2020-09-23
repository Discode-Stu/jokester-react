import React, { Component } from 'react';
import SignIn from '../pages/signIn';



export default class Auth extends Component {
    constructor(props) {
      super(props);
  
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
      this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth() {
        this.props.handleSuccessfulLogin();
        // this.props.history.push('/');
    }

    handleUnsuccessfulAuth() {
        this.props.handleUnsuccessfulLogin();
    }

  


    render() {
        return(
            <div>
            <SignIn 
                handleSuccessfulAuth={this.handleSuccessfulAuth} 
                handleUnsuccessfulAuth={this.handleUnsuccessfulAuth} />
            </div>
        )
    }

}