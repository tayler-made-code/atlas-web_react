import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  let wrapper;

  describe('With empty listNotifications', () => {
    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} />);
    });

    it('renders correctly if listNotifications is empty or not provided', () => {
      expect(wrapper.exists()).toBe(true);
    });

    it('does not display the message "Here is the list of notifications"', () => {
      expect(wrapper.find('.NotificationsContent p').text()).toBe('Here is the list of notifications');
    });

    it('displays the message "No new notification for now"', () => {
      expect(wrapper.find(NotificationItem).prop('value')).toBe('No new notification for now');
    });
  });

  describe('With listNotifications containing elements', () => {
    const listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: 'Test data' }, type: 'urgent' },
    ];

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    });

    it('renders the correct number of NotificationItem components', () => {
      expect(wrapper.find(NotificationItem)).toHaveLength(listNotifications.length);
    });

    it('renders the correct list of notifications', () => {
      const notificationItems = wrapper.find(NotificationItem);
      expect(notificationItems.at(0).prop('value')).toBe('New course available');
      expect(notificationItems.at(1).prop('value')).toBe('New resume available');
      expect(notificationItems.at(2).prop('html')).toEqual({ __html: 'Test data' });
    });
  });
});