//the default behaviour of the browser is that is refreshes the page and send the http requests
// you can see that the below code that console gets clearred evvery time + also see the url

import { useState } from "react";

export default function Login() {
  // const [enteredEmail,setEnteredEmail] = useState('')
  // const [enteredPassword,setEnteredPassword] = useState('')
  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  })

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues)
  }


  // // this is a function which stores the email , but we also have a password field so we have to add another function for this so we can do one thing we can create a generic function which stores both the value 
  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange('email', event.target.value)} value={enteredValues.email} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)} value={enteredValues.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
