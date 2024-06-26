import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const opacityKeyframes = {
  '0%': { opacity: '0.5' },
  '100%': { opacity: '1' },
};

const bounceKeyframes = {
  '0%': { transform: 'translateY(0)' },
  '25%': { transform: 'translateY(-5px)' },
  '50%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0)' },
};

const styles = StyleSheet.create({
  notifications: {
    padding: '1rem',
    border: '2px dashed #e0354b',
    '@media (max-width: 900px)': {
      border: 'none',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      padding: '0',
      fontSize: '20px',
      backgroundColor: 'white',
      margin: '0',
    },
  },
  unorderedNotifications: {
    '@media (max-width: 900px)': {
      padding: '0',
    },
  },
  defaultNotification: {
    color: '#0000ff',
  },
  urgentNotification: {
    color: '#ff0000',
  },
  hidden: {
    display: 'none',
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [opacityKeyframes, bounceKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
      animationTimingFunction: 'ease-in-out',
    },
  },
  hiddenMenuItem: {
    display: 'none',
  },
});

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

    const menuItemDisplay = displayDrawer ? css(styles.hiddenMenuItem) : css(styles.menuItem);

    return (
      <>
        <div className={menuItemDisplay} onClick={handleDisplayDrawer} id="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                position: 'absolute',
                right: '1rem',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              x
            </button>
            <div className="NotificationsContent">
              <p>Here is the list of notifications</p>
              <ul className={css(styles.unorderedNotifications)}>
                {listNotifications.length === 0 ? (
                  <NotificationItem
                    type="default"
                    value="No new notification for now"
                  />
                ) : (
                  listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => markNotificationAsRead(notification.id)}
                      className={css(notification.type === 'default' ? styles.defaultNotification : styles.urgentNotification)}
                    />
                  ))
                )}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

export default Notifications;