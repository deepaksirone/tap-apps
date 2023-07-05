var Day = Meta.currentUserTime.day()
var Hour = Meta.currentUserTime.hour()

if (Day == 6 || Day ==7) {
  Sms.sendMeText.skip("Not a weekday")
}

if (Hour < 7 || Hour > 9) {
  Sms.sendMeText.skip("Not commute hours")
}