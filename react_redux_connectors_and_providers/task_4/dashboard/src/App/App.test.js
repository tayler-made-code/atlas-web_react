import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mapStateToProps } from './App';

StyleSheetTestUtils.suppressStyleInjection();

const mockStore = configureStore([]);

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      }),
    };

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true, displayDrawer: false });
  });
});

describe('App', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ui: fromJS({
        isUserLoggedIn: false,
        isNotificationDrawerVisible: false,
      }),
    });
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('does not contain the CourseList component when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });
    
  it('does not contain the Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('contains the CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });

  it('updates the state correctly when logIn is called', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
        </Provider>
    );
    const email = 'test@email.com';
    const password = 'testpassword';
    wrapper.instance().logIn(email, password);
    expect(wrapper.state().user).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  it('updates the state correctly when logOut is called', () => {
    const initialState = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      }),
    };
  
    const store = mockStore(initialState);
  
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    // Dispatch the logOut action
    store.dispatch({ type: 'LOG_OUT' });
  
    const updatedState = store.getState();
    expect(updatedState.ui.get('isUserLoggedIn')).toBe(false);
  });
});