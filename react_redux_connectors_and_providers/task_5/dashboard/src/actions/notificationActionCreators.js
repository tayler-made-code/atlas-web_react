import { bindActionCreators } from "redux";
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading,
});

export const fetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    return fetch('/notifications')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        console.error(error);
        dispatch(setLoadingState(false));
      });
  };
};

export const boundNotificationActions = (dispatch) => bindActionCreators(
  {
    markAsRead,
    setNotificationFilter,
    fetchNotifications,
  },
  dispatch
);