var timeOfDay = Meta.currentUserTime.hour()
if (timeOfDay >= 17 || timeOfDay < 7 ) {
// Will Continue as Normal
} else {
// Skip setting scene
WemoLightSwitch.attributeLsOnDiscrete.skip()
}