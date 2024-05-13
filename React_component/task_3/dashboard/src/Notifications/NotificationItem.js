import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, value, html, markAsRead, id }) {
  const listItemContent = html ? (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    />
  ) : (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {value}
    </li>
  );

  return listItemContent;
};

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
  type: "default",
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;