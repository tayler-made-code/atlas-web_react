import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, value, html }) {
  const listItemContent = html ? (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    />
  ) : (
    <li data-notification-type={type}>{value}</li>
  );

  return listItemContent;
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default NotificationItem;