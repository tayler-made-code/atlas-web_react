import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { SELECT_COURSE, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState =  Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    });
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    });
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: Map()
    });
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toEqual(true);
  });

  it('should set isUserLoggedIn to true and user when LOGIN_SUCCESS is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    const user = { email: 'user@example.com' };
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS, user });
    expect(state.get('isUserLoggedIn')).toEqual(true);
    expect(state.get('user')).toEqual(user);
  });

  it('should set isUserLoggedIn to false and user to null when LOGOUT is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'user@example.com' },
    });
    const state = uiReducer(initialState, { type: LOGOUT });
    expect(state.get('isUserLoggedIn')).toEqual(false);
    expect(state.get('user')).toBeNull();
  });
});