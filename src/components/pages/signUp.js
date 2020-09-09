import React, { Component } from 'react';

import { SignUpForm } from './signUpForm';
import PageTitle from '../pageTitle/pageTitle';
export default class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields)
    }

    render() {
        return (
            <div className='sign-up'>
                <PageTitle className='sign-up__page-title' title='Register' />
                <SignUpForm onSubmit={this.onSubmit} className='sign-up__form' />
                <img className='sign-up__jester' src={ require('./../../../src/images/jesterGirl.png') } />
            </div>
        );
    }
}
