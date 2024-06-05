import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT,
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.entities.notifications).forEach(id => {
        normalizedData.entities.notifications[id].isRead = false;
      });
      return state.mergeDeep({
        notifications: Map(normalizedData.entities.notifications),
        loading: false,
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.notificationId, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.loading);
    default:
      return state;
  }
};

export default notificationReducer;