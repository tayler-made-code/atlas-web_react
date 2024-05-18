import React, { Fragment } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    height: '30rem',
  },
  loginP: {
    fontSize: '1.5rem',
    paddingTop: '2rem',
    paddingLeft: '2rem',
  },
});

function Login() {
  return (
    <Fragment>
      <div className={css(styles.login)}>
        <p className={css(styles.loginP)}>Login to access the full dashboard</p>
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