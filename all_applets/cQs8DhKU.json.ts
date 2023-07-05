var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

// Skip outside of 7-10am and 5-7pm
if (Hour <7 || (Hour > 10 && Hour < 17) || Hour > 19) {
  Email.sendMeEmail.skip("Outside of commuting hours")
}

// Skip on weekend
if (Day == 6 || Day == 7) {
  Email.sendMeEmail.skip("Not a weekday")
}