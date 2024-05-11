import React from "react";
import PropTypes from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html } = this.props;

    const listItemContent = html ? (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} />
    ) : (
      <li data-notification-type={type} onClick={this.handleClick}>{value}</li>
    );

    return listItemContent;
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;