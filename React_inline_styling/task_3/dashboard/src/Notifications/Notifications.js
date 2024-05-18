import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

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
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    return nextProps.listNotifications.length > listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className="menuItem">
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
              onClick={this.handleButtonClick}
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
                      markAsRead={this.markAsRead}
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
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;