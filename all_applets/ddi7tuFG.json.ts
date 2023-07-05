var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 17 || timeOfDay < 6) {

// Will Continue as Normal

} else {

// Skip setting scene

Hue.turnOnAllHue.skip()

}