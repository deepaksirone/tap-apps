let currentHour = Meta.currentUserTime.hour();
var day = Meta.currentUserTime.weekday();

if (currentHour < 5 || currentHour >= 9) {
  Hue.setColorAllHue.skip()
  IfNotifications.sendNotification.skip();
}
 else if (day == 0) {
  // sunday
  Hue.setColorAllHue.skip()
  IfNotifications.sendNotification.skip();
} 
 else if (day == 6) {
  // saturday
 Hue.setColorAllHue.skip()
 IfNotifications.sendNotification.skip();
}