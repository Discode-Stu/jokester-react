import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;









// import React, { Component } from 'react';

// import { SignInForm } from './signInForm';
// import PageTitle from '../pageTitle/pageTitle';


// export default class SignIn extends Component {
//     constructor(props) {
//         super(props);
    
//         this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
//         this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
//       }
  
//       handleSuccessfulAuth() {
//           this.props.handleSuccessfulLogin();
//           this.props.history.push('/');
//       }
  
//       handleUnsuccessfulAuth() {
//           this.props.handleUnsuccessfulLogin();
//       }

//     onSubmit = (fields) => {
//         console.log(fields)
//     }

//     render() {
//         return (
//             <div className='sign-in'>
//                 <PageTitle className='sign-in__page-title' title='Login' />
//                 <SignInForm 
//                 onSubmit={this.onSubmit} 
//                 className='sign-in__form'
//                 handleSuccessfulAuth={this.handleSuccessfulAuth} 
//                 handleUnsuccessfulAuth={this.handleUnsuccessfulAuth} />
//                 <img className='sign-in__jester' src={ require('./../../../src/images/jesterGirl.png') } />
//             </div>
//         );
//     }
// } 


