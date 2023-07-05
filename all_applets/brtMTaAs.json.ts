var TimeOfDay = Meta.currentUserTime.hour()
if (TimeOfDay >= 21 || TimeOfDay < 6){
//will continue as normal
} else {
Hue.toggleAllHue.skip()
}
