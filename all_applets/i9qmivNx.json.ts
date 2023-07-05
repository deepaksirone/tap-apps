var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

if (Day==6 || Day==7) {
  Email.sendMeEmail.skip("Not a weekday")
}

else if (Hour < 7 || (Hour > 9 && Hour < 5) || Hour > 19) {
  Email.sendMeEmail.skip("Not commuting hours")
}