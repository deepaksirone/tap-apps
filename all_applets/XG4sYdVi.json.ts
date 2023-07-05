var hour = Meta.triggerTime.hour();
if (hour > 8 && hour < 21) {
  PhoneCall.callMyPhone.skip();
}