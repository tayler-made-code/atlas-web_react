import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

StyleSheetTestUtils.suppressStyleInjection();

const mockStore = configureStore([]);

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    let state = {
      ui: {
        isUserLoggedIn: true,
      },
    };

    const result = mapStateToProps(state);
    expect(result).toEqual({ isLoggedIn: true });
  });
});

describe('App', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      ui: {
        isUserLoggedIn: false,
      },
    });
  });

  it('contains the Notifications component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  it('contains the Footer component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  it('does not contain the CourseList component when isLoggedIn is false', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  describe('App when isLoggedIn is true', () => {
    let wrapper;
    beforeEach(() => {
      const store = mockStore({
        ui: {
          isUserLoggedIn: true,
        },
      });

      wrapper = shallow(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });
    
    it('does not contain the Login component', () => {
      expect(wrapper.find(Login)).toHaveLength(0);
    });

    it('contains the CourseList component', () => {
      expect(wrapper.find(CourseList)).toHaveLength(1);
    });
  });

  it('calls logOut and alert when control and h are pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = mount(
      <Provider store={store}>
        <App logOut={logOutMock} />
      </Provider>
    );

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
    wrapper.unmount();
  });

  it('has a default state for displayDrawer of false', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.dive().state().displayDrawer).toBe(false);
  });

  it('sets the displayDrawer state correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.dive().instance().handleDisplayDrawer();
    expect(wrapper.dive().state().displayDrawer).toBe(true);

    wrapper.dive().instance().handleHideDrawer();
    expect(wrapper.dive().state().displayDrawer).toBe(false);
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
      ui: {
        isUserLoggedIn: true,
      },
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
    expect(updatedState.ui.isUserLoggedIn).toBe(false);
  });

  const notificationsReducer = (state = [], action) => {
    switch (action.type) {
      case 'MARK_NOTIFICATION_AS_READ':
        return state.filter((notification) => notification.id !== action.payload);
      default:
        return state;
    }
  };

  it('calls markNotificationAsRead and updates the state correctly', () => {
    const getLatestNotificationMock = jest.fn(() => 'Latest notification');
  
    const initialNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotificationMock() }, type: 'urgent' },
    ];
  
    const store = mockStore({
      notifications: initialNotifications,
    });
  
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    const notificationId = initialNotifications[0].id;
  
    wrapper.find('Notifications').prop('markNotificationAsRead')(notificationId);
  
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'MARK_NOTIFICATION_AS_READ', index: notificationId }]);
  
    const updatedNotifications = store.getState().notifications;
    expect(updatedNotifications.length).toEqual(initialNotifications.length - 1);
    expect(updatedNotifications.some((notification) => notification.id === notificationId)).toBe(false);
  });
});