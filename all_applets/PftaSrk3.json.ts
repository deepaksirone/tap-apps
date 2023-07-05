var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay > 18 || timeOfDay < 8) {
  WemoInsightSwitch.attributeInsightOnDiscrete.skip()
  WemoLighting.groupLedTurnOn.skip()
  WemoLighting.groupLedBrightnessChange.skip()
  WemoSwitch.attributeSocketOnDiscrete.skip()
 }