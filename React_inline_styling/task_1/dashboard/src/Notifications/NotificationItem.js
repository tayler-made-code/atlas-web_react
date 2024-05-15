import React from "react";
import PropTypes from "prop-types";

const NotificationItem = React.memo(function NotificationItem({ type = "default", value, html, markAsRead = () => {}, id=0 }) {
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
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;