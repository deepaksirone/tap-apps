var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

// Skip outside of 7-10am
if (Hour < 7 || Hour > 10) {
  CiscoSpark.postAMessage.skip("Outside of morning commuting hours")
}

// Skip on weekends
if (Day == 6 || Day == 7) {
  CiscoSpark.postAMessage.skip("Not a weekday")
}