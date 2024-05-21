import * as notificationsData from '../../../../notifications.json'

export function getAllNotificationsByUser(userID) {
  return notificationsData.default
    .filter((notification) => notification.author.id === userID)
    .map((notification) => notification.context);
}