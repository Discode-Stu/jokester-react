import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from './formFields';

export class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name' type='name' title='Name' placeholder='Name' name='name' component={FormInput} />
                <Field className='sign-up-form__email' type='email' title='Email' placeholder='Email' name='email' component={FormInput} />
                <Field className='sign-up-form__password' type='password' title='Password' placeholder='Password' name='password' component={FormInput} />
                <Field className='sign-up-form__confirm-password' type='password' title='Confirm Password' placeholder='Confirm Password' name='confirm' component={FormInput} />
                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login' onClick={() => console.log('tryna submit')} type='submit' title='Login' name='login' component={FormButton} />
                <Field className='sign-up-form__back' onClick={() => console.log('tryna go back')} type='button' title='Back' name='back' back={true} component={FormButton} />
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm)