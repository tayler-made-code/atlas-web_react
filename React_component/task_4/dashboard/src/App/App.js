import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.logOut);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.logOut);
  }

  logOut(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <React.Fragment>
        <div className="App">
          <Notifications displayDrawer={isLoggedIn} listNotifications={listNotifications} />
          <Header />
          <hr />
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course List">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
              tincidunt ligula, et pharetra nisl. Mauris suscipit, lectus sit amet
              dictum efficitur, libero odio accumsan metus, ut sollicitudin odio
              ligula sit amet ex. In sed nulla nec elit sollicitudin tincidunt.
              Nullam dictum, elit et ultricies gravida, turpis enim iaculis ligula,
              nec feugiat nunc mi ac dui. In hac habitasse platea dictumst.
            </p>
          </BodySection>
          <hr />
          <Footer />
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
  logOut: () => {},
};

export default App;