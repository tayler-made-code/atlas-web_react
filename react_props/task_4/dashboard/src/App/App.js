import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications displayDrawer={isLoggedIn} />
      <div className="App">
        <Header />
        <hr />
        {isLoggedIn ? <CourseList /> : <Login />}
        <hr />
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;