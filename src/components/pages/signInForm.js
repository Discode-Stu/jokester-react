import React, { Component } from 'react';
import axios from "axios";

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from './formFields';

import history from '../../history';


export class SignInForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: "",
          errorText: ""
        };
    }

    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value,
            errorText: ""
        });
      
    }
    
    historyPush = () => {
        history.push('/')
    }

    

    handleSubmit = event => {
        const config = {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
          };
        axios
        .post("http://localhost:5000/login",
            // "https://cors-anywhere.herokuapp.com/https://dts-jokester-api.herokuapp.com/login",
            // "https://dts-jokester-api.herokuapp.com/login",
          {
            
            email: this.state.email,
            passwordToHash: this.state.password
        
          },
          config,
          { withCredentials: true }
        )
        .then(res => {
            console.log(res);
            console.log(res.data);
            if (res.status === 200) {
                // this.setState({
                //     errorText: res.data
                // })
                this.props.handleSuccessfulAuth
                //  this.historyPush();
            }
        }).catch(error => {
            console.log(error.response);
            if (error.response){
            this.setState({
                errorText: error.response.data
            })} else {
                this.setState({
                    errorText: "An Error Occurred"
                })
            }
        });
  
      event.preventDefault();
    };




    render() {
        const { className, handleSubmit } = this.props;
        return (
            <div>
                <div>{this.state.errorText}</div>
                <form onSubmit={this.handleSubmit} className={`${className} sign-in-form`}>
                    <Field className='sign-in-form__email' type='email' title='Email' placeholder='Email' name='email' onChange={this.handleChange} component={FormInput} />
                    <Field className='sign-in-form__password' type='password' title='Password' placeholder='Password' name='password' onChange={this.handleChange} component={FormInput} />
                    <div className='sign-in-form__line'></div>
                    <Field className='sign-in-form__login' onClick={console.log('tryna submit')} type='submit' title='Login' name='login' component={FormButton} />
                </form>
            </div>

        );
    } 
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)

