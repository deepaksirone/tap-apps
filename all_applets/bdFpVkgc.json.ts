var dayOfWeek = Meta.currentUserTime.isoWeekday()
var timeOfDay = Meta.currentUserTime.hour()
if (dayOfWeek < 6) {
  if (timeOfDay >= 18 && timeOfDay <= 8) {
  //continue as normal
  } else {
    WemoSwitch.attributeSocketOnDiscrete.skip()
  }
} else {
  WemoSwitch.attributeSocketOnDiscrete.skip()
}