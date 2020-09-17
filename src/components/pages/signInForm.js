import React, { Component } from 'react';
import axios from "axios";

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from './formFields';

export class SignInForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoginData = () => {
    
    
    

    }

    handleSubmit = event => {
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
        axios
        .post(
            // "https://cors-anywhere.herokuapp.com/https://dts-jokester-api.herokuapp.com/login",
            "https://dts-jokester-api.herokuapp.com/login",
            config,
          {
            User: {
              email: this.state.email,
              password: this.state.password
            }
          },
          { withCredentials: true }
        )
        .then(res => {
            console.log(res);
            console.log(res.data)
        }).catch(error => {
            console.log(error);
        });
  
      event.preventDefault();
    };




    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' type='email' title='Email' placeholder='Email' name='email' onChange={this.handleChange} component={FormInput} />
                <Field className='sign-in-form__password' type='password' title='Password' placeholder='Password' name='password' onChange={this.handleChange} component={FormInput} />
                <div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login' onClick={console.log('tryna submit')} type='submit' title='Login' name='login' component={FormButton} />
            </form>
        );
    } 
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)

