var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay > 7 || timeOfDay < 23) {
  // Skip sending me a push notification
  Hue.setScene.skip()
}