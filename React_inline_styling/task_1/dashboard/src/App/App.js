import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { css, StyleSheet } from 'aphrodite';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
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
    const { isLoggedIn } = this.props;

    return (
      <React.Fragment>
        <Notifications displayDrawer={isLoggedIn} listNotifications={listNotifications} />
        <div>
          <Header />
          <hr className={css(styles.hr)} />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom className={css(styles.body)} title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom className={css(styles.body)} title="Log in to continue">
              <Login />
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
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;