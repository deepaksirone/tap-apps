var EventType = Ecobee.motionDetected.EventType.toLowerCase()
if (EventType.indexOf("away") != -1) {
  Aquanta.cancelAway.skip()
} else if (EventType.indexOf("home") != -1) {
  Aquanta.away.skip()
}
