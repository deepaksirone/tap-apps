var timeOfDay = Meta.currentUserTime.hour();
if (timeOfDay > 21 || timeOfDay < 7) {
  
} else {
  PhoneCall.callMyPhone.skip();
}