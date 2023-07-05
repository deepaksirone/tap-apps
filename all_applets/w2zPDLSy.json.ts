var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 16 || timeOfDay < 8) {
  
} else {
  Ewelink.plugAction.skip();
}