import React, { Component } from 'react';
import axios from 'axios';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from './formFields';

export class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirm: ''
        };
      }
    
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ [e.target.email]: event.target.value });
        // this.setState({ [e.target.password]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)

        const { name, email, password, confirm } = this.state;

        const user = {
            name: name,
            email: email,
            password: password,
            confirm: confirm

        };
        
        if (password !== confirm) {
            alert("Passwords don't match");
        } else {
    
        axios.post("https://dts-jokester-api.herokuapp.com/user", this.state)
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
        }
    }


    render() {
        const { className, handleSubmit } = this.props;
        const { name, email, password, confirm } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name' type='name' title='Name' placeholder='Name' name='name' value={name} onChange={this.handleChange} component={FormInput} />
                <Field className='sign-up-form__email' type='email' title='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange}  component={FormInput} />
                <Field className='sign-up-form__password' type='password' title='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange}  component={FormInput} />
                <Field className='sign-up-form__confirm' type='password' title='Confirm Password' placeholder='Confirm Password' name='confirm' value={confirm} onChange={this.handleChange} component={FormInput} />
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