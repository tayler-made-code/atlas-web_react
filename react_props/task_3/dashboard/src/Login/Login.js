import React, { Fragment } from 'react';
import './Login.css';

function Login() {
  return (
    <Fragment>
      <div className="Login">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"></input>
        <button>OK</button>
      </div>
    </Fragment>
  );
}

export default Login;