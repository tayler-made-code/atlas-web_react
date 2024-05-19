import React, { Fragment, useState } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    height: '30rem',
    '@media (max-width: 900px)': {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
    },
  },
  loginP: {
    fontSize: '1.5rem',
    paddingTop: '2rem',
    paddingLeft: '2rem',
    margin: '0',
    '@media (max-width: 900px)': {
      fontSize: '1rem',
      paddingTop: '0',
      paddingLeft: '0',
      paddingBottom: '1rem',
    },
  },
  input: {
    '@media (max-width: 900px)': {
      display: 'block',
      marginBottom: '1rem',
    },
  },
  button: {
    '@media (max-width: 900px)': {
      marginTop: '0.5rem',
      width: '2.5rem',
    },
  },
});

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  cosnt [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  return (
    <Fragment>
      <div className={css(styles.login)}>
        <p className={css(styles.loginP)}>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
          />
          <input className={css(styles.button)} type="submit" value="OK" />
        </form>
      </div>
    </Fragment>
  );
}

export default Login;