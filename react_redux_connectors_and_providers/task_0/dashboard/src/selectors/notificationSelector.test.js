import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { Map } from 'immutable';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notificationSelector', () => {
  const state = Map({
    filter: NotificationTypeFilters.DEFAULT,
    notifications: Map({
      1: Map({ id: 1, isRead: false, type: 'default', value: 'Notification 1' }),
      2: Map({ id: 2, isRead: true, type: 'urgent', value: 'Notification 2' }),
      3: Map({ id: 3, isRead: false, type: 'urgent', value: 'Notification 3' }),
    }),
  });

  it('filterTypeSelected should return the filter type from the state', () => {
    expect(filterTypeSelected(state)).toEqual(NotificationTypeFilters.DEFAULT);
  });

  it('getNotifications should return the list of notifications from the state', () => {
    expect(getNotifications(state)).toEqual(state.get('notifications'));
  });

  it('getUnreadNotifications should return the list of unread notifications from the state', () => {
    const expectedUnreadNotifications = Map({
      1: Map({ id: 1, isRead: false, type: 'default', value: 'Notification 1' }),
      3: Map({ id: 3, isRead: false, type: 'urgent', value: 'Notification 3' }),
    });
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});