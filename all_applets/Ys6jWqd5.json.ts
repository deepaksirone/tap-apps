var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 21 || timeOfDay < 5) {
  IfNotifications.sendNotification.skip("Doorbell");
} else {
  HiveActiveLight.setLightOn.skip();
}
