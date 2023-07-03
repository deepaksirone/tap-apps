// Vars
var currentHour = Meta.currentUserTime.hour();
var currentMinute = Meta.currentUserTime.minute();
var error = "Triggered out of time range.";

// Check if the action should be skipped
if(currentHour == 17 && currentMinute <= 30) {
	WemoSwitch.attributeSocketOnDiscrete.skip(error);
} else if(currentHour == 7 && currentMinute >= 30) {
	WemoSwitch.attributeSocketOnDiscrete.skip(error);
} else if(currentHour >= 8 && currentHour <= 16) {
	WemoSwitch.attributeSocketOnDiscrete.skip(error);
}