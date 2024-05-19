import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </header>
  );
}

export default Header;