var Hour = Meta.currentUserTime.hour()
var Day = Meta.currentUserTime.day()

// Skip outside of 5-7pm
if (Hour <17 || Hour > 19) {
  Telegram.sendMessage.skip("Outside of commuting hours")
}

if (Day == 6 || Day == 7) {
  Telegram.sendMessage.skip("Not a weekday")
}