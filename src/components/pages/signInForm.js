import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput } from './formFields';




export class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' type='email' title='Email' placeholder='Email' name='email' component={FormInput}></Field>
                <Field className='sign-in-form__password' type='password' title='Password' placeholder='Password' name='password' component={FormInput}></Field>
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)
