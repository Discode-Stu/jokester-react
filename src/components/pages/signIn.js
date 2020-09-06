import React, { Component } from 'react';

import { SignInForm } from './signInForm';
import PageTitle from '../pageTitle/pageTitle';
export default class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }

    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Login' />
                <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
                <img className='sign-in__jester' src={ require('./../../../src/images/jesterGirl.png') } />
            </div>
        );
    }
}


