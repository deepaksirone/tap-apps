var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 22 || timeOfDay < 8 ) {
  // Skip sending me a push notification
  IfNotifications.sendNotification.skip("Too late")
} else {
  // Skip saving the article to Feedly
  Feedly.createNewEntryFeedly.skip("I already know")
}
