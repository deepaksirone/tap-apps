var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay <= 22 || timeOfDay > 8 ) {
  // Skip Lights off during the day
  Hue.turnOnAllHue.skip()
}