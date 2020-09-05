import React, { Component } from 'react';

import { SignInForm } from './signInForm';
// import SimpleForm from './signInForm';

export default class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }

    render() {
        return (
            <div className='sign-in'>
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
                {/* <SimpleForm onSubmit={this.onSubmit} className='sign-in__form' /> */}
            </div>
        );
    }
}


