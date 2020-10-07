import React from 'react';
import fire from '../config/fire';

import history from '../../history'


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: ''
    } 
     
    this.signUp = this.signUp.bind(this)
    this.login = this.login.bind(this)

  }

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
        history.push('/');
      })
      .catch((err) => {
        console.log(err.toString())
        console.log(err)
        this.setState({
          errorMessage: err.message
        })
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
        history.push('/');
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          errorMessage: err.message
        })
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {/* { this.state.errorMessage &&
          <h3 className="error"> { this.state.errorMessage } </h3> } */}
          { this.state.errorMessage }
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="password"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;