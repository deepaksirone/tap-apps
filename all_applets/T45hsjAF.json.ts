var timeOfDay = Meta.currentUserTime.hour()

if (timeOfDay >= 18 || timeOfDay < 6 ) {

// Will Continue as Normal

} else {

// Skip setting scene

Smartlife.activateScene.skip()

Lifx.activateScene.skip()

}