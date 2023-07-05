var timeOfDay = Meta.currentUserTime.hour()
if (timeOfDay >= 7 || timeOfDay < 22 ) {
  // Will Continue as Normal
} else {
  // Skip Turn On
  Smartlife.turnOn.skip()
}