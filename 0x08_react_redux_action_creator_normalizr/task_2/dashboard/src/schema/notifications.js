import * as notificationsData from '../../../../notifications.json'
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
}, {
  idAttribute: 'id',
});

export const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const userNotifications = [];

  for (const notificationId of normalizedData.result) {
    const notification = normalizedData.entities.notifications[notificationId];
    if (notification.author === userId) {
      const context = normalizedData.entities.messages[notification.context];
      userNotifications.push(context);
    }
  }

  return userNotifications;
}