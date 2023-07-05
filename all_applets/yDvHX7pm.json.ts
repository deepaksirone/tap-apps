var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 7 || timeOfDay < 19) {
  Hue.setScene.skip();
}