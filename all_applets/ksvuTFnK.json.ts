var timeOfDay = Meta.currentUserTime.hour()
if (timeOfDay >= 18 || timeOfDay < 6 ) {
// Will Continue as Normal
} else {
// Skip turning on smart plug
WemoSwitch.attributeSocketOnDiscrete.skip()
}