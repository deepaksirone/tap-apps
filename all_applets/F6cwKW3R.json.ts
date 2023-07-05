var day = Meta.currentUserTime.isoWeekday()
var timeOfDay = Meta.currentUserTime.hour();
if (timeOfDay > 5 || timeOfDay < 9) {
	Clicksend.sendSms.skip()
}
