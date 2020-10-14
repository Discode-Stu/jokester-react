import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { FormInput, FormButton } from "../formFields/formFields";

import { signIn } from "../../actions/authActions";

class SignInForm extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { className } = this.props;
    const { uid } = this.props;
    if (uid) return <Redirect to="/" />;
    return (
      <form
        onSubmit={this.handleSubmit}
        className={`${className} sign-in-form`}
      >
        <Field
          className="sign-in-form__email"
          id="email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          onChange={this.handleChange}
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          id="password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
          component={FormInput}
        />
        <div className="sign-in-form__line"></div>
        <Field
          className="sign-in-form__login"
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
