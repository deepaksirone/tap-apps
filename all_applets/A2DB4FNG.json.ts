var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 20 || timeOfDay < 6 ) {

// Will Continue as Normal

} else {

// Skip setting scene

LutronCasetaWireless.setScene.skip()

}