var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 21 || timeOfDay < 8 ) {
  
  // Turn on Hue Lights
} else {
  // Skip turn on lights
Hue.turnOnAllHue.skip()
}