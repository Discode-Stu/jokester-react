import React, { Component } from 'react';

import SignUpForm from './signUpForm';

export default class SignUp extends Component {
    render() {
        return (
            <div className='sign-up'>
                <SignUpForm className='sign-up__form' />
            </div>
        );
    }
}
