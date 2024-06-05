import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.ui.user,
});
 
function Footer({ user }) {
  return (
    <footer className="Footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {user && user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </footer>
  );
}

export default connect(mapStateToProps)(Footer);