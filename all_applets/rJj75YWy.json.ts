var Day = Meta.currentUserTime.day()
var Hour = Meta.currentUserTime.hour()

if (Day == 6 || Day == 7) {
  Email.sendMeEmail.skip("Not a weekday")
}

else if (Hour < 7 || (Hour > 10 && Hour < 17) || Hour > 19) {
  Email.sendMeEmail.skip("Not commuting hours")
}