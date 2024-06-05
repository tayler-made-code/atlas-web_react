import configureStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('loginRequest action', () => {
  afterEach(() => {
    fetch.resetMocks();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS actions on successful API response', async () => {
    fetch.mockResponseOnce(JSON.stringify({}), {status: 200});

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_SUCCESS },
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should dispatch LOGIN and LOGIN_FAILURE actions on unsuccessful API response', async () => {
    fetch.mockResponseOnce(JSON.stringify({}), { status: 404 });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password' } },
      { type: LOGIN_FAILURE },
    ];

    const store = mockStore({});
    await store.dispatch(loginRequest('test@example.com', 'password'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('UI action creators', () => {
  it('should create a LOGIN action with email and password', () => {
    const email = 'obiwan@jedi.com';
    const password = 'HelloThere';
    const expectedAction = {
      type: LOGIN,
      user: { email, password },
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('should create a LOGOUT action', () => {
    const expectedAction = {
      type: LOGOUT,
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('should create a DISPLAY_NOTIFICATION_DRAWER action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('should create a HIDE_NOTIFICATION_DRAWER action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});