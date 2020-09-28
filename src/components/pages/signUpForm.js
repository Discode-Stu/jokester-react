import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import fire from '../config/fire';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from './formFields';

import history from '../../history';
import { NavLink } from 'react-router-dom';

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

    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Successfully Signed Up")
        })
        .catch((err) => {
            console.log("Error: " + err.toString());
        })
    }

    // validatePassword = () => {
    //     const {password} = this.state;

    //     var passwordValidator = require('password-validator');
    //     var schema = new passwordValidator();

    //     schema.is().min(8).is().max(20).has().uppercase().has().lowercase().has().digits(2);
    //     console.log(schema.validate(password));

    //     return (schema.validate(password));
    // }



    //     axios
    //     // .post"https://dts-jokester-api.herokuapp.com/login",
    //     .post("http://localhost:5000/register",
    //     {
    //           name: this.state.name,
    //           email: this.state.email,
    //           passwordToHash: this.state.password
    //     },
    //     config,
    //     { withCredentials: true }
    //     )
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data)
    //     }).catch(error => {
    //         console.log(error.response);
    //     });
    //     event.preventDefault();
    // }

    // historyPush = () => {
    //     history.push('/')
    // }

    // handleChange = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state)
    //     console.log(event)
 
    //     const { password, confirm } = this.state;

    //     if (password !== confirm) {
    //         alert("Passwords don't match");
    //     } else 
    //     // { this.validatePassword() 
    //     //     ? (this.postUserData(), this.historyPush())
    //         // : 
    //        { alert("Password must be 8-20 characters long, must contain two digits and must contain a capital and lowercase letter.")
    //     }
    // };

    render() {
        const { className, handleSubmit } = this.props;
        const { name, email, password, confirm } = this.state;
        return (
            // <form onSubmit={this.login} onReset={this.resetForm} id="sign-up-form" className={`${className} sign-up-form`}>
            //     <Field className='sign-up-form__name' type='name' title='Name' placeholder='Name' name='name' value={name} onChange={this.handleChange} component={FormInput} />
            //     <Field className='sign-up-form__email' id='email' type='email' title='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange}  component={FormInput} />
            //     <Field className='sign-up-form__password' id='password' type='password' title='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange}  component={FormInput} />
            //     <Field className='sign-up-form__confirm' type='password' title='Confirm Password' placeholder='Confirm Password' name='confirm' value={confirm} onChange={this.handleChange} component={FormInput} />
            //     <div className='sign-up-form__line'></div>
            //     <Field className='sign-up-form__login' onClick={() => console.log('creating account')} type='submit' title='Login' name='login' component={FormButton} />
            //     <Field className='sign-up-form__back' onClick={() => console.log('tryna go back')} type='button' title='Back' name='back' back={true} component={FormButton} />
            // </form>
            <form onSubmit={this.login} onReset={this.resetForm} id="sign-up-form" className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name' type='name' title='Name' placeholder='Name' name='name' value={name} onChange={this.handleChange} component={FormInput} />
                <Field className='sign-up-form__email' id='email' type='email' title='Email' placeholder='Email' name='email' value={email} onChange={this.handleChange}  component={FormInput} />
                <Field className='sign-up-form__password' id='password' type='password' title='Password' placeholder='Password' name='password' value={password} onChange={this.handleChange}  component={FormInput} />
                <Field className='sign-up-form__confirm' type='password' title='Confirm Password' placeholder='Confirm Password' name='confirm' value={confirm} onChange={this.handleChange} component={FormInput} />
                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login' onClick={() => console.log('creating account')} type='submit' title='Login' name='login' component={FormButton} />
                <Field className='sign-up-form__back' onClick={() => console.log('tryna go back')} type='button' title='Back' name='back' back={true} component={FormButton} />
            </form>
        );
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm)