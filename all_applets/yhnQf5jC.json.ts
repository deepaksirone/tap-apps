var timeOfDay = Meta.currentUserTime.hour()
if (timeOfDay >= 17 || timeOfDay < 6) {
 Yeelight.onOff.setOnOffOption("0")
} else {
  Yeelight.onOff.skip("Too early")
  }