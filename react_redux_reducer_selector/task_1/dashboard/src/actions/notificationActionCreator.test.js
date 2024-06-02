import { markAsRead, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

describe('notification action creators', () => {
  it('should create a MARK_AS_READ action', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it('should create a SET_TYPE_FILTER action with a filter', () => {
    const filter = NotificationTypeFilters.DEFAULT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});