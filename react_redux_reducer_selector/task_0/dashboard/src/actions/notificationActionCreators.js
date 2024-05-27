import { bindActionCreators } from "redux";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const boundNotificationActions = (dispatch) => bindActionCreators(
  {
    markAsRead,
    setNotificationFilter,
  },
  dispatch
);