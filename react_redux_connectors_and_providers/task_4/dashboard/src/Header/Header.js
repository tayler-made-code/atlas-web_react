import React, { Component } from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

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

const mapStateToProps = (state) => ({
  user:state.ui.user,
});

const mapDispatchToProps = {
  logout,
};

class Header extends Component {
  render() {
    const { user, logOut } = this.props;

    return (
      <header className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
        {user && user.isLoggedIn && (
          <div id="logoutSection" className={css(styles.logoutSection)}>
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </div>
        )}
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);