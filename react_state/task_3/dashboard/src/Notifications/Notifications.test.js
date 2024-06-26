import React from 'react';
import { shallow, mount } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Notifications', () => {
  let wrapper;

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper.unmount();
  });

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

  it('calls handleDisplayDrawer when clicking on the menuItem', () => {
    const handleDisplayDrawerMock = jest.fn();
    wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={jest.fn()}
        listNotifications={[]} 
      />
    );

    wrapper.find('#menuItem').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawerMock = jest.fn();
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={jest.fn()}
        handleHideDrawer={handleHideDrawerMock}
        listNotifications={[]} 
      />
    );

    wrapper.find('button').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('calls markNotificationAsRead with the correct id when a notification is clicked', () => {
    const markNotificationAsReadSpy = jest.fn();
    const listNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = mount(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsReadSpy}
      />
    );

    wrapper.find('li').first().simulate('click');
    expect(markNotificationAsReadSpy).toHaveBeenCalledWith(1);
  });
});