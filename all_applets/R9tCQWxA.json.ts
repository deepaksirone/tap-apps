var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 7 || timeOfDay < 8 ) {

// Will Continue as Normal

} else {

// Skip setting scene

Lifx.breathe.skip()

}