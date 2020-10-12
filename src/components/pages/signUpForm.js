import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { signUp } from "../../actions/authActions";
import { toast } from "react-toastify";

import fire from "../config/fire";

import { reduxForm, Field } from "redux-form";
import { Redirect } from "react-router-dom";

import { FormInput, FormButton } from "./formFields";

import history from "../../history";
import { NavLink } from "react-router-dom";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validatePassword = () => {
    const { password } = this.state;

    var passwordValidator = require("password-validator");
    var schema = new passwordValidator();

    schema
      .is()
      .min(8)
      .is()
      .max(20)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits(2);
    console.log(schema.validate(password));

    return schema.validate(password);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // this.props.signUp(this.state);
    {
      this.validatePassword()
        ? this.props.signUp(this.state)
        : toast.error(
            "Password must be 8-20 characters long, must contain two digits and must contain a capital and lowercase letter."
          );
    }
  };

  render() {
    const { uid } = this.props;
    if (uid) return <Redirect to="/" />;
    const { className } = this.props;
    const { email, password } = this.state;
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
      <form
        onSubmit={this.handleSubmit}
        id="sign-up-form"
        className={`${className} sign-up-form`}
      >
        <Field
          className="sign-up-form__email"
          id="email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
          component={FormInput}
        />
        <Field
          className="sign-up-form__password"
          id="password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={this.handleChange}
          component={FormInput}
        />
        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__login"
          onClick={() => console.log("creating account")}
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm",
})(SignUpForm);

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
