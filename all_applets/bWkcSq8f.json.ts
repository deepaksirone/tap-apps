var triggers: Array<number> = [8, 10, 12, 14, 16, 18, 20, 22];
var hour = Meta.currentUserTime.hour()

if (triggers.indexOf(hour) <= -1) {
  IfNotifications.sendNotification.skip()
}
