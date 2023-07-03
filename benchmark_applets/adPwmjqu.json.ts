var time_hour = Meta.currentUserTime.hour();
if (time_hour > 5 && time_hour < 19) {
  Smartthings.turnOnSmartthings.skip();
}