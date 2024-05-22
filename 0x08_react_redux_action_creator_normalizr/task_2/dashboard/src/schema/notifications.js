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

export function getAllNotificationsByUser(userID) {
  return notificationsData.default
    .filter((notification) => notification.author.id === userID)
    .map((notification) => notification.context);
}