import uiReducer from './uiReducer';
import { SELECT_COURSE, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    const state = uiReducer(undefined, { type: SELECT_COURSE });
    expect(state).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    };
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toEqual(true);
  });
});