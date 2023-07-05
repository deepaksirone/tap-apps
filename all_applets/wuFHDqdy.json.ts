var timeOfDay = Meta.currentUserTime.hour();

if (timeOfDay < 21 && timeOfDay > 4) {
  WemoSwitch.attributeSocketOffDiscrete.skip("too early");
}