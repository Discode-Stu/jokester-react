import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from './formFields';

export class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email' type='email' title='Email' placeholder='Email' name='email' component={FormInput} />
                <Field className='sign-in-form__password' type='password' title='Password' placeholder='Password' name='password' component={FormInput} />
                <div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login' onClick={console.log('tryna submit')} type='submit' title='Login' name='login' component={FormButton} />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm)


// import React from 'react'
// import { Field, reduxForm } from 'redux-form'

// const SimpleForm = (props) => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>First Name</label>
//         <div>
//           <Field name="firstName" component="input" type="text" placeholder="First Name"/>
//         </div>
//       </div>
//       <div>
//         <label>Last Name</label>
//         <div>
//           <Field name="lastName" component="input" type="text" placeholder="Last Name"/>
//         </div>
//       </div>
//       <div>
//         <label>Email</label>
//         <div>
//           <Field name="email" component="input" type="email" placeholder="Email"/>
//         </div>
//       </div>
//       <div>
//         <label>Sex</label>
//         <div>
//           <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
//           <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
//         </div>
//       </div>
//       <div>
//         <label>Favorite Color</label>
//         <div>
//           <Field name="favoriteColor" component="select">
//             <option></option>
//             <option value="ff0000">Red</option>
//             <option value="00ff00">Green</option>
//             <option value="0000ff">Blue</option>
//           </Field>
//         </div>
//       </div>
//       <div>
//         <label htmlFor="employed">Employed</label>
//         <div>
//           <Field name="employed" id="employed" component="input" type="checkbox"/>
//         </div>
//       </div>
//       <div>
//         <label>Notes</label>
//         <div>
//           <Field name="notes" component="textarea"/>
//         </div>
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>Submit</button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
//       </div>
//     </form>
//   )
// }

// export default reduxForm({
//   form: 'simple'  // a unique identifier for this form
// })(SimpleForm)
