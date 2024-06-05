import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { Map } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const expectedState = Map({
      notifications: Map(),
      filter: NotificationTypeFilters.DEFAULT,
    });
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(expectedState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const initialState = Map({
      notifications: Map(),
      filter: NotificationTypeFilters.DEFAULT,
    });
    const data = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available",
      },
    ];
    const expectedState = Map({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        2: {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        3: {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      }),
    });
    const state = notificationReducer(initialState, { type: FETCH_NOTIFICATIONS_SUCCESS, data });
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        2: {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        3: {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      }),
    });
    const expectedState = Map({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        2: {
          id: 2,
          isRead: true,
          type: "urgent",
          value: "New resume available",
        },
        3: {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      }),
    });
    const state = notificationReducer(initialState, { type: MARK_AS_READ, notificationId: "2" });
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const initialState = Map({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: Map({
        1: {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        2: {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        3: {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      }),
    });
    const expectedState = Map({
      filter: NotificationTypeFilters.URGENT,
      notifications: Map({
        1: {
          id: 1,
          isRead: false,
          type: "default",
          value: "New course available",
        },
        2: {
          id: 2,
          isRead: false,
          type: "urgent",
          value: "New resume available",
        },
        3: {
          id: 3,
          isRead: false,
          type: "urgent",
          value: "New data available",
        },
      }),
    });
    const state = notificationReducer(initialState, { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT });
    expect(state).toEqual(expectedState);
  });
});