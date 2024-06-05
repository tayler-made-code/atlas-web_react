import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { css, StyleSheet } from 'aphrodite';
import { AppContext, defaultUser, defaultLogOut } from './AppContext';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';
import { loginRequest } from '../actions/uiActionCreators';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const styles = StyleSheet.create({
  hr: {
    border: '2px solid #E0354B',
  },
  body: {
    textAlign: 'center',
  },
  footer: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: defaultLogOut,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { listNotifications } = this.state;
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, login } = this.props;

    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.logOut }}>
        <React.Fragment>
          <Notifications
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
          />
          <div>
            <Header />
            <hr className={css(styles.hr)} />
            {isLoggedIn ? (
              <BodySectionWithMarginBottom className={css(styles.body)} title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom className={css(styles.body)} title="Log in to continue">
                <Login logIn={this.login} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection className={css(styles.body)} title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna vel nunc
                pharetra, ac fringilla tellus faucibus.
              </p>
            </BodySection>
            <hr className={css(styles.hr)} />
            <Footer className={css(styles.footer)} />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  logOut: () => {},
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isUserLoggedIn,
    displayDrawer: state.ui.isNotificationDrawerVisible,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);