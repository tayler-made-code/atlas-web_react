import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

const NotificationItem = React.memo(function NotificationItem({ type = "default", value, html, markAsRead = () => {}, id=0 }) {

  const itemStyle = type === "default" ? styles.default : styles.urgent;

  const listItemContent = html ? (
    <li
      className={css(itemStyle)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(id)}
    />
  ) : (
    <li
      className={css(itemStyle)}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
    >
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