var timeOfDay = Meta.currentUserTime.hour();
if (timeOfDay >= 7){
  Smartthings.turnOnSmartthings.skip();
}