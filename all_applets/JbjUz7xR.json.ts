if (Meta.triggerTime.hour() < 23 && Meta.triggerTime.hour() > 7) {
  Smartthings.turnOnSmartthings.skip()
  IfNotifications.sendNotification.skip()
}