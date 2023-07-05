var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 17 || timeOfDay < 5) {
  
} else {
  Ewelink.switchAction.skip();
}