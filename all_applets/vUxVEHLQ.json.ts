var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 20 || timeOfDay < 6) {
  IfNotifications.sendNotification.skip();
} else {
  VoipCalls.callMyDevice.skip();
}