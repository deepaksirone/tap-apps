var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

// Skip outside of 5-7pm
if (Hour < 17 || Hour > 19) {
  Gmail.sendAnEmail.skip("Outside of commuting hours")
}

// Skip on weekends
if (Day == 6 || Day == 7) {
  Gmail.sendAnEmail.skip("Not a weekday")
}