var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 22 || timeOfDay < 8) {
  IfNotifications.sendNotification.skip("Too late; saving to Feedly");
} else {
  Feedly.createNewEntryFeedly.skip("Sending notification instead");
}