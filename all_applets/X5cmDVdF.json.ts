var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 16 || timeOfDay < 4) {
  
} else {
  Ewelink.plugAction.skip();
}
