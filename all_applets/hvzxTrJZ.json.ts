var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay > 18) {
  // toggle switch
} else {
  // do nothing
  WemoSwitch.attributeSocketToggleDiscrete.skip("Toggle switch");
}