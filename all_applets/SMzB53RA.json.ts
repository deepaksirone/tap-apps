var Hour = Meta.currentUserTime.hour()

if (Hour < 7 || Hour > 10) {
  IfNotifications.sendNotification.skip("Not during the morning commute")
}