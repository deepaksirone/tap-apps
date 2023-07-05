var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 5 && timeOfDay < 20) {
  Hue.setScene.skip("Day motion; lights skipped");
}