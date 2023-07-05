var timeOfDay = Meta.triggerTime.hour()
if (timeOfDay <= 11 ) {
  IfNotifications.sendRichNotification.skip("Te vroeg!")

}