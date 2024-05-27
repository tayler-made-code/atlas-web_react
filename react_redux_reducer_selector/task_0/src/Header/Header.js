import React, { Component } from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '16rem',
  },
  title: {
    color: '#E0354B',
    fontSize: '3rem',
    fontStyle: 'bold',
  },
  logoutSection: {
    fontWeight: 'bold',
    marginLeft: '1rem',
  },
});

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
        {user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </div>
        )}
      </header>
    );
  }
}

export default Header;