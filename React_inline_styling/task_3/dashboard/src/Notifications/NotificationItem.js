import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  default: {
    color: "blue",
    '@media (max-width: 900px)': {
      listStyle: 'none',
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
  urgent: {
    color: "red",
    '@media (max-width: 900px)': {
      listStyle: 'none',
      width: '100%',
      borderBottom: '1px solid black',
      fontSize: '20px',
      padding: '10px 8px',
    },
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