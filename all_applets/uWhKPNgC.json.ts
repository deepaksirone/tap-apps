var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 18 || timeOfDay < 6) {
  
} else {
  Ewelink.plugAction.skip();
}